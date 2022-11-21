import "./Btn.css";

function Btn({ action, nameclass, title }) {
  const [openPopup, setOpenPopup] = useState({ closedpopup });

  // handlepopup = (e) => {
  //   e.preventDefault();
  //   setOpenPopup({
  //     className: "openedpopup",
  //   });
  // };

  return (
    <div className="Btn">
      <button onClick={action} className="nameclass">
        أضف تمرين جديد
      </button>
    </div>
  );
}

export default Btn;
