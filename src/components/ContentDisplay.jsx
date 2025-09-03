import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ContentDisplay = () => {
  const { theme } = useContext(ThemeContext);

  const styles = {
    light: {
      backgroundColor: "#f5f5f5",
      color: "#333",
      padding: "20px",
      borderRadius: "8px",
    },
    dark: {
      backgroundColor: "#333",
      color: "#f5f5f5",
      padding: "20px",
      borderRadius: "8px",
    },
  };

  return <div style={styles[theme]}>Este é um conteúdo no tema {theme}.</div>;
};

export default ContentDisplay;
