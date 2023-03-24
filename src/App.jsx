import { useState, useEffect, useReducer } from "react";
import Header from "./components/Header";
import { LinkedList } from "./models/LinkedList";
import MenuBar from "./components/MenuBar";
import Node from "./components/Node";
// Initial List to render
const initList = new LinkedList();
initList.add(1, "bg-gradient-orange");
initList.add(2, "bg-gradient-orange");
initList.add(3, "bg-gradient-orange");

function App() {
  // Colour theme
  const [theme, setTheme] = useState("light");
  // Currently selected method
  const [activeOption, setActiveOption] = useState("Add");

  // List to render
  const [state, dispatch] = useReducer(reducer, null, createListArray);

  //reducer function
  function reducer() {}

  // convert linked list into an array
  function createListArray() {
    const arr = [];
    let node = initList.head;
    while (node) {
      arr.push(node);
      node = node.next;
    }
    return {
      list: arr,
    };
  }

  return (
    <div
      style={{ height: "100vh" }}
      className={theme === "light" ? "bg-light" : "bg-dark"}
    >
      <Header theme={theme} setTheme={setTheme} />
      <div
        className={`max-w-[1118px] mx-auto my-0 px-4 ${
          theme === "light" ? "bg-light" : "bg-dark"
        }`}
      >
        <MenuBar
          list={state.list}
          setList={reducer}
          activeOption={activeOption}
          setActiveOption={setActiveOption}
        />
        {
          /* loop over list and render node */
          state.list.map((item, idx) => (
            <Node
              value={item.value}
              key={idx}
              next={item.next ? item.next.value : "null"}
              color={item.color}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;
