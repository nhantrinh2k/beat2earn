import Headers from "./components/Header";
import Footer from "./components/Footer";
import MatchDay from "./components/pages/Matchday";
import MatchInfo from "./components/pages/MatchInfo";

function App() {
  return (
    <div className="App">
      <Headers />
      {/* <MatchDay /> */}
      <MatchInfo />
      <Footer />
    </div>
  );
}

export default App;
