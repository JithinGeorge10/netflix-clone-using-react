import React, { useEffect, useState } from 'react'
import Youtube from 'react-youtube'
import { IMAGEURL, APIKEY } from '../../Constants/Constants'
import axios from '../../axios'
import './RowPost.css'
function RowPost(props) {
    const [originals, setOriginals] = useState([])
    const [url, setUrl] = useState()
    useEffect(() => {
        axios.get(props.url).then((response) => {
            setOriginals(response.data.results)
        }).catch(err => {
            console.log(err)
        })
    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    const handleMovie = (id) => {
        console.log(id)
        axios.get(`http://api.themoviedb.org/3/movie/${id}/videos?api_key=${APIKEY}`).then((response) => {
            console.log(response.data);
            if (response.data.results.length !== 0) {
                setUrl(response.data.results[0])
            }
        })
    }
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {originals.map((val) =>
                    <div>
                        <img onClick={() => handleMovie(val.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${IMAGEURL + val.backdrop_path}`} alt="originals" />
                        <div>{val.original_title}</div>
                    </div>
                )}
            </div>

            {url && <Youtube videoId={url.key} opts={opts} />}
        </div>
    )
}

export default RowPost
