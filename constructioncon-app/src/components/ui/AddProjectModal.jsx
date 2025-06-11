import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function AddProjectModal({ isOpen, onClose, onAddProject }) {
    if (!isOpen) return null;

    const [projectName, setProjectName] = useState('');
    const [clientName, setClientName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!projectName || !clientName) return;
        
        const newProject = {
            id: Date.now(),
            name: projectName,
            client: clientName,
            progress: 0,
            status: 'Planejamento'
        };

        onAddProject(newProject);
        onClose();
    };

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4"
            onClick={onClose}
        >
            <div 
                className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md transform transition-all"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Adicionar Nova Obra</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <X size={24} />
                    </button>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="projectName" className="block text-sm font-medium text-gray-700">Nome da Obra</label>
                        <input 
                            id="projectName"
                            type="text" 
                            value={projectName} 
                            onChange={(e) => setProjectName(e.target.value)} 
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            required 
                        />
                    </div>
                    <div>
                        <label htmlFor="clientName" className="block text-sm font-medium text-gray-700">Nome do Cliente</label>
                        <input 
                            id="clientName"
                            type="text" 
                            value={clientName} 
                            onChange={(e) => setClientName(e.target.value)} 
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            required 
                        />
                    </div>
                    <div className="flex justify-end space-x-4 pt-4">
                        <button type="button" onClick={onClose} className="px-6 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 font-semibold">
                            Cancelar
                        </button>
                        <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-semibold">
                            Adicionar Obra
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}