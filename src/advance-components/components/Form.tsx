import {
  ComponentPropsWithoutRef,
  FormEvent,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";

export interface FormHandle {
  clear: () => void;
}

interface FormProps extends ComponentPropsWithoutRef<"form"> {
  onSave: (value: unknown) => void;
}

const Form = forwardRef<FormHandle, FormProps>(
  ({ onSave, children, ...props }, ref) => {
    const form = useRef<HTMLFormElement>(null);

    useImperativeHandle(ref, () => {
      return {
        clear() {
          console.log("clearing");
          form.current?.reset();
        },
      };
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const formData = new FormData(e.currentTarget);

      const data = Object.fromEntries(formData);
      onSave(data);
      form.current?.reset();
    };

    return (
      <form
        {...props}
        onSubmit={handleSubmit}
        ref={form}
      >
        {children}
      </form>
    );
  }
);

export default Form;
