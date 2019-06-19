import React from "react";
import { createMuiTheme } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";

import strategyPageStyle from "assets/jss/material-kit-pro-react/views/strategyPageStyle.jsx";

// core components
import SQHeader from "components/SQHeader/SQHeader.jsx";
import SQHeaderLinks from "components/SQHeader/SQHeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import logo from "assets/img/sqlogo.svg";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoIconImageAreaWhite/InfoArea.jsx";

import ProfitGrowthIcon from "assets/img/icon1_1.png";
import StockValueIcon from "assets/img/icon1_2.png";
import ChooseQualityIcon from "assets/img/icon1_3.png";
import SectionStrategyModel from "./Sections/SectionStrategyModel";
import SectionStockGrouping from "./Sections/SectionStockGrouping";
import SectionTradeSetup from "./Sections/SectionTradeSetup";
import SectionMoneyManagement from "./Sections/SectionMoneyManagement";
import SectionSQFooter from "../HomePage/Sections/SectionSQFooter";

class StrategyPage extends React.Component {
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
      <div className={classes.backgroundColor}>
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
          image={require("assets/img/bgblue.jpg")}
          className={classes.parallax}
        >
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={3} md={3}>
                <div className={classes.logoContainer}>
                  <img src={logo} alt="..." align="center" />
                </div>
              </GridItem>
              <GridItem xs={12} sm={9} md={9}>
                <h1 className={classes.title}>StockQuadrant Strategy</h1>
                <h4 className={classes.description}>
                  StockQuadrant Strategy ให้ความสำคัญกับการคัดเลือกหุ้นในการเข้าลงทุนจากปัจจัยพื้นฐานที่แข็งแกร่งในรูปแบบของหุ้นเติบโต (Growth Stock) โดยใช้ปัจจัยในการคัดเลือกดังนี้
                </h4>
                <br />
                <InfoArea
                  className={classes.infoArea}
                  icon={ProfitGrowthIcon}
                  iconSize={40}
                  title="หนึ่ง..มีกำไรสุทธิเติบโตต่อเนื่อง"
                  description="โดยต้องเป็นกำไรเกิดจากรายได้ปกติ ที่ไม่ใช่กำไรพิเศษที่เกิดขึ้นครั้งเดียว (One Time Gain) รวมถึงบริษัทฯไม่เคยมีผลขาดทุน มีการจ่ายปันผลต่อเนื่อง มีผลตอบแทนผู้ถือหุ้น (ROE) ในระดับสูง"
                  iconColor="primary"
                />
                <InfoArea
                  className={classes.infoArea}
                  icon={StockValueIcon}
                  iconSize={40}
                  title="สอง..มูลค่าหุ้นจะต้องไม่สูงจนเกินไป"
                  description="โดยใช้อัตราส่วนทางการเงินอย่าง P/E Ratio แม้จะมีการเติบโตของกำไรสุทธิสูงแต่หาก P/E สูงเกินไปจะถูดลดอันดับความน่าสนใจในการลงทุนลง"
                  iconColor="primary"
                />
                <InfoArea
                  className={classes.infoArea}
                  icon={ChooseQualityIcon}
                  iconSize={40}
                  title="สาม..คัดเลือกโดยใช้ปัจจัยเชิงคุณภาพจากความสามารถในการแข่งขัน"
                  description="เช่น เป็นผู้นำในตลาด มีคู่แข่งน้อยรายหรือเป็นธุรกิจผูกขาด"
                  iconColor="primary"
                />
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <SectionStrategyModel/>
        <SectionStockGrouping/>
        <SectionTradeSetup/>
        <SectionMoneyManagement/>
        <SectionSQFooter/>
      </div>
    );
  }
}

export default withStyles(strategyPageStyle)(StrategyPage);
