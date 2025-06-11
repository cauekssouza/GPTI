import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function DetailsPage() {
    const featureDetails = [
        { title: "Orçamento de Obra", description: "Crie orçamentos analíticos completos, com composições de custos, insumos e BDI. Importe planilhas e tenha uma base de dados sólida para futuros projetos." },
        { title: "Curva ABC", description: "Classifique insumos e serviços por relevância de custo (Curva A, B e C). Foque seus esforços de negociação e controle nos itens mais impactantes para o seu orçamento." },
        { title: "Cronograma de Obra", description: "Desenvolva cronogramas Físico-Financeiros detalhados usando Gráfico de Gantt. Acompanhe o avanço de cada etapa, identifique desvios e gerencie o caminho crítico do projeto." },
        { title: "Diário de Obra (D.O.)", description: "Registre todas as atividades diárias, condições climáticas, mão de obra e ocorrências. Anexe fotos e gere relatórios com validade jurídica." },
        { title: "RDO (Relatório Diário de Obras)", description: "Específico para obras públicas, o RDO atende a todos os requisitos legais e de fiscalização, garantindo conformidade e transparência." },
        { title: "Medição de Obra", description: "Acompanhe o avanço físico e financeiro com medições precisas. Compare o que foi planejado com o que foi executado e gere relatórios para faturamento e clientes." },
        { title: "Gestão de Obra", description: "Centralize o controle de todas as suas obras em um único painel. Monitore indicadores chave, gerencie equipes e acesse informações de qualquer lugar." },
        { title: "Financeiro Completo", description: "Controle contas a pagar e a receber, fluxo de caixa, e conciliação bancária. Tenha uma visão clara da saúde financeira de cada projeto e da sua empresa." },
        { title: "Previsto x Realizado", description: "Compare custos, prazos e uso de materiais com o que foi planejado. Relatórios visuais que ajudam a identificar desvios rapidamente e a tomar ações corretivas." },
        { title: "Estoque e Compras", description: "Gerencie seu almoxarifado, controle solicitações de materiais, ordens de compra e cotações. Evite desperdícios e compras desnecessárias." },
        { title: "Integração SEFAZ", description: "Importe notas fiscais (NF-e) diretamente do SEFAZ para automatizar o lançamento de despesas e a entrada de materiais no estoque." },
        { title: "Relatórios de Monitoramento (BI)", description: "Dashboards interativos e relatórios inteligentes que transformam dados brutos em insights valiosos para a tomada de decisão estratégica." },
    ];

    return (
        <div className='bg-white'>
            <Navbar />
            <main className="py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">Ferramentas Poderosas para um Controle Absoluto</h1>
                        <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">Conheça em detalhes como cada funcionalidade do ConstructionCon pode revolucionar a gestão da sua obra.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featureDetails.map((feature, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300">
                                <h3 className="text-xl font-bold text-blue-700 mb-3">{feature.title}</h3>
                                <p className="text-gray-700">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-16">
                        <h2 className="text-2xl font-bold text-gray-800">Pronto para começar?</h2>
                        <p className="text-gray-600 mt-2">Leve sua gestão de obras para o próximo nível.</p>
                        <Link
                            to="/cadastro"
                            className="mt-6 inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-base hover:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-lg"
                        >
                            Criar minha conta agora
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}