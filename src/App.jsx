import axios from 'axios';
import React, { Suspense } from 'react';
import MyBarChart from './Components/BarCharts/MyBarChart';

// Axios metho use in data load;
const promiseDataAxios = axios.get('Students.json')
console.log(promiseDataAxios);

// const promiseDataAxios2 = async ()=>{
//   try{
//     const promiseDataAxios = await axios.get('Students.json')
//     console.log(promiseDataAxios);
//   }catch(error){
//     console.log(error);
//   }
  
// }
// promiseDataAxios2()

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