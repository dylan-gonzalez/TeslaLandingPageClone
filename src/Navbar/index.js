import React from "react";
import { UserContext } from "../App.js";

import "./Navbar.scss";

const initialSliderState = {
  opacity: 0,
};

const initialSideMenuState = {
  width: 0,
  opacity: 0
};

export default function Navbar() {
  const [sliderStyling, setSliderStyling] = React.useState(initialSliderState);
  const [sideMenuStyling, setSideMenuStyling] =
    React.useState(initialSideMenuState);
  const [state, dispatch] = React.useContext(UserContext);

  const toggleSliderOn = (event) => {
    console.log(event);

    setSliderStyling({
      ...sliderStyling,
      opacity: 1,
      width: event.target.offsetWidth,
      left: event.target.offsetLeft,
      height: event.target.offsetHeight,
    });
  };

  const toggleSliderOff = () => {
    setSliderStyling({ ...sliderStyling, opacity: 0 });
  };

  const toggleSideMenu = () => {
    if (sideMenuStyling.width == 0) {
      setSideMenuStyling({ ...sideMenuStyling, width: "400px", opacity: 1 });
    } else {
      setSideMenuStyling({ ...sideMenuStyling, width: 0, opacity: 0});
    }
    dispatch({ type: "toggle_blur" });
  };

  return (
    <div
      class= "navbar"
      onMouseLeave={toggleSliderOff}
    >
      <div class={`navbar__top ${state.blur_active ? "blur" : ""}`}>
        <img src="tesla-logo.svg"></img>

        <ul>
          <li>
            <a href="#" onMouseEnter={toggleSliderOn}>
              Model S
            </a>
          </li>
          <li>
            <a href="#" onMouseEnter={toggleSliderOn}>
              Model 3
            </a>
          </li>
          <li>
            <a href="#" onMouseEnter={toggleSliderOn}>
              Model X
            </a>
          </li>
          <li>
            <a href="#" onMouseEnter={toggleSliderOn}>
              Model Y
            </a>
          </li>
          <li>
            <a href="#" onMouseEnter={toggleSliderOn}>
              Cybertruck
            </a>
          </li>
          <li>
            <a href="#" onMouseEnter={toggleSliderOn}>
              Powerwall
            </a>
          </li>
        </ul>

        <ul>
          <li>
            <a href="#" onMouseEnter={toggleSliderOn}>
              Shop
            </a>
          </li>
          <li>
            <a href="#" onMouseEnter={toggleSliderOn}>
              Account
            </a>
          </li>
          <li>
            <a href="#" onMouseEnter={toggleSliderOn} onClick={toggleSideMenu}>
              Menu
            </a>
          </li>
        </ul>

        <div id="slider" style={sliderStyling}></div>
      </div>

      <div class="side-menu" style={sideMenuStyling}>
        <a href="#" class="close-btn" onClick={toggleSideMenu}>
          <span class="material-icons">close</span>
        </a>
        <ul>
          <li>
            <a href="#">Existing Inventory</a>
          </li>
          <li>
            <a href="#">Used Inventory</a>
          </li>
          <li>
            <a href="#">Trade-In</a>
          </li>
          <li>
            <a href="#">Roadster</a>
          </li>
          <li>
            <a href="#">Commercial Energy</a>
          </li>
          <li>
            <a href="#">Utilities</a>
          </li>
          <li>
            <a href="#">Energy</a>
          </li>
          <li>
            <a href="#">Corporate</a>
          </li>
          <li>
            <a href="#">Test Drive</a>
          </li>
          <li>
            <a href="#">Charging</a>
          </li>
          <li>
            <a href="#">Find Us</a>
          </li>
          <li>
            <a href="#">Events</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">
              <span class="material-icons">language</span>
              <div class="language">
                <span class="language__location">Australia</span>
                <span class="language__setting">English</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
