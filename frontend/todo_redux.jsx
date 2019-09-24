import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';
import { receiveTodos, receiveTodo, fetchTodos  } from './actions/todo_actions';
import Root from './components/root';
import allTodos from './reducers/selectors';
// import { fetchTodos } from './util/todo_api_util';

document.addEventListener("DOMContentLoaded", () => {
  window.store = store;
  window.receiveTodos = receiveTodos;
  window.receiveTodo = receiveTodo;
  window.fetchTodos = fetchTodos;
  window.allTodos = allTodos(store.getState());
  const root = document.getElementById("root");
  //////debugger
  ReactDOM.render(<Root store={store} />, root);
});
