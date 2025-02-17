import React from 'react'
import { CheckCircle, AlertTriangle } from 'react-feather'

const Vulnerablefound = ({ result }) => {
    return (
        <div className="bg-white mt-3 px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
            <strong className="text-gray-700 font-large text-lg">Shoden result</strong>

            <div className="flex flex-col items-center  text-center ">
                <div className="w-100 bg-white rounded-lg shadow-md mt-20 p-8">
                    {result.data ? (
                        <>
                            <div className="flex items-center justify-center mb-4">
                                <AlertTriangle className="h-12 w-12 text-red-500" />
                            </div>
                            <h1 className="text-2xl font-bold mb-4 text-red-500 ">Vulnerability Found!</h1>
                        </>
                    ) : (
                        <>
                            <div className="flex items-center justify-center mb-4">
                                <CheckCircle className="h-12 w-12 text-green-500" />
                            </div>
                            <h1 className="text-2xl font-bold mb-4 text-green-500">No Vulnerability Found</h1>
                        </>
                    )}
                    <p className="mb-4">
                        {result.data
                            ? 'The scanned URL is vulnerable to ' + result.type + '.'
                            : 'The scanned URL is not vulnerable to ' + result.type + '.'}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Vulnerablefound
