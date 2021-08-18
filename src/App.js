import logo from './logo.svg';
import './App.css';
import './assets/scss/index.scss'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'
import { Alert } from "react-bootstrap";
import Header from './components/partials/Header';
library.add(fab, fas, far)

function App() {
  return (
    <div className="App">
      <Header></Header>
    </div>
  );
}

export default App;
