import search from "../../../assets/desktop/search.svg";

function Searchbar() {
  return (
    <div className="w-full border-b-2 border-orange-400 pt-6 px-6">
            {/* Search Bar */}
            <div className="mb-6 bg-[#E3E3E3] w-[700px] rounded flex gap-2 px-4 ">
              <img src={search} alt="" />
              <input
                type="text"
                placeholder="Search"
                className="p-1 text-[13px] w-full border-none outline-none"
              />
            </div>
          </div>
  )
}

export default Searchbar