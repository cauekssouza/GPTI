import React from 'react';
import { getAdminData } from '../../api/data';

export default function AdminRisks() {
    const { allRisks } = getAdminData();
    
    const getRiskColor = (level) => {
        if (level === 'Alta') return 'bg-red-100 text-red-800 border-red-300';
        if (level === 'Média') return 'bg-yellow-100 text-yellow-800 border-yellow-300';
        return 'bg-green-100 text-green-800 border-green-300';
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
             <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Análise de Riscos</h2>
                <button className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-700">Adicionar Risco</button>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Risco</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Projeto</th>
                            <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Probabilidade</th>
                            <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Impacto</th>
                        </tr>
                    </thead>
                     <tbody className="bg-white divide-y divide-gray-200">
                        {allRisks.map(risk => (
                            <tr key={risk.id} className="hover:bg-gray-50">
                                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{risk.risk}</td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{risk.project}</td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm text-center">
                                    <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${getRiskColor(risk.probability)}`}>
                                        {risk.probability}
                                    </span>
                                </td>
                                 <td className="px-4 py-4 whitespace-nowrap text-sm text-center">
                                    <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${getRiskColor(risk.impact)}`}>
                                        {risk.impact}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}