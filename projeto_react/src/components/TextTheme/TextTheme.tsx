import { HTMLAttributes, PropsWithChildren } from "react";
import useTheme from "../../contexts/ThemeContext/useTheme";
import "./TextTheme.css"

interface TextThemeProps extends HTMLAttributes<HTMLParagraphElement>, PropsWithChildren { }

const TextTheme = ({ children, ...props }: TextThemeProps) => {

    const { theme } = useTheme()

    return <p {...props} className={`text-theme ${theme} ${props.className}`} >{children}</p>

}

export default TextTheme
