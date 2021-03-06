import * as TodoAPIUtil from '../util/todo_api_util';
export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";

export const receiveTodos = todosArr => {
  return {
    type: RECEIVE_TODOS,
    todos: todosArr
  }
}

export const receiveTodo = todo => {
  return {
    type: RECEIVE_TODO,
    todo: todo
  }
}

export const fetchTodos = () => {
  return (dispatch) => {
    TodoAPIUtil.fetchTodos().then(todos => {
      dispatch(receiveTodos(todos))});
  }
}


// export const receiveTodos;
