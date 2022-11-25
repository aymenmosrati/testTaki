import NavBar from "../layouts/navbar/NavBar";
import SideBar from "../layouts/sideBar/SideBar";
import Btn from "../components/Button/Btn";
import Card from "../components/Card/Card";
import "./content.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProducts, updateProducts } from "../slice/products-slice";
import { addToCart, bookmargs } from "../slice/cart-slice";
import axios from "axios";

export const Seasons = () => {
  const [index, setIndex] = useState(null);
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
  // console.log(index);
  // const handleClick = (id, isBookmarked) => {
  //   axios.patch(`http://localhost:3000/data/${id}`, {
  //     isBookmarked: !isBookmarked,
  //   });
  //   console.log(id);
  // };

  const products = useSelector((state) => state.products);
  // console.log(products);
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
              // action={() => handleClick(items.id, items.isBookmarked)}
              // action={() => setIndex(items.id)}
              // action={() => dispatch(addToCart(items))}
              action={() => dispatch(updateProducts({ items }))}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
