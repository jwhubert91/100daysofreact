import mailPreferences from "./mailPreferences"
const redux = require("redux")
const {combineReducers, createStore} = redux

const rootReducer = combineReducers({
  mail: mailPreferences
})

const store = createStore(rootReducer)

store.subscribe(() => {
  console.log(store.getState())
})

export default store;