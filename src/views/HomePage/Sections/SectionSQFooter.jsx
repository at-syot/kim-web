import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Footer from "components/Footer/Footer.jsx";

import styles from "assets/jss/material-kit-pro-react/views/homeSections/footerStyle.jsx";

const SectionSQFooter = props => {
  const { classes } = props;
  return (
    <Footer
      className={classes.container}
      theme="white"
      content={
        <div >
          <div
            className={classNames(classes.pullCenter, classes.copyRight)}
          >
            Copyright &copy; {1900 + new Date().getYear()}{" "}
            StockQuadrant Company Limited All
            Rights Reserved.
          </div>
        </div>
      }
    >
      <div className={classes.footer}>
        <GridContainer>
          <GridItem xs={12} sm={6} md={6}>
            <h5>Contact Us</h5>
            <h6 className={classes.description}>
              บริษัท สต็อคควอดแรนท์ (ประเทศไทย) จำกัด
            </h6>
            <h6 className={classes.description}>
              91/12 The Pretium ,หมู่ 15 บางแก้ว บางพลี สมุทรปราการ 10540
            </h6>
            <h6 className={classes.description}>
              ติดต่อผู้แนะนำการลงทุน Tel: 0825805734
            </h6>
            <h6 className={classes.description}>
              Email: <a href="mailto:Sale@stockquadrant.com">Sale@stockquadrant.com</a>
            </h6>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <h5 className={classes.textWarning}>
              *ปัจจุบันบริษัทยังไม่ได้รับใบอนุญาตบริษัทหลักทรัพย์ที่ปรึกษาการลงทุนจากสำนักงาน ก.ล.ต. โดยอยู่ระหว่างขั้นตอนการขอใบอนุญาตดังกล่าว ปัจจุบัน บริษัทให้บริการเฉพาะการวิเคราะห์หุ้น และระบบจัดการพอร์ตอัตโนมัติ โดยไม่มีการเก็บค่าใช้จ่าย
            </h5>
          </GridItem>
        </GridContainer>
      </div>
    </Footer>
  );
};

export default withStyles(styles)(SectionSQFooter);
