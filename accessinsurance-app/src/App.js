import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Redirect, Link, Route, Switch } from "react-router-dom";
import Careers from "./components/careers/Careers";
import Services from "./components/services/Services";
import Login, { fakeAuth } from "./components/myaccount/Login";

export default function App() {
  return (
    <div>
      <nav className="navbar navbar">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Homes</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/admin">Admin area</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route path="/category" component={Careers} />
        <PrivateRoute path="/admin" component={Admin} />
        <Route path="/products" component={Services} />
      </Switch>
    </div>
  );
}

/* PrivateRoute component definition */
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

//Home component
const Home = props => (
  <div>
    <h2>Home {console.log(props)}</h2>
  </div>
);

//Admin component
const Admin = ({ match }) => {
  return (
    <div>
      {" "}
      <h2>Welcome admin </h2>
    </div>
  );
};
