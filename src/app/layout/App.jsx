import React from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashbord/EventDashboard";
import NavBar from "../../features/nav/NavBar";
import { Route } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import EventDetailedPage from "../../features/events/eventDetailed/EventDetailedPage";
import EventForm from "../../features/events/eventForm/EventForm";
import Sandbox from "../../features/sandbox/Sandbox";

function App() {
  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar />
            <Container className="main">
              <Route exact path="/events" component={EventDashboard} />
              <Route path="/events/:id" component={EventDetailedPage} />
              <Route
                path={["/createEvent", "/manageEvent"]}
                component={EventForm}
              />
              <Route path="/sandbox" component={Sandbox} />
            </Container>
          </>
        )}
      />
    </>
  );
}

export default App;
