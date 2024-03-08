import './App.css';
import ControlUnit from './components/ControlUnit';
import DataRoute from './components/DataRoute';
import MainMemory from './components/MainMemory';

import styled from 'styled-components';

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #635f7d;
  height: 100%;
  color: #fff;

`;

const TopRow = styled.div`
  display: flex;
  height: 500px;
`;

function App() {
  return (
    <PageLayout>
      <TopRow>
        <ControlUnit />
        <DataRoute />
      </TopRow>
      <MainMemory />
    </PageLayout>
  );
}

export default App;
