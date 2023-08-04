import Homepage from "./components/Homepage";
import "./styles/App.css";
import "./styles/reset.css";

function App() {
  return (
    <BrowserRouter basename="/myPortfolioV-1">
      <Homepage/>
    </BrowserRouter>
  );
}

export default App;
