import React, { useState, useEffect } from 'react'
import Virustotal from '../components/Virustotal'
import SearchResults from '../components/SearchResults'
import Shoadan from '../components/Shodan'
import Sqli from '../components/Sqli'
import Automate from '../components/Automate'
export default function Encryption() {
    const [data, setData] = useState({
        url: '',
        value: ''
    })
    const [responseData, setResponseData] = useState([])
    const requests = [
        {
            url: 'http://192.168.1.14:5000/gathering',
            param: { value: 'shoden' },
            type: 'gathering'
        },
        {
            url: 'http://192.168.1.14:5000/gathering',
            param: { value: 'virustotal' },
            type: 'gathering'
        },
        {
            url: 'http://192.168.1.14:5000/webheader',
            param: { value: 'Headers' },
            type: 'header'
        },
        {
            url: 'http://192.168.1.14:5000/webheader',
            param: { value: 'Method' },
            type: 'header'
        },
        {
            url: 'http://192.168.1.14:5000/webheader',
            param: { value: 'HeaderSecure' },
            type: 'header'
        }
    ]

    const handleInputChange = (e) => {
        const newdata = { ...data }
        newdata.url = e.target.value
        setData(newdata)
    }

    const submit = async (e) => {
        e.preventDefault()
        const responses = []

        for (const request of requests) {
            const { url, param, type } = request

            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify({ url: data.url, value: param.value }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const responseData = await response.json()
            responses.push({ type, value: responseData })
        }

        setResponseData(responses)
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
                        <div className="mt-6 space-y-3  "></div>
                    </fieldset>
                </div>
            </div>
            {console.log(responseData)}
            {responseData.length > 0 ? <Automate results={responseData} /> : ''}
            {responseData.map((response, index) => (
                <div key={index}>{response.type == 'header' ? <Sqli result={response.value} /> : ''}</div>
            ))}
        </form>
    )
}
