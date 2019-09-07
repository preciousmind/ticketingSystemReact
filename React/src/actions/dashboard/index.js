import Api from "../../api";
import { encrypt } from "../../utils";

export const createTicket = (formData, history) => dispatch => {
  Api.post("ticket/create", formData)
    .then(res => {
      history.push('/dashboard')
    })
    .catch(err => {});
};

export const updateTicket = (formData, history) => dispatch => {
  Api.post("ticket/update", formData)
    .then(res => {
      dispatch({
        type: "GET_ROW",
        payload: res.data
      });
      history.push('/dashboard')
    })
    .catch(err => {});
};

export const updateComment = (formData) => dispatch => {
  Api.post("ticket/update", formData)
    .then(res => {
      dispatch({
        type: "GET_ROW",
        payload: res.data
      });
    })
    .catch(err => {});
};

export const getUsers = () => dispatch => {
  Api.get("user/list")
    .then(res => {
      dispatch({
        type: "USER_LIST",
        payload: res.data
      });
    })
    .catch(err => {});
};

export const getTickets = (formData) => dispatch => {
  Api.post("ticket/all", formData)
    .then(res => {
      dispatch({
        type: "GET_TICKETS_SUCCESS",
        payload: res.data
      });
    })
    .catch(err => {});
};

export const createUser = (formData, history) => dispatch => {
  formData.Pwd = encrypt(formData.Pwd);
  Api.post("user/signup", formData)
    .then(res => {
      history.push("/users");
    })
    .catch(err => {});
};

export const login = (email, password, history) => dispatch => {
  var login = {
    Email: email,
    Pwd: password
  };
  Api.post("user/signin", login)
    .then(res => {
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: res.data
      });
      history.push("/dashboard");
    })
    .catch(err => {
      dispatch({
        type: "LOGIN_FAILED",
        payload: ((err.response && err.response.data) ?  err.response.data.errors.message : "Network Connectivity Issue")
      });
    });
};

export const getRow = id => dispatch => {
  Api.post("ticket/detail", id)
    .then(res => {
      dispatch({
        type: "GET_ROW",
        payload: res.data
      });
    })
};

export const logOut = (history) => dispatch => {
  history.push('/login')
      dispatch({
        type: "LOGOUT_USER",
        payload: false
      });
};
