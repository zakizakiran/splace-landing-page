import React from "react";
import Card from "../Elements/Card";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const ChevronIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`transition-transform duration-300 ${
      isOpen ? "rotate-180" : ""
    }`}
  >
    <path
      d="M5 7.5L10 12.5L15 7.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen,
  onToggle,
}) => {
  return (
    <Card className="bg-white border-grey">
      <button
        type="button"
        onClick={onToggle}
        className="w-full p-6 flex items-start justify-between gap-4 text-left"
        aria-expanded={isOpen}
      >
        <h3 className="font-bold text-base sm:text-lg text-black flex-1">
          {question}
        </h3>

        <div
          className={`flex-shrink-0 transition-colors ${
            isOpen ? "text-primary" : "text-grey"
          }`}
        >
          <ChevronIcon isOpen={isOpen} />
        </div>
      </button>

      <div
        className={`grid transition-all duration-300 ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6">
            <p className="text-sm sm:text-base text-black-lighter leading-relaxed">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default FAQItem;
