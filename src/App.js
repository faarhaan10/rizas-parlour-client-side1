import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Home from "./Pages/Home/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Navigation from "./Pages/Shared/Navigation/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} />
          </Route>
        </Route> */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
