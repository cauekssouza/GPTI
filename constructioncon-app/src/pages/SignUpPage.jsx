import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function SignUpPage() {
    const navigate = useNavigate();

    const handleSignUp = (event) => {
        event.preventDefault();
        console.log("Formulário enviado. Redirecionando para o painel do cliente...");
        navigate('/cliente');
    };

    return (
        <div className="bg-white flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg border">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Crie sua conta
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            E comece a transformar a gestão das suas obras. Já tem uma conta?{' '}
                            <Link to="/cliente" className="font-medium text-blue-600 hover:text-blue-500">
                                Faça login
                            </Link>
                        </p>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSignUp}>
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="full-name" className="sr-only">Nome Completo</label>
                                <input id="full-name" name="name" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Nome Completo" />
                            </div>
                            <div>
                                <label htmlFor="email-address" className="sr-only">Endereço de email</label>
                                <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Endereço de email" />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">Senha</label>
                                <input id="password" name="password" type="password" required className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Senha" />
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                Criar conta e acessar
                            </button>
                        </div>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
}