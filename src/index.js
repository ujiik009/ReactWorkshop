import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore,combineReducers} from 'redux';


const initalState={
    result:0,
    value:[],
    age:10
}
const recuder = (state=initalState,action)=>{
   
    
    switch (action.type) {
        case "ADD":
                state={
                    ...state,
                    result:state.result+=action.payload                                
                }                
                state.value.push(action.payload)
            break;
        case "SUBTRACT":
           
            state-=action.payload;
            break;
        default:
            //alert("default "+state)
            break;
    }
    return state;
}

const store = createStore(combineReducers({recuder}));
store.subscribe(()=>{
    console.log(store.getState().result) 
//    console.log(store.getState());
});
store.dispatch({
    type:"ADD",
    payload:1500
});
store.dispatch({
    type:"ADD",
    payload:1500
});
store.dispatch({
    type:"ADD",
    payload:1500
});

store.dispatch({
    type:"ADD",
    payload:15000
});



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
