import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

import bg9 from "assets/img/bg9.jpg";

import GroupAIcon from "assets/img/icon2_1.png";
import GroupBIcon from "assets/img/icon2_2.png";
import GroupBPlusIcon from "assets/img/icon2_3.png";
import GroupBMinusIcon from "assets/img/icon2_1.png";
import GroupCIcon from "assets/img/icon2_2.png";

import strategyModelStyle from "assets/jss/material-kit-pro-react/views/sectionsStrategy/strategyModelStyle.jsx";

// core components

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoIconImageAreaWhite/InfoArea.jsx";
import AttachMoney from "@material-ui/core/SvgIcon/SvgIcon";

function SectionStrategyModel({ ...props }) {
  const { classes, ...rest } = props;
  return (
    <div className="cd-section" {...rest}>
      <div
        className={classes.features5}
        style={{ backgroundImage: `url(${bg9})` }}
      >
        <GridContainer>
          <GridItem
            xs={12}
            sm={8}
            md={8}
            className={`${classes.mlAuto} ${classes.mrAuto} ${
              classes.textCenter
              }`}
          >
            <h2 className={classes.title}>อัพเดตพื้นฐานหุ้นหลังประกาศผลประกอบการ</h2>
            <h4 className={classes.title}>โมเดลจะแบ่งเกรดของหุ้นจากปัจจัยพื้นฐานออกเป็น 5 กลุ่ม</h4>
          </GridItem>
          <div className={classes.container}>
            <GridContainer className={classes.gridContainer}>
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={GroupAIcon}
                  iconSize={80}
                  title="กลุ่ม A"
                  description={
                    <p>
                      หุ้นพื้นฐานดีมาก และมีความสามารถในการแข่งขันสูง
                    </p>
                  }
                  iconColor="info"
                />
              </GridItem>
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={GroupBIcon}
                  iconSize={80}
                  title="กลุ่ม B+"
                  description={
                    <p>
                      หุ้นเติบโตโดดเด่น แต่อาจมีความสามารถในการแข่งขันรองลงมา
                    </p>
                  }
                  iconColor="danger"
                />
              </GridItem>
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={GroupBPlusIcon}
                  iconSize={80}
                  title="กลุ่ม B"
                  description={
                    <p>
                      หุ้นเติบโตปกติไม่โดดเด่น
                    </p>
                  }
                  iconColor="primary"
                />
              </GridItem>
            </GridContainer>
            <GridContainer className={classes.gridContainer}>
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={GroupBMinusIcon}
                  iconSize={80}
                  title="กลุ่ม B-"
                  description={
                    <p>
                      หุ้นที่เริ่มเติบโตลดลง
                    </p>
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={GroupCIcon}
                  iconSize={80}
                  title="กลุ่ม C"
                  description={
                    <p>
                      หุ้นที่ไม่เติบโตหรือหุ้นที่มีผลขาดทุน
                    </p>
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={4} className={classes.gridItem}>

              </GridItem>
            </GridContainer>
          </div>
          <GridItem
            xs={12}
            sm={8}
            md={8}
            className={`${classes.mlAuto} ${classes.mrAuto} ${
              classes.textCenter
              }`}
          >
           <h4 className={classes.title}>ระบบจะทำการปรับเพิ่มหรือลดอันดับปัจจัยพื้นฐานของหุ้นเพื่อนำไปใช้พิจารณาการลงทุนโดยปรับเปลี่ยนหลังจากประกาศผลประกอบการรายไตรมาส เช่น หุ้น ก. เคยจัดอยู่ในระดับ B+ ภายหลังกำไรสุทธิเติบโตลดลงสองไตรมาสติดต่อกัน หุ้น ก. จะถูกจัดอันดับใหม่เป็นระดับ B</h4>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

export default withStyles(strategyModelStyle)(SectionStrategyModel);
