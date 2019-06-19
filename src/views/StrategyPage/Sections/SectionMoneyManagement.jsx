import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Code from "@material-ui/icons/Code";
import FormatPaint from "@material-ui/icons/FormatPaint";
import Dashboard from "@material-ui/icons/Dashboard";
import ViewCarousel from "@material-ui/icons/ViewCarousel";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import moneyManagementStyle from "assets/jss/material-kit-pro-react/views/sectionsStrategy/moneyManagementStyle.jsx";

import iphone2 from "assets/img/sections/iphone2.png";

function SectionMoneyManagement({ ...props }) {
  const { classes, ...rest } = props;
  return (
    <div className="cd-section" {...rest}>
      <div className={classes.container}>
        <div className={classes.features4}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={9}
              md={9}
              className={`${classes.mlAuto} ${classes.mrAuto} ${
                classes.textCenter
                }`}
            >
              <h2 className={classes.title}>วางเงินในหุ้นอย่างเหมาะสม (Money Management)</h2>
              <h4 className={classes.description}>
                ขั้นตอนสุดท้ายจะใช้หลักการ Money Management หรือการวางน้ำหนักการลงทุนในพอร์ตฟอร์ลิโอ ตามปัจจัยพื้นฐานของหุ้น เช่น
              </h4>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={4}>
              <div className={classes.phoneContainer}>
                <img src={iphone2} alt="..." />
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={12} lg={3} className={classes.mlAuto}>
              <InfoArea
                icon={Code}
                title="หุ้นพื้นฐานดี"
                description="สามารถใส่น้ำหนักการลงทุนได้ตั้งแต่ 20-30% ของพอร์ตรวม"
                iconColor="info"
              />
              <InfoArea
                icon={FormatPaint}
                title="หุ้นพื้นฐานปานกลาง"
                description="สามารถใส่น้ำหนักการลงทุนไม่เกิน 20% ของพอร์ตรวม"
                iconColor="danger"
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={12} lg={3} className={classes.mrAuto}>
              <InfoArea
                icon={Dashboard}
                title="หุ้นพื้นฐานแย่"
                description="ใส่น้ำหนักการลงทุนได้ไม่เกิน 10% ของพอร์ตรวม"
                iconColor="primary"
              />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem
              xs={12}
              sm={12}
              md={12}
              className={`${classes.mlAuto} ${classes.mrAuto} ${
                classes.textCenter
                }`}
            >
              <h2 className={classes.title}>StockQuadrant Strategy จึงเป็นรูปแบบการลงทุนที่สมบูรณ์แบบ มีทั้งการวิเคราะห์ปัจจัยพื้นฐาน เทคนิค การวางหน้าเทรดและน้ำหนักการลงทุนอย่างเหมาะสม
              </h2>

            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}

export default withStyles(moneyManagementStyle)(SectionMoneyManagement);
