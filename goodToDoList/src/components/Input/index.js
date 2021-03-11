import React, {Component} from 'react'

class Input extends Component {
    state = {
        content: ''
    };

    onInputChange = (event) => {
        this.setState({content: event.target.value});
    };

    onAddHandle = () => {
      this.props.addItem(this.state.content)
        this.setState({
            content: ''
        });
    };
  render () {
      return (
          <div>
              <input value={this.state.content} onChange={this.onInputChange} type="text" />
              <button onClick={this.onAddHandle}>Add</button>
          </div>
      );
  }
};

export default Input;