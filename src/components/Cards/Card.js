import React from 'react';
import clsx from "classnames";

const Card = ({ label, className, icon,title,describe, ...props }) => {
    const baseClass = "card";
    const allClass = clsx(baseClass, className);
    return (
      <div className={allClass} {...props}>
        <div>{icon}</div>
        <h6 className='title'>{title}</h6>
        <p className='describe'>{describe}</p>
      </div>
    )
}

export default Card