import Badges from "../Elements/Badges";
import Card from "../Elements/Card";
import LogoUnikom from "../../assets/images/LogoUnikom.png";
import LogoCodelabs from "../../assets/images/LogoCodelabs.png";
import SectionLayout from "../Layouts/SectionLayout";

const partners = [
  { id: 1, logo: LogoUnikom, alt: "Unikom Logo" },
  { id: 2, logo: LogoCodelabs, alt: "Codelabs Logo" },
];

const PartnerSection = () => {
  return (
    <SectionLayout>
      <Badges text="Our Partner" />
      <p className="mt-4 lg:mt-8 max-w-xl md:max-w-2xl lg:max-w-3xl text-base sm:text-lg md:text-xl text-black-lighter leading-relaxed px-4">
        Trusted by educational institutions, communities, and organizations
        committed to advancing learning through technology.
      </p>

      <div className="relative w-full mt-10 lg:mt-16 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-linear-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-linear-to-l from-white to-transparent z-10 pointer-events-none"></div>
        <div className="flex animate-marquee hover:pause-marquee gap-0">
          {[...Array(6)].map((_, setIndex) =>
            partners.map((partner) => (
              <Card
                key={`set${setIndex}-${partner.id}`}
                className="flex items-center justify-center shrink-0 mx-4 py-2 min-w-50 lg:min-w-70"
              >
                <img
                  src={partner.logo}
                  alt={partner.alt}
                  className="w-36 lg:w-48 h-20 md:h-24 lg:h-28 object-contain"
                />
              </Card>
            ))
          )}
        </div>
      </div>
    </SectionLayout>
  );
};

export default PartnerSection;
