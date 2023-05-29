import { ReactNode } from "react";

export type CardProps = {
  as?: string | undefined | any;
  className: any;
  children: ReactNode;
};

export type CardLinkProps = {
  children?: ReactNode;
  href: string;
};

export type CardTitleProps = {
  as?: string | undefined | any;
  href: string;
  children: ReactNode;
};

export type CardDescriptionProps = {
  children: ReactNode;
};

export type CardCtaProps = {
  children: ReactNode;
};

export type CardEyebrowProps = {
  as?: string | undefined | any;
  decorate: boolean;
  className: any;
  children: ReactNode;
};
