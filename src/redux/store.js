import { createStore, combineReducers } from 'redux'
import authReducer from './authReducer'
import messageReducer from './messageReducer'

const reducers = combineReducers({
  authReducer,
  messageReducer
})

const store = createStore(reducers)

export default store