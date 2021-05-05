// 1 - import redux
const redux = require('redux')

// 2 - create actions
function increment() {
  return {type: "INCREMENT"}
}

function decrement() {
  return {type: "DECREMENT"}
}

function double() {
  return {type: "DOUBLE"}
}

function halve() {
  return {type: "HALVE"}
}

// 3 - create reducer
function reducer(state = {count: 0}, action) {
  switch (action.type) {
    case "INCREMENT":
      return {count: state.count + 1}
    case "DECREMENT":
      return {count: state.count - 1}
    case "DOUBLE":
      return {count: state.count * 2}
    case "HALVE":
      return {count: Math.floor(state.count / 2)}
    default:
      return state
  }
}

// 4 - create store from reducer
const store = redux.createStore(reducer)

// 5 - subscribe to store changes and console.log() them
store.subscribe(() => {
  console.log(store.getState())
})

// 6 - call actions
export {increment,decrement,double,halve,store};
