import classNames from "classnames";
import React, { ReactElement } from "react";

interface Props {
  classes?: string;
  children?: any;
}

const Button = ({ classes, children }: Props) => {
  const className = classNames(
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full relative overflow-hidden",
    classes
  );
  return (
    <button className={className} type={"submit"}>
      <div className="absolute w-full h-full left-0 top-0 bg-black"></div>
      {children}
    </button>
  );
};

export default Button;
