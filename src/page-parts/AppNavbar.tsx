import { ChangeEvent } from "react";
import Brand from "../components/Brand";
import Dropdown from "../components/Dropdown";
import Paragraph from "../components/Paragraph";
import Search from "../components/Search";
import ProfileLogo from "../logos/ProfileLogo";

function AppNavbar() {
  const buttons = [
    {
      label: "Profile",
      onClick: () => console.log("Profile"),
    },
    {
      label: "Settings",
      onClick: () => console.log("Settings"),
    },
    {
      label: "Sign Out",
      onClick: () => console.log("Sign Out"),
    },
  ];

  return (
    <div className="w-[60%] mx-auto pt-8 flex flex-col gap-y-4">
      <div className="flex items-center justify-center">
        <div className="flex flex-1 gap-x-8 mr-16">
          <Brand />
          <Search
            hasSearchIcon
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              console.log(e.target.value)
            }
            placeholder="Search"
            value=""
          />
        </div>
        <Paragraph bold>Michael Mushrush</Paragraph>
        <Dropdown jsxComponent={<ProfileLogo />} values={buttons} />
      </div>
    </div>
  );
}

export default AppNavbar;
