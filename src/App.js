import React from "react";
import "./App.css";
import Home from "./Home";
import Navbar from "./components/navbar/navbar";
import { Switch, Route } from "react-router-dom";
import "./Style.css";
import NotFound from "./notFound";
import Aicdmbold from "./aicdmb20";
import PapersPage from "./papers";
import Publication from "./publication";
import TopicsPage from "./topicspage";
import Footer from "./Footer";
import Organizers from "./Organizers";
import Register from "./register";
import Aicdmb21 from "./Aicdmb21";
import Aicdmb22 from "./Aicdmb22";
import Guidelines from "./Guidelines";

function App() {
  return (
    <div className="root-file">
      <Navbar />
      <Switch>
        <Route exact path="/guidelines">
          <Guidelines />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/committee">
          <Organizers />
        </Route>
        <Route exact path="/topics">
          <TopicsPage />
        </Route>
        <Route exact path="/publication">
          <Publication />
        </Route>
        <Route exact path="/papers">
          <PapersPage />
        </Route>
        <Route exact path="/aicdmb20">
          <Aicdmbold />
        </Route>
        <Route exact path="/aicdmb21">
          <Aicdmb21 />
        </Route>
        <Route exact path="/aicdmb22">
          <Aicdmb22 />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
