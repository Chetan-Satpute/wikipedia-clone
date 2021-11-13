import React, { FC } from "react";

export const PageHeader: FC = ({ children }) => {
  return (
    <div className="fixed top-0 w-full py-3 p-4 text-white bg-base14">
      {children}
    </div>
  );
};

export const PageBody: FC = ({ children }) => {
  return <div className="overflow-auto mt-14">{children}</div>;
};

const Page: FC = ({ children }) => {
  return <div className="flex-auto overflow-auto">{children}</div>;
};

export default Page;
