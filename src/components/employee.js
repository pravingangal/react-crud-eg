import React, { Component } from "react";

export class Employee extends Component {
  render() {
    const { empDetRow, handleNewAdd } = this.props;
    return (
      <div>
        Emp details :{JSON.stringify(this.getEmpDets(empDetRow))}
        <br />
        {
          <button
            className="btn btn-success btn-sm"
            style={{ margin: "10px", left: "40%", position: "relative" }}
            onClick={(e) => handleNewAdd(e)}
          >
            Add
          </button>
        }
      </div>
    );
  }

  getEmpDets = (empDetRow) => {
    return empDetRow ? empDetRow : "....No Data Available";
  };
}

export default Employee;
