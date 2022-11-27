import "./Card.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';

const Card = (props) => {
  const { title, description, img,isBookmarked,bookmarkTrue } = props.data;

  return (
    <div className="card">
      {/* <svg className="card-icon-heart" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 120 120"><defs><linearGradient id="a" x1="-704.843" x2="-704.843" y1="-592.356" y2="-594.355" gradientTransform="matrix(28.0073 0 0 -24.5176 19813.665 -14503.165)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ff60ab"/><stop offset="1" stop-color="#ff281b"/></linearGradient></defs><path fill="#fff" d="M26,0H94a25.94821,25.94821,0,0,1,26,26V94a25.94821,25.94821,0,0,1-26,26H26A25.94821,25.94821,0,0,1,0,94V26A25.94819,25.94819,0,0,1,26,0Z"/><path fill="url(#a)" fill-rule="evenodd" d="M73,25s12.6-10.6,22.7-1c8.6,8.2,6,20.7-3.7,31.4C82,66.4,73,69,73,69s-9.1-2.6-19.1-13.6C44.1,44.7,41.5,32.2,50.2,24,60.4,14.4,73,25,73,25Z"/></svg> */}
      {/* <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="card-icon-heart"
        onClick={props.action}
      >
        <path
          d="M20.16 4.61006C19.0983 3.54806 17.6908 2.90238 16.1933 2.79044C14.6958 2.67849 13.2078 3.10772 12 4.00006C10.7277 3.0537 9.14402 2.62457 7.56795 2.7991C5.99188 2.97362 4.54047 3.73884 3.506 4.94064C2.47154 6.14245 1.93085 7.69158 1.99283 9.27607C2.05481 10.8606 2.71485 12.3627 3.84003 13.4801L11.29 20.9301C11.383 21.0238 11.4936 21.0982 11.6155 21.1489C11.7373 21.1997 11.868 21.2259 12 21.2259C12.132 21.2259 12.2627 21.1997 12.3846 21.1489C12.5065 21.0982 12.6171 21.0238 12.71 20.9301L20.16 13.4801C20.7427 12.8978 21.2049 12.2064 21.5202 11.4454C21.8356 10.6844 21.9979 9.86879 21.9979 9.04506C21.9979 8.22133 21.8356 7.40567 21.5202 6.64469C21.2049 5.88371 20.7427 5.19233 20.16 4.61006ZM18.75 12.0701L12 18.8101L5.25003 12.0701C4.65521 11.4728 4.25001 10.7131 4.08526 9.8864C3.92052 9.05969 4.00356 8.20274 4.32398 7.42305C4.6444 6.64336 5.18793 5.97565 5.88638 5.50368C6.58483 5.03171 7.40709 4.7765 8.25003 4.77006C9.37614 4.77282 10.4551 5.22239 11.25 6.02006C11.343 6.11379 11.4536 6.18818 11.5755 6.23895C11.6973 6.28972 11.828 6.31586 11.96 6.31586C12.092 6.31586 12.2227 6.28972 12.3446 6.23895C12.4665 6.18818 12.5771 6.11379 12.67 6.02006C13.4884 5.31094 14.5455 4.9392 15.6276 4.98008C16.7096 5.02096 17.7357 5.47141 18.4982 6.24025C19.2607 7.00909 19.7026 8.0389 19.7345 9.12125C19.7664 10.2036 19.3859 11.2576 18.67 12.0701H18.75Z"
          fill="black"
        />
      </svg> */}
      {/* <FavoriteBorderIcon className="card-icon-heart"  /> */}
      {isBookmarked ?
      <FavoriteSharpIcon className="card-icon-heart bookmarkTrue" onClick={props.action} /> :
      <FavoriteSharpIcon className="card-icon-heart" onClick={props.action} />
      }


      <img src={img} alt="" className="card-img" />
      <div className="card-desc">
        <p className="card-title">{title}</p>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
