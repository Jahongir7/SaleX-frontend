import { LogoSalexSvg } from "../UI/Svg/SvgIcons";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={classes.Footer}>
        <div className={classes.Footer_Logo}>
          <LogoSalexSvg />
        </div>
      </div>
      <div className={classes.FooterText}>
        <p>Copyright salex.uz 2021</p>
      </div>
    </footer>
  );
};

export default Footer;
