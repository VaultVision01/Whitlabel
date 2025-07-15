import React, { useState } from 'react';
import { 
  Settings, 
  Users, 
  DollarSign, 
  BarChart3, 
  Shield, 
  Eye,
  LogOut,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  Zap,
  Globe,
  CreditCard,
  AlertTriangle,
  CheckCircle,
  XCircle
} from 'lucide-react';

interface User {
  name: string;
  email: string;
  role: 'user' | 'admin';
}

interface AdminPanelProps {
  user: User | null;
  onLogout: () => void;
  onNavigate: (page: string) => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ user, onLogout, onNavigate }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [systemStatus, setSystemStatus] = useState({
    api: 'online',
    database: 'online',
    pix: 'online',
    crypto: 'maintenance'
  });

  const stats = [
    { label: 'Volume Total', value: 'R$ 2.4M', icon: DollarSign, change: '+18.2%', positive: true },
    { label: 'Usuários Ativos', value: '1,247', icon: Users, change: '+12.5%', positive: true },
    { label: 'Transações/24h', value: '8,932', icon: CreditCard, change: '+25.1%', positive: true },
    { label: 'Taxa de Erro', value: '0.02%', icon: Shield, change: '-0.01%', positive: true }
  ];

  const recentUsers = [
    { id: 1, name: 'João Silva', email: 'joao@email.com', status: 'active', joined: '2h ago' },
    { id: 2, name: 'Maria Santos', email: 'maria@email.com', status: 'pending', joined: '5h ago' },
    { id: 3, name: 'Pedro Costa', email: 'pedro@email.com', status: 'active', joined: '1d ago' },
    { id: 4, name: 'Ana Oliveira', email: 'ana@email.com', status: 'suspended', joined: '2d ago' }
  ];

  const transactions = [
    { id: 1, user: 'João Silva', type: 'PIX', amount: 1500.00, status: 'completed', time: '14:30' },
    { id: 2, user: 'Maria Santos', type: 'Crypto', amount: 2300.00, status: 'pending', time: '14:25' },
    { id: 3, user: 'Pedro Costa', type: 'PIX', amount: 850.00, status: 'completed', time: '14:20' },
    { id: 4, user: 'Ana Oliveira', type: 'Crypto', amount: 5200.00, status: 'failed', time: '14:15' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Navigation */}
      <nav className="bg-gray-800/40 backdrop-blur-lg border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Vault Vision Admin
              </span>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-300">Admin: {user?.name}</span>
              <button className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors">
                <Settings className="w-5 h-5" />
              </button>
              <button 
                onClick={onLogout}
                className="p-2 hover:bg-red-500/20 rounded-lg transition-colors text-red-400"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-2">
            Painel Administrativo
          </h1>
          <p className="text-gray-400">Controle total do sistema Vault Vision</p>
        </div>

        {/* System Status */}
        <div className="bg-gray-800/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">Status do Sistema</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(systemStatus).map(([service, status]) => (
              <div key={service} className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${
                  status === 'online' ? 'bg-green-500' : 
                  status === 'maintenance' ? 'bg-yellow-500' : 'bg-red-500'
                }`} />
                <span className="text-gray-300 capitalize">{service}</span>
                <span className={`text-sm ${
                  status === 'online' ? 'text-green-400' : 
                  status === 'maintenance' ? 'text-yellow-400' : 'text-red-400'
                }`}>
                  {status === 'online' ? 'Online' : status === 'maintenance' ? 'Manutenção' : 'Offline'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-gray-800/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-lg flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <div className={`flex items-center space-x-1 text-sm ${stat.positive ? 'text-green-400' : 'text-red-400'}`}>
                  {stat.positive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                  <span>{stat.change}</span>
                </div>
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-gray-800/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl overflow-hidden">
          <div className="border-b border-gray-700">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'overview', label: 'Visão Geral', icon: BarChart3 },
                { id: 'users', label: 'Usuários', icon: Users },
                { id: 'transactions', label: 'Transações', icon: CreditCard },
                { id: 'settings', label: 'Configurações', icon: Settings },
                { id: 'security', label: 'Segurança', icon: Shield }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors duration-300 flex items-center space-x-2 ${
                    activeTab === tab.id
                      ? 'border-cyan-500 text-cyan-400'
                      : 'border-transparent text-gray-400 hover:text-gray-300'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Real-time Activity */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Atividade em Tempo Real</h3>
                    <div className="space-y-3">
                      {transactions.slice(0, 5).map((tx) => (
                        <div key={tx.id} className="bg-gray-700/30 rounded-lg p-4 flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                              tx.status === 'completed' ? 'bg-green-500/20' : 
                              tx.status === 'pending' ? 'bg-yellow-500/20' : 'bg-red-500/20'
                            }`}>
                              {tx.status === 'completed' ? <CheckCircle className="w-4 h-4 text-green-400" /> :
                               tx.status === 'pending' ? <Clock className="w-4 h-4 text-yellow-400" /> :
                               <XCircle className="w-4 h-4 text-red-400" />}
                            </div>
                            <div>
                              <div className="text-white font-medium">{tx.user}</div>
                              <div className="text-gray-400 text-sm">{tx.type} • {tx.time}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-white font-semibold">R$ {tx.amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
                            <div className={`text-xs ${
                              tx.status === 'completed' ? 'text-green-400' :
                              tx.status === 'pending' ? 'text-yellow-400' : 'text-red-400'
                            }`}>
                              {tx.status === 'completed' ? 'Concluído' :
                               tx.status === 'pending' ? 'Pendente' : 'Falhou'}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* System Health */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Saúde do Sistema</h3>
                    <div className="space-y-4">
                      {[
                        { label: 'CPU Usage', value: '45%', color: 'bg-green-500' },
                        { label: 'Memory Usage', value: '67%', color: 'bg-yellow-500' },
                        { label: 'Disk Usage', value: '23%', color: 'bg-green-500' },
                        { label: 'Network I/O', value: '89%', color: 'bg-red-500' }
                      ].map((metric, index) => (
                        <div key={index} className="bg-gray-700/30 rounded-lg p-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-300">{metric.label}</span>
                            <span className="text-white font-semibold">{metric.value}</span>
                          </div>
                          <div className="w-full bg-gray-600 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${metric.color}`} 
                              style={{ width: metric.value }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'users' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-white">Gerenciamento de Usuários</h3>
                  <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-white hover:shadow-lg transition-all duration-300">
                    Adicionar Usuário
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {recentUsers.map((user) => (
                    <div key={user.id} className="bg-gray-700/30 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                          <Users className="w-5 h-5 text-white" />
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          user.status === 'active' ? 'bg-green-500/20 text-green-400' :
                          user.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {user.status === 'active' ? 'Ativo' :
                           user.status === 'pending' ? 'Pendente' : 'Suspenso'}
                        </span>
                      </div>
                      <h4 className="text-white font-semibold">{user.name}</h4>
                      <p className="text-gray-400 text-sm">{user.email}</p>
                      <p className="text-gray-500 text-xs mt-1">Cadastrado {user.joined}</p>
                      <div className="flex space-x-2 mt-3">
                        <button className="flex-1 py-1 px-2 bg-cyan-500/20 text-cyan-400 rounded text-xs hover:bg-cyan-500/30 transition-colors">
                          Editar
                        </button>
                        <button className="flex-1 py-1 px-2 bg-red-500/20 text-red-400 rounded text-xs hover:bg-red-500/30 transition-colors">
                          Bloquear
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'transactions' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-white">Monitoramento de Transações</h3>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="pb-3 text-gray-400 font-medium">ID</th>
                        <th className="pb-3 text-gray-400 font-medium">Usuário</th>
                        <th className="pb-3 text-gray-400 font-medium">Tipo</th>
                        <th className="pb-3 text-gray-400 font-medium">Valor</th>
                        <th className="pb-3 text-gray-400 font-medium">Status</th>
                        <th className="pb-3 text-gray-400 font-medium">Horário</th>
                        <th className="pb-3 text-gray-400 font-medium">Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions.map((tx) => (
                        <tr key={tx.id} className="border-b border-gray-800">
                          <td className="py-3 text-gray-300">#{tx.id.toString().padStart(6, '0')}</td>
                          <td className="py-3 text-white">{tx.user}</td>
                          <td className="py-3">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              tx.type === 'PIX' ? 'bg-green-500/20 text-green-400' : 'bg-orange-500/20 text-orange-400'
                            }`}>
                              {tx.type}
                            </span>
                          </td>
                          <td className="py-3 text-white font-semibold">R$ {tx.amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
                          <td className="py-3">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              tx.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                              tx.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                              'bg-red-500/20 text-red-400'
                            }`}>
                              {tx.status === 'completed' ? 'Concluído' :
                               tx.status === 'pending' ? 'Pendente' : 'Falhou'}
                            </span>
                          </td>
                          <td className="py-3 text-gray-400">{tx.time}</td>
                          <td className="py-3">
                            <button className="text-cyan-400 hover:text-cyan-300 text-sm">
                              Ver detalhes
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-white mb-6">Configurações do Sistema</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Payment Settings */}
                  <div className="bg-gray-700/30 rounded-xl p-6">
                    <h4 className="text-white font-semibold mb-4">Configurações de Pagamento</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-300 text-sm mb-2">Taxa PIX (%)</label>
                        <input 
                          type="number" 
                          className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded text-white"
                          defaultValue="1.5"
                          step="0.1"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 text-sm mb-2">Taxa Crypto (%)</label>
                        <input 
                          type="number" 
                          className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded text-white"
                          defaultValue="2.0"
                          step="0.1"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 text-sm mb-2">Limite Diário (R$)</label>
                        <input 
                          type="number" 
                          className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded text-white"
                          defaultValue="50000"
                        />
                      </div>
                    </div>
                  </div>

                  {/* API Settings */}
                  <div className="bg-gray-700/30 rounded-xl p-6">
                    <h4 className="text-white font-semibold mb-4">Configurações da API</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-300 text-sm mb-2">Rate Limit (req/min)</label>
                        <input 
                          type="number" 
                          className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded text-white"
                          defaultValue="1000"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 text-sm mb-2">Timeout (ms)</label>
                        <input 
                          type="number" 
                          className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded text-white"
                          defaultValue="5000"
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Modo Debug</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-white font-semibold hover:shadow-lg transition-all duration-300">
                  Salvar Configurações
                </button>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-white mb-6">Centro de Segurança</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Security Status */}
                  <div className="bg-gray-700/30 rounded-xl p-6">
                    <Shield className="w-8 h-8 text-cyan-400 mb-4" />
                    <h4 className="text-white font-semibold mb-4">Status de Segurança</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300 text-sm">Firewall</span>
                        <CheckCircle className="w-4 h-4 text-green-400" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300 text-sm">DDoS Protection</span>
                        <CheckCircle className="w-4 h-4 text-green-400" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300 text-sm">SSL/TLS</span>
                        <CheckCircle className="w-4 h-4 text-green-400" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300 text-sm">Encryption</span>
                        <CheckCircle className="w-4 h-4 text-green-400" />
                      </div>
                    </div>
                  </div>

                  {/* Threat Detection */}
                  <div className="bg-gray-700/30 rounded-xl p-6">
                    <AlertTriangle className="w-8 h-8 text-yellow-400 mb-4" />
                    <h4 className="text-white font-semibold mb-4">Detecção de Ameaças</h4>
                    <div className="space-y-3">
                      <div className="text-gray-300 text-sm">Tentativas de login falhadas: 12</div>
                      <div className="text-gray-300 text-sm">IPs bloqueados: 3</div>
                      <div className="text-gray-300 text-sm">Ataques DDoS bloqueados: 0</div>
                      <div className="text-gray-300 text-sm">Último escaneamento: 5 min atrás</div>
                    </div>
                  </div>

                  {/* Access Control */}
                  <div className="bg-gray-700/30 rounded-xl p-6">
                    <Users className="w-8 h-8 text-purple-400 mb-4" />
                    <h4 className="text-white font-semibold mb-4">Controle de Acesso</h4>
                    <div className="space-y-3">
                      <div className="text-gray-300 text-sm">Admins online: 2</div>
                      <div className="text-gray-300 text-sm">Sessões ativas: 1,247</div>
                      <div className="text-gray-300 text-sm">2FA habilitado: 95%</div>
                      <div className="text-gray-300 text-sm">Último audit: Hoje</div>
                    </div>
                  </div>
                </div>

                {/* Recent Security Events */}
                <div className="bg-gray-700/30 rounded-xl p-6">
                  <h4 className="text-white font-semibold mb-4">Eventos de Segurança Recentes</h4>
                  <div className="space-y-3">
                    {[
                      { time: '14:35', event: 'Login suspeito bloqueado', severity: 'high' },
                      { time: '14:20', event: 'Certificado SSL renovado', severity: 'info' },
                      { time: '13:45', event: 'Firewall atualizado', severity: 'info' },
                      { time: '13:30', event: 'Tentativa de acesso não autorizado', severity: 'medium' }
                    ].map((event, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-600/30 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full ${
                            event.severity === 'high' ? 'bg-red-500' :
                            event.severity === 'medium' ? 'bg-yellow-500' : 'bg-blue-500'
                          }`} />
                          <span className="text-gray-300">{event.event}</span>
                        </div>
                        <span className="text-gray-400 text-sm">{event.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;