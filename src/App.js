import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  let [value, setValue] = useState(0);
  const [reviews, setReviewsss] = useState(data);

  useEffect(() => {
    const lastReview = reviews.length - 1;
    if (value < 0) {
      setValue(lastReview);
    }
    if (value >= reviews.length) {
      setValue(0);
    }
  }, [value, reviews]);
  useEffect(() => {
    const slider = setInterval(() => {
      setValue(value + 1);
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [value]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span> review slider <span>/</span>
        </h2>
      </div>
      <div
        className="section-center
      "
      >
        {reviews.map((review, reviewIndex) => {
          const { id, image, title, name, quote } = review;
          let classPostion = "nextSlide";
          if (reviewIndex === value) {
            classPostion = "activeSlide";
          }
          if (
            reviewIndex === value - 1 ||
            (value === 0 && reviewIndex === reviews.length - 1)
          ) {
            classPostion = "lastSlide";
          }
          return (
            <article key={id} className={classPostion}>
              <img src={image} alt="" className="person-img" />

              <h4>{name}</h4>
              <div className="title">{title}</div>
              <div className="text">
                <p> {quote}.</p>
              </div>

              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <FiChevronLeft
          className="icon prev"
          onClick={() => setValue(value - 1)}
        />
        <FiChevronRight
          className="icon next"
          onClick={() => setValue(value + 1)}
        />
      </div>
    </section>
  );
}

export default App;
