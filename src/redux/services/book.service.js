import ApiService from "../../services/api.service";

class BookService {
  categoryList = () => {
    return ApiService.get("/book/category-list");
  };
  levelList = () => {
    return ApiService.get('/book/book-level-list')
  }
  languageList = () => {
    return ApiService.get("/book/book-language-list");
  };
  bookList = (query) => {
    return ApiService.get("/book/book-list?" + (query?.category ? "category=" + query?.category + "&": "") + (query?.level ? "level=" + query?.level + "&": "") + (query?.language ? "language=" + query?.language + "&": ""));
  };
}

const authService = new BookService();
export default authService;