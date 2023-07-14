import {
  Input as ShadcnInput,
  type InputProps as ShadcnInputProps,
} from "~/shadcn/components/input";
import { Label } from "~/shadcn/components/label";

export interface InputProps extends ShadcnInputProps {
  id: string;
  label: string;
  helperText: string;
}

export const Input = ({ label, helperText, id, ...inputProps }: InputProps) => {
  // TODO: add react-hook-form or formik support
  // TODO: add error / success text
  // TODO: add label-link (like "forgot password") and helper-right text (like character count)
  // TODO: add (?) or (i) icon with tooltip for label
  // TODO: full-width by default, allow to change to 2-col grid
  // TODO: add show password toggle
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      <ShadcnInput id={id} {...inputProps} />
      {helperText && (
        <p className="text-sm text-muted-foreground">{helperText}</p>
      )}
    </div>
  );
};

export default Input;
