import { Container } from "@mui/material";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import Header from "./components/Header/Header.jsx";
import SimpleBottomNavigation from "./components/MainNav.jsx";
import Trending from './pages/Trending/Trending.js'
import Movies from './pages/Movies/Movies.js'
import Search from './pages/Search/Search.js'
import Series from './pages/Series/Series.js'
function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <div className="app">
        <Container>
          <Routes>
            <Route path='/' element={<Trending/>} exact />
            <Route path='/movies' element={<Movies/>} exact />
            <Route path='/series' element={<Series/>} exact />
            <Route path='/search' element={<Search/>} exact />
          </Routes>
        </Container>
      </div>

      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
