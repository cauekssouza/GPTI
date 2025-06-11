import React from 'react';

export default function ReportViewer({ reportData, userType }) {
    if (!reportData) {
        return (
            <div className="flex-1 bg-white p-6 rounded-lg shadow-md flex justify-center items-center">
                <p className="text-gray-500">Selecione ou gere um relatório para visualizar os detalhes.</p>
            </div>
        );
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
            <div className="border-b pb-4 mb-4">
                <h2 className="text-2xl font-bold text-gray-900">{reportData.title}</h2>
                <p className="text-sm text-gray-500">Gerado por: {reportData.generatedBy} em {reportData.date}</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {reportData.summary.map(item => (
                    <div key={item.label} className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600">{item.label}</p>
                        <div className="flex items-baseline gap-2">
                            <p className="text-xl font-semibold text-gray-800">{item.value}</p>
                            {item.change && 
                                <span className={`text-sm font-bold ${item.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                                    {item.change}
                                </span>
                            }
                        </div>
                    </div>
                ))}
            </div>

            <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {userType === 'Admin' ? 'Detalhes por Obra' : 'Atividades Recentes'}
                </h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                {Object.keys(reportData.tableData[0]).map(key => (
                                    <th key={key} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        {key}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {reportData.tableData.map((row, index) => (
                                <tr key={index}>
                                    {Object.values(row).map((val, i) => (
                                        <td key={i} className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            {val}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}