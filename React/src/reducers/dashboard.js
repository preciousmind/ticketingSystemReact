const initialState = {
  ticketData: [],
  getRow: {},
  tickets: [],
  userData: {},
  userList: [],
  userType: "standard",
  authenticate: false,
  message: "",
  formData: {
    category: "",
    priority: "",
    subject: "",
    message: "",
    fullName: "",
    email: "",
    uid: ""
  }
};

const dashboard = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        tickets: action.payload.tickets,
        userData: action.payload.user,
        userList: action.payload.userList,
        userType: action.payload.user.UserType,
        authenticate: true
      };
    case "LOGIN_FAILED":
      return {
        ...state,
        authenticate: false,
        message: action.payload
      };
    case "GET_TICKETS_SUCCESS":
      return { ...state, tickets: action.payload };
    case "USER_LIST":
      return { ...state, userList: action.payload };
    case "GET_ROW":
      return { ...state, getRow: action.payload };
    case "LOGOUT_USER":
      return { ...state, authenticate: action.payload }
    default:
      return { ...state };
  }
};

export default dashboard;
