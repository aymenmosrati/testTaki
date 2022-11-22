import "./popup.css";
import React from "react";

const Popup = () => {
  return (
    <div className="popup">
      <div className="popup-content">
        <div className="header">
          <div className="popup-icon">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="18" cy="18" r="18" fill="white" />
              <path
                d="M13.3596 22.4184L22.6404 13.5796"
                stroke="black"
                stroke-width="2.5"
                stroke-linecap="round"
              />
              <path
                d="M13.3596 13.5796L22.6404 22.4185"
                stroke="black"
                stroke-width="2.5"
                stroke-linecap="round"
              />
            </svg>
          </div>

          <p className="popup-title"> أضف فصل جديد </p>
        </div>
        <div className="popup-content">
          <div>
            <div></div>
            <div></div>
          </div>
          <div>
            <label for=""> إسم الفصل</label>
            <input type="text" name="" />
            <label for="">وصف</label>
            <input type="text" name="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
