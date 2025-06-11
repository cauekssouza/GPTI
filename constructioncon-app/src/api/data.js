// src/api/data.js

// Estes dados simulam o que viria de um back-end.
// No futuro, você substituiria isto por chamadas de API reais (ex: fetch).

const allProjects = [
    { id: 1, name: 'Edifício Comercial Center', client: 'XPTO Investimentos', progress: 80, status: 'Em Andamento' },
    { id: 2, name: 'Residencial Alphaville', client: 'Família Silva', progress: 100, status: 'Finalizado' },
    { id: 3, name: 'Reforma Hospital Central', client: 'Governo Estadual', progress: 45, status: 'Em Andamento' },
];

const allUsers = [
    { id: 101, name: 'Ana Costa (Cliente)', role: 'Cliente', project: 'Residencial Alphaville' },
    { id: 102, name: 'Carlos Lima (Gestor)', role: 'Gestor de Obras', project: 'Edifício Comercial Center' },
    { id: 103, name: 'Mariana Pires (Arquiteta)', role: 'Arquiteta', project: 'Residencial Alphaville' },
];

const allRisks = [
    { id: 1, risk: 'Atraso na entrega de materiais', probability: 'Alta', impact: 'Alto', project: 'Ed. Comercial' },
    { id: 2, risk: 'Problemas com licenças', probability: 'Média', impact: 'Alto', project: 'Hospital Central' },
    { id: 3, risk: 'Mão de obra não qualificada', probability: 'Baixa', impact: 'Médio', project: 'Res. Alphaville' },
];

const clientData = {
    project: {
        name: 'Reforma Apartamento 72',
        manager: 'Carlos Lima',
        progress: 65,
    },
    timeline: [
        { stage: 'Demolição', status: 'Concluída' },
        { stage: 'Alvenaria', status: 'Concluída' },
        { stage: 'Instalações Elétricas', status: 'Em Andamento' },
        { stage: 'Pintura', status: 'Planejada' },
    ],
    gallery: [
        'https://placehold.co/400x300/e2e8f0/64748b?text=Cozinha+01',
        'https://placehold.co/400x300/e2e8f0/64748b?text=Sala+01',
        'https://placehold.co/400x300/e2e8f0/64748b?text=Cozinha+02'
    ],
    documents: [
        { name: 'Contrato_Assinado.pdf', size: '1.2MB' },
        { name: 'Planta_Baixa_Final.pdf', size: '3.5MB' },
        { name: 'Alvara_Construcao.pdf', size: '800KB' },
    ],
    financials: [
        { item: 'Sinal (Pagamento 1/3)', status: 'Pago', date: '10/05/2025' },
        { item: 'Pagamento 2/3', status: 'Pendente', date: '15/07/2025' },
    ]
};

// Funções que simulam a obtenção de dados
export const getAdminData = () => ({ allProjects, allUsers, allRisks });
export const getClientData = () => (clientData);