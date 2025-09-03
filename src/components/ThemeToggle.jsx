import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return <button onClick={toggleTheme}>Alternar Tema</button>;
};

export default ThemeToggle;
