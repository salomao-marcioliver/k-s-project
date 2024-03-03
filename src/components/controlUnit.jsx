import styled from "styled-components";

const ControlUnitStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const H1Styled = styled.h1`
  font-size: 1.8rem;
  margin: 0;
`;

const H2Styled = styled.h2`
  font-size: 1rem;
`;


const ControlUnit = () => {
  return (
    <ControlUnitStyled>
      <H1Styled>Unidade de Controle</H1Styled>
      <H2Styled>Registro de Microinstruções</H2Styled>

    </ControlUnitStyled>
  );
}

export default ControlUnit
