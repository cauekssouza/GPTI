import React, { useState } from 'react';
import { getAdminData } from '../../api/data';
import AddProjectModal from '../../components/ui/AddProjectModal';
import { PlusCircle, Trash2, Filter } from 'lucide-react';

export default function AdminProjects() {
    const [projects, setProjects] = useState(getAdminData().allProjects);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const addProject = (newProject) => {
        setProjects(prevProjects => [newProject, ...prevProjects]);
    };

    const deleteProject = (projectId) => {
        setProjects(prevProjects => prevProjects.filter(p => p.id !== projectId));
    };

    return (
        <>
            <AddProjectModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAddProject={addProject}
            />
            <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                    <h2 className="text-2xl font-bold text-gray-900">Gestão de Obras ({projects.length})</h2>
                    <div className="flex items-center gap-2">
                         <button className="flex items-center gap-2 bg-gray-200 text-gray-800 font-semibold px-4 py-2 rounded-md hover:bg-gray-300">
                            <Filter size={16} /> Filtros
                        </button>
                        <button 
                            onClick={() => setIsModalOpen(true)} 
                            className="flex items-center gap-2 bg-blue-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-700 transition"
                        >
                            <PlusCircle size={20} /> Adicionar Obra
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Obra</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cliente</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Progresso</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {projects.map(p => (
                                <tr key={p.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{p.name}</td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{p.client}</td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${p.progress}%` }}></div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${p.status === 'Finalizado' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                            {p.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button onClick={() => deleteProject(p.id)} className="text-red-600 hover:text-red-900 p-1 rounded-full hover:bg-red-100">
                                            <Trash2 size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}