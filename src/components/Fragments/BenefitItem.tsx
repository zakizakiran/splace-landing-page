interface BenefitItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitItem: React.FC<BenefitItemProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex items-start gap-4">
      <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary flex items-center justify-center text-white">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-base sm:text-lg text-black mb-2">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-black-lighter leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default BenefitItem;
