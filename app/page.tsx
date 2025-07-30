'use client'
import React, { useState, useEffect } from 'react';
import { TrendingUp, Zap, Shield, Users, ArrowRight, BarChart3 } from 'lucide-react';
import { redirect } from 'next/navigation';

const ZapSwapLanding = () => {
  const [stats, setStats] = useState({
    volume: '1.2B',
    trades: '2.5M',
    users: '180K',
    pairs: '850'
  });

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast Swaps",
      description: "Execute trades in milliseconds with Solana's high-speed blockchain technology."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Audited",
      description: "Smart contracts audited by leading security firms for maximum protection."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Deep Liquidity",
      description: "Access the best prices with our aggregated liquidity pools."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Driven",
      description: "Governed by the community with transparent tokenomics and voting."
    }
  ];

  const handleGetStarted = () => {
    redirect('/Swap')
  };

  return (
    <div className="bg-black text-white min-h-screen">
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 min-h-screen flex items-center relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          {/* Main gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-amber-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-l from-orange-600/15 to-red-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-amber-400/10 rounded-full blur-2xl"></div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
          
          {/* Animated particles */}
          <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-orange-400 rounded-full animate-ping"></div>
          <div className="absolute top-2/3 left-1/4 w-1 h-1 bg-amber-400 rounded-full animate-ping animation-delay-1000"></div>
          <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-orange-300 rounded-full animate-ping animation-delay-2000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            
            {/* Main Content */}
            <div className="space-y-8 max-w-5xl mx-auto">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-gray-900/60 border border-orange-500/20 rounded-full px-6 py-3 text-sm backdrop-blur-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">Live on Solana Mainnet</span>
                  <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
                  <span className="text-orange-400 font-medium">Ultra Fast</span>
                </div>
                
                <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
                  Trade at the
                  <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent block">
                    Speed of Light
                  </span>
                </h1>
                
                <p className="text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                  Experience the fastest, most efficient decentralized exchange on Solana. 
                  Trade tokens instantly with minimal fees and maximum security.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button 
                  onClick={handleGetStarted}
                  className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-12 py-5 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-orange-500/25 flex items-center justify-center group"
                >
                  Get Started
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="border-2 border-orange-500/30 hover:border-orange-500/60 text-white px-12 py-5 rounded-2xl font-bold text-xl transition-all duration-300 hover:bg-orange-500/10 backdrop-blur-sm">
                  View Analytics
                </button>
              </div>
              
              {/* Enhanced Stats Row */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-16">
                <div className="text-center bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-orange-500/30 transition-all duration-300">
                  <div className="text-4xl font-bold text-orange-400 mb-2">${stats.volume}</div>
                  <div className="text-gray-400 font-medium">Total Volume</div>
                </div>
                <div className="text-center bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-orange-500/30 transition-all duration-300">
                  <div className="text-4xl font-bold text-amber-400 mb-2">{stats.trades}</div>
                  <div className="text-gray-400 font-medium">Total Trades</div>
                </div>
                <div className="text-center bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-orange-500/30 transition-all duration-300">
                  <div className="text-4xl font-bold text-orange-400 mb-2">{stats.users}</div>
                  <div className="text-gray-400 font-medium">Active Users</div>
                </div>
                <div className="text-center bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-orange-500/30 transition-all duration-300">
                  <div className="text-4xl font-bold text-amber-400 mb-2">{stats.pairs}</div>
                  <div className="text-gray-400 font-medium">Trading Pairs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 relative overflow-hidden">
        {/* Background for features section */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-gray-950/90 to-black"></div>
          <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-orange-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Why Choose <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">ZapSwap</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built for traders who demand speed, security, and the best possible prices. 
              Experience DeFi trading without compromise.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 group hover:transform hover:-translate-y-2"
              >
                <div className="text-orange-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-orange-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Enhanced background for CTA */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-900/5 via-black to-red-900/5"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl border border-orange-500/20 rounded-3xl p-12 shadow-2xl shadow-orange-500/10">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold">
                Ready to Start Trading?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Join thousands of traders already using ZapSwap for lightning-fast, 
                secure token swaps on Solana.
              </p>
              
              <button 
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-16 py-6 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-orange-500/25 inline-flex items-center group"
              >
                Launch App
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">ZapSwap</span>
            </div>
            
            <div className="flex items-center space-x-8 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
              <span className="text-sm">© 2025 ZapSwap. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ZapSwapLanding;