import { MoreHorizontal } from "lucide-react"

export default function Toolbar() {
  return (
    <div className="flex items-center justify-between py-1 px-4 border-b border-gray-200 bg-white overflow-x-auto">
      <div className="flex items-center space-x-1 min-w-0">
        <div className="border-r flex items-center justify-center px-2">
          <span className="text-sm text-gray-600 mr-2 hidden md:block">Tool bar</span>
          <img src="./icons/right-arrow.png" alt="" />
        </div>
        
        
        <div className="flex items-center space-x-1">
          <button className="flex items-center space-x-1 px-2 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded whitespace-nowrap">
            <img src="./icons/eye.png" alt="" />
            <span className="hidden sm:inline">Hide fields</span>
          </button>
          <button className="flex items-center space-x-1 px-2 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded whitespace-nowrap">
            <img src="./icons/up-down-arrow.png" alt="" />
            <span className="hidden sm:inline">Sort</span>
          </button>
          <button className="flex items-center space-x-1 px-2 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded whitespace-nowrap">
            <img src="./icons/three-lines.png" alt="" />
            <span className="hidden sm:inline">Filter</span>
          </button>
          <button className="flex items-center space-x-1 px-2 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded whitespace-nowrap">
            <img src="./icons/cell-view.png" alt="" />
            <span className="hidden lg:inline">Cell view</span>
          </button>
          <button className="md:hidden flex items-center space-x-1 px-2 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded">
            <MoreHorizontal className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-2 ml-4">
        <button className="flex gap-2 items-center space-x-1 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded border border-gray-300 whitespace-nowrap">
          <img src="./icons/import.png" alt="" />
          <span className="hidden md:inline">Import</span>
        </button>
        <button className="flex gap-2 items-center space-x-1 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded border border-gray-300 whitespace-nowrap">
          <img src="./icons/export.png" alt="" />
          <span className="hidden md:inline">Export</span>
        </button>
        <button className="flex gap-2 items-center space-x-1 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded border border-gray-300 whitespace-nowrap">
          <img src="./icons/share.png" alt="" />
          <span className="hidden md:inline">Share</span>
        </button>
        <button className="flex gap-2 items-center space-x-1 px-3 py-1.5 text-sm text-white bg-[#4B6A4F] hover:bg-green-700 rounded whitespace-nowrap">
          <img src="./icons/graph.png" alt="" />
          <span className="hidden sm:inline">New Action</span>
        </button>
      </div>
    </div>
  )
}
