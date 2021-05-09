import {createStore} from 'redux'

export function decrement() {
  return {
    type: "DECREMENT"
  }
}

export function resetCount() {
  return {
    type: "RESET"
  }
}

export function reducer(count, action) {
  switch (action.type) {
    case ("DECREMENT"):
      return count - 1
    case ("RESET"):
      return 1500
    default:
      return 1500
  }
}

const store = createStore(reducer);

export default store;