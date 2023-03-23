import DropDown from "./DropDown";
import { useState } from "react";
import ColorDropDown from "./ColorDropDown";
const MenuBar = () => {
  const [activeOption, setActiveOption] = useState("Options");
  const [value, setValue] = useState("");
  return (
    <form className="grid grid-cols-[repeat(auto-fill,minmax(3.75rem,7.5rem))] gap-4 pt-20 pb-40 px-0">
      <DropDown activeOption={activeOption} setActiveOption={setActiveOption} />
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
          className="inline-flex w-full justify-start rounded-md dark:bg-[#737374] bg-black bg-opacity-50 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        />
      </div>
    </form>
  );
};

export default MenuBar;
