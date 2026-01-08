import React, { forwardRef } from "react";

type IconType = React.ReactNode | string;
type IconPosition = "left" | "right";

type CommonProps = {
  children: React.ReactNode;
  className?: string;
  icon?: IconType;
  iconPosition?: IconPosition;
  onAction?: () => void;
};

type ButtonOnlyProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
  };

type AnchorOnlyProps = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "type" | "onClick"> & {
    as: "a";
    href: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  };

export type ButtonProps = ButtonOnlyProps | AnchorOnlyProps;

const baseClass =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wider transition duration-150 ease-in-out cursor-pointer";

function renderIcon(icon?: IconType) {
  if (!icon) return null;

  if (typeof icon === "string") {
    return (
      <img
        src={icon}
        alt=""
        aria-hidden="true"
        className="h-5 w-5 object-contain"
      />
    );
  }

  return icon;
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      className = "",
      icon,
      iconPosition = "left",
      onAction,
    } = props;

    const iconEl = renderIcon(icon);

    if (props.as === "a") {
      const { as, href, target, rel, onClick, ...rest } = props;

      const handleAnchorClick: React.MouseEventHandler<HTMLAnchorElement> = (
        e
      ) => {
        onClick?.(e);
        if (e.defaultPrevented) return;
        onAction?.();
      };

      return (
        <a
          href={href}
          target={target}
          rel={rel}
          {...rest}
          onClick={handleAnchorClick}
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={`${baseClass} ${className}`}
        >
          {iconEl && iconPosition === "left" && (
            <span className="inline-flex items-center">{iconEl}</span>
          )}

          {children}

          {iconEl && iconPosition === "right" && (
            <span className="inline-flex items-center">{iconEl}</span>
          )}
        </a>
      );
    }

    const { as, type = "button", onClick, disabled, ...rest } = props;

    const handleButtonClick: React.MouseEventHandler<HTMLButtonElement> = (
      e
    ) => {
      onClick?.(e);
      if (e.defaultPrevented) return;
      onAction?.();
    };

    return (
      <button
        type={type}
        {...rest}
        disabled={disabled}
        onClick={handleButtonClick}
        ref={ref as React.Ref<HTMLButtonElement>}
        className={`${baseClass} ${
          disabled ? "opacity-60 cursor-not-allowed" : ""
        } ${className}`}
      >
        {iconEl && iconPosition === "left" && (
          <span className="inline-flex items-center">{iconEl}</span>
        )}

        {children}

        {iconEl && iconPosition === "right" && (
          <span className="inline-flex items-center">{iconEl}</span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
