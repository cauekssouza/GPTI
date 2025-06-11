import React from 'react';

export default function SettingsPage({ userType }) {
    const isAdmin = userType === 'Admin';

    return (
        <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{isAdmin ? "Configurações Gerais" : "Minha Conta"}</h2>
            <div className="space-y-10">
                <div id="perfil">
                    <h3 className="text-xl font-semibold text-gray-800 border-b pb-3 mb-4">{isAdmin ? "Perfil da Empresa" : "Minhas Informações"}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">{isAdmin ? "Nome da Empresa" : "Nome Completo"}</label>
                            <input type="text" defaultValue={isAdmin ? "ConstructionCon Ltda." : "Cliente Exemplo"} className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">{isAdmin ? "CNPJ" : "Email"}</label>
                            <input type="text" defaultValue={isAdmin ? "12.345.678/0001-90" : "cliente@exemplo.com"} className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md" />
                        </div>
                    </div>
                </div>

                {isAdmin && (
                    <div id="integracoes">
                        <h3 className="text-xl font-semibold text-gray-800 border-b pb-3 mb-4">Integrações</h3>
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-md">
                            <span className="font-medium">Software Contábil (Ex: ContaAzul)</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" defaultChecked className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                        </div>
                    </div>
                )}

                <div id="notificacoes">
                    <h3 className="text-xl font-semibold text-gray-800 border-b pb-3 mb-4">Notificações por E-mail</h3>
                    <div className="space-y-3">
                        <label className="flex items-center"><input type="checkbox" defaultChecked className="h-4 w-4 rounded" /> <span className="ml-3 text-gray-700">Resumos semanais do projeto</span></label>
                        <label className="flex items-center"><input type="checkbox" defaultChecked className="h-4 w-4 rounded" /> <span className="ml-3 text-gray-700">Alertas de risco crítico</span></label>
                        <label className="flex items-center"><input type="checkbox" className="h-4 w-4 rounded" /> <span className="ml-3 text-gray-700">Notícias e novidades da plataforma</span></label>
                    </div>
                </div>

                <div className="flex justify-end pt-6 border-t mt-8">
                    <button className="bg-blue-600 text-white font-semibold px-8 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                        Salvar Alterações
                    </button>
                </div>
            </div>
        </div>
    );
}