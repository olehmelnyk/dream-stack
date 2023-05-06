import {
  HoverCardContent,
  HoverCardTrigger,
  HoverCard as ShadcnHoverCard,
} from "~/shadcn/components/hover-card";

export interface HoverCardProps {
  trigger: React.ReactNode;
  content: React.ReactNode;
}

export const HoverCard = ({ trigger, content }: HoverCardProps) => {
  return (
    <ShadcnHoverCard>
      <HoverCardTrigger>{trigger}</HoverCardTrigger>
      <HoverCardContent>{content}</HoverCardContent>
    </ShadcnHoverCard>
  );
};

export default HoverCard;
