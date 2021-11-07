import axios from "axios";

class ProductDataService {
    retrieveAllProducts() {
        return axios.get("http://localhost:8080/api/v1/products")
    }
}

export default new ProductDataService()