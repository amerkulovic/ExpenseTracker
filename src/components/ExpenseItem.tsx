import { FC } from "react";

export type ExpenseItemProps = {
  id: number;
  cost: number;
  description?: string;
  buttonFunction: (id: number) => void;
};

const ExpenseItem: FC<ExpenseItemProps> = ({ id, cost, description, buttonFunction }) => {
  //   let expenseStyling = () => {
  //     if (cost >= 0) {
  //       return "bg-green-300";
  //     } else {
  //       return "bg-red-300";
  //     }
  //   };
  return (
    <div className={cost >= 0 ? "flex justify-between bg-green-300" : "flex justify-between bg-red-400"}>
      <p className="font-bold text-xl">{cost}</p>
      <p>{description}</p>
      <button className="font-extrabold text-2xl" onClick={() => buttonFunction(id)}>
        -
      </button>
    </div>
  );
};

export default ExpenseItem;
