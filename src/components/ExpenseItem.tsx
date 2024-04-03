import { FC } from "react";

export type ExpenseItemProps = {
  id: number;
  cost: number;
  description?: string;
  buttonFunction: (id: number) => void;
};

const ExpenseItem: FC<ExpenseItemProps> = ({ id, cost, description, buttonFunction }) => {
  return (
    <div className={`flex justify-between items-center p-3 my-1 rounded-lg ${cost >= 0 ? "bg-green-300" : "bg-red-400"}`}>
      <p className="font-bold text-xl w-1/3">{description}</p>
      <p className="font-extrabold text-2xl w-1/3 flex justify-center">{cost}</p>
      <button className="font-extrabold text-4xl hover:text-red-800 w-1/3 flex justify-end" onClick={() => buttonFunction(id)}>
        -
      </button>
    </div>
  );
};

export default ExpenseItem;
