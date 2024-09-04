import { createContext, useState, ReactNode } from "react";
import { FlagPortal } from "../components/FlagPortal";
import { IFlag } from "../components/Flag";

interface FlagContextType {
  flags: IFlag[];
  addFlag: (flag: Omit<IFlag, "id">) => void;
  removeFlag: (id: string) => void;
}

const FlagContext = createContext<FlagContextType | undefined>(undefined);

const FlagProvider = ({ children }: { children: ReactNode }) => {
  const [flags, setFlags] = useState<IFlag[]>([]);

  const addFlag = (flag: Omit<IFlag, "id">) => {
    const id = crypto.randomUUID();
    setFlags([...flags, { ...flag, id }]);
  };

  const removeFlag = (id: string) => {
    setFlags((prevFlags) => prevFlags.filter((flag) => flag.id !== id));
  };

  return (
    <FlagContext.Provider value={{ flags, addFlag, removeFlag }}>
      {children}
      <FlagPortal />
    </FlagContext.Provider>
  );
};

export { FlagContext, FlagProvider };
export type { FlagContextType };
