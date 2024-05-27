import { Button } from "@aws-amplify/ui-react";
import CustomSelect from "../components/CustomSelect";
import Dropdown from "../components/Dropdown";
import ImageUploadWCustomDropdown from "../components/ImageUploadWCustomDropdown";
import InputWithLabel from "../components/InputWithLabel";
import Paragraph from "../components/Paragraph";
import SubTitle from "../components/SubTitle";
import TextArea from "../components/TextArea";
import Title from "../components/Title";
import Cancel01Icon from "../logos/Cancel01Icon";
import { useEffect, useRef, useState } from "react";
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { useAuth } from "../context/AuthProvider";
import { uploadData } from "aws-amplify/storage";
import animejs from "animejs";

const client = generateClient<Schema>();

type Props = {
  closeProfile: boolean;
  setCloseProfile: (value: boolean) => void;
};

type NewUserType = {
  fullName: string;
  age: string;
  gender: string;
  race: string;
  spokenLanguage: string;
  interests: string;
  aboutMe: string;
  file: File | null;
};

function AppProfileSetup({ closeProfile, setCloseProfile }: Props) {
  const { userInformation, setUserInformation } = useAuth();
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [tempClose, setTempClose] = useState(false);
  const [error, setError] = useState<string>("");
  const divRef = useRef<HTMLDivElement>(null);
  const [newUserInformation, setNewUserInformation] = useState<NewUserType>({
    fullName: "",
    age: "",
    gender: "",
    race: "",
    spokenLanguage: "",
    interests: "",
    aboutMe: "",
    file: null,
  });

  useEffect(() => {
    if (tempClose) {
      const timeline = animejs.timeline({
        easing: "linear",
      });
      //opacity then width

      timeline.add({
        targets: divRef.current,
        opacity: 0,
        duration: 200,
      });

      timeline.add({
        targets: divRef.current,
        width: ["25%", "5%"],
        duration: 600,
        easing: "easeInOutSine",
        complete: () => {
          setCloseProfile(true);
        },
      });

      // animejs({
      //   targets: divRef.current,
      //   opacity: 0,
      //   duration: 400,
      //   easing: "linear",
      //   complete: () => {
      //     setCloseProfile(true);
      //   },
      // });
    }
  }, [setCloseProfile, tempClose]);

  function handleInformation(key: string) {
    return (newValue: string) => {
      setNewUserInformation({ ...newUserInformation, [key]: newValue });
    };
  }

  const genderOptions = [
    "Male",
    "Female",
    "Non-binary",
    "Genderqueer",
    "Genderfluid",
    "Agender",
    "Bigender",
    "Two-Spirit",
    "Transgender Male",
    "Transgender Female",
    "Cisgender Male",
    "Cisgender Female",
    "Demiboy",
    "Demigirl",
    "Androgynous",
    "Intersex",
    "Neutrois",
    "Pangender",
    "Questioning",
    "Prefer not to say",
    "Other",
  ];
  const raceOptions = [
    "American",
    "Chinese",
    "Indian",
    "Mexican",
    "British",
    "French",
    "Filipino",
    "Russian",
  ];
  const languageOptions = [
    "Afrikaans",
    "Albanian",
    "Amharic",
    "Arabic",
    "Armenian",
    "Azerbaijani",
    "Basque",
    "Belarusian",
    "Bengali",
    "Bosnian",
    "Bulgarian",
    "Catalan",
    "Cebuano",
    "Chinese (Simplified)",
    "Chinese (Traditional)",
    "Corsican",
    "Croatian",
    "Czech",
    "Danish",
    "Dutch",
    "English",
    "Esperanto",
    "Estonian",
    "Finnish",
    "French",
    "Frisian",
    "Galician",
    "Georgian",
    "German",
    "Greek",
    "Gujarati",
    "Haitian Creole",
    "Hausa",
    "Hawaiian",
    "Hebrew",
    "Hindi",
    "Hmong",
    "Hungarian",
    "Icelandic",
    "Igbo",
    "Indonesian",
    "Irish",
    "Italian",
    "Japanese",
    "Javanese",
    "Kannada",
    "Kazakh",
    "Khmer",
    "Korean",
    "Kurdish",
    "Kyrgyz",
    "Lao",
    "Latin",
    "Latvian",
    "Lithuanian",
    "Luxembourgish",
    "Macedonian",
    "Malagasy",
    "Malay",
    "Malayalam",
    "Maltese",
    "Maori",
    "Marathi",
    "Mongolian",
    "Myanmar (Burmese)",
    "Nepali",
    "Norwegian",
    "Nyanja (Chichewa)",
    "Pashto",
    "Persian",
    "Polish",
    "Portuguese",
    "Punjabi",
    "Romanian",
    "Russian",
    "Samoan",
    "Scots Gaelic",
    "Serbian",
    "Sesotho",
    "Shona",
    "Sindhi",
    "Sinhala",
    "Slovak",
    "Slovenian",
    "Somali",
    "Spanish",
    "Sundanese",
    "Swahili",
    "Swedish",
    "Tagalog (Filipino)",
    "Tajik",
    "Tamil",
    "Telugu",
    "Thai",
    "Turkish",
    "Ukrainian",
    "Urdu",
    "Uzbek",
    "Vietnamese",
    "Welsh",
    "Xhosa",
    "Yiddish",
    "Yoruba",
    "Zulu",
  ];

  const raceEthnicityInterests = [
    "Cultural Heritage",
    "Ethnic Foods",
    "Traditional Music",
    "Folklore and Myths",
    "Ancestry and Genealogy",
    "Historical Events and Movements",
    "Ethnic Festivals and Celebrations",
    "Traditional Clothing and Fashion",
    "Indigenous Languages",
    "Ethnic Art and Craft",
    "Migration and Diaspora Studies",
    "Racial Justice and Equity",
    "Intercultural Communication",
    "Ethnic Literature",
    "Cultural Rituals and Practices",
    "Multiculturalism",
    "Ethnic Film and Cinema",
    "Race and Ethnicity in Media",
    "Sociocultural Dynamics",
    "Ethnic and Racial Identity",
    "Interracial Relationships",
    "Cultural Anthropology",
    "Ethnic and Racial Politics",
    "Civil Rights Movements",
    "Indigenous Rights",
    "Postcolonial Studies",
    "Ethnic and Racial Health Disparities",
    "Cultural Preservation",
    "Anti-Racism Education",
    "Diversity and Inclusion",
    "Ethnic Cuisine",
    "Global Cultures",
    "Racial and Ethnic Demographics",
    "Cultural Exchange Programs",
    "Ethnographic Research",
    "Heritage Sites and Museums",
    "Cultural Festivals",
    "Race and Ethnicity in Literature",
    "Cross-Cultural Psychology",
    "Minority Rights",
    "Immigration Studies",
    "Indigenous Knowledge Systems",
    "Cultural Tourism",
    "Race and Ethnicity in Education",
    "Cultural Competency",
    "Ethnic Conflict and Resolution",
    "Diaspora Communities",
  ];

  function stopSeeingThis() {
    setTempClose(true);
    localStorage.setItem("closeProfile", "true");
  }

  function closeProfileSetup() {
    setTempClose(true);
  }

  const closeButtons = [
    {
      label: "Close",
      onClick: closeProfileSetup,
    },
    {
      label: "Stop seeing this",
      onClick: stopSeeingThis,
    },
  ];

  async function handleSubmit() {
    if (userInformation?.id === undefined) return;

    const filterKeysWithoutValuesNewUserInformation = Object.keys(
      newUserInformation
    ).filter((key) => {
      return (
        newUserInformation[key as keyof NewUserType] !== "" &&
        newUserInformation[key as keyof NewUserType] !== null &&
        key !== "file"
      );
    });

    const getValuesFromKeys = filterKeysWithoutValuesNewUserInformation.reduce(
      (obj, key) => {
        return { ...obj, [key]: newUserInformation[key as keyof NewUserType] };
      },
      {}
    );

    setLoadingSubmit(true);

    let profilePicturePath = "";
    if (newUserInformation.file !== null) {
      const { result } = await uploadData({
        path: `profile-pictures/${userInformation?.id}/${newUserInformation.file?.name}`,
        data: newUserInformation?.file,
      });

      try {
        const results = await result;
        profilePicturePath = results.path;
      } catch (error) {
        setError("Error uploading profile picture");
        setLoadingSubmit(false);
        return;
      }
    }

    const newUserValues = {
      ...userInformation,
      ...getValuesFromKeys,
      id: userInformation?.id,
      profilePictureUrl: profilePicturePath,
      interests: [newUserInformation.interests],
    };

    client.models.User.update(newUserValues, {
      authMode: "userPool",
    })
      .then((response) => {
        setUserInformation(response.data as Schema["User"]["type"]);
        setTempClose(true);
        localStorage.setItem("closeProfile", "true");
      })
      .catch(() => {
        setError("Error updating user");
      })
      .finally(() => {
        setLoadingSubmit(false);
      });
  }

  function handleFileUpload(file: File) {
    setNewUserInformation({ ...newUserInformation, file: file });
  }

  return (
    <>
      {!closeProfile && (
        <div ref={divRef} className="w-[25%] flex flex-col gap-y-4">
          <div className="flex flex-col">
            <div className="flex justify-between">
              <Title>Profile Setup</Title>
              <Dropdown jsxComponent={<Cancel01Icon />} values={closeButtons} />
            </div>
            <Paragraph>
              Having detailed profile information enables more accurate and
              relevant communication, ensuring that responses are personalized
              and contextually appropriate.
            </Paragraph>
          </div>
          <div className="flex flex-col gap-y-4">
            <div>
              <SubTitle>Profile Picture</SubTitle>
              <Paragraph>We only support PNGs and JPEGs.</Paragraph>
            </div>
            <ImageUploadWCustomDropdown onUpload={handleFileUpload} />
          </div>
          <div className="flex flex-col gap-y-4">
            <div>
              <SubTitle>Basic Information</SubTitle>
              <Paragraph>
                This provides the essential context needed to understand and
                address a user's needs and preferences effectively
              </Paragraph>
            </div>
            <div className="flex flex-col gap-y-2">
              <InputWithLabel
                label="Full Name"
                onChange={handleInformation("fullName")}
                value={newUserInformation.fullName}
              />
              <div className="flex gap-x-4">
                <InputWithLabel
                  label="Age"
                  onChange={handleInformation("age")}
                  value={newUserInformation.age}
                />
                <CustomSelect
                  label="Gender"
                  options={genderOptions}
                  onSelect={handleInformation("gender")}
                  selectedValue={newUserInformation.gender}
                />
              </div>
              <CustomSelect
                label="National Identity"
                options={raceOptions}
                onSelect={handleInformation("race")}
                selectedValue={newUserInformation.race}
              />
              <CustomSelect
                label="Spoken Language"
                options={languageOptions}
                onSelect={handleInformation("spokenLanguage")}
                selectedValue={newUserInformation.spokenLanguage}
              />
              <CustomSelect
                label="Interest/s"
                options={raceEthnicityInterests}
                onSelect={handleInformation("interests")}
                selectedValue={newUserInformation.interests}
              />
              <TextArea
                value={newUserInformation.aboutMe}
                label="About Me"
                onChange={handleInformation("aboutMe")}
              />
            </div>
          </div>
          {error && (
            <Paragraph className="text-red-400" bold>
              {error}
            </Paragraph>
          )}
          <Button onClick={handleSubmit}>
            <div className="px-4 py-1 bg-secondary rounded-4 hover:scale-[101%] transition-all">
              <Paragraph className="flex items-center justify-center gap-x-1.5 py-1">
                {loadingSubmit && (
                  <>
                    <svg
                      className="animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={16}
                      height={16}
                      color={"#000000"}
                      fill={"none"}
                    >
                      <path
                        d="M18.001 20C16.3295 21.2558 14.2516 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 12.8634 21.8906 13.7011 21.6849 14.5003C21.4617 15.3673 20.5145 15.77 19.6699 15.4728C18.9519 15.2201 18.6221 14.3997 18.802 13.66C18.9314 13.1279 19 12.572 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C13.3197 19 14.554 18.6348 15.6076 18"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>{" "}
                    Submitting...
                  </>
                )}
                {!loadingSubmit && "Submit Profile"}
              </Paragraph>
            </div>
          </Button>
        </div>
      )}
    </>
  );
}

export default AppProfileSetup;
