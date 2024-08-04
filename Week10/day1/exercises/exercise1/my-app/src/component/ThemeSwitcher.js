import React from "react";
import Switch from "react-switch";
import { useTheme } from "./ThemeContext";

const SwitchExample = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <label>
            <span>Switch to {theme === "light" ? "dark" : "light"} mode</span>
            <Switch
                onChange={toggleTheme}
                checked={theme === "dark"}
                uncheckedIcon={false}
                checkedIcon={false}
            />
        </label>
    );
};

export default SwitchExample;
