import { title,
  blackColor,
  sqWealthBGColor
} from "assets/jss/material-kit-pro-react.jsx";

const productStyle = {
  section: {
    background: sqWealthBGColor,
    padding: "70px 0",
    textAlign: "center"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  description: {
    color: blackColor
  }
};

export default productStyle;
