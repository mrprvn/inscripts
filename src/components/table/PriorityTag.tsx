interface PriorityTagProps {
  priority: "High" | "Medium" | "Low"
}

export default function PriorityTag({ priority }: PriorityTagProps) {
  const getPriorityStyles = (priority: string) => {
    switch (priority) {
      case "High":
        return "text-[#EF4D44]"
      case "Medium":
        return "text-[#C29210]"
      case "Low":
        return "text-[#1A8CFF]"
      default:
        return "text-gray-800"
    }
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-bold ${getPriorityStyles(priority)}`}
    >
      {priority}
    </span>
  )
}
