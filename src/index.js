import React from 'react';
import ReactDOM from 'react-dom';

// Create a new componet. This component shouldproduce some HTML

const App = () => {
  return <div>Hi!</div>;
}

// Take this component's generated HTML and put in on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
