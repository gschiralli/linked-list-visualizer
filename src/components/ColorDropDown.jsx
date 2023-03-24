import { Menu, Transition } from "@headlessui/react";
import { useState, Fragment, useEffect } from "react";
import { HiChevronDown } from "react-icons/hi";
import { useFilter } from "../hooks/useFilter";
const ColorDropDown = () => {
  const [activeColour, setActiveColour] = useState("bg-gradient-blue");
  const colours = useFilter(
    [
      "bg-gradient-purple",
      "bg-gradient-blue",
      "bg-gradient-green",
      "bg-gradient-orange",
    ],
    activeColour
  );

  return (
    <div className="flex flex-col">
      <p className="dark:text-white text-fontPrimary p-2 font-semibold">
        Colour
      </p>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-start rounded-md dark:bg-[#737374] bg-primary  px-4 py-2 text-sm font-medium text-white hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 dark:focus-visible:ring-white focus-visible:ring-opacity-75">
            <div
              className={`mt-0.5 w-3/4 inline-flex align-middle justify-center h-4 ${activeColour}`}
            ></div>
            <HiChevronDown
              className="ml-2 -mr-1 h-5 w-5 dark:text-white text-secondary"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className=" mt-2 w-full origin-top-right divide-y divide-gray-100 rounded-md  dark:bg-[#737374] bg-primary bg-opacity-50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="p-1">
              {colours.map((colour) => (
                <Menu.Item key={colour}>
                  {({ close }) => (
                    <li
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveColour(colour);
                        close();
                      }}
                      className="ui-active:dark:bg-[#787879] ui-active:bg-[#dae2f3] text-white group flex w-full items-center rounded-md px-2 py-2 text-md cursor-pointer"
                    >
                      <div
                        className={`${colour} w-3/4 h-4 inline-flex align-middle justify-center`}
                      ></div>
                    </li>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default ColorDropDown;
