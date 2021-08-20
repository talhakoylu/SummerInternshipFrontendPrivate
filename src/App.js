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
import { setLanguage, setUser } from "./redux/actions/auth.action";
import { HttpService } from "./services";
import { AuthService } from "./redux/services";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

library.add(fab, fas, far);

function App() {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  useEffect(() => {
    (async () => {
      const lang = await localStorage.getItem("lang");
      const language = lang || "tr";
      HttpService.client.defaults.headers["Accept-Language"] = language;
      dispatch(setLanguage(language));
      i18n.changeLanguage(language);

      const token = await localStorage.getItem("token");
      if (token) {
        const user = await localStorage.getItem("user");
        dispatch(setUser(JSON.parse(user)));
        HttpService.client.defaults.headers.common["Authorization"] =
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
