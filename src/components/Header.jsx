import { BsFillSunFill, BsMoonFill, BsCheck } from "react-icons/bs";

const Header = ({ theme, setTheme }) => {
  const handleThemeSwitch = () => {
    const html = document.querySelector("html");
    if (theme === "light") {
      setTheme("dark");
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
      setTheme("light");
    }
  };

  return (
    <header className="max-w-[1118px] mx-auto my-0 px-4 py-4">
      <div className="flex justify-between items-center">
        <p
          className={`hidden md:block font-fira font-extrabold text-2xl  xl:text-3xl text-black dark:text-white`}
        >
          Gianni.Schiralli
        </p>
        <p
          className={`md:hidden font-fira font-extrabold text-3xl text-black dark:text-white`}
        >
          G.S
        </p>
        <button
          onClick={handleThemeSwitch}
          className="p-4 rounded-full w-12 h-12 flex justify-center items-center bg-dark text-white dark:bg-light dark:text-black"
        >
          {theme === "light" ? <BsMoonFill /> : <BsFillSunFill />}
        </button>
      </div>
    </header>
  );
};

export default Header;
