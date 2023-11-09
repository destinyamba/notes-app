import { MagnifyingGlass } from "@phosphor-icons/react";

const SearchBar = () => {
  return (
    <div className="flex gap-3 p-4 rounded-lg shadow-lg">
      <MagnifyingGlass size={32} />
      <input
        className=" h-full w-full outline-none text-md pt-2 text-gray-700"
        type="text"
        id="search"
        placeholder="Search notes.."
      />
    </div>
  );
};

export default SearchBar;
