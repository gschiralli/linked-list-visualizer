import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div className={`bg-${theme}`}>
      <Header theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;
