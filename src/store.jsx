import {createStore} from 'redux'
import combineReducers from './reducers/index.jsx'

const store = createStore(combineReducers);


export default store;