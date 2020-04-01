import React from 'react';
import './App.css';
import FlowComponent from './FlowComponent';
import TypeScriptComponent from './TypeScriptComponent';

function App() {
  return (
    <div className="App">
      <FlowComponent>Flow Component</FlowComponent>
      <TypeScriptComponent>TypeScript Component</TypeScriptComponent>
    </div>
  );
}

export default App;
