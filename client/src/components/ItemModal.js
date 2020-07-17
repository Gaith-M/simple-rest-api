import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  Form,
  FormGroup,
  Label,
  Input,
  ModalBody,
} from "reactstrap";
import { connect } from "react-redux";
import { create_todo_action_creator } from "../Redux/actions/action_creators";

const ItemModal = (props) => {
  const [is_open, toggle_open] = useState(false);
  const [todo, set_todo] = useState("");

  const handle_toggle = () => toggle_open(!is_open);
  const handle_change = (e) => {
    const { value } = e.target;
    set_todo(value);
  };
  const handle_submit = (e) => {
    e.preventDefault();
    props.add(todo);
    toggle_open(!is_open);
  };

  return (
    <div>
      <Button
        color="dark"
        style={{ marginBottom: "2rem" }}
        onClick={handle_toggle}
      >
        Add Item
      </Button>

      <Modal isOpen={is_open} toggle={handle_toggle}>
        <ModalHeader>Add Todo</ModalHeader>
        <ModalBody>
          <Form onSubmit={handle_submit}>
            <FormGroup>
              <Label for="todo">Todo:</Label>
              <Input
                type="text"
                name="todo"
                id="todo"
                onChange={handle_change}
              />
              <Button color="dark" style={{ marginTop: "2rem" }} block>
                Add Todo
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

const MDTP = (dispatch) => ({
  add: (data) => dispatch(create_todo_action_creator(data)),
});

export default connect(null, MDTP)(ItemModal);
