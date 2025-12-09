import { useState } from "react";
import { useParams } from "react-router-dom";
import { projects } from "./User_Projects";
import Profile_IMG from "../assets/me.png";
import BackBtn_IMG from "../assets/back.png";
import MenuIcon_IMG from "../assets/menu.png";
import HeartBtn_IMG from "../assets/heart2.png";
import CommentBtn_IMG from "../assets/comment.png";
import ShareBtn_IMG from "../assets/share.png";

export function View_Project() {
  const { id } = useParams();
  const project = projects[id];
  const [openMenu, setOpenMenu] = useState(false);
  const [toast, setToast] = useState("");

  if (!project) return <p className="p-4 text-center">Project not found</p>;

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(""), 2000);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    showToast("Project link copied!");
    setOpenMenu(false);
  };

  const handleDownloadCV = () => {
    const cvLink = "../assets/CV-ZIZIPHO KAKAZA-v2.pdf";
    const a = document.createElement("a");
    a.href = cvLink;
    a.download = "Zizipho_Kakaza_CV.pdf";
    a.click();
    showToast("CV downloaded!");
    setOpenMenu(false);
  };

  return (
    <div className="flex flex-col min-h-screen p-4 w-full max-w-4xl mx-auto overflow-auto">
      {/* Navigation Header */}
      <div className="relative flex items-center p-2">
        <img
          src={BackBtn_IMG}
          alt="Back"
          className="w-10 h-10 cursor-pointer"
          onClick={() => window.history.back()}
        />
        <h2 className="absolute left-1/2 -translate-x-1/2 font-bold text-base truncate">
          {project.name}
        </h2>
      </div>

      <hr />

      {/* Profile Header with Dropdown */}
      <div className="flex items-center p-4 w-full relative">
        <div className="flex items-center gap-3">
          <img
            src={Profile_IMG}
            alt="Profile"
            className="w-12 h-12 rounded-full border p-1 object-cover bg-[linear-gradient(45deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5)]"
          />
          <h2 className="font-bold">I_am_Zizipho_Kakaza🌻💜</h2>
        </div>

        {/* Menu Icon */}
        <div className="ml-auto relative">
          <img
            src={MenuIcon_IMG}
            alt="Menu"
            className="w-10 h-10 cursor-pointer"
            onClick={() => setOpenMenu((prev) => !prev)}
          />

          {/* Dropdown Menu */}
          {openMenu && (
            <div className="absolute right-0 top-12 w-44 bg-white rounded-xl shadow-lg border p-2 animate-fadeIn z-50">
              <button
                onClick={handleCopyLink}
                className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 text-sm"
              >
                Copy Project Link
              </button>
              <button
                onClick={handleDownloadCV}
                className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 text-sm"
              >
                Download CV
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Main Project Image */}
      <div className="relative group w-full">
        <div className="w-full h-64 md:h-96 overflow-hidden rounded-md">
          <img
            src={project.img}
            alt={project.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-4 px-3 py-2">
        <img src={HeartBtn_IMG} alt="Like" className="w-7 h-7 cursor-pointer" />
        <img
          src={CommentBtn_IMG}
          alt="Comment"
          className="w-7 h-7 cursor-pointer"
        />
        <img
          src={ShareBtn_IMG}
          alt="Share"
          className="w-7 h-7 cursor-pointer"
        />
      </div>

      {/* Description & Tech Stack */}
      <div className="px-3 pb-24">
        {" "}
        {/* Add bottom padding so content isn't hidden behind nav */}
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
          <p className="font-semibold text-base flex items-center gap-2 hover:underline">
            {project.name}
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/material-outlined/24/github.png"
              alt="github link"
            />
          </p>
        </a>
        <p className="text-gray-700 mt-1">{project.description}</p>
        <div className="flex gap-2 mt-2 flex-wrap">
          {project.stack.map((tech, i) => (
            <span
              key={i}
              className="text-xs bg-gray-200 px-2 py-[2px] rounded-full"
            >
              {tech}
            </span>
          ))}
          <a
            className="ml-auto"
            href={project.livePreviewLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/small/16/external-link.png"
              alt="external-link"
            />
          </a>
        </div>
      </div>

      {/* Toast Notification */}
      {toast && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-[#e2c0e2] border border-gray-200 text-gray-800 px-6 py-3 rounded-xl shadow-md opacity-95 animate-slideDown z-50 flex items-center gap-2">
          <span className="font-bold">{toast}</span>
        </div>
      )}
    </div>
  );
}
