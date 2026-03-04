import React from 'react';
import { BarChart } from 'recharts';

const MyBar = ({singleData}) => {
    console.log(singleData);
    // const {name,section,} = singleData

    const {
        id,name,class:classNam,section,

        subjects:{
            Physics, Chemistry, Math, Biology, English
        }
    }=singleData;

  
    return (
        <div>
            <div>
              <BarChart width={500} height={500} data={}>

              </BarChart>
            </div>
        </div>
    );
};

export default MyBar;