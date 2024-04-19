import { totalmem } from "os";
import { FC } from "react";
import { Expense } from "../App";

type FormProps = {
  valueInput: number | string;
  buttonOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  descInput: string;
  descOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  totalFunction: () => void;
  expenses: Expense[];
};

const Form: FC<FormProps> = ({ valueInput, buttonOnChange, descInput, descOnChange, totalFunction, expenses }) => {
  return (
    <div className="bg-green-300 rounded-xl p-10 w-1/2 my-5">
      <div className="text-5xl font-bold text-center text-white mb-10">
        {expenses.reduce((currentTotal, expense) => {
          return Math.round((currentTotal += expense.cost));
        }, 0)}
      </div>
      <section className="flex flex-row justify-center pb-4">
        <div className="bg-green-400 font-bold rounded-l-xl py-3 px-5 text-xl">
          {expenses.reduce((currentTotal, expense) => {
            if (expense.cost > 0) {
              currentTotal += expense.cost;
            }
            return currentTotal;
          }, 0)}
        </div>
        <div className="bg-red-400 font-bold rounded-r-xl py-3 px-5 text-xl">
          {expenses.reduce((currentTotal, expense) => {
            if (expense.cost < 0) {
              currentTotal += expense.cost;
            }
            return currentTotal;
          }, 0)}
        </div>
      </section>
      <section className="m-2">
        <input className="p-1 rounded-l-xl w-10/12" value={valueInput} type="number" placeholder="Enter an expense" onChange={buttonOnChange} />
        <button className="p-1 rounded-r-xl bg-green-400 w-2/12 font-bold" onClick={totalFunction}>
          Enter
        </button>
      </section>
      <section className="mt-5">
        <input className="p-1 rounded-xl w-full" value={descInput} type="text" placeholder="Enter an description(optional)" onChange={descOnChange} />
      </section>
    </div>
  );
};

export default Form;
