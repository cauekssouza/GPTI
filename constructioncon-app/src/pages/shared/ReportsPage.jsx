import React from 'react';
import ReportViewer from '../../components/ui/ReportViewer';
import { Search, PlusCircle, Download } from 'lucide-react';

export default function ReportsPage({ userType }) {
    const isAdmin = userType === 'Admin';

    const adminReportData = {
        title: "Relatório Financeiro Consolidado - Q3 2025",
        generatedBy: "Admin",
        date: "10 de Junho, 2025",
        summary: [
            { label: "Receita Total", value: "R$ 1.8M", change: "+5.2%", changeType: "positive" },
            { label: "Custos Diretos", value: "R$ 1.2M", change: "+3.1%", changeType: "negative" },
            { label: "Margem de Lucro", value: "R$ 620k", change: "+9.8%", changeType: "positive" }
        ],
        tableData: [
            { Obra: "Ed. Comercial Center", Receita: "R$ 750k", Custo: "R$ 500k", Status: "Em andamento" },
            { Obra: "Res. Alphaville", Receita: "R$ 900k", Custo: "R$ 610k", Status: "Finalizado" }
        ]
    };

    const clientReportData = {
        title: "Relatório de Progresso Semanal",
        generatedBy: "Sistema Automático",
        date: "09 de Junho, 2025",
        summary: [
            { label: "Progresso da Etapa", value: "75%", change: "+15%", changeType: "positive" },
            { label: "Próxima Etapa", value: "Pintura" },
            { label: "Dias Restantes", value: "21", change: "-7", changeType: "positive" }
        ],
        tableData: [
            { Data: "03/06", Atividade: "Instalação Elétrica", Status: "Concluída" },
            { Data: "07/06", Atividade: "Aplicação de Gesso", Status: "Em Andamento" }
        ]
    };

    const reportData = isAdmin ? adminReportData : clientReportData;

    return (
        <div className="flex flex-col lg:flex-row gap-6">
            <aside className="lg:w-1/3 xl:w-1/4 bg-white p-6 rounded-lg shadow-md space-y-6 flex-shrink-0">
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">{isAdmin ? "Gerar Relatórios" : "Meus Relatórios"}</h3>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input type="text" placeholder="Buscar relatório..." className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md" />
                    </div>
                </div>
                <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Filtrar por Data</h4>
                    <input type="date" className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm" />
                </div>
                {isAdmin && (
                    <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Tipos de Relatório</h4>
                        <div className="space-y-2">
                            <label className="flex items-center"><input type="checkbox" defaultChecked className="h-4 w-4 rounded" /> <span className="ml-2 text-gray-700">Financeiro</span></label>
                            <label className="flex items-center"><input type="checkbox" className="h-4 w-4 rounded" /> <span className="ml-2 text-gray-700">Andamento</span></label>
                        </div>
                    </div>
                )}
                <div className="space-y-3 pt-4 border-t">
                    {isAdmin && (
                        <button className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 flex items-center justify-center gap-2"><PlusCircle size={20} />Gerar Relatório</button>
                    )}
                    <button className="w-full bg-gray-200 text-gray-800 font-semibold py-2 rounded-md hover:bg-gray-300 flex items-center justify-center gap-2"><Download size={20} />Baixar Selecionados</button>
                </div>
            </aside>
            <main className="flex-1">
                <ReportViewer reportData={reportData} userType={userType} />
            </main>
        </div>
    );
}