import React from "react";

import tradeSetupStyle from "assets/jss/material-kit-pro-react/views/sectionsStrategy/tradeSetupStyle.jsx";
import bg from "assets/img/bg14.jpg";
import withStyles from "@material-ui/core/styles/withStyles";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";


import Extension from "@material-ui/icons/Extension";
import ChildFriendly from "@material-ui/icons/ChildFriendly";
import WatchLater from "@material-ui/icons/WatchLater";

class SectionTradeSetup extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div  id="tradeSetup" className={classes.section}
            style={{ backgroundImage: `url(${bg})`, padding:"30px" }}
      >
        <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <h2 className={classes.title}>เลือก Trade Setup ที่เหมาะสม</h2>
            <h4 className={classes.description}>
              เมื่อคัดแยกหุ้นด้วยปัจจัยพื้นฐานและปัจจัยเทคนิคแล้วต่อไปจะนำไปสู่การเลือกใช้กลยุทธ์การลงทุนให้เหมาะสมกับหุ้นแต่ละกลุ่ม โดยกลยุทธ์จะแบ่งออกเป็นสามแบบคือ
            </h4>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <InfoArea
              className={classes.infoArea}
              icon={Extension}
              title="กลยุทธ์ซื้อเมื่อย่อตัว (Buy On Dip)"
              description="ใช้สำหรับหุ้นที่มีแนวโน้มขาขึ้นและมีปัจจัยพื้นฐานที่ดี โดยเข้าซื้อเมื่อราคามีการย่อตัวแต่ยังคงแนวโน้มขาขึ้น"
              iconColor="primary"
            />
            <InfoArea
              className={classes.infoArea}
              icon={ChildFriendly}
              title="กลยุทธ์เทรดในกรอบราคา (Channel Trade)"
              description="ใช้กับหุ้นที่มีแนวโน้มเคลื่อนตัวออกข้าง โดยซื้อที่แนวรับและขายทีแนวต้าน"
              iconColor="primary"
            />
            <InfoArea
              className={classes.infoArea}
              icon={WatchLater}
              title="กลยุทธ์ Breakout"
              description="ใช้กับหุ้นที่สิ้นสุดการเป็นขาลงและเริ่มพลิกตัวกลับเป็นขาขึ้น"
              iconColor="primary"
            />
          </GridItem>
        </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(tradeSetupStyle)(SectionTradeSetup);
