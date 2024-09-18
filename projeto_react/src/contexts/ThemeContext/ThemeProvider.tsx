import { PropsWithChildren, useState } from "react";
import ThemeContext from "./ThemeContext";

export interface ThemeProviderProps extends PropsWithChildren { }

const ThemeProvider = ({ children }: ThemeProviderProps) => {

    const [theme, setTheme] = useState("red")

    const changeTheme = (theme: string) => {

        setTheme(theme)

    }

    return (

        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>

    )

}

export default ThemeProvider
