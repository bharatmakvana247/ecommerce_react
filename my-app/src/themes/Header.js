import React, { Component } from "react";
import { Link } from "react-router-dom";
import Notifications from "./Notification";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Header extends Component {
  render() {
    return (
      <div>
        <ToastContainer />
        <header id="page-header">
          <div className="content-header">
            <div className="d-flex align-items-center">
              <Link
                className="fw-semibold fs-5 tracking-wider text-dual me-3"
                to={"/"}
              >
                One<span className="fw-normal">UI</span>
              </Link>

              <Notifications />
            </div>
            <div className="d-flex align-items-center">
              <div className="dropdown d-inline-block ms-2">
                <button
                  type="button"
                  className="btn btn-sm btn-alt-secondary d-flex align-items-center"
                  id="page-header-user-dropdown"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    className="rounded-circle"
                    src="assets/media/avatars/avatar10.jpg"
                    alt="Header Avatar"
                    style={{ width: "21px" }}
                  />
                  <span className="d-none d-sm-inline-block ms-2">John</span>
                  <i className="fa fa-fw fa-angle-down d-none d-sm-inline-block opacity-50 ms-1"></i>
                </button>
                <div
                  className="dropdown-menu dropdown-menu-md dropdown-menu-end p-0 border-0"
                  aria-labelledby="page-header-user-dropdown"
                >
                  <div className="p-3 text-center bg-body-light border-bottom rounded-top">
                    <img
                      className="img-avatar img-avatar48 img-avatar-thumb"
                      src="assets/media/avatars/avatar10.jpg"
                      alt=""
                    />
                    <p className="mt-2 mb-0 fw-medium">John Smith</p>
                    <p className="mb-0 text-muted fs-sm fw-medium">
                      Web Developer
                    </p>
                  </div>
                  <div className="p-2">
                    <Link
                      className="dropdown-item d-flex align-items-center justify-content-between"
                      to={"#"}
                    >
                      <span className="fs-sm fw-medium">Profile</span>
                      <span className="badge rounded-pill bg-primary ms-2">
                        1
                      </span>
                    </Link>
                    <Link
                      className="dropdown-item d-flex align-items-center justify-content-between"
                      to={"#"}
                    >
                      <span className="fs-sm fw-medium">Log Out</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
