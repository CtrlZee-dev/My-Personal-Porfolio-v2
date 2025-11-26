import Project1_IMG from "../assets/bogo1.png";
import Project2_IMG from "../assets/hangman.png";
import Project3_IMG from "../assets/pennywise.png";
import Project4_IMG from "../assets/projects.png";
import Project5_IMG from "../assets/movie.png";
import Project6_IMG from "../assets/projects.png";

export const projects = [
  {
    img: Project1_IMG,
    name: "Buy One Give One (BOGO) E-Commerce",
    stack: ["PHP", "JavaScript", "Bootstrap", "MySQL"],
    description:
      "An e-commerce platform promoting social good by donating a product for every purchase made.",
  },
  {
    img: Project2_IMG,
    name: "HangMan Game",
    stack: ["JavaScript", "Node.JS", "CSS"],
    description:
      "A classic word-guessing game where players try to guess a hidden word within limited attempts.",
  },
  {
    img: Project3_IMG,
    name: "PennyWise Expense Tracker",
    stack: ["C#", "JavaScript", "MySQL", "ASP.NET"],
    description: "Helps users track expenses and manage budgets effectively.",
  },
  {
    img: Project4_IMG,
    name: "Portfolio Website",
    stack: ["React", "JavaScript", "TailwindCSS", "Vite"],
    description:
      "Personal portfolio to showcase projects, skills, and experience.",
  },
  {
    img: Project5_IMG,
    name: "Movie Guide API",
    stack: ["JavaScript", "Node.JS", "API"],
    description:
      "Provides movie details, ratings, and reviews using a third-party API.",
  },
  {
    img: Project6_IMG,
    name: "ChefsNotebook - Recipe Website",
    stack: ["React", "JavaScript", "TailwindCSS", "Vite", "API"],
    description:
      "Allows users to browse, search, and save favorite recipes with tips and meal planning.",
  },
];

export function User_Projects() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">My Projects</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {projects.map((project, index) => (
          <div className="relative group rounded-lg overflow-hidden cursor-pointer border border-gray-300 hover:border-gray-400 transition-colors">
            {/* Project Image */}
            <img
              src={project.img}
              alt={project.name}
              className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2">
              <p className="text-white text-left text-sm font-semibold mb-1 truncate">
                {project.name}
              </p>
              <div className="flex gap-2 flex-wrap">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs text-gray-200 bg-black/40 px-2 py-[2px] rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
