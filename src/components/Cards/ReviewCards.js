import React from "react";
import clsx from "classnames";

const ReviewCards = ({ label, className, quote, author, ...props }) => {
  const baseClass = "card2";
  const allClass = clsx(baseClass, className);
  return (
    <div className={allClass} {...props}>
      <p className='quote'>{quote}</p>
      <p className='author'>{author}</p>
    </div>
  );
};

export default ReviewCards;
