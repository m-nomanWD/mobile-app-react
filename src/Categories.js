import React, { useState } from "react";

const Categories = ({ handleFilter, items }) => {
  const categories = items.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );

  return (
    <main>
      <article className="btn-container">
        {categories.map((catg) => {
          return (
            <button
              key={catg}
              className="filter-btn"
              onClick={() => {
                handleFilter(catg);
              }}
            >
              {catg}
            </button>
          );
        })}
      </article>
    </main>
  );
};

export default Categories;
