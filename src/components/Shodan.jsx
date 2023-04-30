import React from 'react'

const Shoadan = ({ results }) => {
    return (
        <div className="container mx-auto mt-5">
            <h1 className="text-center text-3xl font-bold">Shodan DNS Resolve Results</h1>
            {results && (
                <table className="w-full table-auto">
                    <thead>
                        <tr>
                            <th>IP Address</th>
                            <th>Hostname</th>
                            <th>ASN</th>
                            <th>Country</th>
                            <th>Organization</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.data.map((domain, index) => (
                            <tr key={index}>
                                <td>{domain.ip}</td>
                                <td>{domain.hostname}</td>
                                <td>{domain.asn}</td>
                                <td>{domain.country}</td>
                                <td>{domain.organization}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default Shoadan
