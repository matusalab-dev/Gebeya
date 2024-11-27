import SearchIcon from "../../../assets/icons/search-icon";

const SearchInput = () => {
  return (
    <div className="relative flex flex-shrink-1">
      <SearchIcon
        width="8"
        height="8"
        strokeColor="#808080"
        className="absolute left-2 top-[37%] stroke-grey-300 text-grey-300 size-4"
      />
      <input
        type="search"
        name="query"
        className="pl-7 w-[197px] min-w-32 sm:w-full text-[16px] border rounded-tl-xl rounded-bl-xl  text-light_black/70 focus:!border-grey-500 border-r-0 focus:outline-none focus-within:outline-grey-500"
        placeholder="search"
      />
      <button className="flex items-center bg-purple py-2 pl-[23px] pr-[31px] rounded-tr-xl rounded-br-xl">
        <SearchIcon />
      </button>
    </div>
  );
};

export default SearchInput;
