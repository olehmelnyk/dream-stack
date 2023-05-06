import {
  CollapsibleContent,
  CollapsibleTrigger,
  Collapsible as ShadcnCollapsible,
} from "~/shadcn/components/collapsible";

export interface CollapsibleProps {
  trigger: React.ReactNode;
  content: React.ReactNode;
}

export const Collapsible = ({
  trigger,
  content,
  ...props
}: CollapsibleProps) => {
  return (
    <ShadcnCollapsible {...props}>
      <CollapsibleTrigger>{trigger}</CollapsibleTrigger>
      <CollapsibleContent>{content}</CollapsibleContent>
    </ShadcnCollapsible>
  );
};

export default Collapsible;
