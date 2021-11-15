import './Field.css';

function Field(props) {

  const handlerClick = (e) => {
    e.preventDefault();
    props.transporterEvent(e.target);
  };

  return (
    <div className="field">
      <form>
        <button onClick={handlerClick}>SHow</button>
      </form>
    </div>
  );
}

export default Field;
