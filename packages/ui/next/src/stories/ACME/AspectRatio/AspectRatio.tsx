import { AspectRatio as ShadcnAspectRatio } from "~/shadcn/components/aspect-ratio";

export type AspectRatioProps = {
  ratio: number;
  children: React.ReactNode;
};

export const AspectRatio = ({ ratio, children }: AspectRatioProps) => {
  return <ShadcnAspectRatio ratio={ratio}>{children}</ShadcnAspectRatio>;
};

AspectRatio.props = {
  ratio: 16 / 9,
};

export default AspectRatio;
