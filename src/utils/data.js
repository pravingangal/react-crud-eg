import React from "react";

export const empColumns = [
  {
    dataField: "_id",
    text: "Emp Id",
  },
  {
    dataField: "name",
    text: "Employee Name",
  },
  {
    dataField: "mob",
    text: "Mobile #",
  },
  {
    dataField: "email",
    text: "Email",
  },
  {
    dataField: "position",
    text: "Position",
  },
  {
    dataField: "dept",
    text: "Department",
  },
  {
    dataField: "sal",
    text: "Salary",
  },
  {
    dataField: "status",
    text: "Status",
  },
  {
    dataField: "edit",
    text: "Edit",
    formatter: (cell, row) => {
      return (
        <div>
          <button
            type="button"
            className="btn btn-primary btn-sm ml-2 ts-buttom"
          >
            Edit
          </button>
          <button
            type="button"
            className="btn btn-outline-danger btn-sm ml-2 ts-buttom"
          >
            Delete
          </button>
        </div>
      );
    },
  },
];

const empData = [
  {
    _id: 1,
    name: "John Doe",
    mob: 1112223330,
    email: "john@abc.com",
    position: "Accountant",
    dept: "IT",
    sal: 15000,
    status: "Active",
  },
  {
    _id: 2,
    name: "Adam Smith",
    mob: 1112223331,
    email: "adam@abc.com",
    position: "Analyst",
    dept: "IT",
    sal: 35000,
    status: "Active",
  },
  {
    _id: 3,
    name: "Scot Turner",
    mob: 1112223332,
    email: "scot@abc.com",
    position: "Manager",
    dept: "IT",
    sal: 65000,
    status: "Active",
  },
  {
    _id: 4,
    name: "James Ford",
    mob: 1112223333,
    email: "james@abc.com",
    position: "Module Lead",
    dept: "IT",
    sal: 45000,
    status: "Active",
  },
  {
    _id: 5,
    name: "Robert Clark",
    mob: 1112223334,
    email: "bob@abc.com",
    position: "HR Head",
    dept: "HR",
    sal: 55000,
    status: "Active",
  },
];

export default empData;
