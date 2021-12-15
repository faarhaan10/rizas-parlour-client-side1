import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Registration from "./Pages/Login/Registration/Registration";
import Footer from "./Pages/Shared/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />


        {/* <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} />
          </Route>
        </Route> */}
      </Routes>

    </BrowserRouter>
  );
}

export default App;
