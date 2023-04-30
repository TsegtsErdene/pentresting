import React, { useState, useEffect } from 'react'
export default function Encryption() {
    const [hostnames, setHostnames] = useState([])

    useEffect(() => {
        fetch('https://api.shodan.io/dns/resolve?hostnames=google.com&key=2SaNw4n6dwddeGjWl0K1T64xbtJVmfTZ')
            .then((response) => response.json())
            .then((data) => setHostnames(data['google.com']))
    }, [])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold mb-4">DNS Resolve Results:</h1>
            <ul className="list-disc text-lg">
                {hostnames.map((ip) => (
                    <li key={ip}>{ip}</li>
                ))}
            </ul>
        </div>
    )
}
