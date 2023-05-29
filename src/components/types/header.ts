import { ReactNode } from "react";

export type MobileNavItemProps = {
  href: string;
  children: ReactNode;
};

export type NavItemProps = {
  href: string;
  children: ReactNode;
};

export type AvatarContainerProps = {
  children?: ReactNode;
  className?: any;
  style?: any;
};

export type AvatarProps = {
  large?: boolean;
  className?: any;
  style?: any;
};
