import React from 'react';
import { getConfig } from 'app-config';

const App: React.FC = () => {
  const config = getConfig();

  return (
    <div style={{ backgroundColor: config.primary, color: config.secondary }}>
      <h1>Hello, Vite + React!</h1>
      <p>Primary Color: {config.primary}</p>
      <p>Secondary Color: {config.secondary}</p>
    </div>
  );
};

export default App;
