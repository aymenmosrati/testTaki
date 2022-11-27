import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../layouts/navbar/NavBar";
import SideBar from "../layouts/sideBar/SideBar";
import { fetchProducts } from "../slice/products-slice";


export const Bookmargs = () => {

  const favorite = useSelector((state) => state.products)
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchProducts());
    }, []);

  return (
    <>
      <div>
        <NavBar />
        <SideBar />
      </div>
      <div>
        <h4>Welcom to Bookmargs</h4>
        <table border="1px">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
          {favorite.map((BookMark)=>(
            BookMark.isBookmarked == true &&
              <tr>
              <td><img src={BookMark.img} alt="" width="100px" height="70px" /></td>
              <td>{BookMark.title}</td>
              <td>{BookMark.description}</td>
            </tr> 
          ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
