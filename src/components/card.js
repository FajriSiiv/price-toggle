import React from "react";
import "./card.scss";
export default function Card({ nama, harga, storage, brapauser, send, button }) {
  return (
    <div className="card">
      <div className="content">
        <h4>{nama}</h4>
        <h2 className="harga">{harga}</h2>
        <p className="first-p">{storage}</p>
        <p>{brapauser}</p>
        <p>{send}</p>
        <button onClick={() => alert(`Terimakasih telah pesan ${nama}`)}>{button}</button>
      </div>
    </div>
  );
}
