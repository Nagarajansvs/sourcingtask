import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import './Style.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div className="App">
    <Header/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="details" element={<Details />}></Route>
      </Routes>
      <Footer/>
    </div>
    </>
  );
}

export default App;
