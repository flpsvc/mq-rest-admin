import React from "react";
import QueueManager from "./components/QueueManager";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/queue-managers/tu">
          <QueueManager />
        </Route>
        <Route path="/queue-managers/ti">
          <QueueManager />
        </Route>
        <Route path="/queue-managers/tu">
          <QueueManager />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

function Home(){
  return <h1>Home</h1>
}

export default App