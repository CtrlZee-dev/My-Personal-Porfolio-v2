import { useState } from "react";
import HomeIcon from "../assets/home.png";
import SearchIcon from "../assets/search.png";
import NotificationIcon from "../assets/heart2.png";

export function Navigation_Bar() {
  const [active, setActive] = useState("home");
  const [showChat, setShowChat] = useState(false);

  const navItems = [
    { id: "home", icon: HomeIcon, label: "Home" },
    { id: "search", icon: SearchIcon, label: "Search" },
    { id: "notifications", icon: NotificationIcon, label: "Alerts" },
  ];

  const handleNavClick = (id) => {
    setActive(id);

    // When Search is clicked → open chatbot UI
    if (id === "search") {
      setShowChat(true);
    }
  };

  return (
    <>
      {/* Bottom Nav */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-md z-50">
        <div className="max-w-md mx-auto flex justify-around items-center py-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="flex flex-col items-center text-gray-500 hover:text-purple-500 transition-colors duration-200"
            >
              <img
                src={item.icon}
                alt={item.label}
                className={`w-7 h-7 mb-1 ${
                  active === item.id ? "filter brightness-110" : ""
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

      {/* Chatbot Popup */}
      {showChat && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-end z-50">
          <div className="bg-white w-full max-w-md rounded-t-2xl shadow-lg p-4 pb-6 animate-slide-up">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-xl font-bold text-purple-600">Chatbot</h2>
              <button
                onClick={() => setShowChat(false)}
                className="text-gray-500 hover:text-red-500 text-lg"
              >
                ✖
              </button>
            </div>

            <div className="bg-gray-100 p-3 rounded-lg text-sm text-gray-700">
              💬 <strong>CV Chatbot coming soon…</strong>
              <p className="mt-1 text-gray-500">
                You’ll be able to ask questions about My CV and get instant
                resoponse regarding my skills, experience, and projects. Stay
                tuned for updates !
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
