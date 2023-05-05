import {legacy_createStore as createStore} from "redux";
let initialState = 0;

export function reducer(currentState=initialState,action){
    switch(action.type) {
        case "INC":
            initialState= currentState+1;
            return initialState;
        case "RESET":
            initialState=0;
            return initialState;
        default:
            return initialState;
    }

} 
const store = createStore(reducer);

export default store;

