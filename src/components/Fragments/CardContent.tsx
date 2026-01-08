interface CardContentProps {
  number?: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  titleColor?: string;
  descriptionColor?: string;
  fadeColor?: string;
}

const CardContent: React.FC<CardContentProps> = ({
  number,
  title,
  description,
  image,
  imageAlt,
  titleColor = "text-black",
  descriptionColor = "text-black-lighter",
  fadeColor = "from-grey-lighter",
}) => {
  return (
    <div className="flex flex-col h-full p-6 pb-0">
      <div className="flex items-start gap-3 mb-2 text-start">
        {number && (
          <div className="w-6 h-6 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0 bg-primary">
            {number}
          </div>
        )}

        <div>
          <h3 className={`text-lg font-bold ${titleColor} mb-4`}>{title}</h3>
          <p className={`text-sm ${descriptionColor}`}>{description}</p>
        </div>
      </div>
      <div className="my-auto overflow-hidden group relative -mx-6">
        <div
          className={`absolute bottom-0 left-0 w-full h-1/4 bg-linear-to-t ${fadeColor} to-transparent z-10`}
        />
        <img
          src={image}
          alt={imageAlt}
          className="
          max-w-full w-full h-auto object-contain
          transform translate-x-[6.5%] translate-y-[4%]
          sm:translate-y-[20%]
          sm:group-hover:translate-x-[6.5%] sm:group-hover:translate-y-[4%]
          transition-transform duration-500 ease-in-out
          relative z-0
        "
        />
      </div>
    </div>
  );
};

export default CardContent;
