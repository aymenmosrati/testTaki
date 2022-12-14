import "./navbar.css";

function NavBar() {
  return (
    <div className="navbar">

      <div className="navbar-search">
        <div className="navbar-background-search">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="navbar-search-icon"
            >
              <path
                d="M10.5417 19.2502C15.3512 19.2502 19.25 15.3513 19.25 10.5418C19.25 5.73235 15.3512 1.8335 10.5417 1.8335C5.73223 1.8335 1.83337 5.73235 1.83337 10.5418C1.83337 15.3513 5.73223 19.2502 10.5417 19.2502Z"
                stroke="#787486"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20.1667 20.1668L18.3334 18.3335"
                stroke="#787486"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          <input
            dir="rtl"
            type="text"
            name="search"
            placeholder="ابحث عن أي شيء ..."
            className="navbar-search-input"
          />   
        </div>
      </div>

      <div className="navbar-info">
        
        <div className="navbar-info-img-name">
          <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="19" cy="19" r="19" fill="#C4C4C4" />
          </svg>

        <div className="navbar-info-name">
          <div className="navbar-info-name-fullname">محمد أمين</div>
          <div className="navbar-info-name-role">Admin</div>
        </div>
        </div>
        <div className="navbar-info-icon">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.99989 12.6C8.47489 12.6 7.94989 12.3975 7.55239 12L2.66239 7.10998C2.44489 6.89248 2.44489 6.53248 2.66239 6.31498C2.87989 6.09748 3.23989 6.09748 3.45739 6.31498L8.34739 11.205C8.70739 11.565 9.29239 11.565 9.65239 11.205L14.5424 6.31498C14.7599 6.09748 15.1199 6.09748 15.3374 6.31498C15.5549 6.53248 15.5549 6.89248 15.3374 7.10998L10.4474 12C10.0499 12.3975 9.52489 12.6 8.99989 12.6Z"
              fill="#292D32"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
