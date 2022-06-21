import { ReactNode } from "react";
import { Navbar } from "../components/molecules/Navbar/Navbar";

interface MainTemplateProps {
  children: ReactNode;
}

export const MainTemplate = ({ children }: MainTemplateProps) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};
