import { Bell, Menu } from "lucide-react"

export default function UserProfile() {
  return (
    <div className="flex items-center space-x-2 md:space-x-3">
      <div className="relative">
        <Bell className="h-5 w-5 text-gray-500" />
        <span className="absolute -top-1 -right-1 h-3 w-3 bg-green-700 rounded-full text-xs text-white flex items-center justify-center">
          2
        </span>
      </div>
      <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 rounded-md px-2 py-1">
        <div className="h-8 w-8 rounded-full flex items-center justify-center">
          <img src="./icons/user.png" alt="" />
        </div>
        <div className="hidden lg:block">
          <div className="text-sm font-medium text-gray-900">John Doe</div>
          <div className="text-xs text-gray-500">john.doe@...</div>
        </div>
      </div>
      <button className="md:hidden p-2 text-gray-500 hover:text-gray-700">
        <Menu className="h-5 w-5" />
      </button>
    </div>
  )
}
