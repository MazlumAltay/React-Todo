import React, { Component } from "react";
import TodoList from "./components/TodoList/TodoList";
import "./App.css";
import Form from "./components/Form/Form";
import Header from "./components/TodoHeader/TodoHeader";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      todos: [],

    };
  }

  // Eğer input alanı boş değilse todos'a ekleye
  addItem = () => {
    // input'ta yazılı olan string değer
    const currentValue = this.state.userInput;

    if (this.state.userInput !== "") {
      const userInput = {
        // Delete yaparken kullanılabilmesi için bir her item için random bir id
        id: Math.random(),
        content: currentValue,
      };

      this.setState(
        {
          // Var olan array'i korumak için spread operatör kullanılıyor
          // spread operatör ile şu anki "todos" array elemanlarını alıyoruz ve yenisini ekliyoruz
          todos: [...this.state.todos, userInput],
        },
        () => {
          // Input'tan alınan değer state'e eklendikten sonra input'u temizliyoruz
          this.setState({
            userInput: "",
          });
        }
      );
    }
  };

  onInputChange = (e) => {
    const newVal = e.target.value;
    this.setState({
      userInput: newVal,
    });
  };

  deleteTodo = (e) => {
    let todoCopy = [...this.state.todos]
    const result = todoCopy.filter(todo => todo.id !== e);
    this.setState({ todos: result });
  }

  // lineText = (e) => {
  //   if (e.target.firstChild.className !== "text-line") {
  //     e.target.firstChild.className = "text-line";
  //   }
  //   else {
  //     e.target.firstChild.className = "";
  //   }
  // }

  render() {
    return (
      <div className="App">
        <Header/>
        <Form
          userInput={this.state.userInput}
          onInputChange={this.onInputChange}
          addItem={this.addItem}
        />
        {this.state.todos.length > 0 && (
          <div className="list">
            <TodoList deleteTodo={this.deleteTodo} todos={this.state.todos} />
          </div>
        )}
      </div>
    );
  }
}

export default App;