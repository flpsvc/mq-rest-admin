import React from "react";
import Queues from "./pages/Queues";
import Channels from "./pages/Channels";
import QueueManager from "./pages/QueueManager";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/queue-managers">
          <QueueManager />
        </Route>
        <Route path="/queues">
          <Queues />
        </Route>
        <Route path="/channels">
          <Channels />
        </Route>        
      </Switch>
      <Footer />
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function IbmQueueManager() {
  return (
    <QueueManager />
  )
}

function IbmQueues() {
  return (
    <Queues />
  )
}

function IbmChannels() {
  return(
    <Channels />  
  )
}

export default App