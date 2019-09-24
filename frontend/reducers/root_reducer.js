import {combineReducers} from 'redux'; 
import todosReducer from './todos_reducer.js'; 


// export default function rootReducer (state = {}, action) {
//   return {
//     todos: todosReducer(state.todos, action)
//   }
// }

export default combineReducers({todos: todosReducer});