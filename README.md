# Neural Network Population Prediction Visualizer

A web application that demonstrates how a neural network processes habitat variables to predict animal population changes. The application provides a visual representation of the neural network architecture and its prediction process.

## Features

1. **Neural Network Visualization**
   - Interactive visualization of a neural network with 4 input nodes, 5 hidden nodes, and 1 output node
   - Hover over connections to see weight values
   - Color-coded nodes for different layers (green for input, blue for hidden, orange for output)

2. **Habitat Input Panel**
   - Input controls for four habitat variables:
     - Vegetation Density (0-100)
     - Temperature (°C) (-50 to 50)
     - Rainfall (mm) (0-1000)
     - Human Activity (0-100)
   - Real-time updates to the neural network

3. **Prediction Output**
   - Population change prediction based on habitat variables
   - Visual trend line showing the magnitude of change
   - Color-coded predictions:
     - Green: Population Increase
     - Red: Population Decrease
     - Blue: Stable Population

## How It Works

1. **Input Processing**
   - Habitat variables are normalized and fed into the neural network
   - Each variable affects the prediction differently:
     - Vegetation: Positive impact (0.4 weight)
     - Temperature: Moderate impact (0.2 weight)
     - Rainfall: Positive impact (0.3 weight)
     - Human Activity: Negative impact (-0.5 weight)

2. **Prediction Calculation**
   - The neural network combines all inputs to calculate a population trend
   - The trend is displayed as a percentage change
   - Visualizations update in real-time as inputs change

