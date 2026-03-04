import axios from 'axios';
import React, { Suspense } from 'react';
import MyBarChart from './Components/BarCharts/MyBarChart';

// const promiseDataFetch = fetch("Students.json")
// .then(res=>res.json())
// console.log(promiseDataFetch);

// Axios metho use in data load;
const promiseDataAxios = axios.get('Students.json')
console.log(promiseDataAxios);

const App = () => {
  return (
    <div>
     <Suspense fallback={<h1>Loadding..</h1>}>
     
      <MyBarChart promiseDataAxios={promiseDataAxios}></MyBarChart>
     
      </Suspense>
    </div>
  );
};

export default App;