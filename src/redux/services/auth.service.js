import ApiService from "../../services/api.service";

class AuthService {
  token = ({ data }) => {
    return ApiService.post("/token/", data);
  };
  register = ({ data }) => {
    return ApiService.post("/account/register", data);
  };
  me = () => {
    return ApiService.get("/account/me");
  };
}

const authService = new AuthService();
export default authService;