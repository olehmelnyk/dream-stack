import { type VariantProps } from "class-variance-authority";
import { Loader2, type LucideIcon } from "lucide-react";

import {
  Button as ShadcnButton,
  type buttonVariants,
} from "~/shadcn/components/button";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  label?: string;
  startIcon?: LucideIcon;
  endIcon?: LucideIcon;
}

export const Button = ({
  variant,
  isLoading,
  disabled,
  label,
  startIcon: StartIcon,
  endIcon: EndIcon,
  ...props
}: ButtonProps) => {
  return (
    <ShadcnButton
      {...props}
      disabled={isLoading || disabled}
      variant={variant}
      className="flex gap-1.5"
    >
      {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
      {!isLoading && StartIcon && <StartIcon className="h-4 w-4" />}
      {label}
      {!isLoading && EndIcon && <EndIcon className="h-4 w-4" />}
    </ShadcnButton>
  );
};
