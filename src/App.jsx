import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
const App = () => {
  return (
    <div className="w-full min-h-screen lg:h-full h-full flex flex-col bg-black/85 dark:bg-white/65 dark:text-black/75 text-white/75 overflow-hidden">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
