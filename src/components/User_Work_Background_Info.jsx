import { useState } from "react";
import code from "../assets/code-32.png";
import projects from "../assets/projects.png";
import certifications from "../assets/grad-cap.png";
import workHistroy from "../assets/mbag.png";
import badges from "../assets/badge.png";
import { HighlightModal } from "./HighlightModal";

// Your certificate images
import certSalesforce from "../assets/Zizipho_Kakaza_Salesforce Administrator Cert.jpg";
import certAgentforce from "../assets/Zizipho_Kakaza_Salesforce Agenforce.png";

export function User_Work_Background_Info() {
  const [openModal, setOpenModal] = useState(null);
  const [techIndex, setTechIndex] = useState(0);
  const [certIndex, setCertIndex] = useState(0);
  const [workIndex, setWorkIndex] = useState(0);
  const [badgeIndex, setBadgeIndex] = useState(0);
  const handleBadgeTap = () =>
    setBadgeIndex((prev) => (prev + 1) % badgesList.length);

  const handleWorkTap = () => setWorkIndex((p) => (p + 1) % workSlides.length);

  const highlights = [
    { id: "tech", label: "Tech Stack", icon: code },
    { id: "certs", label: "Certifications", icon: certifications },
    { id: "work", label: "Work History", icon: workHistroy },
    // { id: "projects", label: "Projects", icon: projects },
    { id: "badges", label: "UpSkilling", icon: badges },
  ];

  const badgesList = [
    {
      provider: "Google Cloud",
      title: "Introduction to Generative AI",
      status: "Completed",
      color: "#4285F4",
    },
    {
      provider: "Google Cloud",
      title: "Intro to Prompt Engineering",
      status: "In Progress",
      color: "#34A853",
    },
    {
      provider: "Salesforce",
      title: "Agentforce Specialist",
      status: "Completed",
      color: "#1F8AF2",
    },
    {
      provider: "freeCodeCamp",
      title: "JavaScript Algorithms & Data Structures",
      status: "In Progress",
      color: "#0A0A23",
    },
    {
      provider: "Microsoft",
      title: "AZ-900 Azure Fundamentals",
      status: "Planned",
      color: "#0078D4",
    },
  ];

  const techSlides = [
    {
      title: "Frontend",
      subtitle: "Where UI meets ✨vibes✨.",
      color: "purple",
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Figma",
        "Canva",
      ],
    },
    {
      title: "Backend",
      subtitle: "APIs so clean they squeak.",
      color: "blue",
      items: ["C#", "Node.js", "Express", "Python", "PHP"],
    },
    {
      title: "Databases",
      subtitle: "Query queens. Index kings.",
      color: "emerald",
      items: [
        "PostgreSQL",
        "MySQL",
        "SQL Server",
        "SSMS",
        "Workbench",
        "Airtable",
      ],
    },
    {
      title: "Cloud & DevOps",
      subtitle: "Deploying like it's light work.",
      color: "rose",
      items: ["Git", "Jenkins", "AWS", "GCP", "Umbraco CMS"],
    },
    {
      title: "Collaboration",
      subtitle: "Smooth workflows. No chaos.",
      color: "gray",
      items: ["Slack", "Jira", "Notion"],
    },
  ];

  const certificates = [
    {
      img: certSalesforce,
      title: "Salesforce Admin",
      issuer: "Salesforce",
      date: "2024",
    },
    {
      img: certAgentforce,
      title: "Agentforce Specialist",
      issuer: "Salesforce",
      date: "2024",
    },
  ];

  const workSlides = [
    {
      company: "Tangent",
      role: "Full Stack Developer Trainee",
      dates: "May 2025 – Oct 2025",
      color: "from-purple-400 to-indigo-500",
      bullets: [
        "Built full-stack internal tools using C#, SQL & React",
        "Worked on bug fixes and feature enhancements",
        "Collaborated in Agile sprints & deployments",
        "Gained experience working in a real dev team",
      ],
      tags: ["C#", "React", "SQL Server", "Agile"],
    },
    {
      company: "Life Choices",
      role: "Salesforce Admin",
      dates: "Aug 2024 – May 2025",
      color: "from-rose-400 to-pink-500",
      bullets: [
        "Managed Salesforce org & user issues",
        "Built flows, automations & dashboards",
        "Earned Salesforce Admin + Agentforce certs",
        "Supported internal teams with CRM processes",
      ],
      tags: ["Salesforce", "Flows", "CRM", "Automation"],
    },
    {
      company: "BetXSoftware x GirlCode",
      role: "Tech Mentee",
      dates: "Apr 2024 – Aug 2024",
      color: "from-amber-400 to-orange-500",
      bullets: [
        "Attended monthly upskilling workshops",
        "Learned programming fundamentals",
        "Mentored by women in tech",
        "Participated in hands-on projects and challenges",
      ],
      tags: ["Mentorship", "Workshops", "HTML/CSS", "Growth"],
    },
  ];

  const handleTechTap = () =>
    setTechIndex((prev) => (prev + 1) % techSlides.length);
  const handleCertTap = () =>
    setCertIndex((prev) => (prev + 1) % certificates.length);

  return (
    <>
      {/* HIGHLIGHTS STRIP */}
      <div className="w-full overflow-x-auto">
        <div
          className="flex justify-center sm:justify-center md:justify-center 
                  items-center gap-6 sm:gap-8 md:gap-10 p-4 min-w-max mx-auto"
        >
          {highlights.map((item) => (
            <div
              key={item.id}
              onClick={() => setOpenModal(item.id)}
              className="flex flex-col justify-center items-center p-2 w-24 sm:w-28 md:w-32 cursor-pointer"
            >
              <img
                src={item.icon}
                alt={item.label}
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 
                         bg-[#e7c0df] rounded-full p-3 border border-gray-300 
                         hover:scale-105 transition-transform"
              />
              <p className="pt-3 text-sm sm:text-base text-center">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* TECH STACK MODAL */}
      <HighlightModal
        open={openModal === "tech"}
        onClose={() => setOpenModal(null)}
        title="Tech Stack 🪄"
      >
        <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mb-4">
          <div
            className="h-full bg-[#b08aba] transition-all duration-500"
            style={{ width: `${((techIndex + 1) / techSlides.length) * 100}%` }}
          />
        </div>

        <div
          className="transition-opacity duration-500 cursor-pointer"
          onClick={handleTechTap}
        >
          <h3
            className={`text-xl font-semibold text-center text-${techSlides[techIndex].color}-600`}
          >
            {techSlides[techIndex].title}
          </h3>
          <p className="text-sm text-gray-500 text-center mt-1">
            {techSlides[techIndex].subtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {techSlides[techIndex].items.map((item) => (
              <span
                key={item}
                className={`px-3 py-1 rounded-full text-sm bg-${techSlides[techIndex].color}-100 text-${techSlides[techIndex].color}-700 border border-${techSlides[techIndex].color}-200`}
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {techSlides.map((_, i) => (
              <div
                key={i}
                className={`h-2 w-2 rounded-full transition-all ${
                  i === techIndex ? " bg-[#b08aba] scale-125" : "bg-gray-400"
                }`}
              />
            ))}
          </div>

          <p className="text-xs text-gray-500 text-center mt-2">
            Tap anywhere to view next stack
          </p>
        </div>
      </HighlightModal>

      {/* CERTIFICATIONS MODAL */}
      <HighlightModal
        open={openModal === "certs"}
        onClose={() => setOpenModal(null)}
        title="Certifications 🎓"
      >
        <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mb-4">
          <div
            className="h-full  bg-[#b08aba] transition-all duration-500"
            style={{
              width: `${((certIndex + 1) / certificates.length) * 100}%`,
            }}
          />
        </div>

        <div
          className="flex flex-col items-center cursor-pointer transition-opacity duration-500"
          onClick={handleCertTap}
        >
          <img
            src={certificates[certIndex].img}
            alt={certificates[certIndex].title}
            className="max-h-96 w-auto rounded-xl shadow-lg mb-4"
          />
          <h3 className="text-lg font-semibold text-center">
            {certificates[certIndex].title}
          </h3>
          <p className="text-sm text-gray-500 text-center">
            {certificates[certIndex].issuer}
          </p>
          <p className="text-xs text-gray-400 text-center">
            {certificates[certIndex].date}
          </p>

          <div className="flex justify-center gap-2 mt-2">
            {certificates.map((_, i) => (
              <div
                key={i}
                className={`h-2 w-2 rounded-full transition-all ${
                  i === certIndex ? " bg-[#b08aba] scale-125" : "bg-gray-400"
                }`}
              />
            ))}
          </div>

          <p className="text-xs text-gray-500 mt-2">
            Tap to view next certificate
          </p>
        </div>
      </HighlightModal>

      {/* OTHER MODALS */}
      <HighlightModal
        open={openModal === "work"}
        onClose={() => setOpenModal(null)}
        title="Work History"
      >
        {/* Progress Bar */}
        <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mb-4">
          <div
            className="h-full  bg-[#b08aba] transition-all"
            style={{ width: `${((workIndex + 1) / workSlides.length) * 100}%` }}
          />
        </div>

        {/* Slide */}
        <div className="cursor-pointer transition-all" onClick={handleWorkTap}>
          <div
            className={`bg-gradient-to-br p-5 rounded-2xl text-white shadow-md ${workSlides[workIndex].color}`}
          >
            <h3 className="text-xl font-bold text-center">
              {workSlides[workIndex].company}
            </h3>
            <p className="text-sm text-center opacity-80">
              {workSlides[workIndex].role}
            </p>
            <p className="text-xs text-center mt-1 opacity-70">
              {workSlides[workIndex].dates}
            </p>

            <ul className="mt-4 space-y-1">
              {workSlides[workIndex].bullets.map((b, i) => (
                <li key={i} className="text-sm">
                  • {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {workSlides[workIndex].tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-black/10 text-black/70 text-xs"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-5">
            {workSlides.map((_, i) => (
              <div
                key={i}
                className={`h-2 w-2 rounded-full ${
                  i === workIndex ? "bg-[#b08aba]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <p className="text-xs text-center text-gray-500 mt-2">
            Tap anywhere to view next
          </p>
        </div>
      </HighlightModal>
      {/* 
      <HighlightModal
        open={openModal === "projects"}
        onClose={() => setOpenModal(null)}
        title="Projects"
      >
        <p>
          Fav project list or images here. For now just imagine they are
          here,still figuring out the styling
        </p>
      </HighlightModal> */}

      <HighlightModal
        open={openModal === "badges"}
        onClose={() => setOpenModal(null)}
        title="UpSkilling Badges"
      >
        <div onClick={handleBadgeTap} className="cursor-pointer">
          <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mb-4">
            <div
              className="h-full  bg-[#b08aba] transition-all"
              style={{
                width: `${((badgeIndex + 1) / badgesList.length) * 100}%`,
              }}
            />
          </div>

          <div className="p-6 rounded-xl shadow bg-white text-center">
            <span
              className="px-3 py-1 text-white text-xs rounded-full"
              style={{ backgroundColor: badgesList[badgeIndex].color }}
            >
              {badgesList[badgeIndex].provider}
            </span>

            <h3 className="mt-3 text-lg font-semibold">
              {badgesList[badgeIndex].title}
            </h3>

            <p className="text-xs text-gray-500">
              {badgesList[badgeIndex].status}
            </p>
          </div>
        </div>
      </HighlightModal>
    </>
  );
}
