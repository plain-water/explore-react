// const { applyMiddleware } = require("redux");

export default function HGapplyMiddleware(...Middlewares) {
  return (createStore) => reducer => {
    const store = createStore(reducer);
    let dispatch = store.dispatch
    // let getState=store.getState;
    let modApi = {
      getState: store.getState,
      dispatch: (action, ...arg) => dispatch(action, arg)
    }
    const MiddlewareChain = Middlewares.map(Middleware => Middleware(modApi));
    dispatch = compose(...MiddlewareChain)(store.dispatch)
    console.log(dispatch)
    //加强dispatch
    return {
      ...store,
      dispatch,
    }
  }
}


function compose(...funcs) {
  if (funcs.length === 0) {
    // 返回一个函数
    return arg => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  // 返回了一个聚合函数
  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}
