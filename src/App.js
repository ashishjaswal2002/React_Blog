import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import TheLatest from "./components/TheLatest";
import LatestArticle from "./components/LatestArticle";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <TheLatest />
      <LatestArticle />
      
    </div>
  );
}

export default App;
