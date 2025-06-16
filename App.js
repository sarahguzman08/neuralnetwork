import React from 'react';
import styled from 'styled-components';
import { PredictionProvider } from './context/PredictionContext';
import NetworkVisualization from './components/NetworkVisualization';
import HabitatInput from './components/HabitatInput';
import PredictionOutput from './components/PredictionOutput';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

function App() {
  return (
    <PredictionProvider>
      <Container>
        <NetworkVisualization />
        <HabitatInput />
        <PredictionOutput />
      </Container>
    </PredictionProvider>
  );
}

export default App;

