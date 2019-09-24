import React from 'react';
import { connect } from 'react-redux';
import { receiveTodo } from '../../actions/todo_actions';
import TodoListContainer from './todo_list_container';

class AddToDoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "", body: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title, body } = this.state;
    //////debugger
    this.props.receiveTodo({title, body, id: 19284*Math.random(), done: false});
    this.setState({
      title: "",
      body: ""
    })
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    }
  }

  render() {
    return (
      <form className="add-item" onSubmit={this.handleSubmit}>
        <label>
          Title
          <input type="text" value={this.state.title} onChange={this.update('title')}/>
        </label>
        <label>
          Body
          <input type="text" value={this.state.body} onChange={this.update('body')}/>
        </label>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default AddToDoForm;