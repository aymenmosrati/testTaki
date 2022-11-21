import NavBar from "../layouts/navbar/NavBar";
import SideBar from "../layouts/sideBar/SideBar";
import Btn from "../component/Btn";
import Card from "../component/Card";
import "./content.css";
import { useState } from "react";

function Seasons() {
  handlepopup = (e) => {
    e.preventDefault();
    setOpenPopup({
      className: "openedpopup",
    });
  };
  handlepopup2 = (e) => {
    e.preventDefault();
    setOpenPopup({
      className: "openedpopup",
    });
  };
  return (
    <div className="seasons">
      <div>
        <NavBar />
        <SideBar />
      </div>

      <div className="seasons-content">
        <div className="seasons-content-head">
          <h2>الفصول</h2>
          <Btn action={handlepopup} />
          <Btn action={handlepopup2} />
        </div>
        <div className="seasons-content-cards">
          <Card className="card" />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Seasons;
