import { Title } from "./styles";

export interface HeadingProps {
  children: React.ReactNode;
  titleColor?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "small" | "medium" | "big";
  uppercase?: boolean;
}

export const Heading: React.FC<HeadingProps> = ({
  children,
  titleColor = "black",
  as = "h1",
  size = "big",
  uppercase = false,
}: HeadingProps) => {
  return (
    <Title titleColor={titleColor} as={as} size={size} uppercase={uppercase}>
      {children}
    </Title>
  );
};
