import { ReactNode } from "react";

type MetaObject = {
  title: string;
  description: string;
  date: Date | any;
};

export type ArticleLayoutProps = {
  children: ReactNode;
  meta: MetaObject;
  isRssFeed: boolean;
  previousPathname?: any;
};
