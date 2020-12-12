import React from 'react';
import HomePage from './HomePage'
import AppContextProvider from './AppContext';


function App() {
  return (
    <div className="App">
      <AppContextProvider>
            <HomePage/>
       </AppContextProvider>
    </div>
  );
}

export default App;
