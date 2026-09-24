import React from "react";
import { Routes, Route } from "react-router-dom";
import Createpage from "./pages/createpage";
import Homepage from "./pages/homepage";
import NoteDetailpage from "./pages/noteDetailpage";
import toast from "react-hot-toast";

function App() {
  return (
    <div>
      <button onClick={() => toast.success("congrat")}>click me</button>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<Createpage />} />
        <Route path="/note/:id" element={<NoteDetailpage />} />
      </Routes>
    </div>
  );
}

export default App;
