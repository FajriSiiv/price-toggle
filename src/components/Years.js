import React from "react";
import "./monthly.scss";
import Card from "./card";

export default function Years() {
  return (
    <div className="root">
      <h1>Tahunan</h1>
      <div className="content">
        <Card
          nama="Sendiri"
          harga="Rp.900,000"
          storage="Max Storage 40GB"
          brapauser="5 User Maximal"
          send="Up To 30MBs"
          button="Pesan"
        />
        <Card
          nama="Blogging"
          harga="Rp.2,200,000"
          storage="Max 70GB"
          brapauser="30 User Maximal"
          send="Up To 100MBs"
          button="Pesan"
        />
        <Card
          nama="Perusahaan"
          harga="Rp.3.500,000"
          storage="Max 1TB"
          brapauser="100 User Maximal"
          send="Up To 200MBs"
          button="Pesan"
        />
      </div>
    </div>
  );
}
