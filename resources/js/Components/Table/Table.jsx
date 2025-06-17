import SVG from "../SVG/SVG";

export default function Table({columns}) {
    return (<>
    {/* table header start */}
    
   <table className="w-full whitespace-nowrap dark:text-gray-400 border-t">
        <thead>
          <tr className="font-bold text-left">
            {columns?.map(column => (
              <th
                key={column.label}
                colSpan={column.colSpan ?? 1}
                className="px-6 pt-5 pb-4"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
            <tr className="border-r border-gray-100 px-4 py-[17.5px] dark:border-gray-800">
                <td className="block text-theme-sm font-medium text-gray-800 dark:text-white/90">testest</td>
            </tr>
        </tbody>
      </table>
    </>)
}