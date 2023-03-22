import { useState } from "react";
import Header from "./components/Header";
import { LinkedList } from "./models/LinkedList";

function App() {
  const [theme, setTheme] = useState("light");
  const initList = new LinkedList();
  return (
    <div className={`bg-${theme}`} style={{ height: "100vh" }}>
      <Header theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;
