import { ReactNode } from "react";

export type ModalProps = {
  children?: ReactNode;
  open?: boolean | undefined;
  setOpen?: ((_value: boolean) => void | undefined) | any;
  className?: any;
};
