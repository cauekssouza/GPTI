import React from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
import { LayoutDashboard, Building, FileText, Settings, ArrowRight, MessageSquare, UsersRound, DollarSign, AlertTriangle } from 'lucide-react';

export default function DashboardLayout({ userType }) {
    const isAdmin = userType === 'Admin';

    const adminMenuItems = [
        { path: '/admin', label: "Dashboard", icon: <LayoutDashboard /> },
        { path: '/admin/obras', label: "Obras", icon: <Building /> },
        { path: '/admin/relatorios', label: "Relatórios", icon: <FileText /> },
        { path: '/admin/riscos', label: "Análise de Riscos", icon: <AlertTriangle /> },
        { path: '/admin/usuarios', label: "Usuários", icon: <UsersRound /> },
        { path: '/admin/financeiro', label: "Financeiro", icon: <DollarSign /> },
        { path: '/admin/configuracoes', label: "Configurações", icon: <Settings /> },
    ];

    const clientMenuItems = [
        { path: '/cliente', label: "Meu Painel", icon: <LayoutDashboard /> },
        { path: '/cliente/obra', label: "Minha Obra", icon: <Building /> },
        { path: '/cliente/relatorios', label: "Relatórios", icon: <FileText /> },
        { path: '/cliente/mensagens', label: "Mensagens", icon: <MessageSquare /> },
        { path: '/cliente/perfil', label: "Meu Perfil", icon: <Settings /> },
    ];

    const menuItems = isAdmin ? adminMenuItems : clientMenuItems;

    return (
        <div className="flex h-screen bg-gray-100 font-sans">
            <aside className="w-64 bg-gray-800 text-white flex-col hidden md:flex">
                <div className="h-16 flex items-center justify-center text-2xl font-bold border-b border-gray-700">
                    <Link to="/">Construction<span className="text-blue-400">Con</span></Link>
                </div>
                <nav className="flex-1 px-4 py-6 space-y-2">
                    {menuItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            end={item.path.split('/').length <= 2}
                            className={({ isActive }) =>
                                `flex items-center px-4 py-2.5 rounded-md transition ${isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700'}`
                            }
                        >
                            {React.cloneElement(item.icon, { className: 'h-5 w-5 mr-3' })}
                            <span>{item.label}</span>
                        </NavLink>
                    ))}
                </nav>
                <div className="p-4 border-t border-gray-700">
                    <Link to="/" className="w-full text-left flex items-center px-4 py-2.5 text-gray-300 rounded-md hover:bg-gray-700">
                        <ArrowRight className="h-5 w-5 mr-3 transform rotate-180" />
                        <span>Sair para o Site</span>
                    </Link>
                </div>
            </aside>
            <main className="flex-1 flex flex-col overflow-hidden">
                <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 flex-shrink-0">
                    <h1 className="text-xl font-semibold text-gray-800">Painel do {userType}</h1>
                    <div className="flex items-center">
                        <span className="text-gray-600">Bem-vindo, {isAdmin ? 'Admin' : 'Cliente Exemplo'}!</span>
                    </div>
                </header>
                <div className="flex-1 overflow-y-auto p-6">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}