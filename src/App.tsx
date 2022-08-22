import React, { useEffect, useState } from 'react';
import './App.css';
import q from 'qjuul'
import Footer from './components/Footer';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Navbar from './components/Navbar';
import Drama from './components/Drama';
import Header from './components/Header';
import '@splidejs/react-splide/css';
import { IMovie, MovieResult } from './components/type';



function App() {

  //Api for populære filmer
  const [movies, setMovies] = useState<IMovie[]>([]);


  const fetchMovies = async (general = "", search = "popular", language = "") => {
    const api = await fetch(`https://api.themoviedb.org/3/${general}movie/${search}?api_key=${process.env.REACT_APP_API_KEY}${language}`);
    const data: MovieResult = await api.json();
    setMovies(data.results)
    console.log(data.results)
    console.log()
  };

  // Api for sjangre
  const [genre, setGenre] = useState<any[]>([]);


  const fetchGenre = async () => {
    const api = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
    const data = await api.json();
    setGenre(data.results)
    console.log(data.results)
    console.log()
  };

  //fetch API når siden rendrer med useEffect

  useEffect(() => {
    fetchMovies();
    fetchGenre();
  }, []);


  return (
    <q.div w100 pa="0 40px" className="App">


      <Navbar />

      <Header items={movies} />

      <q.h2 ma="30px 85% 20px 0" co={"white"} nowrap>Populært på Nightflix</q.h2>
      <q.div w100 >
        <Splide options={{
          type: "loop", perPage: 6, pagination: false, gap: "1em"

        }}>

          {movies.map(movie => {
            return (
              <SplideSlide key={movie.id} className='remove_list_style'>
                <q.h2 boRa={"5px"} pa="2px" baCo={"#22212192"} co="white" po={"absolute"}>{movie.title}</q.h2>
                <img className="movie_posters" src={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path} alt={movie.title} />

              </SplideSlide>
            )

          })}

        </Splide>


      </q.div>


      <Footer />



    </q.div>
  );
}


export default App;