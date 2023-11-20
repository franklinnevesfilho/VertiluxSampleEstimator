# Vertilux Sample Estimator
- All data was pulled from Shade options ppt provided by Edwin Chiquin


This application will allow for users to input the specification they would want for their curtain and an estimate would be calculated along with the different items needed.

### Folder Structure
    src ->
        assets ->
            type ->
                [] operations.js - Array for the methods of operation
                [] questions.js - Array of questions
                [] shades.js - Array for types of shades
                [] systemStyleJunction.js - Array of objects 
                    signifying the index of the style 
                    corresponding to the shade and operation
                [] styles.js -> Array of all styles with their variations
        components ->
            [] ButtonTrack.jsx - Handles the navigation buttons
            [] Questionnaire.jsx - Holds the question and 
                configures the answer choices
            [] SampleEstimator.jsx - Main component

## DB Files

#### Operations
    const operations =
        [
            {
                name: 'Manual',
            },
            {
                name: 'Motorized',
            },
            {   
                name: 'Cordless',
            }
        ]
    export default operations;
-----------------------------------------------------------
#### Shades
    const shades =
    [
        {
            name: 'Roller',
        },
        {
            name: 'Neolux',
        }
    ]
    export default shades;
-----------------------------------------------------------
#### Questions
    const Questions = [
        {
            type: 'shade',
            question:'What type of shade would you like?',
        },
        {
            type: 'operation',
            question: 'How will you operate your shade?',
        },
        {
            type: 'style',
            question: 'Which styles would you like?',
        },
        {
            type: 'variation',
            question: 'Which variation of this styles would you like?',
        },
        {
            type: 'length',
            question: 'What is the length of your shade?',
        },
        {
            type: 'width',
            question: 'What is the width of your shade?',
        },
        {
            type: 'color',
            question: 'What color would you like your system to be?',
        }
    ]
    export default Questions;
-----------------------------------------------------------
#### Styles
    const styles =
        [
            {
                    name: 'Cassette'
            },
            {
                    name: 'Fascia'
            },
            {
                    name: 'Euro Bracket'
            },
            {
                    name: 'Generic Bracket'
            },
            {
                    name: 'Euro Dual'
            },
            {
                    name: 'Generic Dual'
            },
            {
                    name: 'Axio'
            },
        ]
    export default styles;
-----------------------------------------------------------
#### Style Index depending on shade and operation
    const SystemStyleJunction = [
        {
            system: 'Roller - Manual',
            style: [
                0,1,2,3,4,5,6
            ]
        },
        {
            system: 'Roller - Motorized',
            style:[
                0,1,2,3,4,5,6,7
            ]
        },
        {
            system: 'Roller - Cordless',
            style:[
                0,8
            ]
        },
        {
            system: 'Neolux - Manual',
            style:[
                0,8
            ]
        },
        {
            system: 'Neolux - Motorized',
            style:[
                0,8
            ]
        },
        {
            system:'Neolux - Cordless',
            style:[]
        }
    ]
    export default SystemStyleJunction;