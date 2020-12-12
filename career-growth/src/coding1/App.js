import React from 'react';
import HomePage from './HomePage'
import AuthContextProvider from './AuthContext';


function App() {
  return (
    <div className="App">
      <AuthContextProvider>
            <HomePage/>
       </AuthContextProvider>
    </div>
  );
}

export default App;
