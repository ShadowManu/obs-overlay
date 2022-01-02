import styled from "styled-components";
import FooterSection from "../shared/footer-section";
import FooterSide from "../shared/footer-side";

import Background from "./background";

import about from "./about.png";
import youtube from "./youtube.png";
import { Footer as FooterData } from "../core/types";

const Container = styled.div`
  position: absolute;
  color: white;

  bottom: 0;
  left: 0;
  width: 100%;
  height: 48px;

  display: flex;
  flex-direction: row;
`;

const Center = styled.div`
  margin: 0 50px;
  flex: 1 1 0;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: stretch;
`;

const ICONS: Partial<Record<string, string>> = {
  youtube: youtube,
  about: about,
};

interface Props {
  data: FooterData;
}

const Footer: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      <Background />
      <FooterSide
        reverse
        value={data.left.value}
        icon={data.left.icon && ICONS[data.left.icon]}
      />
      <Center>
        {/* Activity */}
        <FooterSection
          title={data.sections.current.title}
          value={data.sections.current.value}
        />
        {/* Rotation */}
        {data.sections.rotation.map((section, i) => (
          <FooterSection key={i} {...section} />
        ))}
      </Center>
      <FooterSide
        value={data.right.value}
        icon={data.right.icon && ICONS[data.right.icon]}
      />
    </Container>
  );
};

export default Footer;
