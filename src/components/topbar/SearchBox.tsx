import { Search } from "lucide-react"

export default function SearchBox() {
  return (
    <div className="relative w-full md:w-auto">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-4 w-4 text-gray-400" />
      </div>
      <input
        type="text"
        placeholder="Search within sheet"
        className="block w-full md:w-64 pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-[#F6F6F6] placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 border-none text-sm"
      />
    </div>
  )
}
