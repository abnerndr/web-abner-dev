import { ForwardedRef, forwardRef } from "react";
import clsx from "clsx";
import {
  ContainerProps,
  InnerContainerProps,
  OuterContainerProps,
} from "./types/container";

const OuterContainer = forwardRef(function OuterContainer(
  { className, children, ...props }: OuterContainerProps,
  ref: ForwardedRef<any>
) {
  return (
    <div ref={ref} className={clsx("sm:px-8", className)} {...props}>
      <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
    </div>
  );
});

const InnerContainer = forwardRef(function InnerContainer(
  { className, children, ...props }: InnerContainerProps,
  ref: ForwardedRef<any>
) {
  return (
    <div
      ref={ref}
      className={clsx("relative px-4 sm:px-8 lg:px-12", className)}
      {...props}
    >
      <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
    </div>
  );
});

export const Container: any = forwardRef(function Container(
  { children, ...props }: ContainerProps,
  ref: ForwardedRef<any>
) {
  return (
    <OuterContainer ref={ref} {...props}>
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  );
});

Container.Outer = OuterContainer;
Container.Inner = InnerContainer;
