import { useState, useReducer, useEffect } from "react";
import Header from "./components/Header";
import { LinkedList } from "./models/LinkedList";
import MenuBar from "./components/MenuBar";
import Node from "./components/Node";
import listToArray from "./utils/utils";
import { AnimatePresence } from "framer-motion";

function App() {
  // Initial List to render
  const initList = new LinkedList();
  initList.add(1, "bg-gradient-orange");
  initList.add(2, "bg-gradient-orange");
  initList.add(3, "bg-gradient-orange");
  // Colour theme
  const [theme, setTheme] = useState("light");

  // List to render
  const [state, dispatch] = useReducer(reducer, initList, createListArray);

  useEffect(() => {
    document.body.classList.add(theme === "light" ? "bg-light" : "bg-dark");
    document.body.classList.remove(theme === "light" ? "bg-dark" : "bg-light");
  }, [theme]);

  //reducer function
  function reducer(state, action) {
    const { colour, value, index } = action.payload;
    const newList = new LinkedList();

    // Copy existing linked list into new one
    state.list.forEach((node) => {
      newList.add(node.value, node.color);
    });

    switch (action.type) {
      case "Add":
        newList.add(value, colour);
        break;
      case "Insert":
        newList.insertAt(value, colour, index);
        break;
      case "Remove":
        newList.removeFrom(index);
        break;
      case "Reverse":
        newList.reverse();
        break;
      default:
        break;
    }
    const newArr = listToArray(newList);
    return {
      ...state,
      list: newArr,
      size: newArr.length,
    };
  }

  // convert linked list into an array
  function createListArray(list) {
    const arr = [];
    let node = list.head;
    while (node) {
      arr.push(node);
      node = node.next;
    }

    return {
      list: arr,
      size: arr.length,
    };
  }

  return (
    <div style={{ height: "100vh" }}>
      <Header theme={theme} setTheme={setTheme} />
      <div className="max-w-[1118px] mx-auto my-0 px-4 flex flex-col justify-around min-h-[50%]">
        <MenuBar dispatch={dispatch} length={state.size} />
        <div className=" mt-3">
          <h1 className=" font-fira font-extrabold text-4xl text-fontPrimary dark:text-white pb-8">
            Linked List
          </h1>
          <section className="grid grid-cols-[repeat(auto-fill,7.5rem)]">
            <AnimatePresence>
              {
                /* loop over list and render node */ state.list.map(
                  (item, idx) => (
                    <Node
                      value={item.value}
                      key={idx}
                      next={item.next ? item.next.value : null}
                      color={item.color}
                      idx={idx}
                    />
                  )
                )
              }
            </AnimatePresence>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
