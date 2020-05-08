import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Container from "./components/Container";

import SearchResultContainer from "./components/SearchResultContainer";
// import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <Container>
        <SearchResultContainer />
      </Container>
    </>

  );
}

export default App;
