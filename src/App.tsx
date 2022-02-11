import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Test1 from "./Test1";
import Test2 from "./Test2";

import "./items.css";

const Layout = () => {
  return (
    <>
      <Link to="/test1">to the test1</Link>
      <Link to="/test2">to the test2</Link>
    </>
  );
};

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Test1 />} />
        <Route index element={<Layout />} />
        <Route path="/test1" element={<Test1 />} />
        <Route path="/test2" element={<Test2 />} />
        <Route path="*" element={<Layout />} />
      </Routes>
    </div>
  );
}

export default App;
