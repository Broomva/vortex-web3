import React from "react";

interface Iprops {
  className?: string;
  children: React.ReactNode;
}
export const MaxWidthWrapper = ({ className, children }: Iprops) => {
  return <div className={`mx-auto w-full max-w-screen-xl px-2.5 md:px-20 ${className}`}>{children}</div>;
};

export default MaxWidthWrapper;
