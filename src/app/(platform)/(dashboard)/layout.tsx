import { Navbar } from "./_components/navbar";
import { LayoutProps } from "@/types/layout";

const DashboardLayout = ({ children }: LayoutProps) => {
  return (
    <div className="h-full">
      <Navbar />
      {children}
    </div>
  );
};

export default DashboardLayout;
