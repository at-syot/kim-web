import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Weekend from "@material-ui/icons/Weekend";
import Business from "@material-ui/icons/Business";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx";

import pricingStyle from "assets/jss/material-kit-pro-react/views/homeSections/whatWeDoStyle.jsx";

import bg11 from "assets/img/bg11.jpg";

function SectionWhatWeDo({ ...props }) {
  const { classes, ...rest } = props;
  return (
    <div className="cd-section" {...rest}>
      {/* Pricing 1 START */}
      <div
        className={`${classes.pricing} ${classes.pricing1} ${classes.section}`}
        style={{ backgroundImage: `url(${bg11})` }}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={12}
              md={12}
              className={`${classes.mlAuto} ${classes.mrAuto} ${
                classes.textCenter
              }`}
            >
              <h1 className={classes.title}>StockQuadrant ทำอะไร?</h1>
              <h3 className={classes.description}>
                เราเป็นผู้พัฒนาโมเดลและกลยุทธ์การลงทุนด้วยเทคโนโลยีปัญญาประดิษฐ์ (AI) เพื่อใช้ในการวิเคราะห์หุ้น แนะนำการลงทุน รวมถึงบริหารพอร์ตลงทุนอัตโนมัติ ในสินทรัพย์ประเภทหุ้นและตราสารอนุพันธ์ ภายใต้การทำงานร่วมกับบริษัทหลักทรัพย์ (บล.) และบริษัทหลักทรัพย์จัดการกองทุน (บลจ.) เพื่อสร้างความมั่งคั่ง (Wealth) ให้กับคนไทยทุกระดับ โดยเฉพาะผู้ที่ไม่มีเวลาลงทุนด้วยตัวเอง
              </h3>
              <div className={classes.sectionSpace} />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6} lg={6}>
              <Card pricing plain>
                <CardBody pricing plain>
                  <div className={classes.icon}>
                    <Weekend className={classes.iconWhite} />
                  </div>
                  <h4
                    className={`${classes.cardTitleWhite} ${
                      classes.marginTop30
                    }`}
                  >
                    StockQuadrant Model
                  </h4>
                  <p className={classes.cardCategory}>
                    กองทุน Private Fund
                  </p>
                  <Button round color="white">
                    ดูรายละเอียด
                  </Button>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6} lg={6}>
              <Card pricing plain>
                <CardBody pricing plain>
                  <div className={classes.icon}>
                    <Business className={classes.iconWhite} />
                  </div>
                  <h4
                    className={`${classes.cardTitleWhite} ${
                      classes.marginTop30
                    }`}
                  >
                    Stock Advisor
                  </h4>
                  <p className={classes.cardCategory}>
                   ระบบแนะนำหุ้น Stock Quadrant
                  </p>
                  <Button round color="white">
                    ดูรายละเอียด
                  </Button>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}

export default withStyles(pricingStyle)(SectionWhatWeDo);
