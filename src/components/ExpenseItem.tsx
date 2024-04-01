import { FC } from "react";

type ExpenseItemProps = {
  cost: number;
  description?: string;
};

const ExpenseItem: FC<ExpenseItemProps> = ({ cost, description }) => {
  let expenseStyling: () => string = () => {
    if (cost >= 0) {
      return "bg-green-300";
    } else {
      return "bg-red-300";
    }
  };
  return (
    <div className={cost >= 0 ? "flex justify-between w-1/2 bg-green-300" : "`flex justify-between w-1/2 bg-red-400"}>
      <p className="font-bold text-xl">{cost}</p>
      <p>{description}</p>
    </div>
  );
};

export default ExpenseItem;
