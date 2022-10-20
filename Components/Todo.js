import React, { Component } from "react";

export default class Todo extends Component {
  render() {
    const { item, handleEdit, handleDelete } = this.props;
    return (
      <li
        key={item._id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span className="mr-2">
          {item.title}
					{item.description}
        </span>
        <span>
          <button
            className="btn btn-secondary mr-2"
            onClick={() => handleEdit(item)}
          >
            Edit
          </button>
          <button className="btn btn-danger" onClick={() => handleDelete(item)}>
            Delete
          </button>
        </span>
      </li>
    );
  }
}