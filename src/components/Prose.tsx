import clsx from "clsx";
import { ProseProps } from "./types/prose";

export function Prose({ children, className }: ProseProps) {
  return (
    <div className={clsx(className, "prose dark:prose-invert")}>{children}</div>
  );
}
