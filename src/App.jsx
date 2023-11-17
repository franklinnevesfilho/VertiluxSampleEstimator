import './App.css'
import SampleEstimator from "./components/SampleEstimator.jsx";

function App() {

    return (
        <>
            <h1 className={'title'}>
                <span className={'vertilux'}>Vertilux</span> Sample Estimator
            </h1>
            <div className={'questionnaire-box'}>
                <SampleEstimator />
            </div>
        </>
    );
}

export default App
