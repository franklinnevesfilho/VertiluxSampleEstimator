import { useState, useEffect } from 'react';
import shades from "../assets/types/shades.js";
import operations from "../assets/types/operations.js";
import styles from '../assets/types/Styles.js';
import systemStyleJunction from "../assets/types/SystemStyleJunction.js";
import questions from "../assets/types/Questions.js";
import ButtonTrack from "./ButtonTrack.jsx";
import Questionnaire from "./Questionnaire.jsx";

function SampleEstimator() {
    const [currIndex, setCurrIndex] = useState(0)
    const [answerChoices, setAnswerChoices] = useState([])
    const [selected, setSelected] = useState('');
    const [submittedAnswer, setSubmittedAnswer] = useState('');

    // Filters the objects into arrays with just the name
    const [ questionsArray ] = useState(questions)
    const [shadeOptions] = useState(shades.map(shade =>{ return shade.name}))
    const [operationOptions] = useState(operations.map(operation => {return operation.name}))
    const [styleOptions, setStyleOptions] = useState(styles.map(style =>{return style.name}))

    // Filters the different styles so that it is appropriate for the system selected
    const calculateStyleOptions = () =>{
        let filteredStyle = [];
        for(let i = 0; i < systemStyleJunction.length; i++){
            // Searches for the junction with the specifications
            if(systemStyleJunction[i].system === submittedAnswer){
                let styleArr = systemStyleJunction[i].style
                for(let i = 0; i < styleArr.length; i++){
                    // Adds the name of every
                    filteredStyle.push(styles[styleArr[i]])
                }
            }
        }
        //updates the styles
        setStyleOptions(filteredStyle)
    }

    // Updates the answer choices based on the question/index
    useEffect(() => {
        switch(currIndex){
            case 0:
                setAnswerChoices(shadeOptions)
                break;
            case 1:
                setAnswerChoices(operationOptions)
                break;
            case 2:
                //TODO:
                // filter the styles depending on the system chosen

                calculateStyleOptions()
                // If no answer choices skip a question
                if(styleOptions.length === 0){
                    setCurrIndex(currIndex + 2)
                }else{
                    setAnswerChoices(styleOptions.map(style =>{ return style.name}))
                }
                break;
            case 3:
                break;
            default:
                setAnswerChoices([])
        }
    }, [currIndex, operationOptions, shadeOptions, styleOptions]);
    return (
        <>
            <Questionnaire
                question={questionsArray[currIndex].question}
                answerChoices={answerChoices}
                setSelected={setSelected}/>
            <h5>Currently selected : {submittedAnswer}</h5>
            <ButtonTrack
                index={currIndex}
                setIndex={setCurrIndex}
                maxIndex={questionsArray.length}
                setAnswer={setSubmittedAnswer}
                answer={submittedAnswer}
                selected={selected}
            />
        </>
    );
}

export default SampleEstimator;
