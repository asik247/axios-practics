import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const MyBar = ({ singleData }) => {
    

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
                    <XAxis dataKey="subject" />  
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                    <Bar dataKey="total" fill="#8884d8" /> {/* bar height = total marks */}
                </BarChart>
            </div>
        </div>
    );
};

export default MyBar;