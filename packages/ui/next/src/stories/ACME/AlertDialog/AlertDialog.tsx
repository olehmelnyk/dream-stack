import { Info } from "lucide-react";

import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialog as ShadcnAlertDialog,
} from "~/shadcn/components/alert-dialog";

export type AlertDialogType = {
  title: React.ReactNode;
  description: React.ReactNode;
  trigger: React.ReactNode;
  cancel: React.ReactNode;
  action: React.ReactNode;
};

export const AlertDialog = ({
  title,
  description,
  trigger,
  cancel,
  action,
}: AlertDialogType) => {
  return (
    <ShadcnAlertDialog>
      <AlertDialogTrigger>{trigger}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{cancel}</AlertDialogCancel>
          <AlertDialogAction>{action}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </ShadcnAlertDialog>
  );
};

AlertDialog.props = {
  icon: Info,
};

export default AlertDialog;
