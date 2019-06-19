import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import FundamentalIcon from "assets/img/icon0_1.png";
import TechnicalIcon from "assets/img/icon0_2.png";
import StrategyIcon from "assets/img/icon0_3.png";
import MoneyManagementIcon from "assets/img/icon0_4.png";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoIconImageArea/InfoArea.jsx";

import strategyStyle from "assets/jss/material-kit-pro-react/views/homeSections/strategyStyle.jsx";
import bg from "assets/img/bg14.jpg";

class SectionStrategy extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div  id="strategy" className={classes.section}
           style={{ backgroundImage: `url(${bg})` }}
      >
        <GridContainer justify="center">
          <GridItem xs={12} sm={8} md={8}>
            <h1 className={classes.title}>Stock Quadrant Strategy  คืออะไร?</h1>
            <h3 className={classes.description}>
              คือ กลยุทธ์การลงทุนที่ใช้การวิเคราะห์หุ้นทั้ง 4 มิติ
            </h3>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={3} md={3}>
              <InfoArea
                title="Fundamental"
                description="เลือกหุ้นที่มีพื้นฐานแข็งแกร่ง กำไรสุทธิเติบโตต่อเนื่องและมีความสามารถในการแข่งขันสูง"
                icon={FundamentalIcon}
                iconSize={100}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={3} md={3}>
              <InfoArea
                title="Technical"
                description="จับจังหวะซื้อขายทางเทคนิคจำแนกกลุ่มของหุ้นออกตามแนวโน้ม ทั้งขาขึ้น ไซด์เวย์และขาลง"
                icon={TechnicalIcon}
                iconSize={100}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={3} md={3}>
              <InfoArea
                title="Strategy"
                description="กำหนดกลยุทธ์การซื้อขายที่เหมาะสมตามพื้นฐานและกราฟเทคนิค โดยรอซื้อเมื่อราคาย่อตัวในหุ้นขาขึ้น (Buy On Dip), วางกรอบซื้อขายแบบ Channel Trade ในหุ้นไซด์เวย์และรอซื้อเมื่อราคา Breakout พ้นจากขาลง"
                icon={StrategyIcon}
                iconSize={100}
                iconColor="danger"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={3} md={3}>
              <InfoArea
                title="Money Management"
                description="บริหารจำนวนเงินที่ลงไปในหุ้นแต่ละตัวอย่างเหมาะสม เช่น ให้น้ำหนักการลงทุนในหุ้นพื้นฐานดีและอยู่ในช่วงต้นเทรนด์ขาขึ้น"
                icon={MoneyManagementIcon}
                iconSize={100}
                iconColor="danger"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(strategyStyle)(SectionStrategy);
