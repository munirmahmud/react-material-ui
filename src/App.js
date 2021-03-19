import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/ui/Header";
import theme from "./components/ui/Theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />

      <Switch>
        <Route exact path="/" component={() => <h2>Home</h2>} />
        <Route exact path="/services" component={() => <h2>Services</h2>} />
        <Route
          exact
          path="/custom-software"
          component={() => <h2>Software</h2>}
        />
        <Route
          exact
          path="/mobile-apps"
          component={() => <h2>Mobile Apps</h2>}
        />
        <Route exact path="/websites" component={() => <h2>Websites</h2>} />
        <Route
          exact
          path="/revolution"
          component={() => <h2>The Revolution</h2>}
        />
        <Route exact path="/about" component={() => <h2>About Us</h2>} />
        <Route exact path="/contact" component={() => <h2>Contact</h2>} />
        <Route exact path="/estimate" component={() => <h2>Estimate</h2>} />
      </Switch>
    </ThemeProvider>
  );
};

export default App;
