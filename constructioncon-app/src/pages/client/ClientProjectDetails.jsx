import React, { useState } from 'react';
import { getClientData } from '../../api/data';
import { Calendar, Camera, FileText, DollarSign, CheckCircle, Clock } from 'lucide-react';

export default function ClientProjectDetails() {
    const [activeTab, setActiveTab] = useState('cronograma');
    const clientData = getClientData();

    const renderContent = () => {
        switch (activeTab) {
            case 'cronograma':
                return (
                    <div className="space-y-4">
                        {clientData.timeline.map((item, index) => (
                            <div key={index} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                                {item.status === 'Concluída' ? <CheckCircle className="h-6 w-6 text-green-500" /> : <Clock className="h-6 w-6 text-yellow-500" />}
                                <div>
                                    <h4 className="font-semibold text-gray-800">{item.stage}</h4>
                                    <p className={`text-sm ${item.status === 'Concluída' ? 'text-green-600' : 'text-yellow-600'}`}>{item.status}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 'fotos':
                return (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {clientData.gallery.map((url, index) => (
                            <img key={index} src={url} alt={`Foto da obra ${index + 1}`} className="rounded-lg shadow-md aspect-video object-cover" />
                        ))}
                    </div>
                );
            case 'documentos':
                 return (
                    <ul className="space-y-3">
                        {clientData.documents.map((doc, index) => (
                            <li key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                                <div className="flex items-center gap-3">
                                    <FileText className="h-6 w-6 text-blue-500" />
                                    <span className="font-medium text-gray-700">{doc.name}</span>
                                </div>
                                <span className="text-sm text-gray-500">{doc.size}</span>
                            </li>
                        ))}
                    </ul>
                );
            case 'financeiro':
                 return (
                    <div className="space-y-4">
                        {clientData.financials.map((item, index) => (
                             <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                                <span className="font-medium text-gray-800">{item.item}</span>
                                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${item.status === 'Pago' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                    {item.status}
                                </span>
                            </div>
                        ))}
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Minha Obra: {clientData.project.name}</h2>
            <p className="text-gray-500 mb-6">Gerente de Projeto: {clientData.project.manager}</p>

            <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-6 overflow-x-auto" aria-label="Tabs">
                    <button onClick={() => setActiveTab('cronograma')} className={`flex items-center gap-2 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'cronograma' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}><Calendar size={16}/>Cronograma</button>
                    <button onClick={() => setActiveTab('fotos')} className={`flex items-center gap-2 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'fotos' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}><Camera size={16}/>Galeria</button>
                    <button onClick={() => setActiveTab('documentos')} className={`flex items-center gap-2 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'documentos' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}><FileText size={16}/>Documentos</button>
                    <button onClick={() => setActiveTab('financeiro')} className={`flex items-center gap-2 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'financeiro' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}><DollarSign size={16}/>Financeiro</button>
                </nav>
            </div>
            <div className="mt-6">
                {renderContent()}
            </div>
        </div>
    );
}