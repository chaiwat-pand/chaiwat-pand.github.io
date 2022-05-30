import React from 'react'

const SearchBar = ({ search, setSearch, value }) => {
    function updateInputFromTags() {
        setSearch(value)
    }

    return (
        <main className="SearchBar">
            <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="search">
                    Search Places
                </label>
                <input
                    id="search"
                    type="text"
                    placeholder="Find and go..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>
            <hr className="SearchBarLine" />
        </main>

        // search = { value } setSearch = { setValue }
    )
}

export default SearchBar