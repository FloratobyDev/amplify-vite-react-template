import Category from "../components/Category";

type Props = {
  categories: string[];
  activeLabel: string;
  handleLabel: (label: string) => Promise<void>;
};

function AppCategoryList({ categories, activeLabel, handleLabel }: Props) {
  return (
    <div className="flex items-center w-full">
      {categories.map((label, index) => (
        <Category
          key={index}
          activeLabel={activeLabel}
          label={label}
          onClick={handleLabel}
        />
      ))}
    </div>
  );
}

export default AppCategoryList;
