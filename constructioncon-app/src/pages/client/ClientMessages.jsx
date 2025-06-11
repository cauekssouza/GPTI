import React from 'react';
import { Send } from 'lucide-react';

export default function ClientMessages() {
    const messages = [
        { from: 'gestor', text: 'Olá! A instalação da bancada da cozinha foi concluída hoje. As fotos já estão na galeria.' },
        { from: 'cliente', text: 'Ótimo, vou verificar! Obrigado pela atualização.' },
        { from: 'gestor', text: 'Qualquer dúvida, estou à disposição.' },
    ];

    return (
        <div className="bg-white rounded-lg shadow-md flex flex-col" style={{height: '75vh'}}>
            <div className="p-4 border-b">
                <h2 className="text-xl font-bold text-gray-900">Mensagens com o Gestor</h2>
            </div>
            
            <div className="flex-1 p-6 overflow-y-auto space-y-4">
                {messages.map((msg, index) => (
                    <div key={index} className={`flex ${msg.from === 'cliente' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${msg.from === 'cliente' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}>
                            <p>{msg.text}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="p-4 bg-gray-50 border-t">
                <div className="relative">
                    <input 
                        type="text" 
                        placeholder="Digite sua mensagem..." 
                        className="w-full pr-12 pl-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    />
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white rounded-full h-9 w-9 flex items-center justify-center hover:bg-blue-700 transition">
                        <Send className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}