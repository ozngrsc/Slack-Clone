import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./components/Chat/Chat";
import Login from "./components/Login Page/Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />

            <div className="app__body">
              <Sidebar />

              <Routes>
                <Route path="/room/:roomId" element={<Chat />} />
                <Route
                  path="/"
                  element={[
                    <div className="information">
                      <h4>Welcome!</h4>
                      <p>
                        You can add new channels and send realtime messages.
                      </p>
                    </div>,
                  ]}
                />
              </Routes>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
