import React from 'react'
import './SearchItem.css'

export default function SearchItem({search, setSearch}) {
  return (
    <form className="box" onSubmit={(e) => e.preventDefault()}>
        <label id="search-label" htmlFor="searchItem">Search Todo</label>
        <input
            id='searchBox'
            type="text"
            role='Search Box'
            placeholder='Search Todo'
            value = {search}
            onChange = {(e) => setSearch(e.target.value)}
        />
    </form>
  )
}
