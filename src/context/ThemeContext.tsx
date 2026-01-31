import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";
export interface contentTheme{
    theme: Theme;
    toggleTheme: () => void;
}
const ThemeContext = createContext<contentTheme | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<Theme>("dark");

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
    }, [theme]);

    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme: () =>
                    setTheme((t) => (t === "dark" ? "light" : "dark")),
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const Them = useContext(ThemeContext);
    if (!Them) throw new Error("useTheme outside ThemeProvider");
    return Them;
};