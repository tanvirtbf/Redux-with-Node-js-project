const redux = require('redux')

const initial_value = {
  counter: 0
}

const INCREMENT = 'increment'
const DECREMENT = 'decrement'
const ADDING = 'adding'
const DELETION = 'deletion'

const reducer = (store = initial_value, action) =>{
  switch(action.type){
    case INCREMENT:
      return {counter: store.counter + action.payload}
    case DECREMENT:
      return {counter: store.counter - action.payload}
    case ADDING:
      return {counter: store.counter + action.payload}
    case DELETION: 
      return {counter: store.counter - action.payload}
    default: 
      return store;
  }
}

const store = redux.createStore(reducer)

store.subscribe(()=>{
  console.log(store.getState())
})

store.dispatch({type: INCREMENT, payload: 1})
store.dispatch({type: INCREMENT, payload: 3})
store.dispatch({type: DECREMENT, payload: 1})
store.dispatch({type: ADDING, payload: 2})
store.dispatch({type: DELETION, payload: 3})

