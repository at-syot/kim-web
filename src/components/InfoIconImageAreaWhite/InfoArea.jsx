import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import infoStyle from "assets/jss/material-kit-pro-react/components/infoStyleWhite.jsx";

function InfoArea({ ...props }) {
  const { classes, title, description, iconColor, vertical, className } = props;
  const infoAreaClasses = classNames({
    [classes.infoArea]: true,
    [className]: className !== undefined
  });
  const iconWrapper = classNames({
    [classes.iconWrapper]: true,
    [classes[iconColor]]: true,
    [classes.iconWrapperVertical]: vertical
  });
  return (
    <div className={infoAreaClasses}>
      <div className={iconWrapper}><img width={props.iconSize} height={props.iconSize} src={props.icon} alt="..." /></div>
      <div className={classes.descriptionWrapper}>
        <h3 className={classes.title}>{title}</h3>
        <div className={classes.description}>{description}</div>
      </div>
    </div>
  );
}

InfoArea.defaultProps = {
  iconColor: "gray"
};

InfoArea.propTypes = {
  classes: PropTypes.object.isRequired,
  icon: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
  iconSize: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  iconColor: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  vertical: PropTypes.bool,
  className: PropTypes.string
};

export default withStyles(infoStyle)(InfoArea);
