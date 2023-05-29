import { ForwardedRef, ReactNode } from "react";

export type OuterContainerProps = {
  className?: any;
  children?: ReactNode;
};

export type InnerContainerProps = {
  className?: any;
  children: ReactNode;
};

export type ContainerProps = {
  children: ReactNode;
  ref?: ForwardedRef<any>;
  Outer: OuterContainerProps;
};
