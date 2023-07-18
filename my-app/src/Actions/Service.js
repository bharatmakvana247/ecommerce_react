import axios from "axios";
const API_BASE_URL = "http://127.0.0.1:8000/api/";
class Service {
  getCategory() {
    return axios.get(API_BASE_URL + "category/");
  }
  CreateCategory(data) {
    return axios.post(API_BASE_URL + "add-category/", data);
  }
  getdeleteCategoryById(id) {
    return axios.post(API_BASE_URL + "delete-category/" + id);
  }
}

export default new Service();
