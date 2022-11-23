import NavBar from "../layouts/navbar/NavBar";
import SideBar from "../layouts/sideBar/SideBar";
import Btn from "../components/Button/Btn";
import Card from "../components/Card/Card";
import "./content.css";
import Popup from "../components/Popup/Popup";

export const Seasons = () => {
  //handlepopup = (e) => {
  // e.preventDefault();
  // setOpenPopup({
  //  className: "openedpopup",
  // });
  //};
  //handlepopup2 = (e) => {
  //e.preventDefault();
  // setOpenPopup({
  //  className: "openedpopup",
  // });
  //};
  //  <Popup />

  return (
    <div className="seasons">
      <div>
        <NavBar />
        <SideBar />
      </div>
      <div className="seasons-content">
        <div className="seasons-content-head">
          <h2>الفصول</h2>
          <Btn />
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
};
