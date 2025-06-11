import React from 'react';
import { getAdminData, getClientData } from '../../api/data';

export default function DashboardHomePage({ userType }) {
    if (userType === 'Admin') {
        const { allProjects, allUsers } = getAdminData();
        return (
            <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-800">Dashboard do Administrador</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white p-5 rounded-lg shadow-md">
                        <h3 className="text-sm font-medium text-gray-500">Total de Obras</h3>
                        <p className="text-3xl font-bold text-gray-800 mt-1">{allProjects.length}</p>
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow-md">
                        <h3 className="text-sm font-medium text-gray-500">Usuários Ativos</h3>
                        <p className="text-3xl font-bold text-gray-800 mt-1">{allUsers.length}</p>
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow-md">
                        <h3 className="text-sm font-medium text-gray-500">Satisfação do Cliente (Média)</h3>
                        <p className="text-3xl font-bold text-gray-800 mt-1">4.8 <span className="text-yellow-400">★</span></p>
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow-md">
                        <h3 className="text-sm font-medium text-gray-500">Obras em Andamento</h3>
                        <p className="text-3xl font-bold text-gray-800 mt-1">{allProjects.filter(p => p.status === 'Em Andamento').length}</p>
                    </div>
                </div>
                 <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="font-semibold text-gray-800 mb-4">Visão Geral da Empresa</h3>
                    <p className="text-gray-600">Este é o painel de controlo central. A partir daqui, você pode gerir obras, monitorizar finanças, analisar riscos e administrar utilizadores. Utilize o menu à esquerda para navegar entre as diferentes secções da plataforma.</p>
                </div>
            </div>
        );
    }

    const { project } = getClientData();
    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Meu Painel</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-5 rounded-lg shadow-md">
                    <h3 className="text-sm font-medium text-gray-500">Obra Ativa</h3>
                    <p className="text-xl font-semibold text-blue-600 mt-1">{project.name}</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-md">
                    <h3 className="text-sm font-medium text-gray-500">Progresso Geral</h3>
                    <p className="text-3xl font-bold text-gray-800 mt-1">{project.progress}%</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-md">
                    <h3 className="text-sm font-medium text-gray-500">Notificações</h3>
                    <p className="text-3xl font-bold text-red-500 mt-1">3</p>
                </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Últimas Atualizações - {project.name}</h3>
                <p className="text-gray-600">Fotos da instalação da cozinha foram adicionadas à galeria. A próxima medição financeira está agendada para 15/07.</p>
            </div>
        </div>
    );
}