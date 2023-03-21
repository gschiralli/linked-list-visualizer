import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div className={`bg-${theme}`} style={{ height: "100vh" }}>
      <Header theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;
