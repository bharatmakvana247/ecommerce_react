import React, { Component } from "react";
import Header from "../themes/Header";
import MenuBar from "../themes/MenuBar";
import Footer from "../themes/Footer";
import { Link } from "react-router-dom/cjs/react-router-dom";
class Home extends Component {
  render() {
    return (
      <div id="page-container" className="page-header-dark main-content-boxed">
        <Header />
        <main id="main-container">
          <MenuBar />
          <div
            className="bg-video"
            data-vide-bg="assets/media/videos/hero_sunrise"
            data-vide-options="posterType: jpg"
          >
            <div className="bg-primary-dark-op">
              <div className="content content-full">
                <div className="py-5 text-center">
                  <h1 className="h3 fw-bold text-white mb-2">Dashboard</h1>
                  <h2 className="h6 fw-medium text-white-75 mb-0">
                    Welcome to your app, everything looks great!
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="row">
              <div className="col-6 col-md-3 col-lg-6 col-xl-3">
                <Link className="block block-rounded block-link-pop" to={"#"}>
                  <div className="block-content block-content-full">
                    <div className="fs-sm fw-semibold text-uppercase text-muted">
                      Visitors
                    </div>
                    <div className="fs-2 fw-normal text-dark">120,580</div>
                  </div>
                </Link>
              </div>
              <div className="col-6 col-md-3 col-lg-6 col-xl-3">
                <Link className="block block-rounded block-link-pop" to={"#"}>
                  <div className="block-content block-content-full">
                    <div className="fs-sm fw-semibold text-uppercase text-muted">
                      Sales
                    </div>
                    <div className="fs-2 fw-normal text-dark">150</div>
                  </div>
                </Link>
              </div>
              <div className="col-6 col-md-3 col-lg-6 col-xl-3">
                <Link className="block block-rounded block-link-pop" to={"#"}>
                  <div className="block-content block-content-full">
                    <div className="fs-sm fw-semibold text-uppercase text-muted">
                      Earnings
                    </div>
                    <div className="fs-2 fw-normal text-dark">$3,200</div>
                  </div>
                </Link>
              </div>
              <div className="col-6 col-md-3 col-lg-6 col-xl-3">
                <Link className="block block-rounded block-link-pop" to={"#"}>
                  <div className="block-content block-content-full">
                    <div className="fs-sm fw-semibold text-uppercase text-muted">
                      Avg Sale
                    </div>
                    <div className="fs-2 fw-normal text-dark">$21</div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="row items-push">
              <div className="col-lg-6">
                <div className="block block-rounded block-mode-loading-oneui h-100 mb-0">
                  <div className="block-header block-header-default">
                    <h3 className="block-title">Latest Customers</h3>
                  </div>
                  <div className="block-content block-content-full">
                    <table className="table table-striped table-hover table-borderless table-vcenter fs-sm mb-0">
                      <thead>
                        <tr className="text-uppercase">
                          <th className="fw-bold" style={{ width: "80px" }}>
                            ID
                          </th>
                          <th
                            className="d-none d-sm-table-cell fw-bold text-center"
                            style={{ width: "100px" }}
                          >
                            Photo
                          </th>
                          <th className="fw-bold">Name</th>
                          <th
                            className="d-none d-sm-table-cell fw-bold text-center"
                            style={{ width: "80px" }}
                          >
                            Orders
                          </th>
                          <th
                            className="fw-bold text-center"
                            style={{ width: "60px" }}
                          ></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <span className="fw-semibold">#01368</span>
                          </td>
                          <td className="d-none d-sm-table-cell text-center">
                            <img
                              className="img-avatar img-avatar32"
                              src="assets/media/avatars/avatar9.jpg"
                              alt=""
                            />
                          </td>
                          <td className="fw-semibold">Carl Wells </td>
                          <td className="d-none d-sm-table-cell text-center">
                            <Link className="link-fx fw-semibold" to={"#"}>
                              5
                            </Link>
                          </td>
                          <td className="text-center">
                            <Link
                              to={"#"}
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title="Edit"
                            >
                              <i className="fa fa-fw fa-pencil-alt"></i>
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="block block-rounded block-mode-loading-oneui h-100 mb-0">
                  <div className="block-header block-header-default">
                    <h3 className="block-title">Latest Orders</h3>
                  </div>
                  <div className="block-content block-content-full">
                    <table className="table table-striped table-hover table-borderless table-vcenter fs-sm mb-0">
                      <thead>
                        <tr className="text-uppercase">
                          <th className="fw-bold">ID</th>
                          <th className="d-none d-sm-table-cell fw-bold">
                            Date
                          </th>
                          <th className="fw-bold">State</th>
                          <th
                            className="d-none d-sm-table-cell fw-bold text-end"
                            style={{ width: "120px" }}
                          >
                            Price
                          </th>
                          <th
                            className="fw-bold text-center"
                            style={{ width: "60px" }}
                          ></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <span className="fw-semibold">#07835</span>
                          </td>
                          <td className="d-none d-sm-table-cell">
                            <span className="fs-sm text-muted">today</span>
                          </td>
                          <td>
                            <span className="fw-semibold text-warning">
                              Pending..
                            </span>
                          </td>
                          <td className="d-none d-sm-table-cell text-end">
                            $999,99
                          </td>
                          <td className="text-center">
                            <Link
                              to={"#"}
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title="Manage"
                            >
                              <i className="fa fa-fw fa-pencil-alt"></i>
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="fw-semibold">#07833</span>
                          </td>
                          <td className="d-none d-sm-table-cell">
                            <span className="fs-sm text-muted">today</span>
                          </td>
                          <td>
                            <span className="fw-semibold text-success">
                              Completed
                            </span>
                          </td>
                          <td className="d-none d-sm-table-cell text-end">
                            $1200,00
                          </td>
                          <td className="text-center">
                            <Link
                              to={"#"}
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title="Manage"
                            >
                              <i className="fa fa-fw fa-pencil-alt"></i>
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="fw-semibold">#07832</span>
                          </td>
                          <td className="d-none d-sm-table-cell">
                            <span className="fs-sm text-muted">today</span>
                          </td>
                          <td>
                            <span className="fw-semibold text-danger">
                              Cancelled
                            </span>
                          </td>
                          <td className="d-none d-sm-table-cell text-end">
                            $399,00
                          </td>
                          <td className="text-center">
                            <Link
                              to={"#"}
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title="Manage"
                            >
                              <i className="fa fa-fw fa-pencil-alt"></i>
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Home;
