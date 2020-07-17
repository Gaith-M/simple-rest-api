import React, { useEffect } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import {
  get_todos_action_creator,
  delete_todo_action_creator,
} from "../Redux/actions/action_creators";

const ShoppingList = (props) => {
  const state = props.todos.items;

  useEffect(() => {
    props.get_all();
  }, []);

  const handle_click = (id) => {
    // const { id } = e.target.dataset;
    // instead of setting the id on the button, then getting it using dataset, we bind the handler to the whole element using .bind() and passed the id to it. then instead of passing the e object to the handler, the only thing we had to do is pass the id which has been bound to the handler
    props.delete(id);
  };

  return (
    <Container>
      <ListGroup>
        <TransitionGroup className="shopping-list">
          {state.map(({ body, _id }) => (
            <CSSTransition key={_id} timeout={500} classNames="fade">
              <ListGroupItem>
                <Button
                  className="remove-btn"
                  color="danger"
                  size="sm"
                  // data-id={_id}
                  onClick={handle_click.bind(this, _id)}
                >
                  &times;
                </Button>
                {body}
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
    </Container>
  );
};

const MSTP = (state) => ({
  todos: state.todos,
});

const MDTP = (dispatch) => ({
  get_all: () => dispatch(get_todos_action_creator()),
  delete: (id) => dispatch(delete_todo_action_creator(id)),
});

export default connect(MSTP, MDTP)(ShoppingList);
