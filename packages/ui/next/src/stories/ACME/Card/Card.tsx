import {
  CardContent,
  CardFooter,
  CardHeader,
  Card as ShadcnCard,
} from "~/shadcn/components/card";

export interface CardProps {
  header?: React.ReactNode;
  content?: React.ReactNode;
  footer?: React.ReactNode;
}

export const Card = ({ header, content, footer }: CardProps) => {
  return (
    <ShadcnCard>
      {header && <CardHeader>{header}</CardHeader>}
      {content && <CardContent>{content}</CardContent>}
      {footer && <CardFooter>{footer}</CardFooter>}
    </ShadcnCard>
  );
};

export default Card;
