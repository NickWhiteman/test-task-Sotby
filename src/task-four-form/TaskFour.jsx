import "./style/FormStyle.css";
import { useRef, useState } from "react";

export const TaskFour = () => {
  const firstName = useRef("firstname");
  const lastName = useRef("lastname");
  const [yourName, setYourName] = useState({});
  const [thanks, setThanks] = useState(false);

  const onSubmitHandler = (event) => {
    if (thanks) setThanks(false);

    setYourName({
      firstName: firstName.current.value,
      lastName: lastName.current.value,
    });
    setThanks(true);
    event.preventDefault();
  };

  return (
    <div className="form-wrapper">
      <div className="form-dialog">
        <h3 class="my-question">Как тебя зовут?</h3>
        {thanks && (
          <h4 class="my-answer">
            {`Очень приятно ${yourName.firstName}, а меня Никита :)`}
          </h4>
        )}
      </div>
      <form onSubmit={onSubmitHandler}>
        <input
          ref={firstName}
          name="firstname"
          type="text"
          placeholder="firstname"
        />
        <input
          ref={lastName}
          name="lastname"
          type="text"
          placeholder="lastname"
        />
        <div className="form-footer">
          <button type="submit" className="button">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};
