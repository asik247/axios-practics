import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const MyBar = ({ singleData }) => {
    console.log(singleData);
    // const {name,section,} = singleData

    // const {
    //     id, name, class: classNam, section,

    //     subjects: {
    //         Physics, Chemistry, Math, Biology, English
    //     }
    // } = singleData;







    const chartData = [
        {
            subject: 'Physics',
            total: singleData.subjects.Physics.total
        },
        {
            subject: 'Chemistry',
            total: singleData.subjects.Chemistry.total
        },
        {
            subject: 'Math',
            total: singleData.subjects.Math.total
        },
        {
            subject: 'Biology',
            total: singleData.subjects.Biology?.total || 0
        },
        {
            subject: 'English',
            total: singleData.subjects.English?.total || 0
        },
    ];


    return (
        <div>
            <div>
                <BarChart width={500} height={300} data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="subject" />  {/* x-axis label */}
                    {/* <YAxis />                     y-axis marks */}
                    <Tooltip />                   {/* hover করলে value দেখাবে */}
                    <Legend />                    {/* chart legend */}
                    <Bar dataKey="total" fill="#8884d8" /> {/* bar height = total marks */}
                </BarChart>
            </div>
        </div>
    );
};

export default MyBar;