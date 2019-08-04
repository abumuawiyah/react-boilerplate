import React from "react";
import { useCounter } from "../index";

function Profile(props) {
  const { count, increment } = useCounter();

  function handleClick() {
    props.setTest("123");
    increment();
  }

  return (
    <div onClick={handleClick} style={{ width: "100%", height: 100 }}>
      {count} Click me!
    </div>
  );
}

export default Profile;
