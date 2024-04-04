import { totalmem } from "os";
import { FC } from "react";

type FormProps = {
  valueInput: number | string;
  buttonOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  descInput: string;
  descOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  totalFunction: () => void;
};

const Form: FC<FormProps> = ({ valueInput, buttonOnChange, descInput, descOnChange, totalFunction }) => {
  return (
    <>
      <section className="border-2 border-blue-300 rounded-md m-2">
        <input className="p-1" value={valueInput} type="number" placeholder="Enter an expense" onChange={buttonOnChange} />
        <button className="p-1" onClick={totalFunction}>
          Enter
        </button>
      </section>
      <section className="border-2 border-blue-300 rounded-md m-2">
        <input className="p-1 w-full" value={descInput} type="text" placeholder="Enter an description(optional)" onChange={descOnChange} />
      </section>
    </>
  );
};

export default Form;
