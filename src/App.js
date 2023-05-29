import React from 'react';
import './App.css';

import SignInOutContainer from './containers';

import NavBar from './Components/NavBar';
import Footer from './Components/footer';

function App() {
  return (
    <div className="App">

      <NavBar />
      <SignInOutContainer />
      <Footer />
    </div >
  );
}

export default App;