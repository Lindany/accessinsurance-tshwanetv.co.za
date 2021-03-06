import React, { Component } from "react";
import "./App.scss";
import { Link } from 'react-router-dom'
import About from './components/about/About';
import Careers from './components/careers/Careers';
import Contacts from './components/contacts/Contact';
import FillMe from './components/fillme/FillMe';
import Products from './components/products/Products';
import Qoutes from './components/qoutes/Qoutes';
import Services from './components/services/Services';
import SignIn from './components/signin/Signin';
import SportMe from './components/sportme/SportMe';
import Login from './components/myaccount/Login';
import Account from './components/myaccount/Account';
import Home from './components/main/Home';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      page: 'About'
    };
  }

  handleMenuClick() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  handleLinkClick() {
    this.setState({ menuOpen: false });
  }

  gotoPage = () => {
    let a;
    switch (this.state.page) {
      case 'about':
        a = <About/>
       break;
      case 'contact':
        a = <Contacts/>
       break;
      case 'fillme':
        a =  <FillMe/>
       break;
      case 'products':
        a = <Products/>
       break;
      case 'qoutes':
        a = <Qoutes/>
        break;
      case 'login':
        a = <Login/>
       break;
      case 'sportme':
        a =  <SportMe/>
       break;
      case 'account':
        a =  <Account/>
       break;
      case 'services':
        a = <Services/>
        break;
      case 'signin':
        a = <SignIn/>
        break;
      case 'careers':
        a = <Careers/>
        break;
      default:
        a = <Home/>
        break;
    }
    return a
  }


  render() {
    const styles = {
      container: {
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: "99",
        opacity: 0.9,
        display: "flex",
        alignItems: "center",
        background: "black",
        width: "100%",
        color: "white",
        fontFamily: "Lobster",
      },
      logo: {
        margin: "0 auto",
      },
      body: {
        display: "flex",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        filter: this.state.menuOpen ? "blur(2px)" : null,
        transition: "filter 0.5s ease",
      },
    };

    const menu = ["About Us", "Services",  "Our Products","SportMe", "FillMe", "Careers", "Our Partners","My Account", "Contact Us"];
    const navroute = ["about", "services",  "products","sportme", "fillme", "careers", "partners","account", "contact"];

    const menuItems = menu.map((val, index) => {
      return (
        <Link to={`/${navroute[index]}`}><MenuItem
          key={index}
          delay={`${index * 0.1}s`}
          onClick={() => {
            this.handleLinkClick();
            this.setState({page:navroute[index] })
          }}
        >
        {/* <Link to={`/${navroute[index]}`}>{val}</Link> */}
        {val}
        </MenuItem></Link>
      );
    });

    return (
      <div>
        <div style={styles.container}>
          <MenuButton
            open={this.state.menuOpen}
            onClick={() => this.handleMenuClick()}
            color="white"
          />
          <div style={styles.logo}>Logo</div>
        </div>
        <Menu open={this.state.menuOpen}>{menuItems}
        </Menu>
          <div style={styles.body}>
            {this.gotoPage()}
          </div>
          <Footer name="Menu" />
       
      </div>
    );
  }
}

/* MenuItem.jsx*/
class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  }

  handleHover() {
    this.setState({ hover: !this.state.hover });
  }

  render() {
    const styles = {
      container: {
        opacity: 0,
        animation: "1s appear forwards",
        animationDelay: this.props.delay,
      },
      menuItem: {
        fontFamily: `'Open Sans', sans-serif`,
        fontSize: "1.2rem",
        padding: "1rem 0",
        margin: "0 5%",
        cursor: "pointer",
        color: this.state.hover ? "gray" : "#fafafa",
        transition: "color 0.2s ease-in-out",
        animation: "0.5s slideIn forwards",
        animationDelay: this.props.delay,
      },
      line: {
        width: "90%",
        height: "1px",
        background: "gray",
        margin: "0 auto",
        animation: "0.5s shrink forwards",
        animationDelay: this.props.delay,
      },
    };
    return (
      <div style={styles.container}>
        <div
          style={styles.menuItem}
          onMouseEnter={() => {
            this.handleHover();
          }}
          onMouseLeave={() => {
            this.handleHover();
          }}
          onClick={this.props.onClick}
        >
          {this.props.children}
        </div>
        <div style={styles.line} />
      </div>
    );
  }
}

/* Menu.jsx */
class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open ? this.props.open : false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open });
    }
  }

  render() {
    const styles = {
      container: {
        position: "absolute",
        top: 0,
        left: 0,
        height: this.state.open ? "100%" : 0,
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        background: "black",
        opacity: 0.95,
        color: "#fafafa",
        transition: "height 0.3s ease",
        zIndex: 2,
      },
      menuList: {
        paddingTop: "3rem",
      },
    };
    return (
      <div style={styles.container}>
        {this.state.open ? (
          <div style={styles.menuList}>{this.props.children}</div>
        ) : null}
      </div>
    );
  }
}

/* MenuButton.jsx */
class MenuButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open ? this.props.open : false,
      color: this.props.color ? this.props.color : "black",
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open });
    }
  }

  handleClick() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const styles = {
      container: {
        height: "32px",
        width: "32px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        padding: "4px",
      },
      line: {
        height: "2px",
        width: "20px",
        background: this.state.color,
        transition: "all 0.2s ease",
      },
      lineTop: {
        transform: this.state.open ? "rotate(45deg)" : "none",
        transformOrigin: "top left",
        marginBottom: "5px",
      },
      lineMiddle: {
        opacity: this.state.open ? 0 : 1,
        transform: this.state.open ? "translateX(-16px)" : "none",
      },
      lineBottom: {
        transform: this.state.open ? "translateX(-1px) rotate(-45deg)" : "none",
        transformOrigin: "top left",
        marginTop: "5px",
      },
    };
    return (
      <div
        style={styles.container}
        onClick={
          this.props.onClick
            ? this.props.onClick
            : () => {
                this.handleClick();
              }
        }
      >
        <div style={{ ...styles.line, ...styles.lineTop }} />
        <div style={{ ...styles.line, ...styles.lineMiddle }} />
        <div style={{ ...styles.line, ...styles.lineBottom }} />
      </div>
    );
  }
}

/* Footer.jsx */
function Footer(props) {
  const styles = {
    footer: {
      position: "absolute",
      bottom: 0,
      width: "100%",
      marginTop: "1rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: props.color,
    },
    line: {
      height: "1px",
      width: "90%",
      background: props.color,
    },
    text: {
      padding: "0.5rem",
    },
  };

  return (
    <div style={styles.footer}>
      <div style={styles.line}></div>
      <div style={styles.text}>
        {props.title} all right reserved &copy; 2020
      </div>
    </div>
  );
}

Footer.defaultProps = {
  color: "black",
  title: "Access Insurance",
};

Footer.propTypes = {
  color: "black",
  title: "Access Insurance",
};

/* Main.jsx */
class Main extends React.Component {
  render() {
    const styles = {
      main: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
      },
    };

    return (
      <div style={styles.main}>
        <Home />
      </div>
    );
  }
}
