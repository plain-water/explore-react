import {createStore,HGapplyMiddleware} from "../HGRedux";
// import {createStore} from "redux";
import thunk from "redux-thunk";
// import logger from "redux-logger";
function countReducer(state = 0, action) {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "MINUS":
      return state - action.payload || 1;
    default:
      return state;
  }
}

const store = createStore(countReducer,HGapplyMiddleware(thunk, logger));
function logger({getState}){
  return  next=>action=>{
      console.log("--------------------- sgy-log start")
      let prevState=getState();
      console.log("prev state",prevState)
      const returnValue=next(action)
      let nextState=getState();
      console.log("next state",nextState)
      console.log("--------------------- sgy-log end")
      return returnValue;
  }
}
// function logger({getState}) {
//   return next => action => {
//     console.log("-------------------------------"); //sy-log

//     let prevState = getState();
//     console.log("prev state", prevState); //sy-log

//     const returnValue = next(action);

//     let nextState = getState();
//     console.log("next state", nextState); //sy-log

//     console.log("-------------------------------"); //sy-log
//     return returnValue;
//   };
// }

export default store;
