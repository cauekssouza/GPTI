import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = (
        <>
            <Link to="/" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-blue-600">Início</Link>
            <Link to="/detalhes" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-blue-600">Funcionalidades</Link>
            <Link to="/planos" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-blue-600">Planos</Link>
        </>
    );

    return (
        <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-40">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-gray-800">
                    Construction<span className="text-blue-600">Con</span>
                </Link>
                <nav className="hidden md:flex items-center space-x-6">{navLinks}</nav>
                <div className="hidden md:flex items-center space-x-2">
                    <Link to="/cliente" className="text-gray-600 hover:text-blue-600 px-4 py-2 rounded-md">Login</Link>
                    <Link to="/cadastro" className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-700 shadow-md">Cadastre-se</Link>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <div className="px-6 pt-2 pb-4 flex flex-col space-y-3">
                        {navLinks}
                    </div>
                </div>
            )}
        </header>
    );
}