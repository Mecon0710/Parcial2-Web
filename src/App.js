import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Books from "./components/books";
import Book from "./components/book";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar> {/* Barra de navegación */}
      <BrowserRouter> {/* Para que funcione el enrutamiento */}
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:id" element={<Book />} />
        </Routes>
      </BrowserRouter>
   </div>
  );
}

export default App;
