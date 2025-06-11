import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-300">
            <div className="container mx-auto px-6 py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                        <h3 className="text-2xl font-bold text-white">
                            Construction<span className="text-blue-400">Con</span>
                        </h3>
                        <p className="text-gray-400 mt-2">Otimizando sua obra, do início ao fim.</p>
                        <div className="mt-4 flex space-x-4">
                            <a href="#" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                                <Linkedin className="h-6 w-6" />
                            </a>
                            <a href="#" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                                <Instagram className="h-6 w-6" />
                            </a>
                            <a href="#" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                                <Facebook className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
                        <div>
                            <h4 className="font-semibold text-white tracking-wider uppercase">Soluções</h4>
                            <ul className="mt-4 space-y-2">
                                <li><Link to="/detalhes" className="hover:text-white transition-colors duration-300">Gestão de Obras</Link></li>
                                <li><Link to="/detalhes" className="hover:text-white transition-colors duration-300">Financeiro</Link></li>
                                <li><Link to="/detalhes" className="hover:text-white transition-colors duration-300">Relatórios BI</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white tracking-wider uppercase">Empresa</h4>
                            <ul className="mt-4 space-y-2">
                                <li><Link to="#" className="hover:text-white transition-colors duration-300">Sobre nós</Link></li>
                                <li><Link to="#" className="hover:text-white transition-colors duration-300">Carreiras</Link></li>
                                <li><Link to="#" className="hover:text-white transition-colors duration-300">Contato</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white tracking-wider uppercase">Legal</h4>
                            <ul className="mt-4 space-y-2">
                                <li><Link to="#" className="hover:text-white transition-colors duration-300">Termos de Serviço</Link></li>
                                <li><Link to="#" className="hover:text-white transition-colors duration-300">Política de Privacidade</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-10 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm flex flex-col sm:flex-row justify-between items-center">
                    <p>&copy; {new Date().getFullYear()} ConstructionCon. Todos os direitos reservados.</p>
                    <p className="mt-2 sm:mt-0">
                        <Link to="/admin" className="hover:text-white transition-colors duration-300">
                            Acesso Admin (Demo)
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}