"use client"
import React, { useState, useEffect } from 'react';
import { TrendingUp, Zap, Shield, Users, ArrowRight, BarChart3 } from 'lucide-react';

const Home = () => {
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
    // Navigate to trading interface
    console.log('Get Started clicked');
  };

  return (
    <div className="bg-black text-white min-h-screen">
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 min-h-screen flex items-center relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-gray-900/50 border border-gray-800 rounded-full px-4 py-2 text-sm backdrop-blur-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">Live on Solana Mainnet</span>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Trade at the
                  <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent block">
                    Speed of Light
                  </span>
                </h1>
                
                <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
                  Experience the fastest, most efficient decentralized exchange on Solana. 
                  Swap tokens instantly with minimal fees and maximum security.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleGetStarted}
                  className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-amber-500/25 flex items-center justify-center group"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="border border-gray-700 hover:border-gray-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-gray-900/50 backdrop-blur-sm">
                  View Analytics
                </button>
              </div>
              
              {/* Stats Row */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-amber-400">${stats.volume}</div>
                  <div className="text-gray-400 text-sm">Total Volume</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-orange-400">{stats.trades}</div>
                  <div className="text-gray-400 text-sm">Total Trades</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-amber-400">{stats.users}</div>
                  <div className="text-gray-400 text-sm">Active Users</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-orange-400">{stats.pairs}</div>
                  <div className="text-gray-400 text-sm">Trading Pairs</div>
                </div>
              </div>
            </div>
            
            {/* Right Content - Trading Interface Preview */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">Quick Swap</h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <TrendingUp className="w-4 h-4" />
                      <span>Best Price</span>
                    </div>
                  </div>
                  
                  {/* From Token */}
                  <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400 text-sm">From</span>
                      <span className="text-gray-400 text-sm">Balance: 12.45</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <input 
                        type="text" 
                        placeholder="0.0" 
                        className="bg-transparent text-2xl font-semibold outline-none flex-1"
                        defaultValue="1.0"
                      />
                      <div className="flex items-center space-x-2 bg-gray-700 rounded-lg px-3 py-2">
                        <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
                        <span className="font-medium">SOL</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Swap Arrow */}
                  <div className="flex justify-center">
                    <div className="bg-gray-800 border border-gray-700 rounded-xl p-3 hover:bg-gray-700 transition-colors cursor-pointer">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* To Token */}
                  <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400 text-sm">To</span>
                      <span className="text-gray-400 text-sm">Balance: 0.00</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <input 
                        type="text" 
                        placeholder="0.0" 
                        className="bg-transparent text-2xl font-semibold outline-none flex-1"
                        defaultValue="156.7"
                        readOnly
                      />
                      <div className="flex items-center space-x-2 bg-gray-700 rounded-lg px-3 py-2">
                        <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                        <span className="font-medium">USDC</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Swap Button */}
                  <button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02]">
                    Swap Tokens
                  </button>
                  
                  {/* Price Info */}
                  <div className="text-center text-sm text-gray-400">
                    1 SOL = 156.7 USDC (~$156.70)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gray-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Why Choose <span className="text-amber-400">ZapSwap</span>?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Built for traders who demand speed, security, and the best possible prices. 
              Experience DeFi trading without compromise.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 hover:border-amber-500/30 transition-all duration-300 group hover:transform hover:-translate-y-2"
              >
                <div className="text-amber-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-amber-400 transition-colors">
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
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-500 to-orange-600"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Ready to Start Trading?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Join thousands of traders already using ZapSwap for lightning-fast, 
                secure token swaps on Solana.
              </p>
              
              <button 
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-12 py-5 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-amber-500/25 inline-flex items-center group"
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

export default Home;