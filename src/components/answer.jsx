import React from 'react';

function Answer({group,value}) {
    return (
        <>
            <input type="radio" name={group} value={value} />
            <label>{value}</label>
        </>
    );
}

export default Answer;