// frontend/src/components/Modal.js

import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    if (e.target.type === 'checkbox') {
      value = e.target.checked;
    }
    const activeItem = { ...this.state.activeItem, [name]: value };
    this.setState({ activeItem });
  };
  render() {
    const { toggle, onSave } = this.props;
    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}> Todo Item </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for='title'>Title</Label>
              <Input
                type='text'
                name='title'
                value={this.state.activeItem.title}
                onChange={this.handleChange}
                placeholder='Enter Todo Title'
              />
            </FormGroup>
            <FormGroup>
              <Label for='description'>Description</Label>
              <Input
                type='text'
                name='description'
                value={this.state.activeItem.description}
                onChange={this.handleChange}
                placeholder='Enter Todo description'
              />
            </FormGroup>
            <FormGroup>
              <Label for='due_date'>Due Date</Label>
              <Input
                type='text'
                name='due_date'
                value={this.state.activeItem.due_date}
                onChange={this.handleChange}
                placeholder='Enter Todo Due Date'
              />
            </FormGroup>
            <FormGroup>
              <Label for='priority'>Priority</Label>
              <Input
                type='select'
                name='priority'
                value={this.state.activeItem.priority}
                onChange={this.handleChange}
                placeholder='Enter Todo priority'
              >
                <option value='high'>High</option>
                <option value='med'>Med</option>
                <option value='low'>Low</option>
              </Input>
            </FormGroup>
            <FormGroup check>
              <Label for='completed'>
                <Input
                  type='checkbox'
                  name='completed'
                  checked={this.state.activeItem.completed}
                  onChange={this.handleChange}
                />
                Completed
              </Label>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color='success' onClick={() => onSave(this.state.activeItem)}>
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
