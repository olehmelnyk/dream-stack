import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Accordion as ShadcnAccordion,
} from "~/shadcn/components/accordion";

export type AccordionProps = {
  type: "single" | "multiple";
  items: {
    id: string;
    label: React.ReactNode;
    content: React.ReactNode;
  }[];
};

export const Accordion = (props: AccordionProps) => {
  return (
    <ShadcnAccordion type={props.type} collapsible>
      {props?.items?.map((item) => (
        <AccordionItem value={item.id} key={item.id}>
          <AccordionTrigger>{item.label}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </ShadcnAccordion>
  );
};

Accordion.props = {
  type: "single",
};

export default Accordion;
