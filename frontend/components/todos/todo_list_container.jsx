import { connect } from 'react-redux'; 
import { receiveTodos, receiveTodo, fetchTodos} from '../../actions/todo_actions'; 
import allTodos from '../../reducers/selectors';
import TodoList from './todo_list'; 
// import { RECEIVE_TODO } from '../../actions/todo_actions';

const mapStateToProps = state => {
  const todos = allTodos(state); 
  //////debugger; 
  return {
    todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    receiveTodo: (todo) => dispatch(receiveTodo(todo)),
    fetchTodos: (todos) => dispatch(fetchTodos(todos)),
    // receiverTodos: allTodos => dispatch(receiveTodos(allTodos))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
