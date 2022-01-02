import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 8px;
`;

const Title = styled.div`
  color: #00ffae;
  font-size: 12px;
  text-transform: uppercase;
  text-overflow: clip;
  white-space: nowrap;
  filter: drop-shadow(0px 0px 2px #00ffae);
`;

const Value = styled.div`
  margin-left: 16px;
  color: white;
  font-size: 18px;
  text-overflow: clip;
  white-space: nowrap;

  overflow: hidden;

  filter: drop-shadow(0px 0px 1px white);
`;

interface Props {
  title: string;
  value: string;
  icon?: string;
}

const FooterSection: React.FC<Props> = ({ title, value }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </Container>
  );
};

export default FooterSection;
