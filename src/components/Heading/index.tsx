import { Title } from "./styles";

export type HeadingProps = {
  children: React.ReactNode;
  titleColor?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "small" | "medium" | "big" | "huge";
  uppercase?: boolean;
};

export const Heading = ({
  children,
  titleColor = "black",
  as = "h1",
  size = "huge",
  uppercase = false,
}: HeadingProps) => {
  return (
    <Title titleColor={titleColor} as={as} size={size} uppercase={uppercase}>
      {children}
    </Title>
  );
};
