import React from "react";
import { Routes, Route } from "react-router";
import LoginUi from "./Components/LoginUi";
import SignUi from "./Components/SignUi";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/signup" element={<SignUi />} />
        <Route exact path="/" element={<LoginUi />} />
      </Routes>
    </>
  );
}

export default App;
