import styled from "styled-components";
import { useTransition, animated, config } from "react-spring";

import FooterSection from "../shared/footer-section";
import FooterSide from "../shared/footer-side";

import Background from "./background";

import about from "./about.png";
import youtube from "./youtube.png";
import {
  Footer as FooterData,
  FooterSection as FooterSectionData,
} from "../core/types";
import { useEffect, useState } from "react";

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
  overflow: hidden;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;

  & > * {
    margin-left: 30px;
    overflow: hidden;
  }
`;

const ICONS: Partial<Record<string, string>> = {
  youtube: youtube,
  about: about,
};

interface Props {
  data: FooterData;
}

const useRotation = (
  rotation: FooterSectionData[],
  interval: number
): FooterSectionData[] => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % rotation.length),
      interval
    );
    return () => clearInterval(id);
  }, [rotation, interval]);

  const ELEMENTS = 2;

  return [...Array(ELEMENTS)].map((_, i) => {
    const validIndex = (index + i) % rotation.length;
    return rotation[validIndex];
  });
};

const Footer: React.FC<Props> = ({ data }) => {
  const rotation = useRotation(data.sections.rotation, 15 * 1000);

  const transitions = useTransition(rotation, {
    from: { opacity: 0 },
    enter: { opacity: 1, marginLeft: 60, maxWidth: "30%" },
    leave: { opacity: 0, marginLeft: 0, maxWidth: "0%" },
    config: config.slow,
  });

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
        {transitions((style, section) => (
          <animated.div style={style}>
            <FooterSection {...section} />
          </animated.div>
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
