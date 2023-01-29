import { Container } from "./styles";

export type SectionContainerProps = {
  children: React.ReactNode;
};

export const SectionContainer = ({ children }: SectionContainerProps) => {
  return <Container>{children}</Container>;
};
