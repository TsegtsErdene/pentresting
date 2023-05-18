import React, { useState } from 'react'
import DashboardStatsGrid from '../components/DashboardStatsGrid'
import TransactionChart from '../components/TransactionChart'
import RecentOrders from '../components/RecentOrders'
import BuyerProfilePieChart from '../components/BuyerProfilePieChart'
import PopularProducts from '../components/PopularProducts'
import Virustotal from '../components/Virustotal'
import SearchResults from '../components/SearchResults'
import Shoadan from '../components/Shodan'
import Sqli from '../components/Sqli'

export default function Dashboard() {
    const [data, setData] = useState({
        url: '',
        value: ''
    })
    const [res, setRes] = useState({})
    const handleOptionChange = (e) => {
        const newdata = { ...data }
        newdata.value = e.target.id
        setData(newdata)
    }

    const handleInputChange = (e) => {
        const newdata = { ...data }
        newdata.url = e.target.value
        setData(newdata)
    }
    const submit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('http://192.168.1.14:5000/webheader', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ url: data.url, value: data.value })
            })
            const responseData = await response.json()
            setRes(responseData)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <form onSubmit={(e) => submit(e)}>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-2">
                    <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label htmlFor="url" className="block text-sm font-medium leading-6 text-gray-900">
                                URL Link
                            </label>
                            <div className="mt-2">
                                <input
                                    id="url"
                                    name="url"
                                    hint="url"
                                    onChange={(e) => handleInputChange(e)}
                                    value={data.url}
                                    className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="mt-7 flex items-center gap-x-3">
                            <button
                                type="submit"
                                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Scan
                            </button>
                            {/* <button
                                type="button"
                                htmlFor="file-upload"
                                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            >
                                File Upload
                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                            </button> */}
                        </div>
                    </div>
                    <fieldset>
                        <div className="mt-6 space-y-3  ">
                            <div className="relative flex gap-x-3">
                                <div className="flex h-6 items-center">
                                    <input
                                        id="Method"
                                        name="Method"
                                        type="radio"
                                        onChange={handleOptionChange}
                                        checked={data.value === 'Method'}
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                </div>
                                <div className="text-sm leading-6">
                                    <label htmlFor="comments" className="font-medium text-gray-900">
                                        HTTP Method
                                    </label>
                                </div>
                            </div>
                            <div className="relative flex gap-x-3">
                                <div className="flex h-6 items-center">
                                    <input
                                        id="Headers"
                                        name="Headers"
                                        type="radio"
                                        onChange={handleOptionChange}
                                        checked={data.value === 'Headers'}
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                </div>
                                <div className="text-sm leading-6">
                                    <label htmlFor="virustotal" className="font-medium text-gray-900">
                                        Headers Enum
                                    </label>
                                </div>
                            </div>
                            <div className="relative flex gap-x-3">
                                <div className="flex h-6 items-center">
                                    <input
                                        id="HeaderSecure"
                                        name="HeaderSecure"
                                        type="radio"
                                        onChange={handleOptionChange}
                                        checked={data.value === 'HeaderSecure'}
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                </div>
                                <div className="text-sm leading-6">
                                    <label htmlFor="virustotal" className="font-medium text-gray-900">
                                        Insecure Headers
                                    </label>
                                </div>
                            </div>
                            {/* <div className="relative flex gap-x-3">
                                <div className="flex h-6 items-center">
                                    <input
                                        id="searchdir"
                                        name="searchdir"
                                        type="radio"
                                        onChange={handleOptionChange}
                                        checked={data.value === 'searchdir'}
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                </div>
                                <div className="text-sm leading-6">
                                    <label htmlFor="comments" className="font-medium text-gray-900">
                                        Search Directories
                                    </label>
                                </div>
                            </div> */}
                        </div>
                    </fieldset>
                    {/* <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Scan
                        </button>
                    </div> */}
                </div>
            </div>
            <div>{console.log('hey', res)}</div>
            {res.type ? <Sqli result={res} /> : ''}
        </form>
    )
}
