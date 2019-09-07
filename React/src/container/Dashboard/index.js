import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayString: "0 Minutes"
    };
  }

  render() {
    const { tickets } = useSelector(state => state.dashboard);
    const columns = [
      {
        Header: "ID",
        accessor: "uid",
        Cell: row => <a href="#!">{row.value}</a>
      },
      {
        Header: "NAME",
        accessor: "fullName"
      },
      {
        Header: "Subject",
        accessor: "subject"
      },
      {
        Header: "STATUS",
        accessor: "status"
      },
      {
        Header: "PRIORITY",
        accessor: "priority"
      }
    ];
    return (
      <div>
        <ReactTable data={tickets} columns={columns} />
      </div>
    );
  }
}

export default DashBoard;
