import { ClerkProvider } from "@clerk/nextjs";

import { LayoutProps } from "@/types/layout";

const PlatformLayout = ({ children }: LayoutProps) => {
  return <ClerkProvider>{children}</ClerkProvider>;
};

export default PlatformLayout;
