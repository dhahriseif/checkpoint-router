import "./App.css";
import React, { useState } from "react";
import List from "./components/List";
import Navbar1 from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [search, setSearch] = useState("");
  const [rate, setRate] = useState();
  return (
    <div className="App">
      <Navbar1 setSearch={setSearch} setRate={setRate} rate={rate} />
      <List search={search} rate={rate}/>
    </div>
  );
}

export default App;
