"use client";
import { DUMY_DATA } from "@/data/dataRow";
import { ReactNode, createContext, useContext } from "react";

export type dataRowContextType =
  | {
      id: number;
      type: string;
      label: string;
      value: string;
    }
  | {
      id: number;
      type: string;
      label: string;
      value: () => void;
    };

type dataRowProviderProps = {
  children: ReactNode;
};

const dataRowContext = createContext([] as dataRowContextType[]);

function DataRowProvider({ children }: dataRowProviderProps) {
  const data = DUMY_DATA;
  return (
    <dataRowContext.Provider value={data}>{children}</dataRowContext.Provider>
  );
}

export const useDataRowContext = () => {
  const data = useContext(dataRowContext);
  return data;
};

export default DataRowProvider;
