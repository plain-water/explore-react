export default function createStore(reducer,inhancer){
    if(inhancer){
        return inhancer(createStore)(reducer)
    }
    let currentState;
    let currentListeners=[];
    function getState(){
        return currentState
    }
    function dispatch(action){
        currentState=reducer(currentState,action);
        currentListeners.forEach(v=>v())
    }
    function subscribe(listener){
       currentListeners.push(listener)
       console.log(currentListeners)
        return ()=>{
           let key=currentListeners.indexOf(listener);
           currentListeners.splice(key,1)
           console.log(currentListeners)
        }
    }
    dispatch({})

    return {
        getState,
        dispatch,
        subscribe
    }
}