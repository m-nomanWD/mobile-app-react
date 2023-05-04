import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [item, setItem] = useState(items);
  const handleFilter = (cetg) => {
    if (cetg === "all") {
      setItem(items);
    } else {
      const newList = items.filter((item) => cetg === item.category);
      setItem(newList);
    }
  };
  return (
    <section>
      <main className="menu">
        <div className="title">
          <h1>featured mobiles</h1>
          <div className="underline"></div>
        </div>

        <Categories items={items} handleFilter={handleFilter} />
        <div className="section-center">
          {item.map((item) => {
            return <Menu key={item.id} {...item} />;
          })}
        </div>
      </main>
    </section>
  );
}

export default App;
