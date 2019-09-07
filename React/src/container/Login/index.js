import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../actions/dashboard/index";
import { useSelector } from "react-redux";
import { encrypt } from "../../utils/index";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Alert
} from "reactstrap";

import "./style.scss";

const Login = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const { message, authenticate } = useSelector(state => state.dashboard);

  const handleClick = () => {
    dispatch(login(email, encrypt(password), props.history));
  };

  const handleInput = (e, key) => {
    if (key === "email") {
      setEmail(e.target.value);
    }
    if (key === "password") {
      const pwd = e.target.value;
      setPassword(pwd);
    }
  };

  return (
    <Container className="app">
      {!authenticate && message !=="" &&
      <Alert color="danger">
        {message}
      </Alert>}
      <h2>Sign In</h2>
      <Form className="form">
        <Col>
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              value={email}
              placeholder="myemail@email.com"
              onChange={e => handleInput(e, "email")}
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              value={password}
              placeholder="********"
              onChange={e => handleInput(e, "password")}
            />
          </FormGroup>
        </Col>
        <Button className="btn-info" onClick={handleClick}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
