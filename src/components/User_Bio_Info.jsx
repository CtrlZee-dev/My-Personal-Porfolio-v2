import github from "../assets/github.png";
import linkedIn from "../assets/linkedIn.png";
import email from "../assets/email.png";

export function User_Bio_Info() {
  return (
    <>
      <div className="flex  flex-col gap-4 sm:gap-6 p-4 ">
        <div className="text-left text-sm mb-2 md:text-base lg:text-lg xl:text-xl leading-relaxed">
          <p>🚀 Full-stack dev (React • C# • .NET • Python)</p>
          <p>☁️ Salesforce Admin + Agentforce Certified</p>
          <p>🛠️ Writes code. Builds systems.</p>
          <p>🌍 WCAG-friendly. Accessibility always.</p>
          <p>💛 Inclusive design &gt; everything</p>
          <p>👩🏽‍💻 I make tech feel human-friendly</p>
          <p>🐳 Pretends Docker isn’t confusing sometimes.</p>
          <p>⚡ Automating the boring stuff so humans don’t suffer.</p>
        </div>
        <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8">
          <img
            src={github}
            alt="github"
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
          />
          <img
            src={linkedIn}
            alt="github"
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
          />
          <img
            src={email}
            alt="github"
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
          />
        </div>
      </div>
    </>
  );
}
