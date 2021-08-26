import "./App.css";
import "./assets/scss/index.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Header from "./components/partials/Header";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "react-notifications-component/dist/theme.css";
import { useDispatch, useSelector } from "react-redux";
import HomePage from "./pages/HomePage";
import { useEffect } from "react";
import { setLanguage, setUser } from "./redux/actions/auth.action";
import { HttpService } from "./services";
import { AuthService } from "./redux/services";
import { useTranslation } from "react-i18next";
import FullWidthLayoutRoute from "./layouts/FullWidthLayout";
import LayoutWidthSidebarRoute from "./layouts/LayoutWithSidebar";
import BooksPage from "./pages/BooksPage";
import localStorageClear from "./plugins/localStorageClear";
import Footer from "./components/partials/Footer";

library.add(fab, fas, far);

function App() {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const lang = localStorage.getItem("lang");
  const fetching = useSelector((state) => state.auth.fetching);

  // Checks the token data and preferred language data in this useEffect function.
  // If user token expired, localStorage will be cleared.
  useEffect(() => {
    (async () => {
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
            localStorageClear();
          })
          .finally(() => {});
      }
    })();
  }, [lang]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="App">
      <Router>
        <div>
          <div className={"min-vh-100 d-flex flex-column"}>
            <Header></Header>
            <div style={{ flex: 1 }} className={"position-relative"}>
              {fetching && (
                <div
                  className={
                    "position-absolute bg-white w-100 h-100 d-flex justify-content-center align-items-center"
                  }
                  style={{ zIndex: 20 }}
                >
                  <img
                    className={"d-inline-block"}
                    src={"/fetching.svg"}
                    alt="Loading"
                  />
                </div>
              )}
              <Switch>
                <FullWidthLayoutRoute path="/authors">
                  authors
                </FullWidthLayoutRoute>
                <LayoutWidthSidebarRoute
                  path="/books"
                  component={BooksPage}
                ></LayoutWidthSidebarRoute>
                <FullWidthLayoutRoute
                  path="/"
                  component={HomePage}
                ></FullWidthLayoutRoute>
              </Switch>
            </div>
            <Footer />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
