type BadgesProps = {
  text: string;
};

const Badges = ({ text }: BadgesProps) => {
  return (
    <div className="text-lg bg-grey-lighter lg:text-2xl font-family-semibold font-semibold inline-block px-4 py-3 rounded-xl">
      {text}
    </div>
  );
};

export default Badges;
