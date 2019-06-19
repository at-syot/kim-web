import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import SQHeader from "components/SQHeader/SQHeader.jsx";
import SQHeaderLinks from "components/SQHeader/SQHeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
// sections for this page
import SectionWho from "views/HomePage/Sections/SectionWho.jsx";
import SectionStrategy from "views/HomePage/Sections/SectionStrategy.jsx";

import presentationStyle from "assets/jss/material-kit-pro-react/views/presentationStyle.jsx";
import { createMuiTheme } from '@material-ui/core/styles';
import SectionWhatWeDo from "./Sections/SectionWhatWeDo";
import SectionSQWealthOverall from "./Sections/SectionSQWealthOverall";
import SectionStartInvest from "./Sections/SectionStartInvest";
import SectionPartner from "./Sections/SectionPartner";
import SectionSQFooter from "./Sections/SectionSQFooter";

class HomePage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes } = this.props;
    const theme = createMuiTheme({
      typography: {
        fontFamily: '"rsu"',
      },
    });
    return (
      <div>
        <SQHeader
          logo={require("assets/img/sqlogo.svg")}
          brand="SQWealth"
          links={<SQHeaderLinks dropdownHoverColor="info" />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "info"
          }}
        />
        <Parallax
          image={require("assets/img/bg13.jpg")}
          className={classes.parallax}
        >
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1>
                    <span className={classes.proBadge}>SQ</span>
                       Wealth
                  </h1>
                  <h3 className={classes.title}>
                    ดูแลความมั่งคั่งของคุณด้วยโมเดลการลงทุนที่พัฒนาโดยนักลงทุนตัวจริงในตลาดหุ้น ขับเคลื่อนด้วยเทคโนโลยีในยุคฟินเทค
                  </h3>
                  <Button
                    href="/register"
                    color="white"
                    target="_blank"
                    className={classes.navButton}
                    round
                  >
                    ลงทะเบียนเพื่อรับข้อมูลการลงทุน
                  </Button>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <SectionWho />
          <SectionStrategy />
          <SectionWhatWeDo id="product" />
          <SectionSQWealthOverall />
          <SectionStartInvest />
          <SectionPartner/>
        </div>
      <SectionSQFooter/>
      </div>
    );
  }
}

export default withStyles(presentationStyle)(HomePage);
