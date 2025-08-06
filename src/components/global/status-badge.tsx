import { Badge } from "../ui/badge";

const StatusBadge = ({
  activeStatus,
  title,
}: {
  activeStatus: boolean;
  title?: string;
}) => {
  return (
    <Badge variant="active" className="#34616F">
      <div
        className={`${
          activeStatus ? "bg-[#087A2E]" : "bg-[#C6381B] "
        } h-1 w-1 rounded-full`}
      ></div>

      {title}
    </Badge>
  );
};

export default StatusBadge;
