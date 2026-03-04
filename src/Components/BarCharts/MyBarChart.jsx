import React, { use } from 'react';

const MyBarChart = ({promiseDataAxios}) => {
    const studntsDatas = use(promiseDataAxios)
    console.log(studntsDatas);
    const myDatas = studntsDatas.data;
    console.log(myDatas);
    return (
        <div>
            {
                myDatas.map(singleData=>{console.log(singleData)})
            }
        </div>
    );
};

export default MyBarChart;