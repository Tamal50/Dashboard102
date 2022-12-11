import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home/Home';
import Student from './Home/component/Student/Student';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/student/dashboard/all">
            <Student />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
