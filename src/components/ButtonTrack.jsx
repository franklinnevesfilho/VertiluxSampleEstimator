import React from 'react';

function ButtonTrack({index, setIndex, maxIndex, answer, setAnswer, selected}) {

    const startOver = () =>{
        if(index !== 0){
            setIndex(0)
            setAnswer('')
        }
    }
    const goForward = () => {
        if(index < maxIndex - 1 ){
            setIndex(index+1)
            if(answer === ''){
                setAnswer(selected)
            } else{
                setAnswer(answer + ' - ' + selected)
            }
        }
    }

    return (
        <div>
            <button onClick={startOver} hidden={index === 0}>Restart</button>
            <button onClick={goForward}>Next</button>
        </div>
    );
}

export default ButtonTrack;