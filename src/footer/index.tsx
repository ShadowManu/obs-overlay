import styled from "styled-components";
import FooterSection from "../shared/footer-section";
import FooterSide from "../shared/footer-side";

import Background from "./background";
import youtube from "./youtube.png";

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

const Footer = () => (
  <Container>
    <Background />
    <FooterSide reverse value="manuelpachecodev" icon={youtube} />
    <Center>
      {/* Activity */}
      <FooterSection
        title="Current Activity"
        value="Doing a React-based custom overlay"
      />
      {/* Chat promotion */}
      <FooterSection
        title="Ask in Chat"
        value="Any technical question, or just say hello!"
      />
    </Center>
    <FooterSide value="manuelpacheco.dev" />
  </Container>
);

export default Footer;
