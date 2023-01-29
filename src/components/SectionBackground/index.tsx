import { SectionContainer } from "../SectionContainer";
import { Container } from "./styles";

export type SectionBackgroundProps = {
  children: React.ReactNode;
  background?: boolean;
  sectionId?: string;
};

export const SectionBackground = ({
  children,
  background = false,
  sectionId = "",
}: SectionBackgroundProps) => {
  return (
    <Container background={background} id={sectionId}>
      <SectionContainer>{children}</SectionContainer>
    </Container>
  );
};
