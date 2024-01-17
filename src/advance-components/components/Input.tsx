import { FC, ComponentPropsWithoutRef, forwardRef } from "react";

//UNION CON INTERFACES
interface InputProp extends ComponentPropsWithoutRef<"input"> {
  label: string;
  id: string;
}
//UNION CON TYPES
// interface InputProp extends ComponentPropsWithoutRef<"input"> {
//   label: string;
//   id: string;
// } & ComponentPropsWithoutRef<"input">

const Input = forwardRef<HTMLInputElement, InputProp>(
  ({ id, label, ...props }, ref) => {
    return (
      <p>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          {...props}
          ref={ref}
          name={id}
        />
      </p>
    );
  }
);

export default Input;
