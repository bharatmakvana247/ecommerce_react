import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
class Footer extends Component {
  render() {
    return (
      <div>
        <footer id="page-footer" className="bg-body-extra-light">
          <div className="content py-3">
            <div className="row fs-sm">
              <div className="col-sm-6 order-sm-2 py-1 text-center text-sm-end">
                Crafted with <i className="fa fa-heart text-danger"></i> by
                <Link
                  className="fw-semibold"
                  to={"https://1.envato.market/ydb"}
                  target="_blank"
                >
                  pixelcave
                </Link>
              </div>
              <div className="col-sm-6 order-sm-1 py-1 text-center text-sm-start">
                <Link
                  className="fw-semibold"
                  to={"https://1.envato.market/AVD6j"}
                  target="_blank"
                >
                  OneUI 5.4
                </Link>
                &copy; <span data-toggle="year-copy"></span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
