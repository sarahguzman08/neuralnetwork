import React, { useContext } from 'react';
import styled from 'styled-components';
import { PredictionContext } from '../context/PredictionContext';

const InputContainer = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #fff;
`;

const HabitatInput = () => {
  const { inputs, updateInputs, calculatePrediction } = useContext(PredictionContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateInputs(name, value);
    calculatePrediction();
  };

  return (
    <InputContainer>
      <h2>Habitat Variables</h2>
      <div className="inputs">
        <label>
          Vegetation Density:
          <input
            type="number"
            name="vegetation"
            value={inputs.vegetation}
            onChange={handleInputChange}
            min="0"
            max="100"
          />
        </label>
        <label>
          Temperature (°C):
          <input
            type="number"
            name="temperature"
            value={inputs.temperature}
            onChange={handleInputChange}
            min="-50"
            max="50"
          />
        </label>
        <label>
          Rainfall (mm):
          <input
            type="number"
            name="rainfall"
            value={inputs.rainfall}
            onChange={handleInputChange}
            min="0"
            max="1000"
          />
        </label>
        <label>
          Human Activity:
          <input
            type="number"
            name="humanActivity"
            value={inputs.humanActivity}
            onChange={handleInputChange}
            min="0"
            max="100"
          />
        </label>
      </div>
    </InputContainer>
  );
};

export default HabitatInput;
