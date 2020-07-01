import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const message = "This is our React app - it's great";

  const handelClick = () => {
    alert("you clicked a message");
  }
  return(
    <>
      <ContactCard 
        avatar="https://via.placeholder.com/150"
        name="Jenny Han"
        email="jenny.han@notreal.com"
        age={25}
      />
      <ContactCard 
        avatar="https://via.placeholder.com/150"
        name="Jennifer Long"
        email="jennifer.long@notreal.com"
        age={45}
      />
      <ContactCard 
        avatar="https://via.placeholder.com/150"
        name="Peter Pan"
        email="peter.pan@neverland.com"
        age={100}
      />
    </>
  );
}

const ContactCard = props => {
  const [showAge, setShowAge] = useState(true);  

  return(
    <div className="contact-card">
      <img src={props.avatar} alt="profile" />
      <div className="user-details">
        <p>Name: {props.name}</p>
        <p>Email: {props.email}</p>
        <button onClick={() => setShowAge(!showAge)}>
          Toggle Age
        </button>
        {showAge && <p>Age: {props.age}</p>}
      </div>
    </div>
  );
}

export default App;