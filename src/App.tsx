import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Header />
        <header className="App-header">
        </header>
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
