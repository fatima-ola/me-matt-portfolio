import React from "react";
import Rectangle from "../assets/images/Rectangle.png";
import { ReviewCards } from "../components";

const Reviews = () => {
  return (
    <div className='container reviews'>
      <h1>Reviews</h1>
      <p className="mb-5">
        <img src={Rectangle} alt='rectangle' />
      </p>
      <div className='d-flex justify-content-around'>
        <ReviewCards
          quote={
            "I rarely come across real talents who stand out like Matthew. I had the pleasure of working with Matthew for 3 years at Etranzact International Plc as his team lead. Matthew's ability to handle multiple software projects was exceptional, this made a dramatic increase in the productivity level of our engineering team. He is smart, dedicated and reliable. No matter how challenging the task, Matthew delivers excellently on schedule. As an engineering manager, Matthew earns my highest recommendation."
          }
          className="card1"
        />
        <ReviewCards
          quote={
            "A great guy who knows his onions. Matthew worked with me for some years, I recruited him to a programmer trainee program which require a tight curriculum to get awarded a certificate. He was confirmed and promoted to our developer team!. Matthew was excellent and was able to prove the first class He possed from the university was not just a pass through. A very committed and religious person and deep in knowledge."
          }
          className="card1"
        />
        <ReviewCards
          quote={
            "Matthew is a world class talent with an exceptional attitude. Always willing to go beyond the call of duty to solve a problem beyond the surface level. Analytical and clear headed. He is a fantastic leader and proves that leadership goes beyond position but rather influence"
          }
          className="card1"
        />
      </div>
      <p className='text-center social-page'>Visit LinkedIn page &gt;</p>
    </div>
  );
};

export default Reviews;
