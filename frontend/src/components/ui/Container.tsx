import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-3 sm:px-4 lg:px-6 ${className}`}
    >
      {children}
    </div>
  );
}