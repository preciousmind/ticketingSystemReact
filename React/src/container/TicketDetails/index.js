import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import history from "../../history";
import { Button, Form, FormGroup, Label, Col, Input } from "reactstrap";
import CommentBox from "./../CommentBox";
import { statusDef, categoryDef, priorityDef } from "../../constants";
import { updateTicket, updateComment } from "../../actions/dashboard/index";

const TicketDetails = (props) => {
  const dispatch = useDispatch();

  const closeTicket = () => {
    history.goBack();
  };

  const {
    _id,
    uid,
    message,
    status,
    priority,
    CrtdOn,
    category,
    comments,
    fullName
  } = useSelector(state => state.dashboard.getRow);

  const {userType} = useSelector(state => state.dashboard);

  const [formData, setFormData] = useState({
    status
  });

  const getFormData = (value, field) => {
    setFormData(prevState => ({ ...prevState, [field]: value }));
  };

  const onSubmit = () => {
      const data = {
        status: formData.status,
        id: _id,
        uid,
        comments
      }
      dispatch(updateTicket(data, props.history));
  };

  const onCommentUpdate = (updateComments) => {
    const data = {
      status,
      id: _id,
      uid,
      comments: updateComments
    }
    dispatch(updateComment(data));
  }

  return (
    <Form className="desk-container">
      <h5>
        Ticket Details
        {userType === "admin" && <Button className="pull-right" onClick={() => onSubmit()}>Save</Button>}
        <Button className="pull-right" onClick={() => closeTicket()}>Back</Button>
      </h5>
      <FormGroup sm={12} row>
        <Col sm={1}>
          <Label>Ticket Id</Label>
        </Col>
        <Col sm={5}>{uid}</Col>
        <Col sm={1}>
          <Label>Status</Label>
        </Col>
        <Col sm={3}>
        {userType === "admin" ?
        
        <Input
            type="select"
            name="priority"
            value={formData.status}
            onChange={e => {
              getFormData(e.target.value, "status");
            }}
          >
            <option value="0">Open</option>
            <option value="1">Progress</option>
            <option value="2">Completed</option>
            <option value="3">Closed</option>
          </Input> :
          statusDef[status]
      }
        </Col>
      </FormGroup>
      <FormGroup sm={12} row>
        <Col sm={1}>
          <Label>Created By</Label>
        </Col>
        <Col sm={5}>{fullName}</Col>
        <Col sm={1}>
          <Label>Date</Label>
        </Col>
        <Col sm={5}>{CrtdOn}</Col>
      </FormGroup>
      <FormGroup sm={12} row>
        <Col sm={1}>
          <Label>Category</Label>
        </Col>
        <Col sm={5}>{categoryDef[category]}</Col>
        <Col sm={1}>
          <Label>Priority</Label>
        </Col>
        <Col sm={5}>{priorityDef[priority]}</Col>
      </FormGroup>
      <FormGroup sm={12} row>
        <Col sm={1}>
          <Label>Subject</Label>
        </Col>
        <Col sm={11}>AC Failed</Col>
      </FormGroup>
      <FormGroup sm={12} row>
        <Col sm={1}>
          <Label>Message</Label>
        </Col>
        <Col sm={11}>{message}</Col>
      </FormGroup>
      <FormGroup sm={12} row>
        <CommentBox update={ (comments) => onCommentUpdate(comments)} />
      </FormGroup>
    </Form>
  );
};

export default TicketDetails;
