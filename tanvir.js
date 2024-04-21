const redux = require('redux')


const INITIAL_VALUE = {
  counter: 0
}

const reducer = (store = INITIAL_VALUE,action) => {

  switch(action.type){
    case 'increment':
      return {counter: store.counter + action.payload}
    default: 
      return store;
  }

}

const store = redux.createStore(reducer)

const subscriber = () => {
  const state = store.getState()
  console.log(state)
}
store.subscribe(subscriber)

store.dispatch({type: 'increment', payload: 1})