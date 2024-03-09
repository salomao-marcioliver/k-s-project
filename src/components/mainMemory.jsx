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
  margin: 0 auto;
  width: 300px;
  padding: 20px;
  background-color: #3648A5;
  border-radius: 10px;
  margin-bottom: 30px;
`;

const LabelStyled = styled.label`
  margin-right: 10px;
`;

const InputStyled = styled.input`
  border-radius: 5px;
  border: none;
  width: 100%;
  height: 30px;
`;

const InputFieldStyled = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ButtonStyled = styled.button`
  margin-top: 40px;
  background-color: #C7922E;
  border: none;
  color: #FFF;
  width: 200px;
  height: 40px;
  margin: 20px auto 0 auto;
  border-radius: 10px;
  cursor: pointer;
`;



const MainMemory = () => {
  return (
    <MainMemoryStyled>
      <H1Styled>Memoria Principal</H1Styled>
      <FormStyled action="">
        <InputFieldStyled>
          <LabelStyled htmlFor="">0</LabelStyled>
          <InputStyled type="text" />
        </InputFieldStyled>
        <InputFieldStyled>
          <LabelStyled htmlFor="">1</LabelStyled>
          <InputStyled type="text" />
        </InputFieldStyled>
        <InputFieldStyled>
          <LabelStyled htmlFor="">2</LabelStyled>
          <InputStyled type="text" />
        </InputFieldStyled>
        <ButtonStyled>Adicionar Nova Instrução</ButtonStyled>
      </FormStyled>
    </MainMemoryStyled>
  );
}

export default MainMemory;
