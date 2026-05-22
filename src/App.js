import logo from './logo.svg';
import './App.css';
import KategoriaSelect from "./components/KategoriaSelect";
import EgyEsemeny from "./components/EgyEsemeny";
import { EsemenyProvider } from './contexts/EsemenyContext';

function App() {
  return (
    <div className = "container mt-4">
      <h1 className= "mb-3">Események</h1>
      <EsemenyProvider>
        <KategoriaSelect/>
        <EgyEsemeny/>
      </EsemenyProvider>
    </div>
  );
}

export default App;
