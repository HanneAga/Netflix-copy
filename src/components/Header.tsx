import React from 'react'
import q from 'qjuul'
import { IMovie } from './type'


interface HeaderProps {
    items: IMovie[]
}


const Header = (props: HeaderProps) => {
    const firstItem = props.items[10]
    if (!firstItem) return null
    return (<React.Fragment>

        <img className="movie_poster_header" src={'https://image.tmdb.org/t/p/w500' + firstItem.backdrop_path} alt={firstItem.title} />

    </React.Fragment>
    )
}

export default Header