import React from 'react';

function ButtonTrack({restart, next, index}) {

    return (
        <div>
            <button onClick={restart} hidden={index === 0}>Restart</button>
            <button onClick={next}>Next</button>
        </div>
    );
}

export default ButtonTrack;