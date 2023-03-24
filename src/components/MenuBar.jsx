import MethodDropDown from "./MethodDropDown";
import { useState } from "react";
import ColorDropDown from "./ColorDropDown";
const MenuBar = () => {
  const [activeOption, setActiveOption] = useState("Add");
  const [value, setValue] = useState("");
  const [index, setIndex] = useState("");

  return (
    <form className="grid grid-cols-[repeat(auto-fill,minmax(3.75rem,7.5rem))] gap-4 pt-20 pb-40 px-0">
      <MethodDropDown
        activeOption={activeOption}
        setActiveOption={setActiveOption}
      />
      {activeOption === "Add" || activeOption === "Insert" ? (
        <>
          <ColorDropDown />
          <div className="flex flex-col">
            <label
              htmlFor="value"
              className="dark:text-white text-black p-2 font-semibold"
            >
              Value
            </label>
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              type="text"
              name="value"
              id="value"
              className="inline-flex w-full justify-start rounded-md dark:bg-[#9c9ca2] bg-black bg-opacity-50 px-4 py-2 text-sm font-normal text-white dark:text-black hover:bg-opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            />
          </div>
        </>
      ) : null}

      {activeOption === "Insert" || activeOption === "Remove" ? (
        <div className="flex flex-col">
          <label
            htmlFor="index"
            className="dark:text-white text-black p-2 font-semibold"
          >
            Index #
          </label>
          <input
            value={index}
            onChange={(e) => setIndex(e.target.value)}
            type="text"
            name="index"
            id="index"
            className="inline-flex w-full justify-start rounded-md dark:bg-[#9c9ca2] bg-black bg-opacity-50 px-4 py-2 text-sm font-normal text-white dark:text-black hover:bg-opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          />
        </div>
      ) : null}
      <div className="flex flex-col">
        <label
          htmlFor="submit"
          className="dark:text-white text-black p-2 font-semibold invisible"
        >
          Submit
        </label>
        <button
          type="submit"
          name="submit"
          className="inline-flex w-full justify-center rounded-md dark:bg-[#787879] text-white bg-black bg-opacity-50 px-4 py-2 text-sm font-normal  hover:bg-opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 "
        >
          Execute
        </button>
      </div>
    </form>
  );
};

export default MenuBar;
