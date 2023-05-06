import {
  AvatarFallback,
  AvatarImage,
  Avatar as ShadcnAvatar,
} from "~/shadcn/components/avatar";

export interface AvatarProps {
  image?: string;
  fallback: string;
}

export const Avatar = ({ image, fallback }: AvatarProps) => {
  return (
    <ShadcnAvatar>
      {image && <AvatarImage src={image} />}
      <AvatarFallback>{fallback}</AvatarFallback>
    </ShadcnAvatar>
  );
};

export default Avatar;
