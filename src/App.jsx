import { useState } from "react";
import Header from "./components/Header";
import { LinkedList } from "./models/LinkedList";
import MenuBar from "./components/MenuBar";

function App() {
  const [theme, setTheme] = useState("light");
  const initList = new LinkedList();
  return (
    <div
      className={theme === "light" ? "bg-light" : "bg-dark"}
      style={{ height: "100vh" }}
    >
      <Header theme={theme} setTheme={setTheme} />
      <div className="max-w-[1118px] mx-auto my-0 px-4">
        <MenuBar />
      </div>
    </div>
  );
}

export default App;
