import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";
import { objectHasEmptyValues } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { createTicket } from "../../actions/dashboard/index";
import { dashboard, category, status } from "../../constants";

import "./styles.scss";

const AddDetails = props => {
  const dispatch = useDispatch();
  const { FName, Email, UID, UserType } = useSelector(
    state => state.dashboard.userData
  );
  const [formData, setFormData] = useState({
    category: "1",
    priority: "1",
    subject: "",
    message: "",
    fullName: FName,
    email: Email,
    uid: UID,
    userType: UserType,
    comments: []
  });

  const getFormData = (value, field) => {
    setFormData(prevState => ({ ...prevState, [field]: value }));
  };

  const onSubmit = () => {
    objectHasEmptyValues(formData)
      ? alert("Please Enter All Values")
      : dispatch(createTicket(formData, props.history));
  };

  const onClear = () => {
    setFormData({ category: "", priority: "", subject: "", message: "" });
  };
  const { category, priority, message, subject } = formData;
  return (
    <Form className="desk-container">
      <h5>Create Ticket</h5>
      <FormGroup className="col-6" row>
        <Label sm={2}>Category</Label>
        <Col sm={6}>
          <Input
            type="select"
            name="category"
            value={category}
            onChange={e => {
              getFormData(e.target.value, "category");
            }}
          >
            <option value="1">Backups</option>
            <option value="2">Hardware/Software</option>
            <option value="3">Networking</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup className="col-6" row>
        <Label sm={2}>Priority</Label>
        <Col sm={6}>
          <Input
            type="select"
            name="priority"
            value={priority}
            onChange={e => {
              getFormData(e.target.value, "priority");
            }}
          >
            <option value="1">High</option>
            <option value="2">Medium</option>
            <option value="3">Low</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup className="col-12" row>
        <Label sm={1}>Subject</Label>
        <Col sm={11}>
          <Input
            type="text"
            name="subject"
            value={subject}
            onChange={e => {
              getFormData(e.target.value, "subject");
            }}
          />
        </Col>
      </FormGroup>
      <FormGroup className="col-12" row>
        <Label sm={1}>Message</Label>
        <Col sm={11}>
          <Input
            type="textarea"
            name="message"
            value={message}
            onChange={e => {
              getFormData(e.target.value, "message");
            }}
          />
        </Col>
      </FormGroup>
      <div className="col-12 text-center">
        <Button className="center-block btn-success" onClick={() => onSubmit()}>
          Submit
        </Button>
        <Button className="center-block btn-info" onClick={() => onClear()}>
          Clear
        </Button>
      </div>
    </Form>
  );
};

export default AddDetails;
