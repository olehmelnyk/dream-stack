import {
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  ContextMenu as ShadcnContextMenu,
} from "~/shadcn/components/context-menu";

export interface ContextMenuProps {
  trigger: React.ReactNode;
  menuItems: React.ReactNode[];
}

export const ContextMenu = ({ trigger, menuItems }: ContextMenuProps) => {
  return (
    <ShadcnContextMenu>
      <ContextMenuTrigger>{trigger}</ContextMenuTrigger>
      <ContextMenuContent>
        {menuItems.map((item, index) => (
          <ContextMenuItem key={index}>{item}</ContextMenuItem>
        ))}
      </ContextMenuContent>
    </ShadcnContextMenu>
  );
};

export default ContextMenu;
