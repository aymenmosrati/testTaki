import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import menu from "../../assets/Menu.svg";
import message from "../../assets/message.svg";
import users from "../../assets/profile-2user.svg";
import setting from "../../assets/setting-2.svg";
import task from "../../assets/task-square.svg";
import "./SideBar.css";

function SideBar() {
  return (
    <div className="SideBar">
      <header className="SideBar-header">
        <img src={logo} className="SideBar-logo" alt="logo" />
        <div>
          <p>TakiAcademy</p>
          <p>Learn English</p>
        </div>
      </header>

      <div className="SideBar-link">
        <div className="SideBar-link-seasons">
          <NavLink to="/Seasons">
            الفصول
            <img src={menu} className="SideBar-icon-menu" alt="menu" />
          </NavLink>
        </div>
        <div className="SideBar-link-lessons">
          <NavLink to="/Lessons">
            الدروس
            <img src={message} className="SideBar-icon-message" alt="message" />
          </NavLink>
        </div>
        <div className="SideBar-link-levels">
          <NavLink to="/Levels">
            المستويات
            <img src={task} className="SideBar-icon-task" alt="task" />
          </NavLink>
        </div>
        <div className="SideBar-link-users">
          <NavLink to="/Users">
            المستخدمين
            <img src={users} className="SideBar-icon-users" alt="users" />
          </NavLink>
        </div>
        <div className="SideBar-link-settings">
          <NavLink to="/Settings">
            إعدادات
            <img src={setting} className="SideBar-icon-setting" alt="setting" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
