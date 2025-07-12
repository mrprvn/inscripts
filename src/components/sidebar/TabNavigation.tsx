import { Plus } from "lucide-react"

interface Tab {
  id: string
  name: string
  count?: number
  active?: boolean
}

export default function TabNavigation() {
  const tabs: Tab[] = [
    { id: "all", name: "All Orders", active: true },
    { id: "pending", name: "Pending" },
    { id: "reviewed", name: "Reviewed" },
    { id: "arrived", name: "Arrived" },
  ]

  return (
    <div className="border-t border-gray-200 bg-white">
      <div className="flex items-center overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-3 text-sm font-medium border-b-2 whitespace-nowrap ${
              tab.active
                ? "border-t-[#4B6A4F] border-2 bg-[#E8F0E9] text-[#3E5741]"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            {tab.name}
            {tab.count && (
              <span className="ml-2 bg-gray-100 text-gray-600 py-0.5 px-2 rounded-full text-xs">{tab.count}</span>
            )}
          </button>
        ))}
        <button className="px-3 py-3 text-gray-400 hover:text-gray-600 flex-shrink-0">
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
