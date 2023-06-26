import React from "react";

function GifList({ gifs }) {
    return (
        <ul style={{listStyle: "none"}}>
            {gifs ? gifs.map(gif => {
                return (
                    <li key={gif.id}>
                        <img src={gif.images.original.url} alt="A Funny GIF" />
                    </li>
                )
            }) : null}
        </ul>
    )
}

export default GifList