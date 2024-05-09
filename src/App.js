import React from "react";
import QmBare from "./components/QmBare";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App(env) {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/qmgr/tu/QM.BARE.TU">
          <QmBare />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

function Home() {
  return <h1>Bem-vindo</h1>
}

export default App