import React, { use } from 'react';
import MyBar from './MyBar';

const MyBarChart = ({promiseDataAxios}) => {
    const studntsDatas = use(promiseDataAxios)
    console.log(studntsDatas);
    const myDatas = studntsDatas.data;
    console.log(myDatas);
    return (
        <div>
            {
                myDatas.map(singleData=><MyBar key={singleData.id} singleData={singleData}></MyBar>)
            }
        </div>
    );
};

export default MyBarChart;