import "./Btn.css";

function Btn({ action, nameclass, title }) {
  return (
    <div className="Btn">
      <button className="nameclass">أضف تمرين جديد</button>
    </div>
  );
}

export default Btn;
