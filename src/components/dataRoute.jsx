import styled from "styled-components";
import teste from '../assets/images/teste.png';

const DataRouteStyled = styled.div`
  flex: 1; /* Define a flexibilidade do componente */
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const BusAdressStyled = styled.div`
  display: flex;
  flex-direction: row;

`;

const H1Styled = styled.h1`
  font-size: 1.8rem;
  margin: 0;
`;

const Teste1Styled = styled.img`
  width: 120px;
  height: 100px;
`;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
`


const DataRoute = () => {
  return (
    <DataRouteStyled>
      <H1Styled>Rota de Dados</H1Styled>
      <BusAdressStyled>
        <Teste1Styled src={teste} alt="" />
        <FormStyled action="">
          <label htmlFor="">R0</label>
          <input type="text" />
          <label htmlFor="">R1</label>
          <input type="text" />
          <label htmlFor="">R2</label>
          <input type="text" />
        </FormStyled>
        <Teste1Styled src={teste} alt="" />
        <Teste1Styled src={teste} alt="" />
      </BusAdressStyled>

    </DataRouteStyled>
  );
}

export default DataRoute;
