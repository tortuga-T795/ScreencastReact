import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from "./components/TodoList";
import Input from "./components/Input";

class App extends Component {
  state = {
    todoData: [
      {value: 'Kek', isImportant: false, isDone: false},
      {value: 'Lol', isImportant: true, isDone:false}
    ]
  };

  setImportant = (id) => {
    const newData = [
        ...this.state.todoData
    ]
    newData[id].isImportant = !newData[id].isImportant;
    this.setState({todoData: newData});
  };

  setDone = (id) => {
    const newData = [
        ...this.state.todoData
    ]
    newData[id].isDone = !newData[id].isDone;
    this.setState({todoData: newData});
  };

  deleteItem = (id) => {
    const newData = [
        ...this.state.todoData.slice(0, id),
        ...this.state.todoData.slice(id+1)
    ]
    this.setState({todoData: newData});
  };

  addItem = (content) => {
    const newData = [
      ...this.state.todoData, {value: content, isImportant: false}
    ];
    this.setState({todoData: newData});
  };

  render() {
    return (
        <div className="App">
          <TodoList todoData={this.state.todoData} setImportant={this.setImportant} deleteItem={this.deleteItem} setDone = {this.setDone}/>
          <Input addItem = {this.addItem}/>
        </div>
    );
  }
}

export default App;
