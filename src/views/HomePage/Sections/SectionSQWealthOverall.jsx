import React from "react";

// @material-ui/core components

// @material-ui/icons


// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Info from "components/Typography/Info.jsx";
import statsOverallImage from "assets/img/poster1.jpg";

import styles from "assets/jss/material-kit-pro-react/views/homeSections/sectionSQWealthOverall.jsx";

class SectionSQWealthOverall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRotate1: "",
      activeRotate2: ""
    };
  }
  componentDidMount() {
    const { classes } = this.props;
    var rotatingCards = document.getElementsByClassName(classes.cardRotate);
    for (let i = 0; i < rotatingCards.length; i++) {
      var rotatingCard = rotatingCards[i];
      var rotatingWrapper = rotatingCard.parentElement;
      var cardWidth = rotatingCard.parentElement.offsetWidth;
      var cardHeight = rotatingCard.children[0].children[0].offsetHeight;
      rotatingWrapper.style.height = cardHeight + "px";
      rotatingWrapper.style["margin-bottom"] = 30 + "px";
      var cardFront = rotatingCard.getElementsByClassName(classes.front)[0];
      var cardBack = rotatingCard.getElementsByClassName(classes.back)[0];
      cardFront.style.height = cardHeight + 35 + "px";
      cardFront.style.width = cardWidth + "px";
      cardBack.style.height = cardHeight + 35 + "px";
      cardBack.style.width = cardWidth + "px";
    }
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div {...rest} className="cd-section" id="cards">
        <div>
          <div className={classes.sectionBG}>
            {/* PROFILE CARDS START */}
            <div>
              <div className={classes.container}>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <Card profile>
                      <CardHeader image>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img src={statsOverallImage} alt="..." />
                        </a>
                        <div
                          className={classes.coloredShadow}
                          style={{
                            backgroundImage: `url(${statsOverallImage})`,
                            opacity: "1"
                          }}
                        />
                      </CardHeader>
                      <CardBody>
                        <Info>
                          <h2 className={classes.cardCategory}>ลงทุนกับ StockQuadrant ให้ผลตอบแทนชนะภาพรวมตลาด
                          </h2>
                        </Info>
                        <p className={classes.cardDescription}>
                        </p>
                      </CardBody>
                    </Card>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
            {/* PROFILE CARDS END */}
        </div>
      </div>
      </div>

    );
  }
}

export default withStyles(styles)(SectionSQWealthOverall);
