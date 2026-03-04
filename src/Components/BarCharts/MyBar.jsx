import React from 'react';

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
               {/* <h1>{name}</h1>
               <p>{section}</p> */}
            </div>
        </div>
    );
};

export default MyBar;