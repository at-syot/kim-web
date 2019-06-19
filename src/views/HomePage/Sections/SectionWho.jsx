import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import productStyle from "assets/jss/material-kit-pro-react/views/homeSections/whoStyle.jsx";

class SectionProduct extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}
      >
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={12}>
            <h1 className={classes.title}>StockQuadrant คือใคร?</h1>
            <h3 className={classes.description}>
              เราคือบริษัทฟินเทค (Financial Technology) ผู้พัฒนากลยุทธ์การลงทุนเพื่อบริหารความมั่งคั่ง (Wealth) ให้กับคนไทยทุกคน
            </h3>
          </GridItem>

        </GridContainer>
      </div>
    );
  }
}

export default withStyles(productStyle)(SectionProduct);
