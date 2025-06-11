import React from 'react';
import { getAdminData } from '../../api/data';
import { Search } from 'lucide-react';

export default function AdminUsers() {
    const { allUsers } = getAdminData();

    return (
         <div className="bg-white p-6 rounded-lg shadow-md">
             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <h2 className="text-2xl font-bold text-gray-900">Usuários da Plataforma</h2>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input type="text" placeholder="Buscar usuário..." className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md"/>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nome</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Função</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Projeto Associado</th>
                        </tr>
                    </thead>
                     <tbody className="bg-white divide-y divide-gray-200">
                        {allUsers.map(user => (
                            <tr key={user.id} className="hover:bg-gray-50">
                                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{user.name}</td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{user.role}</td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{user.project}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}