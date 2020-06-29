import React from "react";
import "./styles.css";

const App = () => {
  const message = "This is our React app - it's great";

  const handelClick = () => {
    alert("you clicked a message");
  }

  return(
    <div className="contact-card">
      <img src="https://via.placeholder.com/150" alt="profile" />
      <div className="user-details">
        <p>Name: Jenny Han</p>
        <p>Email: Jenny.Han@notreal.com</p>
        <p>Age: 25</p>
      </div>
    </div>
  );
}

export default App;