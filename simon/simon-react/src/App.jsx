import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Router } from 'react-router-dom';


import Menu from './components/Menu'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      {/* <Router> */}
        <Menu />
      {/* </Router> */}


      <Footer />

    </div>
  );
}

export default App;
