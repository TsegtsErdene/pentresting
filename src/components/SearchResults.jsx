import React from 'react'

const SearchResults = ({ results }) => {
    return (
        <div className="bg-white mt-3 px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
        <strong className="text-gray-700 font-large text-lg">Google result</strong>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
            {results.map((result) => (
                <div key={result.cacheId} className="bg-white rounded-md p-4 shadow">
                    <a href={result.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 font-bold">
                        {result.title}
                    </a>
                    <p className="text-gray-500">{result.snippet}</p>
                </div>
            ))}
        </div>
        </div>
    )
}

export default SearchResults
