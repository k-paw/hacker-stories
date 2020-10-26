import React from 'react';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
]
function App () {
  return (
    <div>
      <h1>My Hacker Stories</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />

      <hr />

      <List />
    </div>
  );
}

function List() {
  return list.map(function(fuck) {
    return (
      <div key={fuck.objectID}>
      <span>
        <a href={fuck.url}>{fuck.title}</a>
      </span>
      <br></br>
      <span>{fuck.author}</span>
      <br></br>
      <span>{fuck.num_comments}</span>
      <br></br>
      <span>{fuck.points}</span>
      </div>

    )
  })
}
export default App;