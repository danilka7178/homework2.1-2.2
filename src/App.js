import React from "react";
import Card from "./components/Card";
import Filter from "./components/Filter";
import data from "./data.json";

function App() {
  return (
    <div className="app">
      <Filter />
      <div className="cards">
        {data.map((arg) => (
          <Card key={`${arg.title.toString()}_${arg.index}`}
            title={arg.title}
            image={arg.image}
            description={arg.description} />
        ))}
      </div>
    </div>
  );
}

export default App;
