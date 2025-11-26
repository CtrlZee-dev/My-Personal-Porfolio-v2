import { useParams } from "react-router-dom";
import { projects } from "./User_Projects"; // make sure you export `projects` array
import Profile_IMG from "../assets/me.png";
import BackBtn_IMG from "../assets/back.png";
import MenuIcon_IMG from "../assets/menu.png";
import HeartBtn_IMG from "../assets/heart2.png";
import CommentBtn_IMG from "../assets/comment.png";
import ShareBtn_IMG from "../assets/share.png";

export function View_Project() {
  const { id } = useParams();
  const project = projects[id];

  if (!project) return <p className="p-4 text-center">Project not found</p>;

  return (
    <div className="flex flex-col p-4 w-full border rounded-xl bg-white max-w-4xl mx-auto">
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

      {/* Profile Header */}
      <div className="flex items-center p-4 w-full">
        <div className="flex items-center gap-3 rounded-">
          <img
            src={Profile_IMG}
            alt="Profile"
            className="w-12 h-12 rounded-full border  p-1 object-cover full bg-[linear-gradient(45deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5)]"
          />
          <h2 className="font-bold"> I_am_Zizipho_Kakaza🌻💜</h2>
        </div>
        <img
          src={MenuIcon_IMG}
          alt="Menu"
          className="w-10 h-10 ml-auto cursor-pointer"
        />
      </div>

      {/* Main Project Image */}
      <div className="relative group">
        <img
          src={project.img}
          alt={project.name}
          className="w-full object-cover rounded-md"
        />
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
      <div className="px-3 pb-4">
        <p className="font-semibold text-base">{project.name}</p>
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
        </div>
      </div>
    </div>
  );
}
