import { createContext, useContext, useEffect, useMemo, useState } from "react";

const RootColorsContext = createContext(null);

export const RootColorsProvider = ({ children, initialColors = {} }) => {
  const [colors, setColors] = useState(initialColors);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const root = document.documentElement;
      const computedColors = {
        primaryDarkGreen: getComputedStyle(root)
          .getPropertyValue("--primary-dark-green")
          .trim(),
        primaryYellow: getComputedStyle(root)
          .getPropertyValue("--primary-yellow")
          .trim(),
        highlightLightGray: getComputedStyle(root)
          .getPropertyValue("--highlight-light-gray")
          .trim(),
        highlightDarkGray: getComputedStyle(root)
          .getPropertyValue("--highlight-dark-gray")
          .trim(),
      };

      setColors((prev) => ({ ...prev, ...computedColors }));
    }
  }, []);

  const memoizedColors = useMemo(() => colors, [colors]);

  return (
    <RootColorsContext.Provider value={memoizedColors}>
      {children}
    </RootColorsContext.Provider>
  );
};

export function useGlobalColors() {
  const context = useContext(RootColorsContext);
  if (!context) {
    throw new Error("useRootColors must be used within a RootColorsProvider");
  }
  return context;
}
