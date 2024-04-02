import { FC } from "react";

export type ExpenseItemProps = {
  id: number;
  cost: number;
  description?: string;
  buttonFunction: (id: number) => void;
};

const ExpenseItem: FC<ExpenseItemProps> = ({ id, cost, description, buttonFunction }) => {
  return (
    <div className={`flex justify-between ${cost >= 0 ? "bg-green-300" : "bg-red-400"}`}>
      <p className="font-bold text-xl">{cost}</p>
      <p>{description}</p>
      <button className="font-extrabold text-2xl" onClick={() => buttonFunction(id)}>
        -
      </button>
    </div>
  );
};

export default ExpenseItem;
