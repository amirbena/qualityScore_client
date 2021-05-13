import React from 'react';
import './App.css';
import Logo from './components/Logo/Logo';
import Navbar from './components/Navbar/Navbar';
import Dropdowns from './components/Dropdowns/Dropdowns';
import PetsData from './components/PetsData/PetsData';

function App() {
    return (
        <div>
            <Logo />
            <Navbar />
            <Dropdowns />
            <PetsData />
        </div>
    );
}

export default App;
