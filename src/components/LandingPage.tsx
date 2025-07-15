import React, { useEffect, useState } from 'react';
import { Shield, Zap, Globe, CreditCard, Smartphone, TrendingUp, Lock, Eye, Users } from 'lucide-react';

interface LandingPageProps {
  onNavigate: (page: 'login' | 'register') => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-900/20 backdrop-blur-lg border-b border-cyan-500/20">
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
            <div className="flex space-x-4">
              <button
                onClick={() => onNavigate('login')}
                className="px-4 py-2 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                Login
              </button>
              <button
                onClick={() => onNavigate('register')}
                className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                Cadastrar
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 animate-pulse" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-bounce" 
               style={{ animationDuration: '6s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-bounce" 
               style={{ animationDuration: '8s', animationDelay: '2s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
            VAULT VISION
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            O Gateway de Pagamento Mais Avançado do Mercado
          </p>
          <p className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto">
            Segurança militar, velocidade incomparável e tecnologia de ponta para suas transações
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => onNavigate('register')}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300"
            >
              Começar Agora
            </button>
            <button className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-xl text-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
              Ver Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Recursos Avançados
            </h2>
            <p className="text-xl text-gray-400">Tecnologia de última geração para suas necessidades</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Segurança Militar',
                description: 'Criptografia de nível militar e proteção contra ataques cibernéticos'
              },
              {
                icon: Zap,
                title: 'Velocidade Extrema',
                description: 'Processamento em tempo real com latência ultra-baixa'
              },
              {
                icon: CreditCard,
                title: 'PIX Instantâneo',
                description: 'API PIX própria com confirmação em menos de 1 segundo'
              },
              {
                icon: Globe,
                title: 'Crypto Global',
                description: 'Transferências de criptomoedas automáticas mundialmente'
              },
              {
                icon: Smartphone,
                title: 'Mobile First',
                description: 'Interface otimizada para todos os dispositivos'
              },
              {
                icon: TrendingUp,
                title: 'Analytics Avançado',
                description: 'Relatórios detalhados e insights em tempo real'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-gray-800/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
                style={{
                  transform: `translateY(${scrollY * 0.05}px)`,
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-cyan-400">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '99.9%', label: 'Uptime' },
              { number: '<1s', label: 'Latência' },
              { number: '256bit', label: 'Criptografia' },
              { number: '24/7', label: 'Suporte' }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-600/10" />
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Pronto para Revolucionar?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Junte-se aos líderes do mercado que confiam no Vault Vision
          </p>
          <button
            onClick={() => onNavigate('register')}
            className="px-12 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl text-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300"
          >
            Começar Gratuitamente
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Vault Vision
              </span>
            </div>
            <div className="text-gray-400">
              © 2025 Vault Vision. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;