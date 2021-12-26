import styled from "styled-components";

const Container = styled.div<{ reverse?: boolean }>`
  width: 200px;

  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  justify-content: flex-start;
  align-items: center;

  overflow: hidden;
`;

const Icon = styled.img``;

const Value = styled.div`
  color: white;
  font-size: 16px;
  filter: drop-shadow(0px 0px 1px white);
`;

interface Props {
  value: string;
  icon?: string;
  reverse?: boolean;
}

const FooterSide: React.FC<Props> = ({ value, icon, reverse }) => {
  return (
    <Container reverse={reverse}>
      {!!icon && <Icon src={icon} />}
      <Value>{value}</Value>
    </Container>
  );
};

export default FooterSide;
