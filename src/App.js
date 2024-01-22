import React from "react";
import Queues from "./components/Queues";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/queue-managers">queue managers</Link>
            </li>
            <li>
              <Link to="/queues">queues</Link>
            </li>
            <li>
              <Link to="/channels">channels</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/queue-managers">
            <QueueManagers />
          </Route>
          <Route path="/queues">
            <Queues />
          </Route>
          <Route path="/channels">
            <Channels />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function QueueManagers() {
  return <h2>queue managers</h2>;
}

function IbmQueues() {
  return (
    <Queues />
  )
}

function Channels() {
  return <h2>channels</h2>;
}