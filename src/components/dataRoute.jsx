import styled from "styled-components";

const DataRouteStyled = styled.div`
  flex: 1; /* Define a flexibilidade do componente */
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const H1Styled = styled.h1`
  font-size: 1.8rem;
  margin: 0;
`;


const DataRoute = () => {
  return (
    <DataRouteStyled>
      <H1Styled>Rota de Dados</H1Styled>
    </DataRouteStyled>
  );
}

export default DataRoute;
