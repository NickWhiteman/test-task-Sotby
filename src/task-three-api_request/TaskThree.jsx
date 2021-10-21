import "./style/TaskThree.css";
import React, { useState } from "react";

export const TaskThree = () => {
  const url = "http://jsonplaceholder.typicode.com/users/";
  const [users, setUsers] = useState([]);

  const randomId = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const getUsers = () => {
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        let resultArray = [""];
        let idOne = randomId(1, 10);
        let idTwo = randomId(1, 10);
        if (idOne === idTwo) idTwo = randomId(1, 10);
        data.forEach(
          (item) =>
            item.id !== idOne &&
            item.id !== idTwo &&
            resultArray.push(`${item.name + " " + item.username}`)
        );
        setUsers(resultArray);
      })
      .catch((err) => console.log(err));
  };

  const sendRequest = async () => {
    getUsers();
  };

  return (
    <div className="task-three">
      <button className="request-button" onClick={sendRequest}>
        Отправить запрос
      </button>
      <div className="user-container">
        {users.map((user) => (
          <div className="user">{user}</div>
        ))}
      </div>
    </div>
  );
};
