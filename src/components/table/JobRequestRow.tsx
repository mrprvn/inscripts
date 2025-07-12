import StatusTag from "./StatusTag"
import PriorityTag from "./PriorityTag"

interface JobRequest {
  id: number
  jobRequest: string
  submitted: string
  status: "In-process" | "Need to start" | "Complete" | "Blocked"
  submitter: string
  submitterUrl: string
  url: string
  assigned: string
  priority: "High" | "Medium" | "Low"
  dueDate: string
  estValue: number
}

interface JobRequestRowProps {
  job: JobRequest
  index: number
}

export default function JobRequestRow({ job, index }: JobRequestRowProps) {
  const formatCurrency = (value: number) => {
    return `₹${value.toLocaleString("en-IN")}`
  }

  return (
    <tr className="hover:bg-gray-50 border-b border-gray-100">
      <td className="px-2 lg:px-3 py-3 text-sm text-gray-500 w-8 border-r border-gray-100">{index}</td>
      <td className="px-2 lg:px-3 py-3 text-sm text-gray-900 border-r border-gray-100">
        <div className="max-w-xs">
          <div className="font-medium text-xs sm:text-sm line-clamp-2">{job.jobRequest}</div>
        </div>
      </td>
      <td className="px-2 lg:px-3 py-3 text-xs sm:text-sm text-gray-500 whitespace-nowrap border-r border-gray-100">
        {job.submitted}
      </td>
      <td className="px-2 lg:px-3 py-3 border-r text-center border-gray-100">
        <StatusTag status={job.status} />
      </td>
      <td className="px-2 lg:px-3 py-3 text-xs sm:text-sm border-r border-gray-100">
        <a
          href={job.submitterUrl}
          className="hover:underline font-medium truncate block"
        >
          {job.submitter}
        </a>
      </td>
      <td className="px-2 lg:px-3 py-3 text-xs sm:text-sm border-r border-gray-100">
        <a href={job.url} className="underline truncate block font-medium">
          {job.url}
        </a>
      </td>
      <td className="px-2 lg:px-3 py-3 text-xs sm:text-sm text-gray-900 border-r border-gray-100 truncate">
        {job.assigned}
      </td>
      <td className="px-2 lg:px-3 py-3 border-r text-center border-gray-100">
        <PriorityTag priority={job.priority} />
      </td>
      <td className="px-2 lg:px-3 py-3 text-xs sm:text-sm text-gray-500 whitespace-nowrap border-r border-gray-100">
        {job.dueDate}
      </td>
      <td className="px-2 lg:px-3 py-3 text-xs sm:text-sm text-gray-900 whitespace-nowrap border-r border-gray-100 font-medium">
        {formatCurrency(job.estValue)}
      </td>
    </tr>
  )
}
