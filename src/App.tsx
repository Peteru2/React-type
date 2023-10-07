import './App.css';
import DGreet from './Component/DGreet';

function App() {
  return (
    <div className="App">
        <DGreet name="Peter" isLoggedIn = {false}/>
    </div>
  );
}

export default App;
