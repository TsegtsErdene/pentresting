import React, { useState } from 'react'
import axios from 'axios'
import SearchResults from '../components/SearchResults'

export default function Sql_injection() {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])

    const handleSearch = async (e) => {
        e.preventDefault()

        const response = await axios.get('https://www.googleapis.com/customsearch/v1', {
            params: {
                key: 'AIzaSyC-AT6Ivfdsg5dbrFGhD_IYZ43vw-XruGY',
                cx: '718e07672fc754dad',
                q: query
            }
        })

        setResults(response.data.items)
    }

    return (
        <div className="container mx-auto p-4">
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="border border-gray-400 rounded-md py-2 px-4 mr-2"
                />
                <button type="submit" className="bg-blue-500 text-white rounded-md py-2 px-4">
                    Search
                </button>
            </form>
            {results.length > 0 && <SearchResults results={results} />}
        </div>
    )
}
