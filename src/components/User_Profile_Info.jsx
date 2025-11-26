import Profile_IMG from "../assets/me.png";

export function User_Profile_Info() {
  return (
    <div className="flex items-center gap-4 sm:gap-6 p-4">
      <div className="rounded-full bg-[linear-gradient(45deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5)]">
        <img
          src={Profile_IMG}
          alt="profile picture"
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full object-cover  border-1 border-[#4c2773] p-1"
        />
      </div>

      <div className="flex flex-col justify-center">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-left mb-1">
          I_am_Zizipho_Kakaza🌻💜
        </h2>

        <div className="flex gap-4 sm:gap-6 md:gap-10">
          <div className="flex items-center gap-1">
            <span className="font-semibold text-sm sm:text-base">12</span>
            <span className="text-gray-600 text-xs sm:text-sm">Projects</span>
          </div>

          <div className="flex items-center gap-1">
            <span className="font-semibold text-sm sm:text-base">2</span>
            <span className="text-gray-600 text-xs sm:text-sm">
              Certifications
            </span>
          </div>

          <div className="flex items-center gap-1">
            <span className="font-semibold text-sm sm:text-base">1</span>
            <span className="text-gray-600 text-xs sm:text-sm">Year(s)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
