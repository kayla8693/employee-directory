import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import SearchResultContainer from "./components/SearchResultContainer";

// import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <Header />
      <Wrapper>
        <SearchResultContainer />
      </Wrapper>
    </>

  );
}

export default App;
