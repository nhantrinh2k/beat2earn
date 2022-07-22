import Headers from "./components/Header";
import Footer from "./components/Footer";
import MatchDay from "./components/pages/Matchday";
import MatchInfo from "./components/pages/MatchInfo";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Headers />
      <Home />
      {/* <MatchDay /> */}
      {/* <MatchInfo /> */}
      <Footer />
    </div>
  );
}

export default App;
