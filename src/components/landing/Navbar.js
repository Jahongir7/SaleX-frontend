import React, { useState } from "react";
import "./Navbar.css";
// import { Link } from "react-router-dom";
import Button from "../UI/Button/Button";
import LogoSalexSvg from "../UI/Svg/LogoSalexSvg";
import MenuCloseSvg from "../UI/Svg/MenuCloseSvg";
import MenuOpenSvg from "../UI/Svg/MenuOpenSvg";
import EnterSvg from "../UI/Svg/EnterSvg";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    setClick(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container container">
          <div to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <LogoSalexSvg />
          </div>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <MenuCloseSvg /> : <MenuOpenSvg />}
          </div>
          <ul className={click ? "nav-menu active1" : "nav-menu"}>
            <li className={click ? "nav-item" : "nav-items"}>
              <div to="/" className="nav-links">
                Biz haqimizda
              </div>
            </li>

            <li className={click ? "nav-item" : "nav-items"}>
              <select className="select-lang">
                uzb
                <option>uzb</option>
                <option>ru</option>
                <option>eng</option>
              </select>
            </li>

            <li className={click ? "nav-item" : "nav-items"}>
              {button ? (
                <div className="btn-link">
                  <Button btnType="Main">
                    Kirish
                    <EnterSvg />
                  </Button>
                </div>
              ) : (
                <div className="btn-link">
                  <Button btnType="Main">
                    Kirish
                    <EnterSvg />
                  </Button>
                </div>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
