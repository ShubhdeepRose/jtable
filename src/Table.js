import React from 'react'

const Table = ({ keys, data }) => {
    return (
        <table className="border-collapse m-5 text-lg min-w-[900px] overflow-hidden rounded-lg shadow-2xl">
            <thead>
                <tr className="bg-[#6c7ae0] text-white text-left font-bold">
                    {
                        keys.map(header => {
                            return <th className="pt-4 pb-4 pl-4 pr-4" key={header}>{header}</th>
                        })
                    }
                </tr>
            </thead>

            <tbody>
                    {
                        data.map((row, index) => {
                            return <tr className="border-b-1 border-gray-200 even:bg-[#F8F6FF] last:border-[#6c7ae0] last:border-b-4 hover:text-[#6c7ae0] text-gray-500" key={index}>
                                {keys.map((key) => {
                                    return <td className="pt-3 pb-3 pl-4 pr-4" key={row[key]}>{row[key]}</td>
                                })}
                            </tr>
                        })
                    }
            </tbody>
        </table>
    )
}

export default Table