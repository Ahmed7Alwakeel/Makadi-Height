import './App.css';
import React, { useState } from 'react';
import Header from './components/HeaderSection/Header';
import FacilitiesSection from './components/FacilitiesSection/FacilitiesSection';
import { IndexProvider } from './context/indexContext';


function App() {
  const [indexCont, setIndex] = useState(0)
  return (
    <>
      <IndexProvider value={{ indexCont, setIndex }}>
        <Header />
        <FacilitiesSection />
      </IndexProvider>
    </>
  );
}

export default App;
