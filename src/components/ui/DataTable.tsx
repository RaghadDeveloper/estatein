import React from "react";
import type { DataTableProps } from "../../interfaces";
import Loader from "./Loader";


const DataTable = <T extends { id: string }>({
  columns,
  data,
  isLoading,
}: DataTableProps<T>) => {
  if (isLoading) return <div className="p-10 text-center text-gray-400"><Loader /></div>;

  return (
    <div className="rounded-2xl border border-gray-800 bg-[#1A1A1A] shadow-2xl overflow-hidden">
      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
        <table className="w-full min-w-[900px] text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-800 bg-[#262626]">
              {columns.map((col, index) => (
                <th
                  key={index}
                  className={`p-5 text-gray-400 text-[10px] font-bold uppercase tracking-widest ${
                    col.accessor === "actions" ? "text-center" : ""
                  }`}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {data.length > 0 ? (
              data.map((item) => (
                <tr key={item.id} className="hover:bg-[#212121] transition-all group ">
                  {columns.map((col, index) => (
                    <td key={index} className="p-5 ">
                      {col.render ? col.render(item) : (item[col.accessor as keyof T] as React.ReactNode)}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="p-10 text-center text-gray-500">
                  No data found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;