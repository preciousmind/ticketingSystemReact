import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";
import { statusDef, priorityDef } from "../../constants";
import { getUsers } from "../../actions/dashboard/index";

const Users = () => {
  const dispatch = useDispatch();
  const { userList } = useSelector(state => state.dashboard);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div className="desk-container">
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>User Type</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {userList &&
            userList.map((item, index) => (
              <tr>
                <td>
                  <Link to={`/ticketDetails/${item.id}`}>{item.id}</Link>
                </td>
                <td>{item.fullName}</td>
                <td>{item.Email}</td>
                <td>{item.UserType}</td>
                <td>{statusDef[item.Status]}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Users;
