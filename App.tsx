import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { Tickets } from './pages/Tickets';
import { Store } from './pages/Store';
import { About } from './pages/About';
import { Navbar } from './components/Navbar';
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
      <Navbar />
        <Container className="mb-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
