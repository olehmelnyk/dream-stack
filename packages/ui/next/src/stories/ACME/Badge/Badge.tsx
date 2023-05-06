import { type VariantProps } from "class-variance-authority";

import {
  Badge as ShadcnBadge,
  type badgeVariants,
} from "~/shadcn/components/badge";

export interface BadgeProps extends VariantProps<typeof badgeVariants> {
  children: React.ReactNode;
}

export const Badge = ({ variant, children }: BadgeProps) => {
  return <ShadcnBadge variant={variant}>{children}</ShadcnBadge>;
};

Badge.props = {
  variant: "default",
};

export default Badge;
