import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import Header from "./components/Header";
import Cart from "./components/Cart";
import SignInRoute from "./routes/SignInRoute";
import SignOutRoute from "./routes/SignOutRoute";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/signin"
          element={
            <SignInRoute>
              <SignIn />
            </SignInRoute>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signout" element={<SignOutRoute />} />
      </Routes>
    </>
  );
}

export default App;
