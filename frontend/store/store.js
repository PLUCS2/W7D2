import { createStore } from 'redux'; 
import combineReducers from '../reducers/root_reducer.js'; 
import { applyMiddleware } from 'redux'; 
import thunk from '../middleware/thunk';

// export default function configureStore() {
//   createStore(combineReducers);
// }

export default createStore(combineReducers, applyMiddleware(thunk));