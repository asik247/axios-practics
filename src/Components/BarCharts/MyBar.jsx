import React from 'react';

const MyBar = ({singleData}) => {
    console.log(singleData);
    const {name,section,} = singleData
    return (
        <div>
            <div>
               <h1>{name}</h1>
               <p>{section}</p>
            </div>
        </div>
    );
};

export default MyBar;