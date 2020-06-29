import React from "react";

const App = () => {
  const message = "This is our React app - it's great";

  return(
    <div>
      <h1> Hello React World</h1>
      <h2 onClick={()=> alert("you clicked the message")}>
        {message}
      </h2>
    </div>
  );
}

export default App;