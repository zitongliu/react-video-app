import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = '';

// Create a new componet. This component shouldproduce some HTML

const App = () => {
  return (
    <div>
      <h1>Hello</h1>
      <SearchBar />
    </div>
  );
};

// Take this component's generated HTML and put in on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
