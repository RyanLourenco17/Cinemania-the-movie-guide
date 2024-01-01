import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// Pages
import Home from './pages/Home.jsx'
import Movies from './pages/Movies.jsx'
import Series from './pages/Series.jsx'
import  Search  from './pages/Search.jsx'
import MovieDetails from './pages/MovieDetails.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />}/>
          <Route path="/movies" element={<Movies />}/>
          <Route path="/series" element={<Series />}/>
          <Route path="/search" element={<Search />}/>
          <Route path="/:type/:id" element={<MovieDetails />}/>
        </Route>
      </Routes>
   </BrowserRouter>
  </React.StrictMode>,
)

