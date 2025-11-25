import Logo from "../assets/logo.gif";

export function Header() {
  return (
    <div className="flex w-full items-center justify-between p-4">
      <img
        src={Logo}
        alt="logo"
        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
      />

      <p className="text-sm text-right sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-semibold flex-1 ml-2">
        Welcome to My Digital Space 🌿
      </p>
    </div>
  );
}
