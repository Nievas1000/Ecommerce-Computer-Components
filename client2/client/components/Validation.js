
function Validation({ show, message }) {
    return (
      <div className="style-notification">
        <div>
          <div id="snackbar" className={show ? "animation-in" : "not-show"}>
            {message}
          </div>
        </div>
      </div>
    );
  }

  export default Validation