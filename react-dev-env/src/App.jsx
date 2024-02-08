import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './home';
import Character from './character';
import { useState, useEffect } from "react";

function App() {
  const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const getCharacterData = async function () {
        const response = await fetch("http://localhost:3000/api/characters");
        const data = await response.json();
        setCharacters(data);
        };
        getCharacterData();
  }, []);
  
  return (
    <div>     
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>} />
        <Route path="/home" element={<Home characters={characters}/>} />
        <Route path="/character" element={<Character />} />
        <Route path="/character/:id" element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
