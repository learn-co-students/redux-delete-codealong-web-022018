import React, { Component } from 'react';

class Todo extends Component {

  handleOnClick() {
    this.props.store.dispatch({
      type: 'DELETE_TODO',
      id: this.props.id,
    });
}

  render() {
    console.log("props",this.props);
    // console.log(this.props.id);
    return (
      <li>
        {this.props.text}
        <button onClick={(e) => {this.handleOnClick()}} />
      </li>
    );
  }
};

export default Todo
