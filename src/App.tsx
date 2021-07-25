import React from 'react';
import Home from './view/Home';

const App: React.FC = () => {
  fetch(process.env.REACT_APP_API_URL || 'http://localhost:8080/api/v1')
    .then(() => console.log('OK!'))
    .catch(() => console.log('NOK...'))
  return <Home />;
}

export default App;