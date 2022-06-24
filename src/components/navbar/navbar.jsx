import React, { Component } from "react";
import "./NavStyles.css";
import Logo from "../../assets/aicdmb.png";
import "./CustomStyle.css";
import { NavLink, Link } from "react-router-dom";
import { Dropdown, Button } from "react-bootstrap";



class Navbar extends Component {
  state = {
    toggle: false,
  };

  openFunc = () => {
    const { toggle } = this.state;
    this.setState({ toggle: !toggle });
  };

  render() {
    const { toggle } = this.state;
    return (
      <div style={{zIndex: '99'}}>
        <div className="flex-container">
          <ul className="uList">
            <li className="logo">
              <Link activeClassName="active" to="/" exact>
                <img
                  src={Logo}
                  style={{ height: "50px", width: "50px" }}
                  alt="AICDMB_Logo"
                />
              </Link>
            </li>
            <div
              id="nav-icon"
              className={toggle ? "open" : null}
              onClick={this.openFunc}
              style={{zIndex: '99'}}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div
              id="navLink"
              className="responsive"
              style={toggle ? { maxHeight: "500px" } : null}
            >
              <NavLink activeClassName="active" to="/" exact>
                <li>
                  Home
                </li>
              </NavLink>
              <li>
                <a href="/#about">About</a>
              </li>
              <li>
                <Link to="/committee">Committee</Link>
              </li>
              <li>
                <a href="/#speakers">Speakers</a>
              </li>
              <li>
                <Link to="/publication">Publication</Link>
              </li>
              <li>
                <Link to="/guidelines">Author Guidelines</Link>
              </li>
              <li>
                <Link to="/register">Registration</Link>
              </li>
              <li>
                <Dropdown style={{paddingBottom: "10px"}}>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Previous Conferences
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1"><Link style={{color: "#000"}} to="/aicdmb20">AICDMB 2020</Link></Dropdown.Item>
                    <Dropdown.Item href="#/action-2"><Link style={{color: "#000"}} to="/aicdmb21">AICDMB 2021</Link></Dropdown.Item>
                    <Dropdown.Item href="#/action-3"><Link style={{color: "#000"}} to="/aicdmb21">AICDMB 2022</Link></Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li>
                <Link to="/papers">
                  <Button>Call for Papers</Button>
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
