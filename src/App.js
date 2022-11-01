import Background from './Components/Background/Background';
import Home from './Pages/Home/Home';
import Menu from './Components/Menu/Menu';
import './App.css';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Background/>
      <Home/>
    </div>
  );
}

export default App;
