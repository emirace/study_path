import { Route, Routes } from "react-router";
import Home from "./pages/home";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Payment from "./pages/payment";
import BookedSessions from "./pages/sessionBooking";
import SessionBooking from "./pages/sessionBooking/add";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="/payment" element={<Payment />} />
      <Route path="/book" element={<BookedSessions />} />
      <Route path="/book/add" element={<SessionBooking />} />
    </Routes>
  );
}

export default App;
