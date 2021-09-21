import React from 'react'

export default function Stats() {


    const stats = [
        { name: 'Dinero ahorrado mensual', stat: '8,000 mxn' },
        { name: 'Tiempos de entrega', stat: '24 hrs' },
        { name: 'Costo promedio por proyecto', stat: '>900 mxn' },
    ]
    return (

        <div className="bg-white">
            <div className="max-w-2xl mx-auto px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Stats</h2>


                <h3 className="text-lg leading-6 font-medium text-gray-900">Con niurons</h3>
                <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                    {stats.map((item) => (
                        <div key={item.name} className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
                            <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
                            <dd className="mt-1 text-3xl font-semibold text-gray-900">{item.stat}</dd>
                        </div>
                    ))}
                </dl>

            </div>
        </div>

    )
}
