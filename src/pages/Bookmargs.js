import NavBar from "../layouts/navbar/NavBar";
import SideBar from "../layouts/sideBar/SideBar";

export const Bookmargs = () => {
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
              <th>delete Cards</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Image</td>
              <td>Title</td>
              <td>Description</td>
              <td>
                <button>delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
