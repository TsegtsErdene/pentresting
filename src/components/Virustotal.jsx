import React from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { getOrderStatus } from '../lib/helpers'
import {BsCheckCircle,BsXCircle} from 'react-icons/bs'

export default function Virustotal({ report }) {
    if (report) {
        return (
            <div className="bg-white mt-3 px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
            <strong className="text-gray-700 font-large text-lg">Virus total result</strong>
            <div className="grid grid-cols-2 gap-4 mt-3">
          <div className="font-medium">Resource:</div>
          <div>{report.resource}</div>
          <div className="font-medium">URL:</div>
          <div>{report.url}</div>
          <div className="font-medium">Scan Date:</div>
          <div>{report.scan_date}</div>
          <div className="font-medium">Positives/Total:</div>
          <div>{report.positives}/{report.total}</div>

          <div>{report.isp}</div>
          
        </div>
        <div>
                    <h2 className="font-medium">Scans:</h2>
                    <ul className="grid grid-cols-2 gap-4 mt-4">
                        {Object.entries(report.scans).map(([key, value]) => (
                            <li key={key} className='grid grid-cols-2 gap-4 pb-4 border-b'>
                                <h3 className="text-sm">{key}</h3>
                                <div className='flex gap-x-2 text-sm'>
                                <span className="text-xl text-green-600">{value.detected ? <BsXCircle /> : <BsCheckCircle />}</span>
                                <p className="text-gray-600">{value.result.charAt(0).toUpperCase() + value.result.slice(1).replace(" site","")}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}
