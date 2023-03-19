import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componants/Header/Header';
import Footer from './componants/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './componants/Home/Home';
import FavList from './componants/FavList/FavList';


function App() {
  return (
    <div className="App">
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/FavList" element={<FavList />}></Route>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;

