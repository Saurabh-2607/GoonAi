import { Paragraph } from "../shared/Paragraph";
import * as LucideIcons from "lucide-react";

interface ServiceProps {
  title: string;
  description: string;
  icon: string;
}

export const ServicesCard = ({ title, description, icon }: ServiceProps) => {
  const LucideIcon = (LucideIcons[icon as keyof typeof LucideIcons] as React.ElementType) || LucideIcons.HelpCircle;
  
  return (
    <div
      className="p-5 sm:p-6 lg:p-8 rounded-3xl border border-box-border bg-box-bg shadow-lg shadow-box-shadow relative overflow-hidden"
    >
      <div className="rounded-xl bg-body p-3 text-heading-1 w-max relative">
        <LucideIcon size={24}/>
      </div>
      <div className="mt-6 space-y-4 relative">
        <h2 className="text-lg md:text-xl font-semibold text-heading-2">
          {" "}
          {title}
        </h2>
        <Paragraph> {description}</Paragraph>
      </div>
    </div>
  );
};