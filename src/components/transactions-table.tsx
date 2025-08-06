"use client";
import { useState } from "react";
import StatusBadge from "./global/status-badge";
import Image from "next/image";

interface Transaction {
  id: string;
  date: string;
  remark: string;
  amount: number;
  currency: string;
  type: "Credit" | "Debit";
}

const sampleData: Transaction[] = [
  {
    id: "1",
    date: "2023-10-01",
    remark: "Salary",
    amount: 3000,
    currency: "USD",
    type: "Credit",
  },
  {
    id: "2",
    date: "2023-10-02",
    remark: "Groceries",
    amount: -150,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "3",
    date: "2023-10-03",
    remark: "Gym Membership",
    amount: -50,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "4",
    date: "2023-10-04",
    remark: "Dinner",
    amount: -40,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "5",
    date: "2023-10-05",
    remark: "Movie Tickets",
    amount: -30,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "6",
    date: "2023-10-06",
    remark: "Rent",
    amount: -1200,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "7",
    date: "2023-10-07",
    remark: "Utilities",
    amount: -100,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "8",
    date: "2023-10-08",
    remark: "Car Payment",
    amount: -400,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "9",
    date: "2023-10-09",
    remark: "Insurance",
    amount: -200,
    currency: "USD",
    type: "Debit",
  },
];

function TransactionsTable() {
  const [sortAsc, setSortAsc] = useState(true);

  const sortedData = [...sampleData].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return sortAsc ? dateA - dateB : dateB - dateA;
  });

  const toggleSort = () => setSortAsc(!sortAsc);
  return (
    <div className="!overflow-x-auto !w-full ">
      <table className=" text-sm text-left text-nowrap  table-fixed sm:table-auto min-w-full">
        <colgroup>
          <col className="w-2/5" />
          <col className="w-1/5" />
          <col className="w-1/5" />
          <col className="w-1/5" />
        </colgroup>
        <thead className=" text-xs font-semibold text-[#15272d82] ">
          <tr>
            <th className="px-4 py-3   cursor-pointer " onClick={toggleSort}>
              <div className="flex items-center gap-1 cursor-pointer ">
                Date
                <Image
                  src={"/assets/images/caret.png"}
                  alt="Sort arrow"
                  width={6}
                  height={6}
                  className={`cursor-pointer transition-transform ${
                    sortAsc ? "rotate-180" : ""
                  }`}
                />
              </div>
            </th>
            <th className="px-4 py-3">Remark</th>
            <th className="px-4 py-3">Amount</th>
            <th className="px-4 py-3">Currency</th>
            <th className="px-4 py-3">Type</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.length === 0 && (
            <tr>
              <td
                colSpan={5}
                className="text-center py-6 text-muted-foreground"
              >
                No transactions to display
              </td>
            </tr>
          )}

          {sortedData.map((tx) => (
            <tr key={tx.id} className="border-t border hover:bg-[#34616f11] ">
              <td className="px-4 py-3 text-[#1B2528] ">{tx.date}</td>
              <td className="px-4 py-3 text-[#1B2528]">{tx.remark}</td>
              <td className="px-4 py-3 text-[#1B2528]">
                {tx.amount < 0 ? "-" : ""}$
                {Math.abs(tx.amount).toLocaleString()}
              </td>
              <td className="px-4 py-3 text-[#1B2528]">{tx.currency}</td>
              <td className="px-4 py-3">
                <StatusBadge
                  activeStatus={tx.type === "Credit"}
                  title={tx.type}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionsTable;
