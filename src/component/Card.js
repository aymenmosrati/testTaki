import "./Card.css";
import img from "../assets/images5.jpg";
function Card() {
  return (
    <div className="card">
      <img src={img} alt="" className="card-img" />
      <div className="card-desc">
        <p className="card-title">أكملْ دورة اللغة الإنجليزية</p>
        <p className="card-description">
          دروس لمستويات المُبتدئ، والمُتوسط، والمُتقدِّم
        </p>
      </div>
    </div>
  );
}

export default Card;
