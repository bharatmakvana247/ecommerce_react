import React, { Component } from "react";
import Header from "../../themes/Header";
import MenuBar from "../../themes/MenuBar";
import Footer from "../../themes/Footer";
import Service from "../../Actions/Service";
import { toast } from "react-toastify";
class AddCategory extends Component {
  state = {
    category_name: "",
    category_name_error: "",
  };
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  saveCategory = async (e) => {
    e.preventDefault();
    if (this.state.category_name) {
      var data = {
        category_name: this.state.category_name,
      };
      Service.CreateCategory(data).then((res) => {
        if (res.data.status === "success") {
          toast.success("Category Insert Record", {
            position: toast.POSITION.TOP_RIGHT,
          });
          this.setState({
            category_name: "",
          });

          this.props.history.push("/view-category");
        }
      });
    } else {
      this.setState({
        category_name_error: "Please Enter Category Name",
      });
      setTimeout(() => {
        this.setState({
          category_name_error: "",
        });
      }, 2000);
      toast.error("Category Not Insert Record", {
        position: toast.POSITION.TOP_RIGHT,
      });
      this.props.history.push("/add-category");
    }
  };
  render() {
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
                    <h3 className="block-title">Add Category</h3>
                  </div>
                  <div className="block-content block-content-full">
                    <div className="block block-rounded">
                      <div className="block-content block-content-full">
                        <form method="post" onSubmit={this.saveCategory}>
                          <div className="row">
                            <div className="col-lg-4">
                              <label
                                className="form-label"
                                for="example-text-input-valid"
                              >
                                Category Name
                              </label>
                            </div>
                            <div className="mb-4">
                              <input
                                type="text"
                                className="form-control is-valid"
                                id="example-text-input-valid"
                                name="category_name"
                                placeholder="Category Name..."
                                onChange={this.handleInput}
                                value={this.state.category_name}
                              />
                              <div
                                className="invalid-feedback"
                                style={{ display: "block" }}
                              >
                                {this.state.category_name_error}
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-6 col-xl-4">
                              <button className="btn btn-primary">Save</button>
                              <button
                                className="btn btn-danger"
                                style={{ marginLeft: "5px" }}
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
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

export default AddCategory;
