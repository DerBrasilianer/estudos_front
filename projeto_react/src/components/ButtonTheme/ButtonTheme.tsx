import useTheme from "../../contexts/ThemeContext/useTheme";
import "./ButtonTheme.css"

const ButtonTheme = () => {

    const { theme, changeTheme } = useTheme()

    return (

        <button type="button" className={`button-theme ${theme}`} onClick={() => changeTheme(theme === "red" ? "blue" : "red")}>
            Change Theme
        </button>

    )

}

export default ButtonTheme
