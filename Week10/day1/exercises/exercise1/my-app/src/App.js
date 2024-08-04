// App.js
import React from "react";
import { ThemeProvider, useTheme } from "./component/ThemeContext";
import SwitchExample from './component/ThemeSwitcher';

function ThemeSwitcher() {
  const { theme } = useTheme();

  return (
      <div>
          <SwitchExample/>
        <p>Current Theme: {theme}</p>
      </div>
  );
}

function App() {
  return (
      <ThemeProvider>
        <div className="App">
          <h1>Theme Switcher Example</h1>
          <ThemeSwitcher />

        </div>
      </ThemeProvider>
  );
}

export default App;