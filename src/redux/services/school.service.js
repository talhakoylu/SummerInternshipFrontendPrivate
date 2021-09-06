import ApiService from "../../services/api.service";

class SchoolService {
  list = () => {
    return ApiService.get("/school/school-list");
  };
}

const schoolService = new SchoolService();
export default schoolService;
