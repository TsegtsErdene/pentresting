import React, { useState, useEffect } from 'react'
import axios from 'axios'
import classNames from 'classnames'

export default function Web_header() {
    const [hostname, setHostname] = useState('')
    const [results, setResults] = useState([])

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const response = await axios.get(
                `https://api.shodan.io/dns/resolve?hostnames=${hostname}&key=2SaNw4n6dwddeGjWl0K1T64xbtJVmfTZ`
            )
            setResults(response.data[hostname])
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="container mx-auto">
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col mb-4">
                    <label htmlFor="hostname" className="mb-2 font-bold text-lg text-gray-900">
                        Hostname
                    </label>
                    <input
                        type="text"
                        id="hostname"
                        name="hostname"
                        value={hostname}
                        onChange={(event) => setHostname(event.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="px-4 py-2 text-lg font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                    Resolve
                </button>
            </form>
            <div className="mt-4">
                {results.length > 0 && (
                    <div className="p-4 bg-gray-100 rounded-md">
                        <h2 className="mb-2 font-bold text-lg text-gray-900">Results for {hostname}</h2>
                        <ul className="list-disc pl-5">
                            {results.map((ip) => (
                                <li key={ip} className="mb-1">
                                    {ip}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}
