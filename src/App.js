import React from "react";
import Card from "./components/Card";
import Filter from "./components/Filter";
import data from "./data.json";

function App() {
  return (
    <div className="app">
      <Filter />
      <Card data={data} />
    </div>
  );
}

export default App;
