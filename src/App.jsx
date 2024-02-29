import './App.css';
import ControlUnit from './components/controlUnit';
import DataRoute from './components/dataRoute';
import MainMemory from './components/mainMemory';
import styled from 'styled-components';





// Styled component para o layout da página
const PageLayout = styled.div`
  display: grid;
  grid-template-areas:
    'controlUnit dataRoute'
    'mainMemory mainMemory'; /* Define o layout da grade */
  grid-template-columns: 1fr 1fr; /* Divide a grade em duas colunas */
  grid-template-rows: auto 1fr; /* A primeira linha é automática, a segunda ocupa o restante */
  height: 100vh; /* Define a altura da página como 100% da viewport */
`;

// Componente principal que renderiza a página
function App() {
  return (
    <PageLayout>
      <ControlUnit>
        {/* Componente ControlUnit aqui */}
      </ControlUnit>
      <DataRoute>
        {/* Componente DataRoute aqui */}
      </DataRoute>
      <MainMemory>
        {/* Componente MainMemory aqui */}
      </MainMemory>
    </PageLayout>
  );
}

export default App;
