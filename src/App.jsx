import React from 'react';

const promiseDataFetch = fetch("Students.json")
.then(res=>res.json())
console.log(promiseDataFetch);

const App = () => {
  return (
    <div>
      <h1>Axios and data leveling and rechart bar,line etc</h1>
    </div>
  );
};

export default App;