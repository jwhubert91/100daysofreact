// require redux
const redux = require('redux')

// define actions
function upVote() {
  return {
    type: "UPVOTE"
  }
}

function downVote() {
  return {
    type: "DOWNVOTE"
  }
}

function rename(name) {
  return {
    type: "RENAME",
    payload: name
  }
}

// create state object
const initialState = {
  votes: 0,
  name: "Never Gonna Give You Up"
}

// create reducer
function reducer(state = initialState, action) {
  switch(action.type) {
    case ("UPVOTE"):
      return {
        ...state,
        votes: state.votes + 1
      }
    case ("DOWNVOTE"):
      return {
        ...state,
        votes: state.votes - 1
      }
    case ("RENAME"):
      return {
        ...state,
        name: action.payload
      }
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

// export
export {upVote,downVote,rename,store};