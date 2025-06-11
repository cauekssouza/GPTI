// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
import PlansPage from './pages/PlansPage';
import SignUpPage from './pages/SignUpPage';
import DashboardLayout from './components/layout/DashboardLayout';
import NotFoundPage from './pages/NotFoundPage';

// Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AddProjectModal from './components/ui/AddProjectModal';
import MockChart from './components/ui/MockChart';
import ReportViewer from './components/ui/ReportViewer';

// Páginas Partilhadas
import DashboardHomePage from './pages/shared/DashboardHomePage';
import ReportsPage from './pages/shared/ReportsPage';
import SettingsPage from './pages/shared/SettingsPage';

// Páginas Específicas do Admin
import AdminProjects from './pages/admin/AdminProjects';
import AdminRisks from './pages/admin/AdminRisks';
import AdminUsers from './pages/admin/AdminUsers';
import AdminFinance from './pages/admin/AdminFinance';

// Páginas Específicas do Cliente
import ClientProjectDetails from './pages/client/ClientProjectDetails';
import ClientMessages from './pages/client/ClientMessages';
import ClientProfile from './pages/client/ClientProfile';

function App() {
  return (
    <Routes>
      {/* Rotas Públicas */}
      <Route path="/" element={<HomePage />} />
      <Route path="/detalhes" element={<DetailsPage />} />
      <Route path="/planos" element={<PlansPage />} />
      <Route path="/cadastro" element={<SignUpPage />} />

      {/* Rotas do Admin */}
      <Route path="/admin" element={<DashboardLayout userType="Admin" />}>
        <Route index element={<DashboardHomePage userType="Admin" />} />
        <Route path="obras" element={<AdminProjects />} />
        <Route path="relatorios" element={<ReportsPage userType="Admin" />} />
        <Route path="riscos" element={<AdminRisks />} />
        <Route path="usuarios" element={<AdminUsers />} />
        <Route path="financeiro" element={<AdminFinance />} />
        <Route path="configuracoes" element={<SettingsPage userType="Admin" />} />
      </Route>

      {/* Rotas do Cliente */}
      <Route path="/cliente" element={<DashboardLayout userType="Cliente" />}>
        <Route index element={<DashboardHomePage userType="Cliente" />} />
        <Route path="obra" element={<ClientProjectDetails />} />
        <Route path="relatorios" element={<ReportsPage userType="Cliente" />} />
        <Route path="mensagens" element={<ClientMessages />} />
        <Route path="perfil" element={<ClientProfile />} />
      </Route>

      {/* Rota NotFound */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;