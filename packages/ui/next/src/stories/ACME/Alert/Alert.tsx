import { type VariantProps } from "class-variance-authority";
import { type LucideIcon } from "lucide-react";

import {
  AlertDescription,
  AlertTitle,
  Alert as ShadcnAlert,
  type alertVariants,
} from "~/shadcn/components/alert";

export interface AlertProps extends VariantProps<typeof alertVariants> {
  icon: LucideIcon;
  title: React.ReactNode;
  description: React.ReactNode;
}

export const Alert = ({
  icon: Icon,
  variant,
  title,
  description,
}: AlertProps) => {
  return (
    <ShadcnAlert variant={variant}>
      {Icon && <Icon className="h-4 w-4" />}
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </ShadcnAlert>
  );
};

export default Alert;
