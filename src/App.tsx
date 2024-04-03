import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
  }, []);

  return (
    <>
      <p className="">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
