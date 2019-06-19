import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import GroupAIcon from "assets/img/icon3_1.png";
import GroupBIcon from "assets/img/icon3_2.png";
import GroupCIcon from "assets/img/icon3_3.png";
import GroupAAIcon from "assets/img/icon3_1.png";
import GroupBBIcon from "assets/img/icon3_2.png";
import GroupCCIcon from "assets/img/icon3_3.png";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoIconImageArea/InfoArea.jsx";

import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";

import strategyStockGroupingStyle from "assets/jss/material-kit-pro-react/views/sectionsStrategy/strategyStockGroupingStyle.jsx";
import bg5 from "assets/img/bg5.jpg";

function SectionStockGrouping({ ...props }) {
  const { classes, ...rest } = props;
  return (
    <div className="cd-section" {...rest}>
      <div className={classes.container}>
        <div className={classes.features1}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={`${classes.mlAuto} ${classes.mrAuto}`}
            >
              <h2 className={classes.title}>จัดกลุ่มหุ้นตามปัจจัยพื้นฐานและเทคนิค</h2>
              <h5 className={classes.description}>
                หลังจากคัดแยกหุ้นโดยใช้ปัจจัยพื้นฐานแล้วก็จะจัดอันดับจากปัจจัยทางเทคนิค จะสามารถแบ่งเกรดของหุ้นออกเป็นสามกลุ่มคือ
              </h5>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                vertical
                icon={GroupAIcon}
                iconSize={80}
                title="A หุ้นขาขึ้น (Uptrend)"
                description=""
                iconColor="success"
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                vertical
                icon={GroupBIcon}
                iconSize={80}
                title="B หุ้นเคลื่อนไหวออกข้าง (Sideway)"
                description=""
                iconColor="info"
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                vertical
                icon={GroupCIcon}
                iconSize={80}
                title="C หุ้นขาลง  (Downtrend)"
                description=""
                iconColor="danger"
              />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={`${classes.mlAuto} ${classes.mrAuto}`}
            >
              <h4 className={classes.description}>
                เมื่อนำทั้งปัจจัยพื้นฐานและปัจจัยทางเทคนิคมารวมกัน จะสามารถแบ่งหุ้นได้เป็น 15 กลุ่ม
              </h4>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={`${classes.mlAuto} ${classes.mrAuto}`}
            >
              <Card plain blog className={classes.card4}>
                <CardHeader image plain>
                  <a href="#pablito" onClick={e => e.preventDefault()}>
                    <img src={bg5} alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{ backgroundImage: `url(${bg5})`, opacity: "1" }}
                  />
                </CardHeader>
              </Card>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                vertical
                icon={GroupAAIcon}
                iconSize={80}
                title="หุ้นกลุ่ม AA"
                description="หุ้นพื้นฐานแข็งแกร่งและมีแนวโน้มอยู่ในขาขึ้น"
                iconColor="success"
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                vertical
                icon={GroupBBIcon}
                iconSize={80}
                title="หุ้นกลุ่ม BB"
                description="หุ้นพื้นฐานปานกลางและมีแนวโน้มเคลื่อนตัวออกข้าง"
                iconColor="info"
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                vertical
                icon={GroupCCIcon}
                iconSize={80}
                title="หุ้นกลุ่ม CC"
                description="หุ้นพื้นฐานแย่และมีแนวโน้มขาลง"
                iconColor="danger"
              />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={`${classes.mlAuto} ${classes.mrAuto}`}
            >
              <h4 className={classes.description}>
                นักลงทุนที่มีสไตล์การลงทุนแบบ Conservative โมเดลจะแนะนำให้เลือกลงทุนเฉพาะหุ้นที่มีพื้นฐานดีกลุ่ม A,หากเพิ่มความเสี่ยงขึ้นหรือ Moderate ก็จะแนะนำให้ลงทุนในกลุ่ม A,B+,B,B- หากมีสไตล์การลงทุนที่ Aggressive จะให้เพิ่มหุ้นกลุ่ม C เข้ามา โดยจะลงทุนเฉพาะหุ้นที่มีแนวโน้มขาขึ้นเท่านั้น
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}

export default withStyles(strategyStockGroupingStyle)(SectionStockGrouping);
