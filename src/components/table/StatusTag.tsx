interface StatusTagProps {
  status: "In-process" | "Need to start" | "Complete" | "Blocked"
}

export default function StatusTag({ status }: StatusTagProps) {
  const getStatusStyles = (status: string) => {
    switch (status) {
      case "In-process":
        return "bg-[#FFF3D6] text-yellow-800"
      case "Need to start":
        return "bg-[#E2E8F0] text-[#475569]"
      case "Complete":
        return "bg-[#D3F2E3] text-green-800"
      case "Blocked":
        return "bg-[#FFE1DE] text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusStyles(status)}`}
    >
      {status}
    </span>
  )
}
