import React from "react"
import Header from "./Header"
import InputTodo from "./InputTodo";
class TodoContainer extends React.Component {

state = {
 todos: [
   {
     id: 1,
     title: "Setup development environment",
     completed: true
   },
   {
     id: 2,
     title: "Develop website and add content",
     completed: false
   },
   {
     id: 3,
     title: "Deploy to live server",
     completed: false
   }
 ]
};

  render() {
    return (
      <div>
        <Header />
        <InputTodo/>
      <ul>
      {this.state.todos.map(todo => (
        <li>{todo.title}</li>
      ))}
    </ul>
      </div>

    )
  }
}
export default TodoContainer
