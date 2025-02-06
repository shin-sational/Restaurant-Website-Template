import { cn } from "@/lib/utils";
import { MainBranchInfo, SubBranchInfo } from "@/type/notionFrontend.Type";
import React from "react";

type Props = {
  branchInfo: MainBranchInfo[] | SubBranchInfo[];
  className?: string;
};

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const BusinessHours = ({ branchInfo, className }: Props) => {
  return (
    <div
      className={cn(
        "h-auto",
        "flex flex-col",
        "gap-[2px]",
        "justify-center",
        className
      )}
    >
      {branchInfo.map((branch) => (
        <div key={branch.Name} className="grid grid-cols-2">
          {days.map((day) => {
            const openTimeKey = `${day}_Opening_Time` as keyof typeof branch;
            const openPeriodKey = `${day}_Opening_AM_PM` as keyof typeof branch;
            const closedTimeKey = `${day}_Closed_Time` as keyof typeof branch;
            const closedPeriodKey =
              `${day}_Closed_AM_PM` as keyof typeof branch;

            return (
              <React.Fragment>
                <div className="text-[12px]">{day}</div>
                <div className="text-[12px]">
                  <span>
                    {branch[openTimeKey]}
                    {branch[openPeriodKey]}
                  </span>
                  <span> - </span>
                  <span>
                    {branch[closedTimeKey]}
                    {branch[closedPeriodKey]}
                  </span>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default BusinessHours;
