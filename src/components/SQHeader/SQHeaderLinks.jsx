/* eslint-disable */
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// core components
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-pro-react/components/headerLinksStyle.jsx";

function SQHeaderLinks({ ...props }) {

  const { classes } = props;
    /*
         <ListItem className={classes.listItem}>
           <Button
             href="./#product"
             className={classes.navLink}
             color="transparent"
           >
             Product
           </Button>
         </ListItem>
         <ListItem className={classes.listItem}>
           <Button
             href="./#wealthyourself"
             className={classes.navLink}
             color="transparent"
           >
             Wealth Yourself
           </Button>
         </ListItem>
         */
    /*
     <ListItem className={classes.listItem}>
       <Button
         href="http://www.thestuffq.com/category/library/"
         className={classes.navLink}
         color="transparent"
         target="_blank"
       >
         Analysis
       </Button>
     </ListItem>
     <ListItem className={classes.listItem}>
       <Button
         href="/"
         className={classes.navLink}
         color="transparent"
       >
         About Us
       </Button>
     </ListItem>
     <ListItem className={classes.listItem}>
       <Button
         href="/"
         className={classes.navLink}
         color="transparent"
       >
         Login
       </Button>
     </ListItem>
     <ListItem className={classes.listItem}>
       <Button
         href="#"
         color="sqwealth"
         target="_blank"
         className={classes.navButton}
         round
       >
         Register
       </Button>
     </ListItem>
     */
  return (
    <List className={classes.list + " " + classes.mlAuto}>
      <ListItem className={classes.listItem}>
        <Button
          href="/"
          className={classes.navLink}
          color="transparent"
        >
          Home
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="./strategy"
          className={classes.navLink}
          color="transparent"
        >
          SQ Strategy
        </Button>
      </ListItem>

    </List>
  );
}

SQHeaderLinks.defaultProps = {
  hoverColor: "primary"
};

SQHeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
    "sqwealth"
  ])
};

export default withStyles(headerLinksStyle)(SQHeaderLinks);
