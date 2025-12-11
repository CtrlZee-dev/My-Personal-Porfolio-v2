import GithubBtn_IMG from "../assets/github.png";
import LinkedInBtn_IMG from "../assets/linkedIn.png";
import EmailBtn_IMG from "../assets/email.png";

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
          {[
            {
              img: GithubBtn_IMG,
              alt: "github",
              link: "https://github.com/CtrlZee-dev",
            },
            {
              img: LinkedInBtn_IMG,
              alt: "linkedin",
              link: "https://linkedin.com/in/zizipho-kakaza-796347222",
            },
            {
              img: EmailBtn_IMG,
              alt: "email",
              link: "mailto:ziziphokakaza09@gmail.com",
            },
          ].map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 rounded-lg px-8 py-2 border-[#4c2773] hover:bg-[#8c57c5]"
            >
              <img
                src={item.img}
                alt={item.alt}
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
