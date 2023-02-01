import { SectionContainer } from "../SectionContainer";
import { Container } from "./styles";

export type SectionBackgroundProps = {
  children: React.ReactNode;
  sectionId?: string;
};

export const SectionBackground = ({
  children,
  sectionId = "",
}: SectionBackgroundProps) => {
  return (
    <Container id={sectionId}>
      <SectionContainer>{children}</SectionContainer>
    </Container>
  );
};
