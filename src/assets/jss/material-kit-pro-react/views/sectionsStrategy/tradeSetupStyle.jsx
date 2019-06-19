import {
  container,
  mlAuto,
  mrAuto,
  title,
  description,
  blackColor,
  whiteColor,
  hexToRgb
} from "assets/jss/material-kit-pro-react.jsx";

const tradeSetupStyle = {
  container: {
    ...container
  },
  mlAuto,
  mrAuto,
  title: {
    ...title,
    color: blackColor
  },
  description: {
    ...description,
    color: blackColor
  },
  gridContainer: {},
  gridItem: {},
  textCenter: {
    textAlign: "center"
  },
  infoArea: {
    maxWidth: "none",
    margin: "0 auto",
    padding: "10px 0 0px"
  },
  infoArea5: {}
};

export default tradeSetupStyle;
