import React from "react";
import Card from "./card";
import "./monthly.scss";
export default function Monthly() {
  return (
    <div className="root">
      <h1>Bulanan</h1>
      <div className="content">
        <Card
          nama="Hemat"
          harga="Rp.100,000"
          storage="Max Storage 5GB"
          brapauser="3 User Maximal"
          send="Up To 15MBs"
          button="Pesan"
        />
        <Card
          nama="Berkembang"
          harga="Rp.180,000"
          storage="Max 10GB"
          brapauser="7 User Maximal"
          send="Up To 50MBs"
          button="Pesan"
        />
        <Card
          nama="Elite"
          harga="Rp.250,000"
          storage="Max 20GB"
          brapauser="10 User Maximal"
          send="Up To 75MBs"
          button="Pesan"
        />
      </div>
    </div>
  );
}
