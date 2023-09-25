/* eslint-disable */
import React, { Component } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

class InputTodo extends Component {
  state = {
    title: '',
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title);
      this.setState({
        title: '',
      });
    } else {
      alert('Please write item');
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input type="text" placeholder="Add Todo..." value={this.state.title} onChange={this.onChange} name="title" className='todoinput'/>
        <button className="input-submit" type="button">
          <FaPlusCircle
            style={{
              color: 'darkcyan',
              fontSize: '20px',
              marginTop: '2px',
            }}
          />
        </button>
      </form>
    );
  }
}
export default InputTodo;
