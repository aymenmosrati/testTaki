import NavBar from "../layouts/navbar/NavBar";
import SideBar from "../layouts/sideBar/SideBar";
import Btn from "../components/Button/Btn";
import Card from "../components/Card/Card";
import "./content.css";
import Popup from "../components/Popup/Popup";
import { stockData } from "../utilites/constant";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../slice/products-slice";
import { addToCart } from "../slice/cart-slice";

export const Seasons = () => {
  //const res = axios.get("/data");
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
  // console.log(res);

  const products = useSelector((state) => state.products);

  console.log(products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

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
          {products.map((items) => (
            <Card
              key={items.id}
              data={{
                title: items.title,
                description: items.description,
                img: items.img,
              }}
              action={() => dispatch(addToCart(items))}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
