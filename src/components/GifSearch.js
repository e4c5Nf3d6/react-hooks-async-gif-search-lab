import React, { useState } from "react";

function GifSearch({ onSearch }) {
    const [search, setSearch] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        onSearch(e.target.search.value)
        setSearch('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="search">Enter a Search Term</label>
            <input 
                id="search" 
                type="text" 
                placeholder="Enter a Search Term"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <input type="submit" value="Find Gifs" />
        </form>
    )
}

export default GifSearch