import ApiService from "../../services/api.service";

class BookService {
  categoryList = () => {
    return ApiService.get("/book/category-list");
  };

}

const authService = new BookService();
export default authService;