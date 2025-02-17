import React from 'react'

const Automate = ({ results }) => {
    return (
        <div className="bg-white mt-3 px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
            <strong className="text-gray-700 font-large text-lg">Automate result</strong>

            <div className="grid grid-cols-2 gap-4 mt-3">
                <div className="font-medium">IP:</div>
                <div>{results[0].value.data.ip_str}</div>
                <div className="font-medium">City:</div>
                <div>{results[0].value.data.city}</div>
                <div className="font-medium">Country:</div>
                <div>{results[0].value.data.country_name}</div>
                <div className="font-medium">Org:</div>
                <div>{results[0].value.data.org}</div>
                <div className="font-medium">Latitude:</div>
                <div>{results[0].value.data.latitude}</div>
                <div className="font-medium">Longitude:</div>
                <div>{results[0].value.data.longitude}</div>
                <div className="font-medium">ISP:</div>
                <div>{results[0].value.data.isp}</div>
                <div className="font-medium">Ports:</div>
                <div>{results[0].value.data.ports.join(', ')}</div>
                <div className="font-medium">Tags:</div>
                <div>{results[0].value.data.tags.join(', ')}</div>
                <div className="font-medium">Resource:</div>
                <div>{results[1].value.data.resource}</div>
                <div className="font-medium">URL:</div>
                <div>{results[1].value.data.url}</div>
                <div className="font-medium">Scan Date:</div>
                <div>{results[1].value.data.scan_date}</div>
                <div className="font-medium">Virus Scan:</div>
                <div>
                    {results[1].value.data.positives}/{results[1].value.data.total}
                </div>
            </div>
        </div>
    )
}

export default Automate
