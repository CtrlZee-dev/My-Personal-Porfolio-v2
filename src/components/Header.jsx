import { useState } from "react";
import LogoIcon_IMG from "../assets/logo.gif";
import MenuIcon_IMG from "../assets/menu.png";

export function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [toast, setToast] = useState("");

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(""), 2000); // disappears after 2s
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    showToast(" Profile link copied!");
  };

  const handleDownloadCV = () => {
    const cvLink = "../assets/CV-ZIZIPHO KAKAZA.pdf";
    const a = document.createElement("a");
    a.href = cvLink;
    a.download = "Zizipho_Kakaza_CV.pdf";
    a.click();
    showToast("CV downloaded!");
  };

  return (
    <div className="relative flex w-full items-center justify-between p-4">
      {/* LEFT SECTION */}
      <div className="flex items-center gap-3">
        <img
          src={LogoIcon_IMG}
          alt="logo"
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
        />
        <h2 className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-semibold">
          Welcome to My Digital Space 🌿
        </h2>
      </div>

      {/* MENU ICON */}
      <img
        src={MenuIcon_IMG}
        alt="menu"
        onClick={() => setOpenMenu((prev) => !prev)}
        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 cursor-pointer transition-transform duration-200 hover:scale-110 hover:brightness-110 active:scale-95"
      />

      {/* DROPDOWN MENU */}
      {openMenu && (
        <div className="absolute right-4 top-20 w-44 bg-white rounded-xl shadow-lg border p-2 animate-fadeIn z-50">
          <button
            onClick={() => {
              handleCopyLink();
              setOpenMenu(false);
            }}
            className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 text-sm"
          >
            Copy Profile Link
          </button>

          <button
            onClick={() => {
              handleDownloadCV();
              setOpenMenu(false);
            }}
            className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 text-sm"
          >
            Download CV
          </button>
        </div>
      )}

      {/* TOP TOAST */}
      {toast && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-[#e2c0e2] border border-gray-200 text-gray-800 px-6 py-3 rounded-xl shadow-md opacity-85 animate-slideDown z-50 flex items-center gap-2">
          <span className="font-bold">{toast}</span>
        </div>
      )}
    </div>
  );
}
