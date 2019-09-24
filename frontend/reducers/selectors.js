const allTodos = function (state) {
  // let keys = Object.keys(state.todos);
  // return keys.map(id => {
  //   state.todos[id];
  // });
  return Object.values(state.todos)
}
 
export default allTodos;