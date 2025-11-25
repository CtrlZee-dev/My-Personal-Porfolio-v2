import code from "../assets/code-32.png";
import projects from "../assets/projects.png";
import certifications from "../assets/grad-cap.png";
import workHistroy from "../assets/mbag.png";
import badges from "../assets/badge.png";

export function User_Work_Background_Info() {
  return (
    <div className="w-full overflow-x-auto ">
      <div className="flex items-center gap-6 sm:gap-8 md:gap-10 p-4 min-w-max">
        <div className="flex flex-col justify-center items-center p-2 w-24 sm:w-28 md:w-32">
          <img
            src={code}
            alt="tech stack"
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 
                       bg-[#e7c0df] rounded-full p-3 border border-gray-300"
          />
          <p className="pt-3 text-sm sm:text-base text-center">Tech Stack</p>
        </div>

        <div className="flex flex-col justify-center items-center p-2 w-24 sm:w-28 md:w-32">
          <img
            src={certifications}
            alt="certifications"
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 
                       bg-[#e7c0df] rounded-full p-3 border border-gray-300"
          />
          <p className="pt-3 text-sm sm:text-base text-center">
            Certifications
          </p>
        </div>

        <div className="flex flex-col justify-center items-center p-2 w-24 sm:w-28 md:w-32">
          <img
            src={workHistroy}
            alt="work history"
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 
                       bg-[#e7c0df] rounded-full p-3 border border-gray-300"
          />
          <p className="pt-3 text-sm sm:text-base text-center">Work History</p>
        </div>

        <div className="flex flex-col justify-center items-center p-2 w-24 sm:w-28 md:w-32">
          <img
            src={projects}
            alt="projects"
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 
                       bg-[#e7c0df] rounded-full p-3 border border-gray-300"
          />
          <p className="pt-3 text-sm sm:text-base text-center">Projects</p>
        </div>

        <div className="flex flex-col justify-center items-center p-2 w-24 sm:w-28 md:w-32">
          <img
            src={badges}
            alt="upskilling badges"
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 
                       bg-[#e7c0df] rounded-full p-3 border border-gray-300"
          />
          <p className="pt-3 text-sm sm:text-base text-center">UpSkilling</p>
        </div>
      </div>
    </div>
  );
}
