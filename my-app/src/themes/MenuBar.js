import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
class MenuBar extends Component {
  render() {
    return (
      <div className="bg-primary-darker">
        <div className="bg-black-10">
          <div className="content py-3">
            <div className="d-lg-none">
              <button
                type="button"
                className="btn w-100 btn-alt-secondary d-flex justify-content-between align-items-center"
                data-toggle="class-toggle"
                data-target="#main-navigation"
                data-class="d-none"
              >
                Menu
                <i className="fa fa-bars"></i>
              </button>
            </div>
            <div
              id="main-navigation"
              className="d-none d-lg-block mt-2 mt-lg-0"
            >
              <ul className="nav-main nav-main-dark nav-main-horizontal nav-main-hover">
                <li className="nav-main-item">
                  <Link className="nav-main-link active" to={"/"}>
                    <i className="nav-main-link-icon si si-compass"></i>
                    <span className="nav-main-link-name">Dashboard</span>
                  </Link>
                </li>
                <li className="nav-main-item">
                  <Link
                    className="nav-main-link nav-main-link-submenu"
                    data-toggle="submenu"
                    aria-haspopup="true"
                    aria-expanded="false"
                    to={"#"}
                  >
                    <i className="nav-main-link-icon si si-puzzle"></i>
                    <span className="nav-main-link-name">Pages</span>
                  </Link>
                  <ul className="nav-main-submenu">
                    <li className="nav-main-item">
                      <Link
                        className="nav-main-link nav-main-link-submenu"
                        data-toggle="submenu"
                        aria-haspopup="true"
                        aria-expanded="false"
                        to={"#"}
                      >
                        <span className="nav-main-link-name">Category</span>
                      </Link>
                      <ul className="nav-main-submenu">
                        <li className="nav-main-item">
                          <Link className="nav-main-link" to={"add-category"}>
                            <span className="nav-main-link-name">
                              Add Category
                            </span>
                          </Link>
                        </li>
                        <li className="nav-main-item">
                          <Link className="nav-main-link" to={"view-category"}>
                            <span className="nav-main-link-name">
                              View Category
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-main-item">
                  <Link
                    className="nav-main-link nav-main-link-submenu"
                    data-toggle="submenu"
                    aria-haspopup="true"
                    aria-expanded="false"
                    to={"#"}
                  >
                    <i className="nav-main-link-icon si si-puzzle"></i>
                    <span className="nav-main-link-name">Options</span>
                  </Link>
                  <ul className="nav-main-submenu">
                    <li className="nav-main-item">
                      <Link className="nav-main-link" to={"#"}>
                        <span className="nav-main-link-name">Add Options</span>
                      </Link>
                    </li>
                    <li className="nav-main-item">
                      <Link className="nav-main-link" to={"#"}>
                        <span className="nav-main-link-name">View Options</span>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuBar;
