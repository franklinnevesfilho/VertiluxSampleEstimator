import React, {useState} from 'react';

function Questionnaire({question, answerChoices, setSelected}) {
    const [currSelected, setCurrSelected] = useState()

    const handleInput = (event) =>{
        let value = event.target.value
        setCurrSelected(value)
        setSelected(value)
    }

    // This ensures that the answer choices will be displayed appropriately
    const answerOptions = () => {
        if(answerChoices.length === 0){
            return <label><input className={'number-input'} type="number" onChange={handleInput}/> in</label>
        }else{
            return <div className={'answer-choices'}>
                        {answerChoices.map((answer, index) =>(
                            <label
                                key={index}
                                className={'radio-container'}>
                                <input
                                    checked={currSelected === answer}
                                    name={'option'}
                                    type="radio"
                                    value={answer}
                                    onChange={handleInput}/><span className={'checkmark'}></span> {answer}</label>

                        ))}
                    </div>
        }
    }

    return(
        <div>
            <h3>{question}</h3>
            <div className={'answerOptions'}>
                <form action="">
                    {answerOptions()}
                </form>
            </div>
        </div>
    );
}

export default Questionnaire;
