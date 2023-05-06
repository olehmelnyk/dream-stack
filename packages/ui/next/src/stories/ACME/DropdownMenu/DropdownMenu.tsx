import React from "react";

import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenu as ShadcnDropdownMenu,
} from "~/shadcn/components/dropdown-menu";

export interface DropdownMenuProps {
  trigger: React.ReactNode;
  label: React.ReactNode;
  items: React.ReactNode[];
}

export const DropdownMenu = ({ trigger, label, items }: DropdownMenuProps) => {
  return (
    <ShadcnDropdownMenu>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{label}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {items.map((item, index) => (
          <DropdownMenuItem key={index}>{item}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </ShadcnDropdownMenu>
  );
};

export default DropdownMenu;
