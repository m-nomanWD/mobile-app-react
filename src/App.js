import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import IsLoading from "./IsLoading";
import IsError from "./IsError";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [items, setItems] = useState([]);
  const [value, setValue] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setItems(data);

      setIsLoading(false);
      setIsError(false);
    } catch {
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <IsLoading />;
  }
  if (isError) {
    return <IsError />;
  }

  const { title, company, dates, duties } = items[value];
  return (
    <main className="section">
      <div className="title">
        <h2>my experience</h2>
        <div className="underline"></div>
      </div>
      <section className="jobs-center">
        <article className="btn-container">
          {items.map((item, index) => {
            return (
              <button
                key={item.id}
                className={`job-btn ${value === index && "active-btn"} `}
                onClick={() => setValue(index)}
              >
                {item.company}
              </button>
            );
          })}
        </article>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>

          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon" />
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </section>
      <button className="btn">more info</button>
    </main>
  );
}

export default App;
