import { combineReducers } from 'redux'

const updateValueReducer = (state = 0, action) => {
    console.log(`Inreducer - ${action.type}`)
    switch (action.type) {
        
        case "ADD":
             state++;
            
             return state;
        case "SUB":
            state--;
            return state;
        default: return state
    }
}
const rootReducer = combineReducers({
    value: updateValueReducer

});

export default rootReducer;