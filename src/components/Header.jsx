import Logo from "../assets/logo.gif";
export function Header() {
  return (
    <div className="flex w-full items-center justify-between  p-4 ">
      <img src={Logo} alt="logo" className="w-16 h-16" />

      <p className="text-base sm:text-sm md:text-xl lg:text-2xl xl:text-3xl font-semibold ">
        Welcome to My Digital Space 🌿
      </p>
      {/*So using ,
      justify-between = puts the first child to the far left, last child to the far right
      justify-self = does not work on Flex container only on GRID,assuming grid items  */}
    </div>
  );
}
