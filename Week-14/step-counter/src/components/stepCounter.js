import {Fragment} from 'react';
import { connect } from 'react-redux';
function StepCounter(props) {
    const {counter,dispatch}= props;
    function increment() {
        dispatch({type:"INC"})
    }
    function reset(){
        dispatch({type:"RESET"})
    }
    return <Fragment>
        <h1>You've walked {counter} steps today!</h1>
        <button onClick={increment}><h2>Add a Step</h2></button>
        <br/>
        <button onClick={reset}><h2>Reset Steps</h2></button>
    </Fragment>
}
const mapStateToProps = (state)=>{
    return {
        counter:state
    }
}

export default connect(mapStateToProps)(StepCounter);