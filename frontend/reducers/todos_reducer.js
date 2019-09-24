import { RECEIVE_TODOS, RECEIVE_TODO } from "../actions/todo_actions";
import {merge} from 'lodash';

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};

export default function todosReducer(state = initialState, action) {
  Object.freeze(state); 
  switch (action.type) {
    case RECEIVE_TODOS: {
      let newTodos = {};
      action.todos.forEach( (todo) => {
        const {id, title, body, done} = todo; 
        newTodos[id] = {title, body, done};
      })
      return newTodos;
    }
    case RECEIVE_TODO: {
      const {id, title, body, done} = action.todo;
      const newTodo = { [id]: {title, body, done, id} };
      //////debugger;
      return merge({}, state, newTodo);
    }
    default: {
      return state;
    }
  }
}

// export default todosReducer; 