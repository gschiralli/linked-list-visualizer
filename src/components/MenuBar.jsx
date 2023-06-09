import MethodDropDown from "./MethodDropDown";
import { useState } from "react";
import ColorDropDown from "./ColorDropDown";
import { validateInput } from "../utils/utils";
const MenuBar = ({ dispatch, length }) => {
  const [activeOption, setActiveOption] = useState("Add");
  const [activeColour, setActiveColour] = useState("bg-gradient-orange");
  const [value, setValue] = useState("");
  const [index, setIndex] = useState("");
  const [indexError, setIndexError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (activeOption === "Insert" || activeOption === "Remove") {
      const errorMessage = validateInput(index, length, activeOption);
      if (errorMessage) {
        setIndexError(errorMessage);
        return;
      }
      dispatch({
        type: activeOption,
        payload: { colour: activeColour, value: value, index: parseInt(index) },
      });

      setIndex("");
      setIndexError("");
    } else {
      dispatch({
        type: activeOption,
        payload: { colour: activeColour, value: value, index: parseInt(index) },
      });
      setValue("");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-[repeat(auto-fill,minmax(3.75rem,7.5rem))] gap-4 pt-12 px-0 h-auto"
    >
      <MethodDropDown
        activeOption={activeOption}
        setActiveOption={setActiveOption}
      />
      {activeOption === "Add" || activeOption === "Insert" ? (
        <>
          <ColorDropDown
            activeColour={activeColour}
            setActiveColour={setActiveColour}
          />
          <div className="flex flex-col">
            <label
              htmlFor="value"
              className="dark:text-white text-fontPrimary p-2 font-semibold"
            >
              Value
            </label>
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              type="text"
              name="value"
              id="value"
              maxLength={10}
              className="inline-flex w-full justify-start rounded-md dark:bg-[#9c9ca2] bg-secondary  px-4 py-2 text-sm font-normal text-light dark:text-black  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            />
          </div>
        </>
      ) : null}

      {activeOption === "Insert" || activeOption === "Remove" ? (
        <div className="flex flex-col">
          <label
            htmlFor="index"
            className="dark:text-white text-fontPrimary p-2 font-semibold"
          >
            Index #
            {indexError && (
              <span className=" text-red-600 pl-2">{indexError}</span>
            )}
          </label>

          <input
            value={index}
            onChange={(e) => setIndex(e.target.value)}
            type="text"
            name="index"
            id="index"
            className="inline-flex w-full justify-start rounded-md dark:bg-[#9c9ca2] bg-secondary  px-4 py-2 text-sm font-normal text-light dark:text-black  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          />
        </div>
      ) : null}
      <div className="flex flex-col">
        <label
          htmlFor="submit"
          className="dark:text-white text-fontPrimary p-2 font-semibold invisible"
        >
          Submit
        </label>
        <button
          type="submit"
          name="submit"
          className="inline-flex w-full justify-center rounded-md dark:bg-[#787879] dark:text-white text-secondary bg-primary px-4 py-2 text-sm font-normal  hover:bg-opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Execute
        </button>
      </div>
    </form>
  );
};

export default MenuBar;
