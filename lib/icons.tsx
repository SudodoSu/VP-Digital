import { ReactNode } from "react";
import { TbHomeStats } from "react-icons/tb";


export type IconData = {
  icon: ReactNode;
  label: string; 
};

export const icons: IconData[] = [
  { icon: <TbHomeStats/>, label: "Stats Icon", },
  { icon: <TbHomeStats/>, label: "" },
];