import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";
import { getRow, getTickets } from "../../actions/dashboard/index";
import { statusDef, priorityDef } from "../../constants";

const Tickets = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.dashboard.tickets);
  const {UserType, id} = useSelector(state => state.dashboard.userData);
  
  useEffect(() => {
    dispatch(getTickets({ uid: id, userType: UserType }));
  }, [])

  const handleRow = async row => {
    dispatch(getRow({id:row._id}));
  };

  return (
    <div className="desk-container">
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Subject</th>
            <th>Status</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr>
              <td>
                <Link
                  to={`/ticketDetails/${item.uid}`}
                  onClick={() => handleRow(item)}
                >
                  {item.uid}
                </Link>
              </td>
              <td>{item.fullName}</td>
              <td>{item.subject}</td>
              <td>{statusDef[item.status]}</td>
              <td>{priorityDef[item.priority]}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Tickets;
