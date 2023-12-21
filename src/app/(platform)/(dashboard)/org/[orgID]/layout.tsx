import { OrgControl } from "./_components/org-control";
import type { LayoutProps } from "@/types/layout";

const OrgIDLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <OrgControl />
      {children}
    </>
  );
};

export default OrgIDLayout;
