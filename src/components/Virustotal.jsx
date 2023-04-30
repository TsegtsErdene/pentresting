import React from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { getOrderStatus } from '../lib/helpers'

export default function Virustotal({ report }) {
    if (report) {
        return (
            <div className="flex flex-col space-y-4">
                <div>
                    <h2 className="text-lg font-medium">Scan ID:</h2>
                    <p className="text-gray-600">{report.scan_id}</p>
                </div>
                <div>
                    <h2 className="text-lg font-medium">Resource:</h2>
                    <p className="text-gray-600">{report.resource}</p>
                </div>
                <div>
                    <h2 className="text-lg font-medium">URL:</h2>
                    <p className="text-gray-600">{report.url}</p>
                </div>
                <div>
                    <h2 className="text-lg font-medium">Response Code:</h2>
                    <p className="text-gray-600">{report.response_code}</p>
                </div>
                <div>
                    <h2 className="text-lg font-medium">Scan Date:</h2>
                    <p className="text-gray-600">{report.scan_date}</p>
                </div>
                <div>
                    <h2 className="text-lg font-medium">Permalink:</h2>
                    <a href={report.permalink} className="text-blue-500">
                        {report.permalink}
                    </a>
                </div>
                <div>
                    <h2 className="text-lg font-medium">Positives/Total:</h2>
                    <p className="text-gray-600">
                        {report.positives}/{report.total}
                    </p>
                </div>
                <div>
                    <h2 className="text-lg font-medium">Scans:</h2>
                    <ul className="grid grid-cols-2 gap-4">
                        {Object.entries(report.scans).map(([key, value]) => (
                            <li key={key}>
                                <h3 className="text-md font-medium">{key}</h3>
                                <p className="text-gray-600">{value.detected ? 'Detected' : 'Clean'}</p>
                                <p className="text-gray-600">{value.result}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mt-4">
                    <p className="font-bold">Scan results:</p>
                    <ul className="list-disc ml-4">
                        {Object.entries(report.scans).map(([key, value]) => (
                            <li
                                key={key}
                                className={`${value.detected ? 'text-red-500' : 'text-green-500'} ${
                                    value.detected ? 'font-bold' : ''
                                }`}
                            >
                                {key}: {value.result}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}
