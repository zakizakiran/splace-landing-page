import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  borderColor?: string;
  backgroundColor?: string;
  borderWidth?: string;
  rounded?: string;
}

const Card = ({
  children,
  className = "",
  backgroundColor = "",
  borderColor = "border-grey",
  borderWidth = "border-1",
  rounded = "rounded-3xl",
  ...rest
}: CardProps) => {
  return (
    <div
      className={`${backgroundColor} ${borderWidth} ${borderColor} ${rounded} transition-shadow duration-200 ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Card;
