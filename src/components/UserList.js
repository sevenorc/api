import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  const [listOfUSer, setListOfUSer] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => setListOfUSer(res.data))
        .then(() => console.log(listOfUSer))
        .catch((err) => console.log(err));
    };
    fetchData();
  }, []);
  return (
    <div>
      <ul>
        {listOfUSer.map((el) => (
          <li>{el.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
