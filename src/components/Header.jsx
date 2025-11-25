import logo from "../assets/logo.gif";
import menu from "../assets/menu.png";

export function Header() {
  return (
    <div className="flex w-full items-center justify-between p-4">
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="logo"
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
        />

        <h2 className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-semibold">
          Welcome to My Digital Space 🌿
        </h2>
      </div>

      <img
        src={menu}
        alt="menu"
        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
      />
    </div>
  );
}
