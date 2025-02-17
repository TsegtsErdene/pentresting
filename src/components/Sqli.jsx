import React from 'react'

const Sqli = ({ result }) => {
    return (
        <div className="bg-white mt-3 px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
            <strong className="text-gray-700 font-large text-lg">{result.type} result</strong>

            <div className={`grid ${result.type == 'HTTP Method' ? 'grid-cols-3' : 'grid-cols-1'} gap-4 mt-3`}>
                {result.data.map((item, index) => (
                    <div className="font-medium" key={index}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sqli
