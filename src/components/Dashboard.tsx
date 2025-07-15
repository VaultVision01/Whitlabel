import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  CreditCard, 
  DollarSign, 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight,
  Eye,
  Settings,
  LogOut,
  Smartphone,
  Globe,
  Shield,
  Clock,
  Users,
  Zap
} from 'lucide-react';

interface User {
  name: string;
  email: string;
  role: 'user' | 'admin';
}

interface DashboardProps {
  user: User | null;
  onLogout: () => void;
  onNavigate: (page: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, onLogout, onNavigate }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [balance, setBalance] = useState(125430.50);
  const [transactions, setTransactions] = useState([
    { id: 1, type: 'pix', amount: 1250.00, status: 'completed', time: '14:30', description: 'Pagamento recebido' },
    { id: 2, type: 'crypto', amount: -750.00, status: 'pending', time: '13:15', description: 'Transferência BTC' },
    { id: 3, type: 'pix', amount: 2100.00, status: 'completed', time: '12:45', description: 'Vendas online' },
    { id: 4, type: 'crypto', amount: -1800.00, status: 'completed', time: '11:20', description: 'Compra ETH' }
  ]);

  const stats = [
    { label: 'Saldo Total', value: `R$ ${balance.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`, icon: DollarSign, change: '+12.5%', positive: true },
    { label: 'Transações Hoje', value: '47', icon: CreditCard, change: '+8.2%', positive: true },
    { label: 'Volume 24h', value: 'R$ 89.450', icon: BarChart3, change: '+15.3%', positive: true },
    { label: 'Taxa de Sucesso', value: '99.8%', icon: TrendingUp, change: '+0.1%', positive: true }
  ];

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setBalance(prev => prev + (Math.random() - 0.5) * 100);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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
                Vault Vision
              </span>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-300">Olá, {user?.name}</span>
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
            Dashboard
          </h1>
          <p className="text-gray-400">Gerencie suas transações e acompanhe seus resultados</p>
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
                { id: 'pix', label: 'PIX', icon: Smartphone },
                { id: 'crypto', label: 'Crypto', icon: Globe },
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
                  {/* Recent Transactions */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Transações Recentes</h3>
                    <div className="space-y-3">
                      {transactions.map((tx) => (
                        <div key={tx.id} className="bg-gray-700/30 rounded-lg p-4 flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                              tx.type === 'pix' ? 'bg-green-500/20' : 'bg-orange-500/20'
                            }`}>
                              {tx.type === 'pix' ? <Smartphone className="w-5 h-5 text-green-400" /> : <Globe className="w-5 h-5 text-orange-400" />}
                            </div>
                            <div>
                              <div className="text-white font-medium">{tx.description}</div>
                              <div className="text-gray-400 text-sm flex items-center space-x-2">
                                <Clock className="w-3 h-3" />
                                <span>{tx.time}</span>
                                <span className={`px-2 py-1 rounded-full text-xs ${
                                  tx.status === 'completed' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                                }`}>
                                  {tx.status === 'completed' ? 'Concluído' : 'Pendente'}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className={`text-lg font-semibold ${tx.amount > 0 ? 'text-green-400' : 'text-red-400'}`}>
                            {tx.amount > 0 ? '+' : ''}R$ {Math.abs(tx.amount).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Ações Rápidas</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { label: 'Enviar PIX', icon: Smartphone, color: 'from-green-500 to-emerald-600' },
                        { label: 'Transferir Crypto', icon: Globe, color: 'from-orange-500 to-red-600' },
                        { label: 'Gerar QR Code', icon: BarChart3, color: 'from-blue-500 to-purple-600' },
                        { label: 'Relatórios', icon: TrendingUp, color: 'from-purple-500 to-pink-600' }
                      ].map((action, index) => (
                        <button
                          key={index}
                          className={`p-4 bg-gradient-to-r ${action.color} rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                        >
                          <action.icon className="w-6 h-6 text-white mb-2" />
                          <div className="text-white font-medium text-sm">{action.label}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'pix' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-r from-green-500/20 to-emerald-600/20 rounded-xl p-6">
                    <Smartphone className="w-8 h-8 text-green-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">PIX Instantâneo</h3>
                    <p className="text-gray-300 mb-4">Transferências em menos de 1 segundo</p>
                    <button className="px-4 py-2 bg-green-500 rounded-lg text-white hover:bg-green-600 transition-colors">
                      Enviar PIX
                    </button>
                  </div>
                  <div className="bg-gradient-to-r from-blue-500/20 to-cyan-600/20 rounded-xl p-6">
                    <BarChart3 className="w-8 h-8 text-blue-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">QR Code</h3>
                    <p className="text-gray-300 mb-4">Gere códigos para recebimento</p>
                    <button className="px-4 py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600 transition-colors">
                      Gerar QR
                    </button>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-xl p-6">
                    <TrendingUp className="w-8 h-8 text-purple-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">Relatórios PIX</h3>
                    <p className="text-gray-300 mb-4">Analytics detalhados</p>
                    <button className="px-4 py-2 bg-purple-500 rounded-lg text-white hover:bg-purple-600 transition-colors">
                      Ver Relatórios
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'crypto' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { name: 'Bitcoin', symbol: 'BTC', amount: '0.0045', value: 'R$ 1.247.830', change: '+5.2%', positive: true },
                    { name: 'Ethereum', symbol: 'ETH', amount: '0.15', value: 'R$ 543.210', change: '+3.8%', positive: true },
                    { name: 'Binance Coin', symbol: 'BNB', amount: '2.3', value: 'R$ 234.567', change: '-1.2%', positive: false }
                  ].map((crypto, index) => (
                    <div key={index} className="bg-gray-700/30 rounded-xl p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
                            <Globe className="w-5 h-5 text-orange-400" />
                          </div>
                          <div>
                            <div className="text-white font-semibold">{crypto.name}</div>
                            <div className="text-gray-400 text-sm">{crypto.symbol}</div>
                          </div>
                        </div>
                        <div className={`text-sm ${crypto.positive ? 'text-green-400' : 'text-red-400'}`}>
                          {crypto.change}
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-white mb-1">{crypto.amount} {crypto.symbol}</div>
                      <div className="text-gray-400">{crypto.value}</div>
                      <button className="mt-4 w-full py-2 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg text-white hover:shadow-lg transition-all duration-300">
                        Transferir
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-700/30 rounded-xl p-6">
                    <Shield className="w-8 h-8 text-cyan-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">Status de Segurança</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Autenticação 2FA</span>
                        <span className="text-green-400">Ativada</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Criptografia</span>
                        <span className="text-green-400">256-bit</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Último login</span>
                        <span className="text-gray-400">Agora</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-700/30 rounded-xl p-6">
                    <Zap className="w-8 h-8 text-yellow-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">Atividade Recente</h3>
                    <div className="space-y-3">
                      <div className="text-gray-300 text-sm">Login realizado com sucesso</div>
                      <div className="text-gray-300 text-sm">Transação PIX autorizada</div>
                      <div className="text-gray-300 text-sm">Configuração de segurança atualizada</div>
                    </div>
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

export default Dashboard;