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

const DivStyled = styled.div`
  width: 30%;
  heigh: 100%;
  margin: auto;
  background-color: rgb(37, 37, 231);
  border-radius: 15px;
`;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 50%;
`;

const DivButton = styled.div`
  margin-top: 20%;
`;

const MainMemory = () => {
  return (
    <MainMemoryStyled>
      <H1Styled>Memoria Principal</H1Styled>
      <DivStyled>
        <FormStyled action="">
          <label htmlFor="" style={{
            marginTop: 15}}>0</label>
          <input type="text" />
          <label htmlFor="">1</label>
          <input type="text" />
          <label htmlFor="">2</label>
          <input type="text" />
          <DivButton>
            <button style={{ 
              backgroundColor: "chocolate", 
              color: "white", 
              border: "none", 
              borderRadius: "6px",
              marginBottom: 25
              }}>Adicionar Nova Instrução</button>
          </DivButton>
        </FormStyled>
      </DivStyled>
    </MainMemoryStyled>
  );
}

export default MainMemory;
