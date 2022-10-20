import React, { Component } from 'react';
import TodoForm from './Components/TodoForm.js'
import TodoList from './Components/TodoList.js'
class App extends Component {
  constructor(props) {
		super(props);
		this.state={
			description : '',
			title: '',
			listItems: []
		}
	}
  onTitleChanged(e) {
		let val = e.target.value;

		this.setState({
				title: val
		})
	}
	onDescChanged(e) {
		let value = e.target.value;

		this.setState({
				description: value
		})
	}
//   Add () {
//     const obj = {
// 				description: this.state.description,
// 				title: this.state.title,
// 				check: this.state.check
// 			}
//     if (this.state.value !== "") {
//         this.setState({ listItems: this.state.listItems.concat(obj)})
//         this.setState({ value: "" })
//     }
// }

  render() {
    return (
      <div>
        <TodoForm title={this.title} description={this.description}  onTitleChanged={this.onTitleChanged} handelAdd={this.Add} onDescChanged={this.onDescChanged}/>
        <TodoList items={this.state.listItems} handleEdit={this.handleEdit} handleDelete={this.handleDelete} />
      </div>
    );
  }
}

export default App;