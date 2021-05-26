import LogoSalexSvg from "../UI/Svg/LogoSalexSvg";
import classes from "./Landing.module.css";

const Footer = () => {
  return (
    <>
      <div className={classes.Footer}>
        <LogoSalexSvg />
      </div>
      <div className={classes.FooterText}>Copyright salex.uz 2021</div>
    </>
  );
};

export default Footer;
