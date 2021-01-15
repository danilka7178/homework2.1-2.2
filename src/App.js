import React from "react";
import Card from "./components/Card";
import Filter from "./components/Filter";
import data from "./data.json";

function App() {
  const [inputValue, setInputValue] = React.useState("");

  return (
    <div className="app">
      <Filter inputValue={inputValue} setInputValue={setInputValue} />
      <div className="cards">
        {data
          .filter((arg) => arg.title.toLocaleLowerCase().includes(inputValue.toLowerCase()) ||
            arg.description.toLocaleLowerCase().includes(inputValue.toLowerCase()))
          .map((arg) => (
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
