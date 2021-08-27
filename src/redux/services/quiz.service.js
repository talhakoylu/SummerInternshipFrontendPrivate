import ApiService from "../../services/api.service";

class QuizService {
    list = (query) => {
        return ApiService.get("/quiz/quiz-list-all");
    };
    lastQuizByBook = (book) => {
        return ApiService.get("/quiz/get-last-enabled-quiz-by-book-id/" + book);
    };
}

const quizService = new QuizService();
export default quizService;
