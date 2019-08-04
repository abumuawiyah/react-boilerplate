import React, { Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import Dashboard from "./pages/dashboard";
// import Profile from "./pages/profile";
import "./styles.css";
const Dashboard = lazy(() => import("./pages/dashboard"));
const Profile = lazy(() => import("./pages/profile"));

import("./utils/base").then(base => {
  // alert(base.add(16, 26));
});

const CounterContext = React.createContext({});

function useCounter() {
  const context = React.useContext(CounterContext);
  if (!context) {
    throw new Error(`useCount must be used within a CountProvider`);
  }
  const [count, setCount] = context;

  const increment = () => setCount(c => c + 1);
  return {
    count,
    setCount,
    increment
  };
}

function CounterProvider(props) {
  const [count, setCount] = React.useState(0);
  const value = React.useMemo(() => [count, setCount], [count]);
  return <CounterContext.Provider value={value} {...props} />;
}

function App() {
  const [test, setTest] = useState("test");

  return (
    <div className="App">
      <Router>
        <CounterProvider>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Profile</Link>
                </li>
                <li>
                  <Link to="/dashboard/">Dashboard</Link>
                </li>
              </ul>
            </nav>
          </div>

          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" component={Profile} />
              <Route path="/dashboard" component={Dashboard} />
            </Switch>
            {/* <Route
                path="/"
                exact
                render={props => {
                  return <Profile {...props} setTest={setTest} />;
                }}
              />
              <Route
                path="/dashboard/"
                render={props => {
                  return <Dashboard {...props} test={test} />;
                }}
              /> */}
          </Suspense>
        </CounterProvider>
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export { useCounter };
