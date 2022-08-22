import { SplideSlide, Splide } from '@splidejs/react-splide';
import q from 'qjuul'
import React, { useEffect, useState } from 'react'


const Drama = () => {
    //Api
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
        fetchGenre();
    }, []);



    return (
        <q.div>
            <Splide options={{ pagination: false }}>
                <q.div frcc co="white" gap={"30px"} w100 po={"relative"}>
                    {genre.map(item => {
                        return (
                            <SplideSlide>
                                <q.div>
                                    <q.div po={"absolute"}>
                                        <q.h2 >{item.title}</q.h2>
                                        <p>{item.release_date.slice(0, 4)}</p>
                                    </q.div>
                                    <img key={item.id} className="movie_posters" src={'https://image.tmdb.org/t/p/w500' + item.backdrop_path} alt={item.title} />
                                    {item.genre_ids}
                                </q.div>
                            </SplideSlide>
                        )

                    })}</q.div>



            </Splide>
        </q.div>
    )
}

export default Drama