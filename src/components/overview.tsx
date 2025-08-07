import SummaryCard from "./global/summary-card";
import TransactionsTable from "./transactions-table";

export default function Overview() {
  return (
    <div className="grid gap-y-6 py-4">
      <h3 className="text-[20px] font-bold ">Summary</h3>
      <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-4 gap-4">
        <SummaryCard total={12345} title="Total Balance" percentageChange={5} />
        <SummaryCard total={7890} title="Total Credits" percentageChange={3} />
        <SummaryCard total={4455} title="Total Debits" percentageChange={-2} />
        <SummaryCard total={150} title="Transactions" percentageChange={10} />
      </div>

      <TransactionsTable/>



      {/* <TableSkelton/> */}
    </div>
  );
}
