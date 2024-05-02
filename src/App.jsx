import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import New from "./components/new/New";
import Popular from "./components/popular/Popular";
import "./index.scss";

function App() {
  return (
    <>
      <Navbar />
      <main className="flex-container">
        <Home />
        <New />
      </main>
      <Popular />
    </>
  );
}

export default App;
