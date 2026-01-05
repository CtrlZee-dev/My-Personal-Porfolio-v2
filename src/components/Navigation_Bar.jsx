import { useState } from "react";
import HomeIcon from "../assets/home.png";
import NotificationIcon from "../assets/heart2.png";

export function Navigation_Bar() {
  const [active, setActive] = useState("home");

  const navItems = [
    { id: "home", icon: HomeIcon, label: "Home" },
    { id: "notifications", icon: NotificationIcon, label: "Alerts" },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-md z-50">
      <div className="max-w-md mx-auto flex justify-around items-center py-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className="flex flex-col items-center text-gray-500 hover:text-purple-500 transition"
          >
            <img
              src={item.icon}
              alt={item.label}
              className={`w-7 h-7 mb-1 ${
                active === item.id ? "brightness-110" : ""
              }`}
            />
            <span
              className={`text-xs ${
                active === item.id ? "font-semibold text-purple-500" : ""
              }`}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
