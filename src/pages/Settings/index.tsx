import classNames from "classnames";
import Title from "../../components/Title";
import ImageUploadWCustomDropdown from "../../components/ImageUploadWCustomDropdown";
import SubTitle from "../../components/SubTitle";
import Paragraph from "../../components/Paragraph";
import { useAuth } from "../../context/AuthProvider";
import InfoItem from "./InfoItem";
import { useEffect, useState } from "react";
import { getUrl, remove, uploadData } from "aws-amplify/storage";
import { useClient } from "../../hooks/useClient";
import { signOut, deleteUser } from "aws-amplify/auth";

function Settings() {
  const { client } = useClient();
  const { userInformation, setUserInformation } = useAuth();
  const [doubleCheck, setDoubleCheck] = useState<boolean>(false);
  const [newFile, setNewFile] = useState<File | null>(null);
  const [imagePath, setImagePath] = useState<string>("");
  const divClasses = classNames(
    "mx-auto py-8 flex flex-col gap-y-4 w-[50%]",
    {}
  );

  async function handleDeleteAccount() {
    if (doubleCheck) {
      if (!userInformation?.id) return;
      client.models.User.delete({ id: userInformation?.id })
        .then(async () => {
          if (userInformation?.profilePictureUrl) {
            remove({ path: userInformation?.profilePictureUrl })
              .then(async () => {
                await deleteUser().then(async () => {
                  await signOut({ global: true });
                });
              })
              .catch((error) => {
                console.error("Error deleting profile picture", error);
              });
          } else {
            await deleteUser().then(async () => {
              await signOut({ global: true });
            });
          }
        })
        .catch((error) => {
          console.error("Error deleting account", error);
        });
    }
    setDoubleCheck(!doubleCheck);
  }

  async function updateProfile() {
    if (!newFile || !userInformation?.id) return;

    if (newFile !== null) {
      const { result } = await uploadData({
        path: `profile-pictures/${userInformation?.id}/${newFile?.name}`,
        data: newFile,
      });

      try {
        result.then(async (res) => {
          await client.models.User.update({
            id: userInformation?.id,
            profilePictureUrl: res.path,
          });
          setUserInformation({
            ...userInformation,
            profilePictureUrl: res.path,
          });
          setNewFile(null);
        });
      } catch (error) {
        return;
      }
    }
  }

  async function changeUserData(key: string, value: string) {
    if (!userInformation?.id) return;

    await client.models.User.update({
      id: userInformation?.id,
      [key]: value,
    }).then(() => {
      setUserInformation({
        ...userInformation,
        [key]: value,
      });
    });
  }

  useEffect(() => {
    const fetchImage = async () => {
      if (!userInformation || !userInformation.profilePictureUrl) return;

      const url = await getUrl({
        path: userInformation?.profilePictureUrl || "",
      });
      setImagePath(url.url.toString());
    };
    fetchImage();
  }, [userInformation]);

  return (
    <div className={divClasses}>
      <div className="flex flex-col gap-y-4">
        <Title>Profile Settings</Title>
        <div className="flex gap-x-8">
          <div className="w-72 relative">
            {newFile && (
              <div className="absolute z-10 top-0 right-0 m-1 p-1 flex gap-x-1">
                <div
                  onClick={updateProfile}
                  className="px-4 py-1 bg-secondary rounded-4 hover:scale-[105%] transition-all inline-block cursor-pointer"
                >
                  <Paragraph>Upload</Paragraph>
                </div>
              </div>
            )}
            <ImageUploadWCustomDropdown
              currentImage={imagePath}
              onUpload={(file) => {
                setNewFile(file);
              }}
            />
          </div>
          <div className="flex-1 flex flex-col gap-y-2">
            <InfoItem
              label="Name"
              currentValue={userInformation?.fullName || "N/A"}
              onSave={(name) => changeUserData("fullName", name)}
            />
            <InfoItem
              label="Age"
              currentValue={userInformation?.age?.toString() || "N/A"}
              onSave={(age) => changeUserData("age", age)}
            />
            <InfoItem
              label="About Me"
              currentValue={userInformation?.aboutMe?.toString() || "N/A"}
              onSave={(aboutMe) => changeUserData("aboutMe", aboutMe)}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <Title>Account Settings</Title>
        <div className="flex flex-col gap-y-1">
          <SubTitle>Permanently Delete Account</SubTitle>
          <Paragraph className="w-[60%]">
            Deleting your account is irreversible and will permanently erase all
            your data and content. Ensure you've saved everything important
            before proceeding. This action cannot be undone.
          </Paragraph>
        </div>
        <div>
          <div
            onClick={handleDeleteAccount}
            className="px-4 py-1 bg-secondary rounded-4 hover:scale-[105%] transition-all inline-block cursor-pointer"
          >
            <Paragraph>
              {doubleCheck ? "Click again to continue" : "Delete Account"}
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
