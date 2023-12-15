import { IoIosSearch } from "react-icons/io";

const SearchInput = ({ setSearch, search }) => {
  const handleSearch = (event) => {
    if (search?.length < 4) return;
    setSearch(event.target.value);
  };

  return (
    <div className="flex relative w-full mx-auto md:w-5/12 mt-10">
      <input
        type="text"
        className="w-full rounded-md pl-3 pr-10 py-3 font-poppins"
        onChange={handleSearch}
        placeholder="Search..."
      />
      <button>
        <IoIosSearch size={20} className="absolute bottom-3 top-3 right-3" />
      </button>
    </div>
  );
};

export default SearchInput;
