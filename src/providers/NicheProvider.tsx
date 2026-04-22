"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";
import { NicheData, niches, defaultNiche } from "@/data/niches";

interface NicheContextValue {
  activeNiche: NicheData;
  setActiveNiche: (niche: NicheData) => void;
}

const NicheContext = createContext<NicheContextValue>({
  activeNiche: defaultNiche,
  setActiveNiche: () => {},
});

export function NicheProvider({ children }: { children: ReactNode }) {
  const [activeNiche, setActiveNiche] = useState<NicheData>(defaultNiche);

  return (
    <NicheContext.Provider value={{ activeNiche, setActiveNiche }}>
      {children}
    </NicheContext.Provider>
  );
}

export function useNiche() {
  return useContext(NicheContext);
}

export { niches };
