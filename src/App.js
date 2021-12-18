import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Registration from "./Pages/Login/Registration/Registration";
import NotFound from "./Pages/NotFound/NotFound";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import PrivateRoute from "./Pages/ProtectedRoutes/PrivateRoute/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />

          <Route path="/service/:teamId" element={<PrivateRoute>
            <PlaceOrder />
          </PrivateRoute>} />

          <Route path="dashboard/*" element={<PrivateRoute>
            <Dashboard />
          </PrivateRoute>} />

          <Route path="*" exact element={<NotFound />} />
        </Routes>

      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
