import React, { useContext } from 'react';
import styled from 'styled-components';
import { PredictionContext } from '../context/PredictionContext';

const OutputContainer = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #fff;
  min-height: 300px;
  position: relative;
`;

const PredictionDisplay = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const PredictionValue = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: ${props => props.color};
`;

const VisualizationContainer = styled.div`
  width: 100%;
  height: 200px;
  background: #f5f5f5;
  position: relative;
  border-radius: 4px;
`;

const TrendLine = styled.div`
  position: absolute;
  bottom: ${props => props.value}%;
  width: 100%;
  height: 2px;
  background: ${props => props.color};
`;

const PredictionOutput = () => {
  const { prediction } = useContext(PredictionContext);

  return (
    <OutputContainer>
      <h2>Population Prediction</h2>
      {prediction ? (
        <>
          <PredictionDisplay>
            Population will {prediction.text} by 
            <PredictionValue color={prediction.color}>
              {prediction.percentage}
            </PredictionValue>
          </PredictionDisplay>
          
          <VisualizationContainer>
            <TrendLine 
              value={prediction.value + 100}
              color={prediction.color}
            />
          </VisualizationContainer>
          
          <div className="legend">
            <div style={{ color: '#4CAF50' }}>↑ Increase</div>
            <div style={{ color: '#F44336' }}>↓ Decrease</div>
            <div style={{ color: '#2196F3' }}>→ Stable</div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </OutputContainer>
  );
};

export default PredictionOutput;