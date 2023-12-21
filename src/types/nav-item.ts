export interface NavItemProps {
  isExpanded: boolean;
  isActive: boolean;
  organization: Organization;
  onExpand: (id: string) => void;
}

export type Organization = {
  id: string;
  slug: string;
  imageUrl: string;
  name: string;
};
