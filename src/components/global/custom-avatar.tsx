import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface AvatarProps {
src?: string; 
fallback?: string; 
className?: string
}
export const CustomAvatar = ({ src, fallback, className }: AvatarProps) => {
  return (
    <Avatar className={className}>
      <AvatarImage src={src} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
};
