import { OrganizationList } from "@clerk/nextjs";

export default function OrganizationPage() {
  return (
    <div className="flex items-center justify-center h-full">
      <OrganizationList
        afterSelectOrganizationUrl="/org/:id"
        afterCreateOrganizationUrl="/org/:id"
        hidePersonal
      />
    </div>
  );
}
