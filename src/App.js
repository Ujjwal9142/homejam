import React from 'react';
import './App.css';
import Upcoming from './Upcoming';
import Reviews from './Reviews';
import Navbar from './Navbar';
import Banner from './Banner';

function App() {
  return (
    <div className="App">
      <Navbar />     
      <Banner />
      <Upcoming />
      <Reviews />
    </div>
  );
}

export default App;
