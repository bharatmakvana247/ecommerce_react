import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
class Notifications extends Component {
  render() {
    return (
      <div className="dropdown d-inline-block me-2">
        <button
          type="button"
          className="btn btn-sm btn-alt-secondary"
          id="page-header-notifications-dropdown"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i className="fa fa-fw fa-bell"></i>
          <span className="text-primary">•</span>
        </button>
        <div
          className="dropdown-menu dropdown-menu-lg p-0 border-0 fs-sm"
          aria-labelledby="page-header-notifications-dropdown"
        >
          <div className="p-2 bg-body-light border-bottom text-center rounded-top">
            <h5 className="dropdown-header text-uppercase">Notifications</h5>
          </div>
          <ul className="nav-items mb-0">
            <li>
              <Link className="text-dark d-flex py-2" to={"#"}>
                <div className="flex-shrink-0 me-2 ms-3">
                  <i className="fa fa-fw fa-check-circle text-success"></i>
                </div>
                <div className="flex-grow-1 pe-2">
                  <div className="fw-semibold">You have a new follower</div>
                  <span className="fw-medium text-muted">15 min ago</span>
                </div>
              </Link>
            </li>
            <li>
              <Link className="text-dark d-flex py-2" to={"#"}>
                <div className="flex-shrink-0 me-2 ms-3">
                  <i className="fa fa-fw fa-plus-circle text-primary"></i>
                </div>
                <div className="flex-grow-1 pe-2">
                  <div className="fw-semibold">1 new sale, keep it up</div>
                  <span className="fw-medium text-muted">22 min ago</span>
                </div>
              </Link>
            </li>
            <li>
              <Link className="text-dark d-flex py-2" to={"#"}>
                <div className="flex-shrink-0 me-2 ms-3">
                  <i className="fa fa-fw fa-times-circle text-danger"></i>
                </div>
                <div className="flex-grow-1 pe-2">
                  <div className="fw-semibold">
                    Update failed, restart server
                  </div>
                  <span className="fw-medium text-muted">26 min ago</span>
                </div>
              </Link>
            </li>
            <li>
              <Link className="text-dark d-flex py-2" to={"#"}>
                <div className="flex-shrink-0 me-2 ms-3">
                  <i className="fa fa-fw fa-user-plus text-success"></i>
                </div>
                <div className="flex-grow-1 pe-2">
                  <div className="fw-semibold">You have a new subscriber</div>
                  <span className="fw-medium text-muted">41 min ago</span>
                </div>
              </Link>
            </li>
          </ul>
          <div className="p-2 border-top text-center">
            <Link className="d-inline-block fw-medium" to={"#"}>
              <i className="fa fa-fw fa-arrow-down me-1 opacity-50"></i>
              Load More..
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Notifications;
