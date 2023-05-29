import { ReactNode } from "react";

export type ButtonProps = {
  variant: "primary" | "secondary";
  className: string | any;
  href?: string;
  type: "submit" | "button";
  children?: ReactNode;
};
