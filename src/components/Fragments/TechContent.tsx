interface TechContentProps {
  logo: string;
  logoAlt: string;
  title: string;
  subtitle: string;
}

const TechContent: React.FC<TechContentProps> = ({
  logo,
  logoAlt,
  title,
  subtitle,
}) => {
  return (
    <div className="flex items-center gap-3 sm:gap-6 p-4 sm:p-6">
      <img src={logo} alt={logoAlt} className="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
      <div className="text-left">
        <h3 className="font-bold text-base sm:text-xl text-black">{title}</h3>
        <p className="text-sm sm:text-base text-black-lighter font-semibold">{subtitle}</p>
      </div>
    </div>
  );
};

export default TechContent;
