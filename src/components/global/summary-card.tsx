import { Ellipsis} from "lucide-react";

interface SummaryCardProps {
  total: number;
    title: string;
    percentageChange: number;
}

export default function SummaryCard({total, title, percentageChange} : SummaryCardProps) {
  return (
    <div className="bg-[#34616f11] gap-4 p-4 rounded-lg flex flex-col justify-between items-start">
        <div className="flex justify-between items-center w-full ">
            <h4 className="text-sm sm:text-[17px] font-bold">{title}</h4>
            <Ellipsis/>
        </div>

        <p className="font-bold text-xl sm:text-[34px]">${total}</p>
        <p className={`text-[#3E7383] text-base font-medium`}>{percentageChange < 0 ? "" : "+"} {percentageChange}%</p>

    </div>
  )
}
