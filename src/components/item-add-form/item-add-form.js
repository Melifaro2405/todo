import React, { Component } from 'react';

import './item-add-form.css'

export default class ItemAddForm extends Component {
  constructor() {
    super();

    this.state = {
      label: ''
    }
  }

  onLabelChange = (evt) => {
    this.setState({
      label: evt.target.value
    });
  }

  onSubmit = (evt) => {
    evt.preventDefault();

    const {onItemAdded} = this.props;
    const {label} = this.state;

    onItemAdded(label);

    this.setState({
      label: ''
    });
  }

  render() {
    const {label} = this.state;
    
    return (
      <form className="item-add-form d-flex"
            onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="What needs to be done"
          className="form-control"
          onChange={this.onLabelChange}
          value={label}
        />
        <button
          className='btn btn-outline-secondary'>
          Add Item
        </button>
      </form>
    );
  }
}