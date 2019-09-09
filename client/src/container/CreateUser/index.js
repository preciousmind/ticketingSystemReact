import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";
import { createUser } from "../../actions/dashboard";
import { useDispatch } from "react-redux";
import { objectHasEmptyValues } from "../../utils";

import "./styles.scss";

const CreateUser = (props) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    FName: "",
    LName: "",
    UserType: "standard",
    Email: "",
    Pwd: "",
    Status: "0"
  });

  const getFormData = (value, field) => {
    setFormData(prevState => ({ ...prevState, [field]: value }));
  };

  const submit = () => {
    objectHasEmptyValues(formData)
      ? alert("Please Enter All Values")
      : dispatch(createUser(formData, props.history));
  };

  return (
    <Form className="desk-container">
      <h5>Create User</h5>
      <FormGroup className="col-6" row>
        <Label sm={2}>First Name</Label>
        <Col sm={6}>
          <Input
            type="text"
            onChange={e => {
              getFormData(e.target.value, "FName");
            }}
          />
        </Col>
      </FormGroup>
      <FormGroup className="col-6" row>
        <Label sm={2}>Last Name</Label>
        <Col sm={6}>
          <Input
            type="text"
            onChange={e => {
              getFormData(e.target.value, "LName");
            }}
          />
        </Col>
      </FormGroup>
      <FormGroup className="col-6" row>
        <Label sm={2}>Email</Label>
        <Col sm={6}>
          <Input
            type="text"
            onChange={e => {
              getFormData(e.target.value, "Email");
            }}
          />
        </Col>
      </FormGroup>
      <FormGroup className="col-12" row>
        <Label sm={1}>Password</Label>
        <Col sm={11}>
          <Input
            type="password"
            onChange={e => {
              getFormData(e.target.value, "Pwd");
            }}
          />
        </Col>
      </FormGroup>
      <FormGroup className="col-12" row>
        <Label sm={1}>Role</Label>
        <Col sm={11}>
          <Input
            type="select"
            name="select"
            onChange={e => {
              getFormData(e.target.value, "UserType");
            }}
          >
            <option value="standard">Standard</option>
            <option value="admin">Admin</option>
          </Input>
        </Col>
      </FormGroup>
      <div className="col-12 text-center">
        <Button className="center-block btn-success" onClick={submit}>
          Submit
        </Button>
        <Button className="center-block btn-info">Clear</Button>
      </div>
    </Form>
  );
};

export default CreateUser;
