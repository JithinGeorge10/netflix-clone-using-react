import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import { APIKEY, IMAGEURL } from '../../Constants/Constants'
import './Banner.css'
function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${APIKEY}&language=en-US`).then((response) => {
            setMovie(response.data.results[2])
            console.log(response.data)
        })
    }, [])
    return (
        <div style={{ backgroundImage: `url(${movie ? IMAGEURL + movie.backdrop_path : ''})` }} className='banner'>
            <div className='content'>
                <h1 className='title'>{movie ? movie.original_title || movie.name :''}</h1>
                <div className='banner_buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My list</button>
                </div>
                <h1 className='description'>
                    {movie ? movie.overview : ''}
                </h1>
            </div>
            <div className="fade_bottom">
            </div>
        </div>
        
    )
}

export default Banner
