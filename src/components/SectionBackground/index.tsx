import { SectionContainer } from "../SectionContainer";
import { Container } from "./styles";

export type SectionBackgroundProps = {
  children: React.ReactNode;
  sectionId?: string;
};

export const SectionBackground: React.FC<SectionBackgroundProps> = ({
  children,
  sectionId = "",
}: SectionBackgroundProps) => {
  return (
    <Container id={sectionId}>
      <SectionContainer>{children}</SectionContainer>
    </Container>
  );
};
