import {
  title,
  cardTitle,
  coloredShadow,
  description,
  mlAuto,
  mrAuto,
  sqWealthBGColor
} from "assets/jss/material-kit-pro-react.jsx";

const partnerSection = {
  container: {
    background: sqWealthBGColor
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center"
  },
  coloredShadow,
  cardTitle,
  mlAuto,
  mrAuto,
  description,
  blog: {
  },
  cardCategory: {
    marginBottom: "0",
    marginTop: "10px",
    "& svg,& .fab,& .fas,& .far,& .fal,& .material-icons": {
      position: "relative",
      top: "8px",
      lineHeight: "0"
    }
  },
};

export default partnerSection;
