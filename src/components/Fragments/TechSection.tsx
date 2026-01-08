import Card from "../Elements/Card";
import TechContent from "./TechContent";
import FlaskLogo from "../../assets/images/Flask.png";
import PostgreLogo from "../../assets/images/Postgre.png";
import GPTLogo from "../../assets/images/GPT.png";
import AzureLogo from "../../assets/images/Azure.png";

const techStack = [
  {
    id: 1,
    logo: FlaskLogo,
    logoAlt: "Flask Logo",
    title: "Flask",
    subtitle: "AI Service Backend",
  },
  {
    id: 2,
    logo: PostgreLogo,
    logoAlt: "PostgreSQL Logo",
    title: "PostgreSQL",
    subtitle: "Data Storage",
  },
  {
    id: 3,
    logo: GPTLogo,
    logoAlt: "GPT 4o Logo",
    title: "GPT 4o",
    subtitle: "Text-embedding",
  },
  {
    id: 4,
    logo: AzureLogo,
    logoAlt: "Azure Logo",
    title: "Azure",
    subtitle: "Cloud Platform",
  },
];

const TechSection = () => {
  const topRowTech = [techStack[0], techStack[1]];
  const bottomRowTech = [techStack[2], techStack[3]];

  return (
    <div className="relative overflow-hidden mx-auto flex flex-col lg:flex-row pt-20 max-w-7xl px-6 sm:px-8 lg:px-12 items-center gap-8 lg:gap-12">
      <div className="shrink-0 lg:max-w-sm text-center lg:text-start">
        <h1 className="text-2xl font-bold leading-tight lg:text-3xl">
          Powered by Intelligent Innovation
        </h1>
        <p className="mt-4 mb-8 text-base leading-relaxed text-black-lighter font-semibold sm:text-lg md:text-xl lg:mt-8">
          Experience seamless performance through advanced{" "}
          <span className="text-primary font-bold">AI</span> and{" "}
          <span className="text-primary font-bold">modern technology</span>.
        </p>
      </div>
      <div className="flex-1 w-full overflow-hidden space-y-4">
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-linear-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-linear-to-l from-white to-transparent z-10 pointer-events-none"></div>
          <div className="flex animate-marquee-right hover:pause-marquee gap-4 lg:gap-8 lg:mb-4">
            {[...Array(12)].map((_, setIndex) =>
              topRowTech.map((tech) => (
                <Card
                  backgroundColor="border-primary"
                  key={`top-set${setIndex}-${tech.id}`}
                  className="shrink-0 min-w-60 sm:min-w-70 bg-white"
                >
                  <TechContent
                    logo={tech.logo}
                    logoAlt={tech.logoAlt}
                    title={tech.title}
                    subtitle={tech.subtitle}
                  />
                </Card>
              ))
            )}
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-linear-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-linear-to-l from-white to-transparent z-10 pointer-events-none"></div>
          <div className="flex animate-marquee-left hover:pause-marque0e gap-4 lg:gap-8">
            {[...Array(12)].map((_, setIndex) =>
              bottomRowTech.map((tech) => (
                <Card
                  borderColor="border-primary"
                  key={`bottom-set${setIndex}-${tech.id}`}
                  className="shrink-0 min-w-60 sm:min-w-70 bg-white"
                >
                  <TechContent
                    logo={tech.logo}
                    logoAlt={tech.logoAlt}
                    title={tech.title}
                    subtitle={tech.subtitle}
                  />
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechSection;
