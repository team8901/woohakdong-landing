import { useTheme } from "@/components/theme-provider";
import { CONTACT_EMAIL } from "@/lib/constants";
import { Button } from "./ui/button";

export const CenteredHero = () => {
  const { theme } = useTheme();

  const handleInquiryClick = () => {
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=[우학동 도입 문의]`;
  };

  const handleExperienceClick = () => {
    window.open("https://www.woohakdong.com", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="container grid place-items-center py-20 md:py-32 gap-10">
      <div className="text-center space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1
            className={`bg-gradient-to-br text-transparent bg-clip-text break-keep leading-[3.5rem] ${
              theme === "dark"
                ? "from-white  to-white/80"
                : "from-black  to-black/80"
            }`}
          >
            동아리 관리 자동화 SaaS
          </h1>
        </main>

        <p
          className={`text-xl md:w-10/12 mx-auto ${
            theme === "dark" ? "text-white/80" : "text-black/80"
          }`}
        >
          귀찮았던 동아리 관리, 저희가 대신 해 드릴게요!
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4 md:px-14">
          <Button
            className="w-full h-[56px] md:w-1/3 font-bold text-lg"
            onClick={handleInquiryClick}
          >
            도입문의
          </Button>
          <Button
            className="w-full h-[56px] md:w-1/2 font-bold text-lg bg-black/80 border border-white/30 text-white hover:bg-gray-900"
            onClick={handleExperienceClick}
          >
            무료 체험하기
          </Button>
        </div>
      </div>

      {/* Hero cards sections */}
      {/* <div className="z-10">
        <HeroCards />
      </div> */}

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
