import React from 'react';

export default function ClientProfile() {
    return (
        <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Meu Perfil</h2>
            
            <form className="space-y-6">
                <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Nome Completo</label>
                    <input id="fullName" type="text" defaultValue="Cliente Exemplo" className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md" />
                </div>
                
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Endereço de Email</label>
                    <input id="email" type="email" defaultValue="cliente@exemplo.com" className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md" />
                </div>

                <div className="pt-4 border-t">
                     <h3 className="text-lg font-semibold text-gray-800 mb-2">Alterar Senha</h3>
                     <div>
                        <label htmlFor="currentPassword"  className="block text-sm font-medium text-gray-700">Senha Atual</label>
                        <input id="currentPassword" type="password"  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md" />
                    </div>
                     <div className='mt-4'>
                        <label htmlFor="newPassword"  className="block text-sm font-medium text-gray-700">Nova Senha</label>
                        <input id="newPassword" type="password"  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md" />
                    </div>
                </div>

                <div className="flex justify-end pt-4">
                    <button type="submit" className="bg-blue-600 text-white font-semibold px-8 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                        Salvar Alterações
                    </button>
                </div>
            </form>
        </div>
    );
}