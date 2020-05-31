import React, { Component } from "react";

import "./modal.css";

export default class Popmodal extends Component {
  constructor(props) {
    super(props);

    let rowObj = JSON.parse(JSON.stringify(props.children));

    this.state = { mob: rowObj.mob };
  }

  handleMobileChange = (e) => {
    this.setState({ mob: e.target.value });
  };
  handleNewAddChanges = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      _id: this.props.defaultProps.currentID,
    });
  };
  //componentWillReceiveProps deprecated in v 17 hence below workaround
  UNSAFE_componentWillReceiveProps(prevProps, nextProp) {
    if (prevProps.children) this.setState({ mob: prevProps.children.mob });
  }
  render() {
    const { onClose, onSubmit, newAdd, children, defaultProps } = this.props;
    //console.log("????????", children);

    let currentId = 1;
    if (children) {
      currentId = defaultProps.currentID;
    }

    return children && !!!newAdd ? (
      <div className={this.props.showModal ? "show" : "hide"}>
        <div className="topdivcls"></div>
        <div className="popmodalolaycls">
          <div className="popupmodalwprcls">
            <div className="popmodal">
              <a
                className="clcls"
                onClick={(e) => {
                  onClose(e);
                }}
                href="about:blank"
              >
                &times;
              </a>
              <div className="headcls"> Edit Values </div>
              <div className="maincls">
                <form name="frm1" id="frm1">
                  <div className="form-group">
                    {" "}
                    <label htmlFor="emp_id">Id : </label>
                    {children._id}
                  </div>
                  <div className="form-group">
                    {" "}
                    <label htmlFor="name">Name : </label>
                    {children.name}
                  </div>
                  <div className="form-group">
                    {" "}
                    <label htmlFor="mobile">Mobile : </label>
                    <input
                      type="textbox"
                      className="form-control"
                      id="mobile"
                      placeholder="Mobile"
                      value={this.state.mob}
                      onChange={this.handleMobileChange}
                    />
                  </div>
                  <div className="form-group">
                    {" "}
                    <label htmlFor="email">Email : </label>
                    {children.email}
                  </div>
                  <div className="form-group">
                    {" "}
                    <label htmlFor="position">Position : </label>
                    {children.position}
                  </div>
                  <div className="form-group">
                    {" "}
                    <label htmlFor="dept">Dept : </label>
                    {children.dept}
                  </div>
                  <div className="form-group">
                    {" "}
                    <label htmlFor="sal">Sal : </label>
                    {children.sal}
                  </div>
                  <div className="form-group">
                    {" "}
                    <label htmlFor="status">Status : </label>
                    {children.status}
                  </div>
                  <button
                    onClick={(e) => onClose(e)}
                    className="btn btn-primary btn-sm "
                  >
                    Close
                  </button>
                  &nbsp;
                  <button
                    type="submit"
                    className="btn btn-success btn-sm"
                    onClick={(e) =>
                      onSubmit(this.state.mob, e, this.props.children, "edit")
                    }
                  >
                    Submit Edit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : newAdd ? (
      <div className={this.props.showModal ? "show" : "hide"}>
        <div className="topdivcls"></div>
        <div className="popmodalolaycls">
          <div className="popupmodalwprcls">
            <div className="popmodal">
              <a
                className="clcls"
                onClick={(e) => {
                  onClose(e);
                }}
                href="about:blank"
              >
                &times;
              </a>
              <div className="headcls"> Add Values </div>
              <div className="maincls newaddcls">
                <form name="frm1" id="frm1">
                  <div className="form-group">
                    {" "}
                    <label htmlFor="id">Id : </label>
                    {currentId}
                  </div>
                  <div className="form-group">
                    {" "}
                    <label htmlFor="name">Name : </label>
                    <input
                      type="textbox"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Name"
                      onChange={this.handleNewAddChanges}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="mobile">Mobile : </label>
                    <input
                      type="textbox"
                      className="form-control"
                      id="mob"
                      name="mob"
                      placeholder="Mobile"
                      onChange={this.handleNewAddChanges}
                    />
                  </div>
                  <div className="form-group">
                    {" "}
                    <label htmlFor="email">Email : </label>
                    <input
                      type="textbox"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="email"
                      onChange={this.handleNewAddChanges}
                    />
                  </div>
                  <div className="form-group">
                    {" "}
                    <label htmlFor="position">Position : </label>
                    <input
                      type="textbox"
                      className="form-control"
                      id="position"
                      name="position"
                      placeholder="position"
                      onChange={this.handleNewAddChanges}
                    />
                  </div>
                  <div className="form-group">
                    {" "}
                    <label htmlFor="dept">Dept : </label>
                    <input
                      type="textbox"
                      className="form-control"
                      id="dept"
                      name="dept"
                      placeholder="dept"
                      onChange={this.handleNewAddChanges}
                    />
                  </div>
                  <div className="form-group">
                    {" "}
                    <label htmlFor="sal">Sal : </label>
                    <input
                      type="textbox"
                      className="form-control"
                      id="sal"
                      name="sal"
                      placeholder="sal"
                      onChange={this.handleNewAddChanges}
                    />
                  </div>
                  <div className="form-group">
                    {" "}
                    <label htmlFor="status">Status : </label>
                    <input
                      type="textbox"
                      className="form-control"
                      id="status"
                      name="status"
                      placeholder="status"
                      onChange={this.handleNewAddChanges}
                    />
                  </div>
                  <button
                    onClick={(e) => onClose(e)}
                    className="btn btn-primary btn-sm "
                  >
                    Close
                  </button>
                  &nbsp;
                  <button
                    type="submit"
                    className="btn btn-success btn-sm"
                    onClick={(e) => onSubmit(this.state, e, null, "new")}
                  >
                    Submit New
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : null;
  }
}
