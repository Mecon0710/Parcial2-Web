import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Books from "./components/books";
import Book from "./components/book";
import Login from "./components/login";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar></NavBar> {/* Barra de navegación */}
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/books" element={<Books />} />
            <Route path="/books/:id" element={<Book />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
