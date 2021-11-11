export const Userform = (props) => {
  return (
    <form>
      <div className="formControl">
        <label for="name">Name</label>
        <input
          type="text"
          name="name"
          value={props.name}
          onChange={(e) => {
            props.changelistener(e.target);
          }}
        />
      </div>
      <div className="formControl">
        <label for="Age">Age</label>
        <input
          type="text"
          name="age"
          value={props.age}
          onChange={(e) => {
            props.changelistener(e.target);
          }}
        />
      </div>
      <div className="formControl">
        <label for="Designation">Designation</label>
        <input
          type="text"
          name="des"
          value={props.des}
          onChange={(e) => {
            props.changelistener(e.target);
          }}
        />
      </div>
    </form>
  );
};
