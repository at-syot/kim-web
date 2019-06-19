import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import partnerStyle from "assets/jss/material-kit-pro-react/views/homeSections/partnerStyle.jsx";

import skynetLogo from "assets/img/skynet.jpg";

function SectionPartner({ ...props }) {
  const { classes, ...rest } = props;
  return (
    <div className="cd-section" {...rest}>
      {/* Blogs 1 START */}
      <div className={classes.blog}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={12}>
              <h1 className={classes.title}>Our Partners</h1>
            </GridItem>
          </GridContainer>
          <br />
          <GridContainer justify="center">
            <GridItem xs={12} sm={2} md={2}>
              <CardHeader image plain>
                <a href="https://www.skynetsystems.co.th/" onClick="_blank">
                  <img src={skynetLogo} alt="..." />
                </a>
                <div
                  className={classes.coloredShadow}
                  style={{
                    backgroundImage: `url(${skynetLogo})`,
                    opacity: "1"
                  }}
                />
              </CardHeader>
            </GridItem>
          </GridContainer>
          <br />
        </div>
      </div>
      {/* Blogs 1 END */}
    </div>
  );
}

export default withStyles(partnerStyle)(SectionPartner);
