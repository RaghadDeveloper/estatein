import React from "react";
import type { DataTableProps } from "../../interfaces";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";


const DataTable = <T extends { id: string }>({
  columns,
  data,
  isLoading,
}: DataTableProps<T>) => {
  const navigate = useNavigate();
  if (isLoading) return <div className="p-10 text-center text-gray-400"><Loader /></div>;

  return (
    <div className="rounded-2xl border border-gray-800 bg-bg-main shadow-2xl overflow-hidden">
      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
        <table className="w-full min-w-225 text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-800 bg-bg-secondary">
              {columns.map((col, index) => (
                <th
                  key={index}
                  className={`p-5 text-text-secondary text-[10px] font-bold uppercase tracking-widest ${
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
                <tr key={item.id} className="hover:bg-bg-secondary transition-all group " onClick={()=>navigate(`${item.id}`)}>
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