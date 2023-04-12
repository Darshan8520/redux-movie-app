import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import Header from './componenets/Header/Header';
 import Home from './componenets/Home/Home';
 import Footer from './componenets/Footer/Footer';
import MovieDetail from './componenets/MovieDetail/MovieDetail';
import PageNotFound from './componenets/PageNotFound/PageNotFound';
function App() {
  return (
    <div className="app">
    <BrowserRouter>
    <Header/>
    <div className='container'>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/movie/:imdbID' element={<MovieDetail/>}/>
    <Route element={<PageNotFound/>}/>
    </Routes>
    </div>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
