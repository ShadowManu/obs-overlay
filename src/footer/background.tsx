import styled from "styled-components";
import background from "./background.png";

const Background = styled.img.attrs({ src: background })`
  position: absolute;
  bottom: 0;
  z-index: -1;

  width: 100%;
  height: 86px;
  overflow: hidden;
`;

export default Background;
