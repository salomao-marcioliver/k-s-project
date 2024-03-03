import styled from "styled-components";

const MainMemoryStyled = styled.div`
   /* Define a flexibilidade do componente */
  display: flex;
  justify-content: center;
  height: 300px;
`;

const H1Styled = styled.h1`
  font-size: 1.8rem;
`;



const MainMemory = () => {
  return (
    <MainMemoryStyled>
      <H1Styled>Memoria Principal</H1Styled>

    </MainMemoryStyled>
  );
}

export default MainMemory;
