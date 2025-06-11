import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { CheckCircle } from 'lucide-react';

export default function PlansPage() {
    const plans = [
        {
            name: "Básico",
            price: "R$ 99",
            period: "/mês",
            description: "Ideal para freelancers e pequenas equipes iniciando na gestão digital.",
            features: ["Cronograma de Obra", "Diário de Obra", "Gestão de Tarefas", "1 Usuário", "Suporte por Email"],
            popular: false
        },
        {
            name: "Profissional",
            price: "R$ 249",
            period: "/mês",
            description: "A solução completa para construtoras e engenharias que buscam eficiência.",
            features: ["Tudo do Básico", "Orçamento e Curva ABC", "Medição de Obra", "Gestão Financeira", "Relatórios Gerenciais", "5 Usuários", "Suporte Prioritário"],
            popular: true
        },
        {
            name: "Enterprise",
            price: "Customizado",
            period: "",
            description: "Para grandes construtoras com necessidades específicas e integrações.",
            features: ["Tudo do Profissional", "RDO (Obras Públicas)", "Previsto x Realizado Avançado", "Gestão de Estoque e Compras", "Integração SEFAZ & BI", "Usuários Ilimitados", "Gerente de Conta Dedicado"],
            popular: false
        }
    ];

    return (
        <div className="bg-gray-50">
            <Navbar />
            <main className="py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold text-gray-800">Planos Flexíveis para Cada Necessidade</h2>
                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Escolha o plano que melhor se adapta ao tamanho e à complexidade dos seus projetos.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                        {plans.map((plan, index) => (
                            <div key={index} className={`bg-white rounded-xl shadow-lg p-8 flex flex-col ${plan.popular ? 'border-4 border-blue-600 relative' : 'border border-gray-200'}`}>
                                {plan.popular && (
                                    <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full">MAIS POPULAR</div>
                                )}
                                <h3 className="text-2xl font-bold text-gray-800 text-center">{plan.name}</h3>
                                <div className="mt-4 text-center text-gray-800">
                                    <span className="text-4xl font-extrabold">{plan.price}</span>
                                    {plan.period && <span className="text-lg font-medium text-gray-500">{plan.period}</span>}
                                </div>
                                <p className="mt-4 text-center text-gray-600 h-16">{plan.description}</p>

                                <ul className="mt-8 space-y-4 flex-grow">
                                    {plan.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-center">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    to="/cadastro"
                                    className={`w-full text-center mt-8 py-3 px-6 rounded-lg font-semibold transition duration-300 ${plan.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-blue-600 hover:bg-gray-200'}`}
                                >
                                    Contratar Agora
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}