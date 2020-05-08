import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Wrapper from "./components/Wrapper";

import SearchResultContainer from "./components/SearchResultContainer";
// import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <Wrapper>
        <SearchResultContainer />
      </Wrapper>
    </>

  );
}

export default App;
