import { ComponentPropsWithoutRef, FC } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  href?: never;
}
interface AnchorProps extends ComponentPropsWithoutRef<"a"> {
  disabled?: never;
  href: string;
}
const isAnchorprops = (
  props: ButtonProps | AnchorProps
): props is AnchorProps => {
  return "href" in props;
};

const Button: FC<ButtonProps | AnchorProps> = (props) => {
  if (isAnchorprops(props)) {
    return (
      <a
        {...props}
        className="button"
      ></a>
    );
  }

  return (
    <button
      {...props}
      className="button"
    ></button>
  );
};

export default Button;

// type ButtonProps = {
//   el: "button";
// } & ComponentPropsWithoutRef<"button">;
// type AnchorProps = {
//   el: "anchor";
// } & ComponentPropsWithoutRef<"a">;

// const Button = (props: ButtonProps | AnchorProps) => {
//   if (props.el == "anchor") {
//     return <a {...props}>e</a>;
//   }

//   return <button {...props}></button>;
// };

// export default Button;
