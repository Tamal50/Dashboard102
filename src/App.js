import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home/Home';
import Student from './Home/component/Student/Student';
import Newstudent from './Home/component/Student/Newstudent';
import Allcomputer from './Home/component/Computer/Allcomputer';
import ComputerBoooking from './Home/component/Computer/ComputerBoooking';


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
          <Route exact path="/student/dashboard/new">
            <Newstudent />
          </Route>
          <Route exact path="/computer/allcomputer">
            <Allcomputer />
          </Route>
          <Route exact path="/computer/booking">
            <ComputerBoooking />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
