import React, { useState } from "react";
import classes from "./Navbar.module.css";
import { useDispatch } from "react-redux";
import Button from "../UI/Button/Button";
import {
  EnterSvg,
  LogoSalexSvg,
  MenuCloseSvg,
  MenuOpenSvg,
} from "../UI/Svg/SvgIcons";

/* 
  Jahongir: Navbar, Footer, Cards, Tabs
  Sardor: Form Elements, Header, Sidebar, Section Title, Register - Login Forms
*/

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [lang, setLang] = useState("uz");
  const [button] = useState(true);
  const dispatch = useDispatch();
  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => {
    setClick(false);
  };

  const handleChange = (event) => {
    dispatch({ type: "LANG_CHANGED", payload: event.target.value });
    setLang(event.target.value);
    localStorage.setItem("lang", event.target.value);
  };

  return (
    <>
      <nav className={classes.Navbar}>
        <div className={`${classes.Navbar_container} ${classes.Container}`}>
          <div className={classes.Navbar_logo} onClick={closeMobileMenu}>
            <LogoSalexSvg />
          </div>
          <div className={classes.Menu_icon} onClick={handleClick}>
            {click ? <MenuCloseSvg /> : <MenuOpenSvg />}
          </div>
          <ul
            className={
              click
                ? `${classes.Nav_menu} ${classes.Active1}`
                : classes.Nav_menu
            }
          >
            <li className={click ? classes.Nav_item : classes.Nav_items}>
              <div className={classes.Nav_links}>Biz haqimizda</div>
            </li>

            <li className={click ? classes.Nav_item : classes.Nav_items}>
              <select
                className={classes.Select_lang}
                onChange={handleChange}
                value={lang}
              >
                <option value="uz">Uzb</option>
                <option value="ru">Ru</option>
                <option value="en">Eng</option>
              </select>
            </li>

            <li className={click ? classes.Nav_item : classes.Nav_items}>
              {button ? (
                <div className={classes.Btn_link}>
                  <Button btnType="Main">
                    Kirish
                    <EnterSvg className={classes.EnterIcon} />
                  </Button>
                </div>
              ) : (
                <div className={classes.Btn_link}>
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
};
export default Navbar;
