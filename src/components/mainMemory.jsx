import styled from "styled-components";

const MainMemoryStyled = styled.div`
   /* Define a flexibilidade do componente */
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 300px;
`;

const H1Styled = styled.h1`
  font-size: 1.8rem;
`;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 200px;
`;



const MainMemory = () => {
  return (
    <MainMemoryStyled>
      <H1Styled>Memoria Principal</H1Styled>
      <FormStyled action="">
        <label htmlFor="">0</label>
        <input type="text" />
        <label htmlFor="">1</label>
        <input type="text" />
        <label htmlFor="">2</label>
        <input type="text" />
        <button>Adicionar Nova Instrução</button>
      </FormStyled>
    </MainMemoryStyled>
  );
}

export default MainMemory;
