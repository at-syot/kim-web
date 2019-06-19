import {
  container,
  title,
  description,
  main,
  whiteColor,
  grayColor,
  sqwealthColor,
  sqWealthBGColor,
  mainRaised,
  hexToRgb
} from "assets/jss/material-kit-pro-react.jsx";
import footerStyle from "assets/jss/material-kit-pro-react/views/componentsSections/footerStyle.jsx";

const strategyPageStyle = {
  ...footerStyle,
  main: {
    ...main
    /*overflow: "hidden"*/
  },
  backgroundColor: {
    backgroundColor: sqWealthBGColor
  },
  mainRaised,
  parallax: {
    height: "90vh",
    overflow: "hidden"
  },
  container: {
    ...container,
    zIndex: 1
  },
  title: {
    ...title,
    color: whiteColor
  },
  description: {
    ...description,
    color: whiteColor
  },
  brand: {
    color: whiteColor,
    textAlign: "center",
    "& h1": {
      fontSize: "4.2rem",
      fontWeight: "600",
      display: "inline-block",
      position: "relative"
    }
  },
  proBadge: {
    position: "relative",
    fontSize: "60px",
    textTransform: "uppercase",
    fontWeight: "700",
    right: "20px",
    padding: "10px 18px",
    top: "0px",
    background: whiteColor,
    borderRadius: "3px",
    color: grayColor[18],
    lineHeight: "22px",
    boxShadow: "0 5px 5px -2px rgba(" + hexToRgb(grayColor[25]) + ",.4)"
  },
  navButton: {
    position: "relative",
    fontWeight: "400",
    fontSize: "18px",
    color: sqwealthColor,
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
  },
  logoContainer: {
    "& img": {
      width: "250px",
      height: "250px"
    }
  },
  infoArea: {
    maxWidth: "none",
    margin: "0 auto",
    padding: "10px 0 0px"
  }
};

export default strategyPageStyle;
