import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { Redirect, Route, BrowserRouter as Router } from "react-router-dom";
import AddDetails from "./container/AddDetails";
import Login from "./container/Login";
import TicketContainer from "./container/TicketContainer";
import TicketDetails from "./container/TicketDetails";
import CreateUser from "./container/CreateUser";
import Users from "./container/Users";
import Header from "./container/Header";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <Router>
          <Redirect exact from={"/"} to={"/login"} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={TicketContainer} />
          <Route path="/createTicket" component={AddDetails} />
          <Route path="/ticketDetails/:ticket" component={TicketDetails} />
          <Route path="/createUser" component={CreateUser} />
          <Route path="/users" component={Users} />
        </Router>
      </Provider>
    );
  }
}

export default App;
