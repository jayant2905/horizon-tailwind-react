import React from "react";
import { MdCancel, MdCheckCircle, MdOutlineError } from "react-icons/md";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Card from "components/card";

const columnHelper = createColumnHelper();

const Integrations = () => {
  const tableData = [
    {
      name: "Project A",
      integrationType: "Jira",
      status: "Approved",
      createdAt: "2023-08-01",
      createdBy: "User1",
    },
    {
      name: "Project B",
      integrationType: "AWS",
      status: "Disable",
      createdAt: "2023-08-05",
      createdBy: "User2",
    },
    {
      name: "Project C",
      integrationType: "Azure",
      status: "Error",
      createdAt: "2023-08-10",
      createdBy: "User3",
    },
    {
      name: "Project D",
      integrationType: "Jira",
      status: "Approved",
      createdAt: "2023-08-12",
      createdBy: "User4",
    },
    {
      name: "Project E",
      integrationType: "AWS",
      status: "Approved",
      createdAt: "2023-08-14",
      createdBy: "User5",
    },
    {
      name: "Project F",
      integrationType: "Azure",
      status: "Disable",
      createdAt: "2023-08-16",
      createdBy: "User6",
    },
    {
      name: "Project G",
      integrationType: "Jira",
      status: "Error",
      createdAt: "2023-08-18",
      createdBy: "User7",
    },
    {
      name: "Project H",
      integrationType: "AWS",
      status: "Approved",
      createdAt: "2023-08-19",
      createdBy: "User8",
    },
    {
      name: "Project I",
      integrationType: "Azure",
      status: "Disable",
      createdAt: "2023-08-20",
      createdBy: "User9",
    },
    {
      name: "Project J",
      integrationType: "Jira",
      status: "Approved",
      createdAt: "2023-08-21",
      createdBy: "User10",
    },
  ];

  const [sorting, setSorting] = React.useState([]);
  const columns = [
    columnHelper.accessor("name", {
      id: "name",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">NAME</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("integrationType", {
      id: "integrationType",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          INTEGRATION TYPE
        </p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("status", {
      id: "status",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">STATUS</p>
      ),
      cell: (info) => (
        <div className="flex items-center">
          {info.getValue() === "Approved" ? (
            <MdCheckCircle className="text-green-500 me-1 dark:text-green-300" />
          ) : info.getValue() === "Disable" ? (
            <MdCancel className="text-red-500 me-1 dark:text-red-300" />
          ) : info.getValue() === "Error" ? (
            <MdOutlineError className="text-amber-500 me-1 dark:text-amber-300" />
          ) : null}
          <p className="text-sm font-bold text-navy-700 dark:text-white">
            {info.getValue()}
          </p>
        </div>
      ),
    }),
    columnHelper.accessor("createdAt", {
      id: "createdAt",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          CREATED AT
        </p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("createdBy", {
      id: "createdBy",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          CREATED BY
        </p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
  ];

  const table = useReactTable({
    data: tableData,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <Card extra={"w-full h-full px-6 pb-6 sm:overflow-x-auto"}>
      <div className="relative flex items-center justify-end pt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => {
            // Logic to add new integration goes here
          }}
        >
          Add New Integration
        </button>
      </div>

      <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="!border-px !border-gray-400">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    onClick={header.column.getToggleSortingHandler()}
                    className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start"
                  >
                    <div className="items-center justify-between text-xs text-gray-200">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: "",
                        desc: "",
                      }[header.column.getIsSorted()] ?? null}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="min-w-[150px] border-white/0 py-3 pr-4"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default Integrations;
