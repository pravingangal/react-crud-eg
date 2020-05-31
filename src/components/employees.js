import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";

export default class Employees extends Component {
  rowEvents = {
    onClick: (e, row, rowIndex) => {
      const { handleDelete, handleEdit, handleTableClick } = this.props;
      handleTableClick(row);
      if (e.target.innerText === "Delete") handleDelete(row);
      if (e.target.innerText === "Edit") handleEdit(row);
    },
  };

  render() {
    return (
      <div className="table-responsive">
        {
          <BootstrapTable
            keyField="_id"
            data={this.props.empData}
            columns={this.props.empColumns}
            striped
            hover
            condensed
            rowEvents={this.rowEvents}
            responsive
          />
        }
      </div>
    );
  }
}
