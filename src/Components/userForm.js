export const Userform = (props) => {
  return (
    <form>
      <div className="formControl">
        <label htmlFor={props.label}>{props.label}</label>
        <input
          type="text"
          name={props.inputname}
          value={props.pstate.inputname}
          onChange={(e) => {
            props.changelistener(e.target);
          }}
        />
      </div>
    </form>
  );
};
