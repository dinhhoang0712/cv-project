import { createContext, useContext, useEffect, useState } from "react";
interface IAppcontext {
  theme: ThemeContextType;
  setTheme: (v: ThemeContextType) => void;
}
type ThemeContextType = "light" | "dark";
const AppContext = createContext<IAppcontext | null>(null);
export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState<ThemeContextType>(() => {
    const initialTheme =
      (localStorage.getItem("theme") as ThemeContextType) || "dark";
    return initialTheme;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, [theme]);

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useCurrentApp = () => {
  const currentAppContext = useContext(AppContext);

  if (!currentAppContext) {
    throw new Error(
      "useCurrentApp has to be used within <AppContext.Provider>",
    );
  }

  return currentAppContext;
};
