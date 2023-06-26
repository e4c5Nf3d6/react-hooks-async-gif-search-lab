import React, { useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
    const [gifs, setGifs] = useState([])

    function handleSearch(value) {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${value}&api_key=ylw6D2iRxZbvtSGP1ORW0DKzhqW3Dqps&rating=g`)
        .then(r => r.json())
        .then(data => setGifs(data.data.slice(0, 3)))
    }

    return (
        <>
            <GifSearch onSearch={handleSearch} />
            <GifList gifs={gifs} />      
        </>
    )
}

export default GifListContainer