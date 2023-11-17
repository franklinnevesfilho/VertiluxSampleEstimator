import React from 'react';

const QuestionForm = ({ questionnaire, setAnswer }) => {
    const { type, question, answer: answerOptions } = questionnaire;

    const isNumberInput = answerOptions.length === 0;

    const handleInput = (event) => {
        setAnswer(type, event.type.value);
    };

    return (
        <div>
            <h3>{question}</h3>
            <div className={'answer-option'}>
                {isNumberInput ?
                    (
                        <label><input name={type} type="number" onInput={handleInput}/> in</label>
                    )
                    :
                    (
                        answerOptions.map((answer, index)=>(
                            <label key={index}><input type="radio" name={type} value={answer} onInput={handleInput}/> {answer}</label>
                        ))
                    )
                }
            </div>
        </div>
    );
};

export default QuestionForm;
