import { MagnifyingGlass } from "@phosphor-icons/react";

const SearchBar = () => {
  return (
    <div className="flex gap-3 p-5 rounded-lg shadow-lg lg:w-1/2">
      <MagnifyingGlass size={32} />
      <input
        className=" h-full w-full pt-2 outline-none text-md text-gray-700"
        type="text"
        id="search"
        placeholder="Search notes.."
      />
    </div>
  );
};

export default SearchBar;
