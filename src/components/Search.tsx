import React from "react";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  autoFocus?: boolean;
};

function Search({ onChange, placeholder, autoFocus = false }: Props) {
  return (
    <div className="flex items-center w-full min-w-8 bg-white border border-secondary rounded-4 py-[7px] px-2 text-primary font-poppins text-12">
      <input
        autoFocus={autoFocus}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        alt="search"
        className="w-full px-1 h-full bg-transparent outline-none placeholder:font-poppins placeholder:text-12"
      />
    </div>
  );
}

export default Search;
