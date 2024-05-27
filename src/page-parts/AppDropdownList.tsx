import { Dispatch, SetStateAction } from "react";
import Select from "../components/Select";
import { CategoryListType } from "../types";
import { Schema } from "../../amplify/data/resource";

type Props = {
  feedFilters: { [key: string]: string };
  setFeedFilters: Dispatch<SetStateAction<CategoryListType>>;
  dropdownOptions: Array<Schema["DropdownList"]["type"]>;
  fetchProfilesOnFilterChange: (key: string, value: string) => Promise<void>;
};

function AppDropdownList({
  feedFilters,
  setFeedFilters,
  dropdownOptions,
  fetchProfilesOnFilterChange,
}: Props) {
  function handleSelect(key: string) {
    return async (label: string) => {
      await fetchProfilesOnFilterChange(key, label);
      setFeedFilters((prev) => {
        return { ...prev, [key]: label };
      });
    };
  }

  const dropdownWithOptionValues = dropdownOptions.filter((dropdown) => {
    return dropdown?.options;
  });

  return (
    <div className="flex gap-x-2">
      {dropdownWithOptionValues.map((dropdown, index) => {
        if (!dropdown?.options) return null;
        const filterNullableOptions = dropdown.options.filter(
          (option) => option !== null
        );
        return (
          <Select
            key={index}
            options={filterNullableOptions as string[]}
            onSelect={handleSelect(dropdown.id)}
            label={dropdown.name}
            selectedValue={feedFilters[dropdown.id]}
          />
        );
      })}
      {/* {Object.keys(dropdownOptions).map((key, index) => {
      
        return (
          <Select
            key={index}
            options={dropdownOptions[key]}
            onSelect={handleSelect(key)}
            label={key}
            selectedValue={feedFilters[key]}
          />
        );
      })} */}
      {/* <Select
        options={options}
        onSelect={handleSelect}
        label="Country"
        selectedValue={selectedValue}
      />
      <Select
        options={options}
        onSelect={handleSelect}
        label="Education"
        selectedValue={selectedValue}
      /> */}
    </div>
  );
}

export default AppDropdownList;
