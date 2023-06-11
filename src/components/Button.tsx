'use client';

import clsx from "clsx";

interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  children?:  React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type="submit"
      className={clsx(`
      flex justify-center rounded-md px-3 py-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 w-full bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600 text-white
      `,
      disabled && "opacity-50 cursor-default",
      )}
    >
      {children}
    </button>
  );
};

export default Button;