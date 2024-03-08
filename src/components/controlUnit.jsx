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
      <div>
        <button>Iniciar</button>
        <button>Pausar</button>
        <form action="">
          <label htmlFor="">Velocidade da Animação</label>
          <select name="" id="">
            <option value="">Lento</option>
            <option value="" selected>Normal</option>
            <option value="">Rápido</option>
          </select>
        </form>
        <table>
          <tbody>
            <tr>
              <td>Endereço A</td>
              <td> 0 0 </td>
            </tr>
            <tr>
              <td>Endereço B</td>
              <td> 0 0 </td>
            </tr>
            <tr>
              <td>Endereço C</td>
              <td> 0 0 </td>
            </tr>
            <tr>
              <td>Operação da Unidade Lógica Aritmética</td>
              <td> 0 0 </td>
            </tr>
            <tr>
              <td>Posição das Chaves</td>
              <td> 0 0 </td>
            </tr>
            <tr>
              <td>Endereço de Leitura/Escrita</td>
              <td> 0 0 </td>
            </tr>

          </tbody>
        </table>
      </div>

    </ControlUnitStyled >
  );
}

export default ControlUnit
