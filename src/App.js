import React from "react";
import { CurrentUser } from "./components/CurrentUser";
import "./App.css";
import { Country } from "./components/Country";

function App() {
  return (
    <div className="App">
      <CurrentUser />
      <Country />
    </div>
  );
}

export default App;
