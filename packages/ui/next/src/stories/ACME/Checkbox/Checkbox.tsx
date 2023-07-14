import { Checkbox as ShadcnCheckbox } from "~/shadcn/components/checkbox";

export interface CheckboxProps {
  id: string;
  label: string;
  description?: string;
}

export const Checkbox = ({
  id,
  label,
  description,
  ...props
}: CheckboxProps) => {
  return (
    <div className="items-top flex space-x-2">
      <ShadcnCheckbox id={id} {...props} />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor={id}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
        </label>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
    </div>
  );
};

export default Checkbox;
