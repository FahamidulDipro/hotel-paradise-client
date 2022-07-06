import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import Navigation from "./components/Navigation/Navigation";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Statistics from "./components/Statistics/Statistics";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import NotFound from "./components/NotFound/NotFound";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import UserDetails from "./components/UserDetails/UserDetails";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home></Home>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/statistics"
          element={
            <RequireAuth>
              <Statistics></Statistics>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/userDetails"
          element={<UserDetails></UserDetails>}
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
