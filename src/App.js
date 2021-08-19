import "./App.css";
import "./assets/scss/index.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Header from "./components/partials/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "react-notifications-component/dist/theme.css";
import { useDispatch } from "react-redux";
import Home from "./pages/Home";
import { useEffect } from "react";
import { setUser } from "./redux/actions/auth.action";
import httpService from "./services/http.service";
import { AuthService } from "./redux/services";
import { Col, Container, Row} from "react-bootstrap";

library.add(fab, fas, far);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const token = await localStorage.getItem("token");
      if (token) {
        const user = await localStorage.getItem("user");
        dispatch(setUser(JSON.parse(user)));
        httpService.client.defaults.headers.common["Authorization"] =
          "Bearer " + JSON.parse(token).access;

        AuthService.me()
          .then((res) => {
            dispatch(setUser(res.data));
          })
          .catch((err) => {
            localStorage.clear();
          })
          .finally(() => {});
      }
    })();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Container>
          <Row>
            <Col lg={9}>
              <Switch>
                <Route path="/authors">authors</Route>
                <Route path="/books">books</Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </Col>

            <Col lg={3}>sidebar</Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
