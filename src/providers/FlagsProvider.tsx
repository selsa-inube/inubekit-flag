import { createContext, useState, ReactNode } from "react";
import { FlagPortal } from "../components/FlagPortal";
import { IFlag } from "../components/Flag";

interface FlagContextType {
  flags: IFlag[];
  addFlag: (message: Omit<IFlag, "id">) => void;
  removeFlag: (id: string) => void;
}

const FlagContext = createContext<FlagContextType | undefined>(undefined);

export const FlagProvider = ({ children }: { children: ReactNode }) => {
  const [flags, setFlags] = useState<IFlag[]>([]);

  const addFlag = (message: Omit<IFlag, "id">) => {
    const id = crypto.randomUUID();
    setFlags([...flags, { ...message, id }]);
  };

  const removeFlag = (id: string) => {
    setFlags((prevMessages) => prevMessages.filter((msg) => msg.id !== id));
  };

  return (
    <FlagContext.Provider value={{ flags, addFlag, removeFlag }}>
      {children}
      <FlagPortal />
    </FlagContext.Provider>
  );
};

export { FlagContext };
export type { FlagContextType };
