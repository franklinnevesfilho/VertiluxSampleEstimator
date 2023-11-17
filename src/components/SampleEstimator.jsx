import { useState, useEffect } from 'react';
import QuestionForm from './questionForm.jsx';
import shades from "../assets/types/shades.js";
import operations from "../assets/types/operations.js";
import styles from '../assets/types/styles.js';
import styleParent from '../assets/types/StyleParent.js';

function SampleEstimator() {
    const [sampleAnswer, setSampleAnswer] = useState({
        shade: '',
        operation: '',
        styleParent: '',
        style: '',
        length: '',
        width: '',
        color: '',
    });

    const [parentStyles, setParentStyles] = useState([]);
    const [childStyles, setChildStyles] = useState([]);

    const filterParentStyles = () => {
        const parents = styleParent.filter(
            (parentStyle) =>
                parentStyle.system.shade === sampleAnswer.shade && parentStyle.system.operation === sampleAnswer.operation

            );
        setParentStyles(parents);
    };

    const filterStyles = () => {
        const style = styles.filter((style) => style.parent === sampleAnswer.styleParent);
        setChildStyles(style);
    };

    const setAnswer = (type, value) => {
        setSampleAnswer((prevSampleAnswer) => ({
            ...prevSampleAnswer,
            [type]: value,
        }));

    };

    const [currIndex, setCurrIndex] = useState(0);

    const goBack = () => {
        if (currIndex > 0) {
            setCurrIndex(currIndex - 1);
        }
    };

    const submitAnswer = () => {
        if (currIndex < questionnaire.length - 1) {
            setCurrIndex(currIndex + 1);
        }
        filterParentStyles()
        filterStyles()
    };

    useEffect(() => {
        setParentStyles(
            styleParent.filter(
            (parentStyle) =>
                parentStyle.system.shade === sampleAnswer.shade || parentStyle.system.operation === sampleAnswer.operation
        ))

        setChildStyles(
            styles.filter((style) => style.parent === sampleAnswer.styleParent)
        )
    }, [sampleAnswer.shade, sampleAnswer.operation, sampleAnswer.styleParent]);

    let questionnaire = [
        {
            type:'shade',
            question:'What type of shade would you like?',
            answer: shades
        },
        {
            type:'operation',
            question: 'How will you operate your shade?',
            answer: operations
        },
        {
            type: 'style',
            question: 'Which style would you like?',
            answer: parentStyles
        },
        {
            type: 'style-variation',
            question: 'Which variation of this style would you like?',
            answer: childStyles
        },
        {
            type:'length',
            question: 'What is the length of your shade?',
            answer:[]
        },
        {
            type:'width',
            question: 'What is the width of your shade?',
            answer:[]
        },
        {
            type: 'color',
            question: 'What color would you like your system to be?',
            answer:
                [
                    'Satin Anodized',
                    'Ivory',
                    'White',
                    'Black',
                    'Bronze'
                ]
        }
    ]

    return (
        <>
            <QuestionForm
                setAnswer={setAnswer}
                questionnaire={questionnaire[currIndex]}
            />
            <div className={'direction-button'}>
                <button onClick={goBack}>&lt;- Back</button>
                <button onClick={submitAnswer}>Next -&gt;</button>
            </div>
        </>
    );
}

export default SampleEstimator;
