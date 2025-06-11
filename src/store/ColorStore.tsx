import { createContext, useContext, useState, ReactNode } from "react";

const defaultColors = ["#2BF07A", "#F22222", "#B044F7", "#2A5BFC", "#FFDD33"];

type ColorContextType = {
  colors: string[];
  currentColor: string;
  setCurrentColor: (color: string) => void;
};

const ColorContext = createContext<ColorContextType | undefined>(undefined);

export function ColorProvider({ children }: { children: ReactNode }) {
  const [colors] = useState(defaultColors);
  const [currentColor, setCurrentColor] = useState(defaultColors[0]);

  return (
    <ColorContext.Provider value={{ colors, currentColor, setCurrentColor }}>
      {children}
    </ColorContext.Provider>
  );
}

export function useColorStore() {
  const ctx = useContext(ColorContext);
  if (!ctx) throw new Error("useColorStore must be used within a ColorProvider");
  return ctx;
}