import React, { Fragment } from "react";
import clsx from "classnames";

const Button = ({ label, className, ...props }) => {
  const baseClass = "";
  const allClass = clsx(baseClass, className);
  return (
    <Fragment>
      <button className={allClass} {...props}>
        {label}
      </button>
    </Fragment>
  );
};

export default Button;