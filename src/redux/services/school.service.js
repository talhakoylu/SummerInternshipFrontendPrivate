import ApiService from "../../services/api.service";

class SchoolService {
  list = () => {
    return ApiService.get("/school/school-list");
  };
  classList = () => {
    return ApiService.get("/school/class-list-by-instructor");
  };
  classAdd = (payload) => {
    return ApiService.post("/school/class-add", payload);
  };
  classUpdate = (id, payload) => {
    return ApiService.patch("/school/class-update/" + id, payload);
  };
  classDelete = (id) => {
    return ApiService.delete("/school/class-update/" + id);
  };
  studentListByClassInstructor = () => {
    return ApiService.get("/school/student-list-by-class-instructor");
  };
  addStudentListItem = (payload) => {
    return ApiService.post("/school/add-student-list-item", payload);
  };
  getClassReadingHistoryByInstructor = () => {
    return ApiService.get(
      "/school/reports/get-class-reading-history-by-instructor"
    );
  };
  getClassQuizHistoryByInstructor = () => {
    return ApiService.get(
      "/school/reports/get-class-quiz-history-by-instructor"
    );
  };
  studentListItemDestroy = (classId, childId) => {
    return ApiService.delete(
      "/school/student-list-item-destroy/" + classId + "-" + childId
    );
  };
}

const schoolService = new SchoolService();
export default schoolService;
