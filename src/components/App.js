import './App.css';
import AlpacaImage from "./AlpacaImage";
import Attributes from './Attributes';
import Styles from './Styles';

function App() {
  return (
    <main className="app">
      <header>
        <h1>alpaca generator</h1>
      </header>
      <main>
        <AlpacaImage />
        <div>
          <Attributes />
          <Styles />
        </div>
      </main>
    </main>
  );
}

export default App;
