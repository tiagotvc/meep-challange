import { Container } from "./styles";

export type SectionContainerProps = {
  children: React.ReactNode;
};

export const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
}: SectionContainerProps) => {
  return <Container>{children}</Container>;
};
