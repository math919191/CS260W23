import './App.css';
import {Login} from './login/login'
import {Play} from './login/login'

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/books" element={<Play />} />
    </Routes>
    </div>
  );
}

export default App;
