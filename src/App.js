import React, { Component } from "react";
import "./App.css";
import Employees from "./components/employees";
import Employee from "./components/employee";
import Popmodal from "./utils/popmodal";
import empData, { empColumns } from "./utils/data";

class App extends Component {
  static defaultProps = { currentID: 0 };

  constructor() {
    super();

    this.state = {
      empData: empData,
      empColumns: empColumns,
      empDetRow: empData[0],
      showModal: false,
      newAdd: false,
    };

    App.defaultProps.currentID =
      this.state.empData.length > 0
        ? this.state.empData[this.state.empData.length - 1]._id + 1
        : 1;
  }

  handleDelete = (row) => {
    const empData = this.state.empData.filter((emp) => emp._id !== row._id);

    this.setState({ empData });
    this.setState({ empDetRow: empData[0] });
  };

  handleTableClick = (row) => {
    this.setState({ empDetRow: row });
  };

  onClose = (e) => {
    e.preventDefault();
    this.setState({
      showModal: !this.state.showModal,
      newAdd: false,
    });
  };

  handleEdit = (row) => {
    this.setState({
      showModal: true,
      newAdd: false,
      empDetRow: row,
    });
  };

  handleNewAdd = (e) => {
    e.preventDefault();

    App.defaultProps.currentID =
      this.state.empData.length > 0
        ? this.state.empData[this.state.empData.length - 1]._id + 1
        : 1;
    
    this.setState({ showModal: true, newAdd: true });
   
  };

  onSubmit = (data, e, currentRow, newEditFlag) => {
    //alert(mob);
    e.preventDefault();
    if (newEditFlag === "edit") {
      const empDetRow = { ...currentRow };
      empDetRow.mob = data;

      const empData = [...this.state.empData];
      const index = empData.indexOf(currentRow);
      empData[index] = { ...currentRow };
      empData[index].mob = data;

      const showModal = !{ ...this.state.showModal };
      this.setState({ empData, empDetRow, showModal });
    }
    if (newEditFlag === "new") {
      let dataArr = [];
      dataArr.push(data);
      this.setState({
        showModal: false,
        newAdd: false,
        empData: [...this.state.empData, ...dataArr],
      });
    }
  };

  render() {
    return (
      <div className="container">
        <Employees
          empColumns={this.state.empColumns}
          empData={this.state.empData}
          handleDelete={this.handleDelete}
          handleTableClick={this.handleTableClick}
          handleEdit={this.handleEdit}
          key={this.state.key}
        />
        <br />
        <Popmodal
          defaultProps={App.defaultProps}
          showModal={this.state.showModal}
          newAdd={this.state.newAdd}
          onClose={this.onClose}
          onSubmit={this.onSubmit}
        >
          {this.state.empDetRow}
        </Popmodal>
        <br />
        <Employee
          empDetRow={this.state.empDetRow}
          handleNewAdd={this.handleNewAdd}
        />
      </div>
    );
  }
}

export default App;
