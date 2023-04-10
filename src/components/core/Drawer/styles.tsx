import classNames from "classnames";

interface Props {
  open: boolean;
  className: string;
}
export const classes = ({ open, className }: Props) =>
  classNames(
    `relative transition-all duration-500 overflow-hidden h-screen z-10 border`,
    open
      ? "opacity-100 duration-500"
      : "transition-all delay-500 opacity-0 translate-x-full",
    className
  );
