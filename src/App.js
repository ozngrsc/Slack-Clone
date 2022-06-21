import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./components/Chat/Chat";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <div className="app__body">
          <Sidebar />

          <Routes>
            <Route path="/room/:roomId" element={<Chat />}></Route>
            <Route path="/" element={<h1>Welcome</h1>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
