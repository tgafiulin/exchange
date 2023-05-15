import { APIContextProvider } from './api/apiContext';
import './App.css';
import ExchangeScreen from './components/ExchangeScreen';

function App() {
  return (
    <APIContextProvider>
      <div className="app">
        <ExchangeScreen />
      </div>
    </APIContextProvider>
  );
}

export default App;
