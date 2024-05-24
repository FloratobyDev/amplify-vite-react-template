import ProfileCard from "../components/ProfileCard";

type Props = {
  profiles: {
    name: string;
    overallRating: string;
    shortInfoList: string[];
    shortDescription: string;
  }[];
};

function AppProfileList({ profiles }: Props) {
  return (
    <div className="grid grid-cols-4 gap-x-2 gap-y-4">
      {profiles.map((profile, index) => (
        <ProfileCard
          key={index}
          connectClick={() => console.log("Connect")}
          name={profile.name}
          overallRating={profile.overallRating}
          shortInfoList={profile.shortInfoList}
          shortDescription={profile.shortDescription}
        />
      ))}
    </div>
  );
}

export default AppProfileList;
