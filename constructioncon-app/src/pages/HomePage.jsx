import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { DollarSign, BarChart3, ClipboardList, Warehouse, ArrowRight, CheckCircle } from 'lucide-react';

export default function HomePage() {
    const features = [
        { icon: <DollarSign className="h-10 w-10 text-blue-600" />, title: "Orçamento Preciso", desc: "Crie orçamentos detalhados e evite surpresas financeiras." },
        { icon: <BarChart3 className="h-10 w-10 text-blue-600" />, title: "Curva ABC", desc: "Identifique os insumos mais importantes e otimize suas compras." },
        { icon: <ClipboardList className="h-10 w-10 text-blue-600" />, title: "Diário de Obra Digital", desc: "Registre o progresso diário com fotos e relatórios completos." },
        { icon: <Warehouse className="h-10 w-10 text-blue-600" />, title: "Gestão de Estoque", desc: "Controle a entrada e saída de materiais em tempo real." },
    ];
    
    const benefits = [
        { title: "Centralização da Informação", description: "Todos os dados da sua obra em um único lugar, acessível de qualquer dispositivo." },
        { title: "Comunicação Eficiente", description: "Melhore a colaboração entre a equipe de campo, escritório e clientes." },
        { title: "Tomada de Decisão Ágil", description: "Relatórios e dashboards inteligentes (BI) para decisões baseadas em dados." },
        { title: "Redução de Custos e Prazos", description: "Otimize recursos, evite desperdícios e cumpra os cronogramas com mais facilidade." },
    ];

    return (
        <div className="bg-white">
            <Navbar />
            <main>
                {/* Hero Section */}
                <section className="bg-white">
                    <div className="container mx-auto px-6 py-20 md:py-32 text-center">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
                            Transforme a Gestão das Suas Obras com <span className="text-blue-600">ConstructionCon</span>
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                            Uma plataforma digital inovadora para centralizar informações, facilitar a comunicação e otimizar o acompanhamento de construções, reformas e manutenções.
                        </p>
                        <Link 
                            to="/cadastro" 
                            className="mt-10 inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-xl"
                        >
                            Descubra Como
                        </Link>
                    </div>
                </section>

                {/* Features Section */}
                <section id="funcionalidades" className="bg-gray-50 py-20">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Funcionalidades Essenciais</h2>
                            <p className="text-gray-600 mt-2">Ferramentas poderosas para um controle total da sua obra.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {features.map((feature, index) => (
                                <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                                    <div className="flex justify-center mb-4">{feature.icon}</div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-12">
                            <Link to="/detalhes" className="text-blue-600 font-semibold hover:text-blue-800 transition group">
                                Ver todas as funcionalidades
                                <ArrowRight className="inline-block ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section id="beneficios" className="bg-white py-20">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Benefícios para o seu Negócio</h2>
                            <p className="text-gray-600 mt-2">Veja como podemos impulsionar seus resultados.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-start space-x-4">
                                    <div><CheckCircle className="h-8 w-8 text-green-500 flex-shrink-0 mt-1" /></div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800">{benefit.title}</h3>
                                        <p className="text-gray-600 mt-1">{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}