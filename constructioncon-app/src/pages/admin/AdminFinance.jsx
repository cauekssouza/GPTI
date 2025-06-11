import React from 'react';
import MockChart from '../../components/ui/MockChart';
import { DollarSign, Warehouse, UsersRound } from 'lucide-react';

export default function AdminFinance() {
    const stockCosts = [
        { name: 'Jan', value: 40 }, { name: 'Fev', value: 30 }, { name: 'Mar', value: 60 },
        { name: 'Abr', value: 55 }, { name: 'Mai', value: 70 }, { name: 'Jun', value: 65 }
    ];
    const revenueByProject = [
        { name: 'Obra A', value: 95 }, { name: 'Obra B', value: 80 }, { name: 'Obra C', value: 75 },
        { name: 'Obra D', value: 60 }, { name: 'Obra E', value: 40 }
    ];
    const salaryData = "0,120 50,90 100,100 150,80 200,85 250,70 300,75";

    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Financeiro Global</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="bg-yellow-100 p-3 rounded-full"><Warehouse className="h-6 w-6 text-yellow-600" /></div>
                        <h3 className="font-semibold text-gray-800">Custos de Estoque (Últimos 6 meses)</h3>
                    </div>
                    <MockChart color="yellow" data={stockCosts} />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="bg-green-100 p-3 rounded-full"><DollarSign className="h-6 w-6 text-green-600" /></div>
                        <h3 className="font-semibold text-gray-800">Receita por Obra (Top 5)</h3>
                    </div>
                    <MockChart color="green" data={revenueByProject} />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                     <div className="flex items-center gap-4 mb-4">
                        <div className="bg-blue-100 p-3 rounded-full"><UsersRound className="h-6 w-6 text-blue-600" /></div>
                        <h3 className="font-semibold text-gray-800">Despesas com Salários</h3>
                    </div>
                    <MockChart type="line" data={salaryData} />
                </div>
            </div>
             <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Transações Recentes</h3>
                    <p className="text-gray-500">Tabela de transações em desenvolvimento.</p>
            </div>
        </div>
    );
}