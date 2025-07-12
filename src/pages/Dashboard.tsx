import { ChevronRight, Ellipsis, Plus } from "lucide-react"
import SearchBox from "../components/topbar/SearchBox"
import UserProfile from "../components/topbar/UserProfile"
import Toolbar from "../components/topbar/Toolbar"
import JobRequestRow from "../components/table/JobRequestRow"
import TabNavigation from "../components/sidebar/TabNavigation"
import mockData from "@/lib/mockData"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-4 py-3">
          <div className="flex flex-col space-y-3 md:flex-row md:items-center md:justify-between md:space-y-0">
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-sm text-gray-600 min-w-0">
              {/* <Folder className="h-4 w-4 text-green-600 flex-shrink-0" /> */}
              <img src="./icons/Shape.png" alt="workspace-icon" className="h-4 w-4 shrink-0" />
              <span className="hidden sm:inline">Workspace</span>
              <ChevronRight className="h-4 w-4 flex-shrink-0" />
              <span className="hidden sm:inline">Folder 2</span>
              <ChevronRight className="h-4 w-4 flex-shrink-0 hidden sm:block" />
              <div className="flex items-center gap-2 space-x-1 min-w-0">
                <span className="font-medium text-gray-900 truncate">Spreadsheet 3</span>
                <Ellipsis size={16} />
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              <div className="flex-1 md:flex-none">
                <SearchBox />
              </div>
              <UserProfile />
            </div>
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <Toolbar />

      {/* Main Content */}
      <div className="flex-1">
        {/* Mobile Header Tags - Scrollable */}
        <div className="block lg:hidden bg-white px-4 py-2 border-b border-gray-200">
          <div className="overflow-x-auto">
            <div className="flex items-center space-x-2 min-w-max">
              <div className="flex items-center space-x-2 bg-blue-50 border border-blue-200 px-3 py-1.5 rounded-md text-sm whitespace-nowrap">
                <span>📊</span>
                <span className="text-blue-800 font-medium">Q3 Financial Overview</span>
                <button className="text-blue-600 hover:text-blue-800 ml-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex items-center justify-center bg-green-100 border border-green-200 px-3 py-1.5 rounded-md text-sm whitespace-nowrap">
                <span className="text-green-800 font-medium">ABC</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-100 border border-purple-200 px-3 py-1.5 rounded-md text-sm whitespace-nowrap">
                <span className="text-purple-800 font-medium">Answer a question</span>
              </div>
              <div className="flex items-center space-x-2 bg-orange-100 border border-orange-200 px-3 py-1.5 rounded-md text-sm whitespace-nowrap">
                <span className="text-orange-800 font-medium">Extract</span>
              </div>
              <button className="flex items-center justify-center w-8 h-8 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md flex-shrink-0">
                <Plus className="h-4 w-4" />
              </button>               
              <td className="px-2 lg:px-3 py-3 border-r border-gray-100"></td>
            </div>
          </div>
        </div>

        {/* Table - Always visible with horizontal scroll */}
        <div className="bg-white flex-1">
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              {/* Desktop Spanning Header Tags Row - Hidden on mobile */}
              <thead>
              <tr className="bg-white border-b border-gray-200 hidden lg:table-row">
                  <td className="px-3 py-2 border-r border-gray-100"></td>
                  <td colSpan={4} className="px-3 py-2 border-r bg-[#E2E2E2] border-gray-100">
                    <div className="flex items-center space-x-2 bg-[#EEEEEE] px-3 py-1.5 rounded-md text-sm w-fit">
                      <img src="./icons/link.png" alt="" />
                      <span className="font-medium">Q3 Financial Overview</span>
                    </div>
                  </td>
                  <td className="px-3 py-2 border-r border-gray-100"></td>
                  <td className="px-3 py-2 border-r bg-[#D2E0D4] border-gray-100">
                    <div className="flex justify-center">
                      <div className="flex gap-1 items-center justify-center px-3 py-1.5 rounded-md text-sm w-fit">
                        <img src="./icons/graph.png" alt="" />
                        <span className="font-medium">ABC</span>
                        <img src="./icons/three-dots.png" alt="" />
                      </div>
                    </div>
                  </td>
                  <td colSpan={2} className="px-3 py-2 border-r bg-[#DCCFFC] border-gray-100">
                    <div className="flex justify-center">
                      <div className="flex gap-1 items-center space-x-2 px-3 py-1.5 rounded-md text-sm w-fit">
                        <img src="./icons/graph.png" alt="" />
                        <span className="text-purple-800 font-medium">Answer a question</span>
                        <img src="./icons/three-dots.png" alt="" />
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-2 bg-[#FAC2AF]">
                    <div className="flex justify-center">
                      <div className="flex gap-1 items-center space-x-2 px-3 py-1.5 rounded-md text-sm w-fit">
                        <img src="./icons/graph.png" alt="" />
                        <span className="font-medium">Extract</span>
                        <img src="./icons/three-dots.png" alt="" />
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-2 bg-[#EEEEEE]">
                    <div className="flex justify-center items-center">
                      <button className="flex items-center justify-center w-8 h-8 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md ">
                        <Plus className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
                {/* Column Headers */}
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-2 bg-[#EEEEEE] lg:px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-8 border-r border-gray-200">
                    #
                  </th>
                  <th className="px-2 bg-[#EEEEEE] lg:px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200 min-w-[250px] lg:min-w-[300px]">
                    <div className="flex items-center space-x-1">
                      <span><img src="./icons/Briefcase.png" alt="" /></span>
                      <span className="hidden sm:inline">Job Request</span>
                      <span className="sm:hidden">Job</span>
                    </div>
                  </th>
                  <th className="px-2 bg-[#EEEEEE] lg:px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200 min-w-[100px]">
                    <div className="flex items-center space-x-1">
                      <span><img src="./icons/calender.png" alt="" /></span>
                      <span className="hidden sm:inline">Submitted</span>
                      <span className="sm:hidden">Sub.</span>
                    </div>
                  </th>
                  <th className="px-2 bg-[#EEEEEE] lg:px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200 min-w-[120px]">
                    <div className="flex items-center space-x-1">
                      <span><img src="./icons/chevron-circle.png" alt="" /></span>
                      <span>Status</span>
                    </div>
                  </th>
                  <th className="px-2 bg-[#EEEEEE] lg:px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200 min-w-[120px]">
                    <div className="flex items-center space-x-1">
                      <span><img src="./icons/Person.png" alt="" /></span>
                      <span className="hidden sm:inline">Submitter</span>
                      <span className="sm:hidden">Sub.</span>
                    </div>
                  </th>
                  <th className="px-2  bg-[#EEEEEE] lg:px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200 min-w-[120px]">
                    <div className="flex items-center space-x-1">
                      <span><img src="./icons/Globe.png" alt="" /></span>
                      <span>URL</span>
                    </div>
                  </th>
                  <th className="px-2 bg-[#E8F0E9] lg:px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200 min-w-[120px]">
                    <div className="flex items-center space-x-1">
                      <span><img src="./icons/Emoji.png" alt="" /></span>
                      <span className="hidden sm:inline">Assigned</span>
                      <span className="sm:hidden">Asgn.</span>
                    </div>
                  </th>
                  <th className="px-2 bg-[#EAE3FC] lg:px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200 min-w-[100px]">
                    <span className="text-purple-600">Priority</span>
                  </th>
                  <th className="px-2 bg-[#EAE3FC] lg:px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200 min-w-[100px]">
                    <span className="hidden sm:inline">Due Date</span>
                    <span className="sm:hidden">Due</span>
                  </th>
                  <th className="px-2 bg-[#FFE9E0] lg:px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r min-w-[120px]">
                    <span className="hidden sm:inline">Est. Value</span>
                    <span className="sm:hidden">Value</span>
                  </th>
                  {/* <th></th> */}
                </tr>
              </thead>
              <tbody className="bg-white">
                {mockData.map((job, index) => (
                  <JobRequestRow key={job.id} job={job} index={index + 1} />
                ))}
                {/* Empty rows for spacing */}
                {Array.from({ length: 15 }, (_, i) => (
                  <tr key={`empty-${i}`} className="hover:bg-gray-50 border-b border-gray-100">
                    <td className="px-2 lg:px-3 py-3 text-sm text-gray-400 border-r border-gray-100">
                      {mockData.length + i + 1}
                    </td>
                    <td className="px-2 lg:px-3 py-3 border-r border-gray-100"></td>
                    <td className="px-2 lg:px-3 py-3 border-r border-gray-100"></td>
                    <td className="px-2 lg:px-3 py-3 border-r border-gray-100"></td>
                    <td className="px-2 lg:px-3 py-3 border-r border-gray-100"></td>
                    <td className="px-2 lg:px-3 py-3 border-r border-gray-100"></td>
                    <td className="px-2 lg:px-3 py-3 border-r border-gray-100"></td>
                    <td className="px-2 lg:px-3 py-3 border-r border-gray-100"></td>
                    <td className="px-2 lg:px-3 py-3 border-r border-gray-100"></td>
                    <td className="px-2 lg:px-3 py-3 border-r border-gray-100"></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Bottom Tabs */}
      <TabNavigation />
    </div>
  )
}
