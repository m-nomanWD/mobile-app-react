import React, { useState, useEffect } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("#fe1260");
  const [list, setList] = useState([]);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const colors = new Values(color).all(10);
    setList(colors);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const colors = new Values(color).all(10);
      setList(colors);
      setIsError(false);
    } catch {
      setIsError(true);
    }
  };
  // const colors = color.all(10);

  return (
    <>
      <div>
        <form className="container">
          <h3> color generator</h3>
          <input
            className={isError ? "error" : ""}
            type="text"
            placeholder="#c5e5fc"
            onChange={(e) => {
              setColor(e.target.value);
            }}
          />
          <button type="submit" className="btn" onClick={handleSubmit}>
            submit
          </button>
        </form>
      </div>
      <article className="colors">
        {list.map((color, colorIndex) => {
          return (
            <SingleColor
              key={colorIndex}
              color={color}
              colorIndex={colorIndex}
            />
          );
        })}
      </article>
    </>
  );
}

export default App;
