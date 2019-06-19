import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Extension from "@material-ui/icons/Extension";
import ChildFriendly from "@material-ui/icons/ChildFriendly";
import WatchLater from "@material-ui/icons/WatchLater";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import Button from "components/CustomButtons/Button.jsx";

import startInvestStyle from "assets/jss/material-kit-pro-react/views/homeSections/startInvestStyle.jsx";

import iphone from "assets/img/sections/iphone.png";

function SectionStartInvest({ ...props }) {
  const { classes, ...rest } = props;
  return (
    <div className="cd-section" {...rest}>
      <div className={classes.container}>
        <div className={classes.features3}>
          <GridContainer>
            <GridItem xs={12} sm={3} md={3}>
            </GridItem>
            <GridItem xs={12} sm={3} md={3}>
              <div className={classes.phoneContainer}>
                <img src={iphone} alt="..." />
              </div>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <h2 className={classes.title}>เริ่มต้นลงทุนได้ไม่ยาก</h2>
              <InfoArea
                className={classes.infoArea}
                icon={Extension}
                title="ประเมินความเสี่ยงการลงทุนที่สามารถรับได้"
                description=""
                iconColor="primary"
              />
              <InfoArea
                className={classes.infoArea}
                icon={ChildFriendly}
                title="ศึกษากลยุทธ์การลงทุน"
                description=""
                iconColor="primary"
              />
              <InfoArea
                className={classes.infoArea}
                icon={WatchLater}
                title="ศึกษาโปรดักต์การลงทุนที่เหมาะสม"
                description=""
                iconColor="primary"
              />
              <Button
                href="/register"
                color="white"
                target="_blank"
                className={classes.navButton}
                round
              >
                ลงทะเบียนเพื่อรับข้อมูลการลงทุน
              </Button>
            </GridItem>
          </GridContainer>
        </div>
    </div>
    </div>
  );
}

export default withStyles(startInvestStyle)(SectionStartInvest);
