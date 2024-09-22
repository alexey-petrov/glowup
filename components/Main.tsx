import React, { FC, ReactNode } from "react";

const Main: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <main
      className={`flex-1 flex flex-col className="p4 sm:p-8 ${className ?? ""}`}
    >
      {children}
    </main>
  );
};

export default Main;
