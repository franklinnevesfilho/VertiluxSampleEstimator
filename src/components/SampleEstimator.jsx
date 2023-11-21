import { useState, useEffect } from 'react';
import shades from "../assets/types/shades.js";
import operations from "../assets/types/operations.js";
import styles from '../assets/types/Styles.js';
import systemStyleJunction from "../assets/types/SystemStyleJunction.js";
import questions from "../assets/types/Questions.js";
import ButtonTrack from "./ButtonTrack.jsx";
import Questionnaire from "./Questionnaire.jsx";

function SampleEstimator() {
    // DB File manipulation
    const [ questionsArray ] = useState(questions)
    const [shadeOptions] = useState(shades.map(shade =>{ return shade.name}))
    const [operationOptions] = useState(operations.map(operation => {return operation.name}))

    // Variables used throughout application
    const [currIndex, setCurrIndex] = useState(0)
    const [answerChoices, setAnswerChoices] = useState([])
    const [selected, setSelected] = useState('');
    const [submittedAnswer, setSubmittedAnswer] = useState('');
    const [filteredStyles, setFilteredStyles] = useState([])

    // Restart all values
    const restart = () =>{
        if(currIndex !== 0){
            setCurrIndex(0)
            setSubmittedAnswer('')
            setFilteredStyles([])
        }
    }

    // Save Answer and navigate to next question
    const next = () => {
        if(currIndex < questionsArray.length - 1 ){
            setCurrIndex(currIndex+1)
            if(submittedAnswer === ''){
                setSubmittedAnswer(selected)
            } else{
                setSubmittedAnswer(submittedAnswer + ' - ' + selected)
            }
        }
    }

    // Updates the answer choices based on the question/index
    useEffect(() => {
        // Skip a question
        const skip = (skipCount) =>{
            setCurrIndex(currIndex + skipCount)
        }

        switch(currIndex){
            case 0:
                setAnswerChoices(shadeOptions)
                break;
            case 1:
                setAnswerChoices(operationOptions)
                break;
            case 2:
                // This section filters the styles
                for (let i = 0; i < systemStyleJunction.length; i++) {
                    // Searches for the junction with the specifications
                    if (systemStyleJunction[i].system === submittedAnswer) {
                        let styleArr = systemStyleJunction[i].style
                        for (let i = 0; i < styleArr.length; i++) {
                            // Adds the name of every
                            filteredStyles.push(styles[styleArr[i]])
                        }
                    }
                }

                // If no answer choices skip a question
                if (filteredStyles.length === 0) {
                    //Skip style & variation question
                    skip(2)
                } else {

                    setAnswerChoices(filteredStyles.map(style => {
                        return style.name
                    }))
                }
                break;
            // This case finds the style chosen and displays the variations available
            case 3:
            {
                // Get the index of the last answer
                let lastIndex = submittedAnswer.lastIndexOf('- ') + 2
                let styleChosen = submittedAnswer.substring(lastIndex, submittedAnswer.length)
                let variations = []
                //Plots the variations depending on the style chosen
                filteredStyles.map(style => {
                    if(style.name === styleChosen){
                        style.variation.map(varied => {
                            variations.push(varied)
                        })
                    }
                })
                if(variations.length === 0){
                    // Skip variation questions
                    skip(1)
                }else{
                    setAnswerChoices(variations)
                }
                break;
            }

            default:
                setAnswerChoices([])
        }
    }, [currIndex, operationOptions, shadeOptions, submittedAnswer, filteredStyles]);
    return (
        <>
            <Questionnaire
                question={questionsArray[currIndex].question}
                answerChoices={answerChoices}
                setSelected={setSelected}/>
            {/* This shows the status of the answers provided */}
            <h5>Currently selected : {submittedAnswer}</h5>
            <ButtonTrack
                restart={restart}
                next={next}
                index={currIndex}
            />
        </>
    );
}

export default SampleEstimator;
