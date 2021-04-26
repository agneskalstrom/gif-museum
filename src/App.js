import "./App.css";
import Header from "./components/header";
import Nav from "./components/nav";
import Gallery from "./components/gallery";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Nav />
      <Gallery />
    </div>
  );
};

export default App;
