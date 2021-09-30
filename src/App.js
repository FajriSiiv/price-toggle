import React, { useState } from "react";
import ToggleSwicth from "./components/ToggleSwicth";
import Monthly from "./components/Monthly";
import Years from "./components/Years";
import "./App.scss";
function App() {
  const [toggle, settoggle] = useState(false);

  return (
    <div className="app">
      <h1 className="judul">Harga Paket Hosting</h1>
      <div className="container_toggle">
        <h4>Bulanan</h4>
        <label
          onClick={e => {
            e.preventDefault();
            settoggle(!toggle);
          }}
        >
          <ToggleSwicth />
        </label>
        <h4>Tahunan</h4>
      </div>
      {toggle && <Years />}
      {!toggle && <Monthly />}
    </div>
  );
}

export default App;
