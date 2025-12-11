import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Welcome message displayed.");
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "40px", fontSize: "24px" }}>
      Hello, user! Welcome to our site.
    </div>
  );
}

export default App;
