// Pages
import Aboutus from "./pages/AboutUs";
import Nav from "./components/Nav";
// Global style
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Aboutus />
    </div>
  );
}

export default App;
