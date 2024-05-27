import { useAuth } from "../../context/AuthProvider";
import { useEffect, useRef, useState } from "react";
import Paragraph from "../../components/Paragraph";
import MessageManager from "../../components/MessageManager";
import CurrentMessageUsers from "../../components/Message";
import Button from "../../components/Button";
import Title from "../../components/Title";
import classNames from "classnames";
import AppProfileSetup from "../../page-parts/AppProfileSetup";
import AppCategoryList from "../../page-parts/AppCategoryList";
import AppDropdownList from "../../page-parts/AppDropdownList";
import { CategoryListType } from "../../types";
import AppProfileList from "../../page-parts/AppProfileList";
import { useClient } from "../../hooks/useClient";
import { Schema } from "../../../amplify/data/resource";
import { keys, every, isEqual, pickBy, uniqBy } from "lodash";

function ProfileFeed() {
  const { userInformation } = useAuth();
  const { client } = useClient();

  const [profiles, setProfiles] = useState<Array<Schema["User"]["type"]>>([]);
  const [loadMore, setLoadMore] = useState<boolean>(false);
  const [initialLoad, setInitialLoad] = useState<boolean>(true);
  const [raceList, setRaceList] = useState<string[]>([]);
  const [dropdownList, setDropdownList] = useState<
    Array<Schema["DropdownList"]["type"]>
  >([]);

  const [feedFilters, setFeedFilters] = useState<CategoryListType>({
    race: "",
    interests: "",
    spokenLanguage: "",
    age: "",
  });

  const nexToken = useRef<string | undefined | null>(null);

  useEffect(() => {
    if (!userInformation || !initialLoad) return;
    client.models.User.list({
      filter: {
        id: {
          ne: userInformation?.id,
        },
      },
      limit: 10,
    })
      .then(async (users) => {
        nexToken.current = users.nextToken;
        const connections = await userInformation?.connections();

        const filteredConnections = users.data.filter((e) => {
          return !connections?.data.some(
            (c) => c.connectionId === e.id || userInformation?.id === e.id
          );
        });
        setProfiles((prev) => [...prev, ...filteredConnections]);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      })
      .finally(() => {
        setInitialLoad(false);
      });
  }, [client.models.User, initialLoad, userInformation]);

  useEffect(() => {
    if (loadMore) {
      const filterFeedKeysWithValues = pickBy(
        feedFilters,
        (value) => value !== ""
      );

      let initilaFilter: { id: object; and?: object } = {
        id: {
          ne: userInformation?.id,
        },
      };

      const mapToFitListFilter = Object.keys(filterFeedKeysWithValues).map(
        (key) => {
          return {
            [key]: {
              eq: filterFeedKeysWithValues[key],
            },
          };
        }
      );

      if (mapToFitListFilter.length > 0) {
        initilaFilter = {
          ...initilaFilter,
          and: { ...mapToFitListFilter[0] },
        };
      }

      client.models.User.list({
        filter: initilaFilter,
        limit: 1,
        nextToken: nexToken.current,
      })
        .then(async (users) => {
          nexToken.current = users.nextToken;
          const connections = await userInformation?.connections();
          const filteredConnections = users.data.filter((e) => {
            return !connections?.data.some(
              (c) => c.connectionId === e.id || userInformation?.id === e.id
            );
          });

          setProfiles((prev) => {
            return uniqBy([...prev, ...filteredConnections], "id");
          });
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
        })
        .finally(() => {
          setLoadMore(false);
        });
    }
  }, [loadMore, client.models.User, userInformation, feedFilters]);

  useEffect(() => {
    client.models.RaceList.list()
      .then((response) => {
        setRaceList(response.data.map((e) => e.name));
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, [client.models.RaceList]);

  useEffect(() => {
    client.models.DropdownList.list()
      .then((response) => {
        setDropdownList(response.data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, [client.models.DropdownList]);

  function compareSharedKeysWithTypes<T, U>(
    baseObj: T,
    compareObj: U
  ): boolean {
    const baseKeys: string[] = keys(baseObj);
    const compareKeys: string[] = keys(compareObj);

    const commonKeys: (keyof T & keyof U)[] = baseKeys.filter((key) =>
      compareKeys.includes(key)
    ) as (keyof T & keyof U)[];

    return every(commonKeys, (key: keyof T & keyof U) => {
      const baseValue = baseObj[key];
      const compareValue = compareObj[key];
      if (!compareValue) return true;

      if (key === "age" && compareValue) {
        const ageValue = compareValue as string;
        const splitAgeValue = ageValue.split("-");

        return (
          Number(baseValue) >= Number(splitAgeValue[0]) &&
          Number(baseValue) <= Number(splitAgeValue[1])
        );
      }

      return (
        typeof baseValue === typeof compareValue &&
        isEqual(baseValue, compareValue)
      );
    });
  }

  async function fetchProfiles(key: string, value: string) {
    const modifiedFeedFilters = { ...feedFilters, [key]: value };
    const filterFeedKeysWithValues = pickBy(
      modifiedFeedFilters,
      (value) => value !== ""
    );

    let initilaFilter: { id: object; and?: object } = {
      id: {
        ne: userInformation?.id,
      },
    };

    const mapToFitListFilter = keys(filterFeedKeysWithValues).map((key) => {
      return {
        [key]: {
          eq: filterFeedKeysWithValues[key],
        },
      };
    });

    if (mapToFitListFilter.length > 0) {
      initilaFilter = {
        ...initilaFilter,
        and: { ...mapToFitListFilter[0] },
      };
    }

    client.models.User.list({
      filter: initilaFilter,
      nextToken: nexToken.current,
    })
      .then(async (users) => {
        setProfiles((prev) => {
          const combinedValues = uniqBy([...prev, ...users.data], "id");
          return combinedValues.filter((profile) => {
            return compareSharedKeysWithTypes(profile, modifiedFeedFilters);
          });
        });
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }

  async function handleLabel(label: string) {
    fetchProfiles("race", label);
    setFeedFilters((prev) => {
      return { ...prev, race: label };
    });
  }

  function handleLoadMore() {
    setLoadMore(true);
  }

  const [closeProfile, setCloseProfile] = useState<boolean>(
    localStorage.getItem("closeProfile") === "true" ? true : false
  );

  const divClasses = classNames("mx-auto py-8 flex flex-col gap-y-4", {
    "w-[60%]": closeProfile,
    "w-[70%]": !closeProfile,
  });

  return (
    <>
      <div className={divClasses}>
        <div className="flex gap-y-4 gap-x-8">
          <AppProfileSetup
            closeProfile={closeProfile}
            setCloseProfile={setCloseProfile}
          />
          <div className="flex flex-col gap-y-4 flex-1">
            <AppCategoryList
              categories={raceList}
              activeLabel={feedFilters.race}
              handleLabel={handleLabel}
            />
            <AppDropdownList
              fetchProfilesOnFilterChange={fetchProfiles}
              feedFilters={feedFilters}
              setFeedFilters={setFeedFilters}
              dropdownOptions={dropdownList}
            />
            <Title>Recommended</Title>
            <AppProfileList profiles={profiles} />
            <div className="flex items-center justify-center my-6">
              <Button onClick={handleLoadMore}>
                <div className="px-4 py-1 bg-secondary rounded-4 hover:scale-[105%] transition-all">
                  <Paragraph>Load more</Paragraph>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 right-0 mr-9 mb-9">
        <div className="flex flex-col gap-y-2">
          <CurrentMessageUsers />
          <MessageManager />
        </div>
      </div>
    </>
  );
}

export default ProfileFeed;
