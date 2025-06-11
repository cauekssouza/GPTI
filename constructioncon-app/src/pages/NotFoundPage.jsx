import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';

export default function NotFoundPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
            <AlertTriangle className="w-20 h-20 text-yellow-500 mb-6" />
            <h1 className="text-6xl font-extrabold text-gray-800">404</h1>
            <h2 className="text-2xl font-semibold text-gray-700 mt-2">Página Não Encontrada</h2>
            <p className="text-gray-500 mt-4 max-w-sm">
                Lamentamos, mas a página que você está a procurar não existe ou foi movida.
            </p>
            <Link
                to="/"
                className="mt-8 bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-base hover:bg-blue-700 transition duration-300 shadow-lg"
            >
                Voltar à Página Inicial
            </Link>
        </div>
    );
}