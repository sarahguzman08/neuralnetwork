import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import * as tf from '@tensorflow/tfjs';

const NetworkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #f5f5f5;
  min-height: 400px;
  position: relative;
`;

const NetworkVisualization = () => {
  // Initialize neural network with 4 inputs, 5 hidden nodes, and 1 output
  const model = tf.sequential();
  model.add(tf.layers.dense({inputShape: [4], units: 5, activation: 'relu'}));
  model.add(tf.layers.dense({units: 1, activation: 'sigmoid'}));

  // Generate random weights for visualization (in real app, these would come from the model)
  const generateWeights = () => {
    const weights = [];
    // Input to hidden layer weights
    for (let i = 0; i < 4; i++) {
      weights.push([]);
      for (let j = 0; j < 5; j++) {
        weights[i].push((Math.random() - 0.5).toFixed(2));
      }
    }
    // Hidden to output layer weights
    weights.push([]);
    for (let i = 0; i < 5; i++) {
      weights[4].push((Math.random() - 0.5).toFixed(2));
    }
    return weights;
  };

  const weights = generateWeights();

  return (
    <NetworkContainer>
      <h2>Neural Network Architecture</h2>
      <svg width="400" height="300">
        {/* Input Layer */}
        <g transform="translate(50, 100)">
          <circle r="10" fill="#4CAF50" />
          <text x="-30" y="0" dy="0.32em">Vegetation</text>
        </g>
        <g transform="translate(50, 150)">
          <circle r="10" fill="#4CAF50" />
          <text x="-30" y="0" dy="0.32em">Temperature</text>
        </g>
        <g transform="translate(50, 200)">
          <circle r="10" fill="#4CAF50" />
          <text x="-30" y="0" dy="0.32em">Rainfall</text>
        </g>
        <g transform="translate(50, 250)">
          <circle r="10" fill="#4CAF50" />
          <text x="-30" y="0" dy="0.32em">Human Activity</text>
        </g>

        {/* Hidden Layer */}
        <g transform="translate(200, 75)">
          <circle r="10" fill="#2196F3" />
        </g>
        <g transform="translate(200, 125)">
          <circle r="10" fill="#2196F3" />
        </g>
        <g transform="translate(200, 175)">
          <circle r="10" fill="#2196F3" />
        </g>
        <g transform="translate(200, 225)">
          <circle r="10" fill="#2196F3" />
        </g>
        <g transform="translate(200, 275)">
          <circle r="10" fill="#2196F3" />
        </g>

        {/* Output Layer */}
        <g transform="translate(350, 150)">
          <circle r="10" fill="#FF9800" />
          <text x="20" y="0" dy="0.32em">Population</text>
        </g>

        {/* Connections with hover */}
        {weights.slice(0, 4).map((weightRow, i) => (
          weightRow.map((weight, j) => (
            <line
              key={`i-${i}-h-${j}`}
              x1="60"
              y1={`${100 + i * 50}`}
              x2="190"
              y2={`${75 + j * 50}`}
              stroke="#333"
              strokeWidth="1"
              onMouseEnter={(e) => {
                e.target.setAttribute('stroke', '#FF0000');
                e.target.setAttribute('strokeWidth', '2');
              }}
              onMouseLeave={(e) => {
                e.target.setAttribute('stroke', '#333');
                e.target.setAttribute('strokeWidth', '1');
              }}
              title={`Weight: ${weight}`}
            />
          ))
        ))}

        {/* Hidden to Output connections */}
        {weights[4].map((weight, j) => (
          <line
            key={`h-${j}-o`}
            x1="210"
            y1={`${75 + j * 50}`}
            x2="340"
            y2="150"
            stroke="#333"
            strokeWidth="1"
            onMouseEnter={(e) => {
              e.target.setAttribute('stroke', '#FF0000');
              e.target.setAttribute('strokeWidth', '2');
            }}
            onMouseLeave={(e) => {
              e.target.setAttribute('stroke', '#333');
              e.target.setAttribute('strokeWidth', '1');
            }}
            title={`Weight: ${weight}`}
          />
        ))}
      </svg>
    </NetworkContainer>
  );
};

export default NetworkVisualization;