import "./App.css";
import React, { useState } from "react";
import List from "./components/List";
import Navbar1 from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Description from "./components/Description";
import Home from "./components/Home";
// hello

function App() {
  const [search, setSearch] = useState("");
  const [rate, setRate] = useState();
  return (
    <div className="App">
      <Navbar1 setSearch={setSearch} setRate={setRate} rate={rate} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<List search={search} rate={rate} />} />
        <Route path="/movies/:id" element={<Description />} />
      </Routes>
    </div>
  );
}

export default App;
