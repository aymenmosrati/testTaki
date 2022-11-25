import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../../assets/takiacademy-logo.svg";
import "./SideBar.css";

function SideBar() {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="SideBar">
      <div className="SideBar-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="SideBar-link">
        <div className="SideBar-link-seasons">
          <NavLink to="/" className="sid-link">
            الفصول
            <div className="sideBar-icon-menu sid-icon category-icon">
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="category-icon"
              >
                <path
                  d="M7.875 12.0938H5.625C2.9025 12.0938 1.40625 10.5975 1.40625 7.875V5.625C1.40625 2.9025 2.9025 1.40625 5.625 1.40625H7.875C10.5975 1.40625 12.0938 2.9025 12.0938 5.625V7.875C12.0938 10.5975 10.5975 12.0938 7.875 12.0938ZM5.625 3.09375C3.8475 3.09375 3.09375 3.8475 3.09375 5.625V7.875C3.09375 9.6525 3.8475 10.4062 5.625 10.4062H7.875C9.6525 10.4062 10.4062 9.6525 10.4062 7.875V5.625C10.4062 3.8475 9.6525 3.09375 7.875 3.09375H5.625Z"
                  fill="black"
                />
                <path
                  d="M21.375 12.0938H19.125C16.4025 12.0938 14.9062 10.5975 14.9062 7.875V5.625C14.9062 2.9025 16.4025 1.40625 19.125 1.40625H21.375C24.0975 1.40625 25.5938 2.9025 25.5938 5.625V7.875C25.5938 10.5975 24.0975 12.0938 21.375 12.0938ZM19.125 3.09375C17.3475 3.09375 16.5938 3.8475 16.5938 5.625V7.875C16.5938 9.6525 17.3475 10.4062 19.125 10.4062H21.375C23.1525 10.4062 23.9062 9.6525 23.9062 7.875V5.625C23.9062 3.8475 23.1525 3.09375 21.375 3.09375H19.125Z"
                  fill="black"
                />
                <path
                  d="M21.375 25.5938H19.125C16.4025 25.5938 14.9062 24.0975 14.9062 21.375V19.125C14.9062 16.4025 16.4025 14.9062 19.125 14.9062H21.375C24.0975 14.9062 25.5938 16.4025 25.5938 19.125V21.375C25.5938 24.0975 24.0975 25.5938 21.375 25.5938ZM19.125 16.5938C17.3475 16.5938 16.5938 17.3475 16.5938 19.125V21.375C16.5938 23.1525 17.3475 23.9062 19.125 23.9062H21.375C23.1525 23.9062 23.9062 23.1525 23.9062 21.375V19.125C23.9062 17.3475 23.1525 16.5938 21.375 16.5938H19.125Z"
                  fill="black"
                />
                <path
                  d="M7.875 25.5938H5.625C2.9025 25.5938 1.40625 24.0975 1.40625 21.375V19.125C1.40625 16.4025 2.9025 14.9062 5.625 14.9062H7.875C10.5975 14.9062 12.0938 16.4025 12.0938 19.125V21.375C12.0938 24.0975 10.5975 25.5938 7.875 25.5938ZM5.625 16.5938C3.8475 16.5938 3.09375 17.3475 3.09375 19.125V21.375C3.09375 23.1525 3.8475 23.9062 5.625 23.9062H7.875C9.6525 23.9062 10.4062 23.1525 10.4062 21.375V19.125C10.4062 17.3475 9.6525 16.5938 7.875 16.5938H5.625Z"
                  fill="black"
                />
              </svg>
            </div>
          </NavLink>
        </div>
        <div className="SideBar-link-lessons">
          <NavLink to="/Lessons" className="sid-link">
            <span>الدروس</span>
            <div className="SideBar-icon-message sid-icon">
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.5625 21.375H9C4.5 21.375 2.25 20.25 2.25 14.625V9C2.25 4.5 4.5 2.25 9 2.25H18C22.5 2.25 24.75 4.5 24.75 9V14.625C24.75 19.125 22.5 21.375 18 21.375H17.4375C17.0887 21.375 16.7512 21.5437 16.5375 21.825L14.85 24.075C14.1075 25.065 12.8925 25.065 12.15 24.075L10.4625 21.825C10.2825 21.5775 9.86625 21.375 9.5625 21.375Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.996 12.375H18.0061"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.4949 12.375H13.505"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.99382 12.375H9.00393"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </NavLink>
        </div>
        <div className="SideBar-link-levels">
          <NavLink to="/Levels" className="sid-link">
            <span>المستويات</span>
            <div className="SideBar-icon-task sid-icon">
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.9163 9.99023H19.8225"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.17749 9.99023L8.02124 10.834L10.5525 8.30273"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.9163 17.8652H19.8225"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.17749 17.8652L8.02124 18.709L10.5525 16.1777"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.125 24.75H16.875C22.5 24.75 24.75 22.5 24.75 16.875V10.125C24.75 4.5 22.5 2.25 16.875 2.25H10.125C4.5 2.25 2.25 4.5 2.25 10.125V16.875C2.25 22.5 4.5 24.75 10.125 24.75Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </NavLink>
        </div>
        <div className="SideBar-link-users">
          <NavLink to="/Users" className="sid-link">
            <span>المستخدمين</span>
            <div className="SideBar-icon-users sid-icon">
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.305 12.2287C10.1925 12.2175 10.0575 12.2175 9.93375 12.2287C7.25625 12.1387 5.13 9.945 5.13 7.245C5.13 4.48875 7.3575 2.25 10.125 2.25C12.8813 2.25 15.12 4.48875 15.12 7.245C15.1088 9.945 12.9825 12.1387 10.305 12.2287Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.4613 4.5C20.6438 4.5 22.3988 6.26625 22.3988 8.4375C22.3988 10.5637 20.7113 12.2962 18.6075 12.375C18.5175 12.3638 18.4163 12.3638 18.315 12.375"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.68 16.38C1.9575 18.2025 1.9575 21.1725 4.68 22.9837C7.77375 25.0537 12.8475 25.0537 15.9412 22.9837C18.6638 21.1612 18.6638 18.1913 15.9412 16.38C12.8587 14.3213 7.785 14.3213 4.68 16.38Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.6325 22.5C21.4425 22.3312 22.2075 22.005 22.8375 21.5212C24.5925 20.205 24.5925 18.0337 22.8375 16.7175C22.2188 16.245 21.465 15.93 20.6663 15.75"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </NavLink>
        </div>
        <div className="SideBar-link-settings">
          <NavLink to="/Settings" className="sid-link">
            <span>إعدادات</span>
            <div className="SideBar-icon-setting sid-icon">
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 16.875C15.364 16.875 16.875 15.364 16.875 13.5C16.875 11.636 15.364 10.125 13.5 10.125C11.636 10.125 10.125 11.636 10.125 13.5C10.125 15.364 11.636 16.875 13.5 16.875Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.25 14.4901V12.5101C2.25 11.3401 3.20625 10.3726 4.3875 10.3726C6.42375 10.3726 7.25625 8.93261 6.2325 7.16636C5.6475 6.15386 5.99625 4.83761 7.02 4.25261L8.96625 3.13886C9.855 2.61011 11.0025 2.92511 11.5312 3.81386L11.655 4.02761C12.6675 5.79386 14.3325 5.79386 15.3562 4.02761L15.48 3.81386C16.0088 2.92511 17.1563 2.61011 18.045 3.13886L19.9913 4.25261C21.015 4.83761 21.3637 6.15386 20.7787 7.16636C19.755 8.93261 20.5875 10.3726 22.6238 10.3726C23.7938 10.3726 24.7613 11.3289 24.7613 12.5101V14.4901C24.7613 15.6601 23.805 16.6276 22.6238 16.6276C20.5875 16.6276 19.755 18.0676 20.7787 19.8339C21.3637 20.8576 21.015 22.1626 19.9913 22.7476L18.045 23.8614C17.1563 24.3901 16.0088 24.0751 15.48 23.1864L15.3562 22.9726C14.3437 21.2064 12.6787 21.2064 11.655 22.9726L11.5312 23.1864C11.0025 24.0751 9.855 24.3901 8.96625 23.8614L7.02 22.7476C5.99625 22.1626 5.6475 20.8464 6.2325 19.8339C7.25625 18.0676 6.42375 16.6276 4.3875 16.6276C3.20625 16.6276 2.25 15.6601 2.25 14.4901Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </NavLink>
          <NavLink to="/bookmargs" className="sid-link">
            <span>Bookmargs</span>
            <div className="SideBar-icon-setting sid-icon">
              {cart.length > 0 ? (
                <span className="count-cart"> {cart.length}</span>
              ) : null}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.16 4.61006C19.0983 3.54806 17.6908 2.90238 16.1933 2.79044C14.6958 2.67849 13.2078 3.10772 12 4.00006C10.7277 3.0537 9.14402 2.62457 7.56795 2.7991C5.99188 2.97362 4.54047 3.73884 3.506 4.94064C2.47154 6.14245 1.93085 7.69158 1.99283 9.27607C2.05481 10.8606 2.71485 12.3627 3.84003 13.4801L11.29 20.9301C11.383 21.0238 11.4936 21.0982 11.6155 21.1489C11.7373 21.1997 11.868 21.2259 12 21.2259C12.132 21.2259 12.2627 21.1997 12.3846 21.1489C12.5065 21.0982 12.6171 21.0238 12.71 20.9301L20.16 13.4801C20.7427 12.8978 21.2049 12.2064 21.5202 11.4454C21.8356 10.6844 21.9979 9.86879 21.9979 9.04506C21.9979 8.22133 21.8356 7.40567 21.5202 6.64469C21.2049 5.88371 20.7427 5.19233 20.16 4.61006ZM18.75 12.0701L12 18.8101L5.25003 12.0701C4.65521 11.4728 4.25001 10.7131 4.08526 9.8864C3.92052 9.05969 4.00356 8.20274 4.32398 7.42305C4.6444 6.64336 5.18793 5.97565 5.88638 5.50368C6.58483 5.03171 7.40709 4.7765 8.25003 4.77006C9.37614 4.77282 10.4551 5.22239 11.25 6.02006C11.343 6.11379 11.4536 6.18818 11.5755 6.23895C11.6973 6.28972 11.828 6.31586 11.96 6.31586C12.092 6.31586 12.2227 6.28972 12.3446 6.23895C12.4665 6.18818 12.5771 6.11379 12.67 6.02006C13.4884 5.31094 14.5455 4.9392 15.6276 4.98008C16.7096 5.02096 17.7357 5.47141 18.4982 6.24025C19.2607 7.00909 19.7026 8.0389 19.7345 9.12125C19.7664 10.2036 19.3859 11.2576 18.67 12.0701H18.75Z"
                  fill="black"
                />
              </svg>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
