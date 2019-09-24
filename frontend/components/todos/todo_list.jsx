import React from 'react';
import { TodoItem } from './todo_list_item';
import AddToDoForm from './todo_form'; 


// module.exports = () => <h3>Todo List goes here!</h3>
// export const TodoList = (props) => {
//   const todoList = props.todos.map(todo => (
//       < TodoItem todo={todo} key={todo.id}/> 
//     ));
  
//    return (
//    <>
//       <ul>
//         {todoList}
//       </ul>
//       <AddToDoForm receiveTodo={props.receiveTodo}/>
//     </>
//   )
// }

class TodoList extends React.Component {
  componentDidMount() {
    this.props.fetchTodos(); 
  }

  render (){
    const { todos } = this.props; 
    const todoList = todos.map(todo => (
      < TodoItem todo={todo} key={todo.id} />
    ));

    return (
      <>
        <ul>
          {todoList}
        </ul>
        <AddToDoForm receiveTodo={this.props.receiveTodo} />
      </>
    )
  }
}

export default TodoList; 