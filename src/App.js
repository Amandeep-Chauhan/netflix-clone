import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import HomeScreen from "./pages/homescreen/HomeScreen";
import Welcome from "./pages/welcome/welcome";
import Signup from "./components/signup/Signup";
import Signin from "./components/signin/signin";
import { auth } from "./firebase";

function App() {
  const [currentUser, setCurrentUser] = useState(false);

  auth.onAuthStateChanged((user) => {
    console.log(user);
    if (user) {
      setCurrentUser(true);
    } else {
      setCurrentUser(false);
    }
  });

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={Welcome} />

          <Route path="/signin" component={Signin} />

          <Route
            exact
            path="/signin"
            render={() =>
              currentUser ? <Redirect to="/browse" /> : <Signin />
            }
          />

          <Route path="/signup" component={Signup} />

          <Route path="/browse" component={HomeScreen} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
