import {
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  whiteColor,
  title
} from "assets/jss/material-kit-pro-react.jsx";
import { blackColor } from "../../material-kit-pro-react";

const infoStyle = {
  infoArea: {
    maxWidth: "360px",
    margin: "0 auto",
    padding: "70px 0 30px"
  },
  iconWrapper: {
    float: "left",
    marginTop: "24px",
    marginRight: "10px"
  },
  primary: {
    color: whiteColor
  },
  warning: {
    color: warningColor[0]
  },
  danger: {
    color: dangerColor[0]
  },
  success: {
    color: successColor[0]
  },
  info: {
    color: whiteColor
  },
  rose: {
    color: roseColor[0]
  },
  gray: {
    color: whiteColor
  },
  icon: {
    width: "2.25rem",
    height: "2.25rem",
    fontSize: "2.25rem",
    color: whiteColor
  },
  descriptionWrapper: {
    color: whiteColor,
    overflow: "hidden"
  },
  title: {
    ...title,
    color: whiteColor,
    margin: "1.75rem 0 0.875rem !important",
    minHeight: "unset"
  },
  description: {
    color: whiteColor,
    overflow: "hidden",
    marginTop: "0px",
    fontSize: "18px",
    "& p": {
      color: whiteColor,
      fontSize: "20px"
    }
  },
  iconWrapperVertical: {
    float: "none"
  },
  iconVertical: {
    width: "61px",
    height: "61px"
  }
};

export default infoStyle;
