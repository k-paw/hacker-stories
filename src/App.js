import React from 'react';

// const welcome = {
//   greeting: "Hey",
//   title: 'React'
// };

function getTitle(title) {
  return title;
}
function App() {


  // do something in between 
  return (
    <div>
      <h1>hello {getTitle('React')}</h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}

export default App;