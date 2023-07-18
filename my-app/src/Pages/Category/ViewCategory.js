import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../themes/Header";
import MenuBar from "../../themes/MenuBar";
import Footer from "../../themes/Footer";
import Service from "../../Actions/Service";
import loaderImg from "../Category/loader/loader.gif";
import moment from "moment";
import swal from "sweetalert";
import { toast } from "react-toastify";

class ViewCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
      connection: false,
      loader: false,
    };
  }

  // First call Default
  componentDidMount() {
    this.CategoryGet();
  }

  // to view Data
  CategoryGet() {
    this.setState({
      loader: false,
    });
    setTimeout(() => {
      this.setState({ loader: true });
    }, 1000);
    Service.getCategory().then((res) => {
      if (res.data.status === "success") {
        this.setState({
          category: res.data.categories,
          notrecordloading: true,
          connection: true,
        });
      } else {
        this.setState({
          category: [],
          notrecordloading: false,
          connection: true,
        });
      }
    });
  }

  //to Delete Data
  deleteCategory = async (categoryId) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this category!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        try {
          Service.getdeleteCategoryById(categoryId).then((res) => {
            swal("Category Item Delete Successfully", {
              icon: "success",
            });
            toast.success("Category Item Delete Successfully", {
              position: toast.POSITION.TOP_RIGHT,
            });
            this.CategoryGet();
          });
        } catch (error) {
          console.error("Error deleting category:", error);
          // Show error message using SweetAlert
          swal(
            "Oops! Something went wrong.",
            "Unable to delete the category.",
            "error"
          );
          this.CategoryGet();
        }
      } else {
        swal("Your category is safe!");
        toast.error("Your category is safe!", {
          position: toast.POSITION.TOP_RIGHT,
        });
        this.CategoryGet();
      }
    });
  };

  render() {
    var category_HTMLTABLE = "";
    if (this.state.connection) {
      if (this.state.notrecordloading) {
        category_HTMLTABLE = this.state.category.map((item, i) => {
          return (
            <tr key={i}>
              <td>#{i + 1}</td>
              <td>{item.category_name}</td>
              <td>{moment(item.created_at).format("dddd-MMMM-YYYY")}</td>
              <td>
                <Link
                  className="btn btn-sm btn-warning"
                  to={"#"}
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  title="Manage"
                >
                  <i className="fa fa-fw fa-pencil-alt"></i>
                </Link>
                <Link
                  className="btn btn-sm btn-danger"
                  to={"#"}
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  title="Manage"
                  style={{ marginLeft: "5px" }}
                  onClick={() => this.deleteCategory(item.category_id)}
                >
                  <i className="fa fa-fw fa-trash"></i>
                </Link>
              </td>
            </tr>
          );
        });
      } else {
        category_HTMLTABLE = (
          <tr>
            <td colSpan={4} style={{ textAlign: "center" }}>
              <b>Data Not Found...</b>
            </td>
          </tr>
        );
      }
    } else {
      category_HTMLTABLE = (
        <tr>
          <td colSpan={4} style={{ textAlign: "center" }}>
            <b>Connection Not Found...</b>
          </td>
        </tr>
      );
    }
    return (
      <div id="page-container" className="page-header-dark main-content-boxed">
        <Header />
        <main id="main-container">
          <MenuBar />
          <div className="content">
            <div className="row items-push">
              <div className="col-lg-12">
                <div className="block block-rounded block-mode-loading-oneui h-100 mb-0">
                  <div className="block-header block-header-default">
                    <h3 className="block-title">View Category</h3>
                  </div>
                  <div className="block-content block-content-full">
                    <table className="table table-striped table-hover table-borderless table-vcenter fs-sm mb-0">
                      <thead>
                        <tr className="text-uppercase">
                          <th className="fw-bold">ID</th>
                          <th className="fw-bold">Category Name</th>
                          <th className="fw-bold">Date</th>
                          <th className="fw-bold"> Action </th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.loader ? (
                          category_HTMLTABLE
                        ) : (
                          <tr>
                            <td colSpan={4} style={{ textAlign: "center" }}>
                              <img
                                src={loaderImg}
                                alt="Loading..."
                                style={{ height: "50px", width: "50px" }}
                              />
                            </td>
                          </tr>
                        )}
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

export default ViewCategory;
