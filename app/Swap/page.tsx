'use client'
import React, { useState } from 'react';
import { ArrowUpDown, Settings, TrendingUp, Clock, Zap, Info, ChevronDown, Repeat } from 'lucide-react';

const SwapPage = () => {
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');
  const [fromToken, setFromToken] = useState({ symbol: 'SOL', name: 'Solana', logo: '🟣' });
  const [toToken, setToToken] = useState({ symbol: 'USDC', name: 'USD Coin', logo: '🔵' });
  const [slippage, setSlippage] = useState('0.5');
  const [showSettings, setShowSettings] = useState(false);

  const popularTokens = [
    { symbol: 'SOL', name: 'Solana', price: '$156.70', change: '+2.4%', logo: '🟣' },
    { symbol: 'USDC', name: 'USD Coin', price: '$1.00', change: '0.0%', logo: '🔵' },
    { symbol: 'USDT', name: 'Tether', price: '$1.00', change: '+0.1%', logo: '🟢' },
    { symbol: 'RAY', name: 'Raydium', price: '$4.23', change: '+5.7%', logo: '🔷' },
    { symbol: 'BONK', name: 'Bonk', price: '$0.000034', change: '+12.3%', logo: '🐕' },
    { symbol: 'JUP', name: 'Jupiter', price: '$1.45', change: '+8.9%', logo: '🪐' }
  ];

  const recentTrades = [
    { from: 'SOL', to: 'USDC', amount: '2.5', value: '$392.50', time: '2m ago' },
    { from: 'USDC', to: 'RAY', amount: '500', value: '$500.00', time: '5m ago' },
    { from: 'BONK', to: 'SOL', amount: '1M', value: '$34.00', time: '8m ago' }
  ];

  const swapTokens = () => {
    const temp = fromToken;
    setFromToken(toToken);
    setToToken(temp);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20 pb-8 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-l from-orange-600/8 to-amber-400/8 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Swap Interface */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">Swap Tokens</h1>
                <p className="text-gray-400">Trade tokens instantly on Solana</p>
              </div>
              <button
                onClick={() => setShowSettings(!showSettings)}
                className="p-3 bg-gray-900/60 hover:bg-gray-800/60 border border-gray-700/50 rounded-xl transition-all duration-200 hover:border-orange-500/30"
              >
                <Settings className="w-5 h-5 text-gray-400 hover:text-orange-400" />
              </button>
            </div>

            {/* Settings Panel */}
            {showSettings && (
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl border border-orange-500/20 rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-4">Swap Settings</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Slippage Tolerance</label>
                    <div className="flex space-x-2">
                      {['0.1', '0.5', '1.0'].map((value) => (
                        <button
                          key={value}
                          onClick={() => setSlippage(value)}
                          className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                            slippage === value
                              ? 'bg-orange-500 text-white'
                              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                          }`}
                        >
                          {value}%
                        </button>
                      ))}
                      <input
                        type="text"
                        placeholder="Custom"
                        className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none w-20"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Swap Card */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl border border-orange-500/20 rounded-2xl p-6 shadow-2xl shadow-orange-500/5">
              
              {/* From Token */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 font-medium">From</span>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <span>Balance: 12.45 SOL</span>
                    <button className="text-orange-400 hover:text-orange-300 font-medium">MAX</button>
                  </div>
                </div>
                
                <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-4 hover:border-orange-500/30 transition-all duration-200">
                  <div className="flex items-center justify-between">
                    <input
                      type="text"
                      value={fromAmount}
                      onChange={(e) => setFromAmount(e.target.value)}
                      placeholder="0.0"
                      className="bg-transparent text-3xl font-bold text-white placeholder-gray-500 outline-none flex-1"
                    />
                    <div className="flex items-center space-x-3">
                      <div className="text-right">
                        <div className="text-2xl font-bold text-orange-400">{fromToken.symbol}</div>
                        <div className="text-sm text-gray-400">{fromToken.name}</div>
                      </div>
                      <button className="flex items-center space-x-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg px-3 py-2 transition-all duration-200">
                        <span className="text-2xl">{fromToken.logo}</span>
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-2 text-right text-sm text-gray-400">
                    ~$1,568.25
                  </div>
                </div>
              </div>

              {/* Swap Arrow */}
              <div className="flex justify-center my-4">
                <button
                  onClick={swapTokens}
                  className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 p-3 rounded-xl transition-all duration-200 transform hover:scale-110 hover:rotate-180 shadow-lg shadow-orange-500/25"
                >
                  <ArrowUpDown className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* To Token */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 font-medium">To</span>
                  <div className="text-sm text-gray-400">
                    Balance: 0.00 USDC
                  </div>
                </div>
                
                <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-4 hover:border-orange-500/30 transition-all duration-200">
                  <div className="flex items-center justify-between">
                    <input
                      type="text"
                      value={toAmount}
                      onChange={(e) => setToAmount(e.target.value)}
                      placeholder="0.0"
                      className="bg-transparent text-3xl font-bold text-white placeholder-gray-500 outline-none flex-1"
                      readOnly
                    />
                    <div className="flex items-center space-x-3">
                      <div className="text-right">
                        <div className="text-2xl font-bold text-orange-400">{toToken.symbol}</div>
                        <div className="text-sm text-gray-400">{toToken.name}</div>
                      </div>
                      <button className="flex items-center space-x-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg px-3 py-2 transition-all duration-200">
                        <span className="text-2xl">{toToken.logo}</span>
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-2 text-right text-sm text-gray-400">
                    ~$1,567.00
                  </div>
                </div>
              </div>

              {/* Swap Details */}
              <div className="mt-6 space-y-3 bg-gray-800/30 rounded-xl p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Rate
                  </span>
                  <span className="text-white font-medium">1 SOL = 156.7 USDC</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400 flex items-center">
                    <Zap className="w-4 h-4 mr-2" />
                    Network Fee
                  </span>
                  <span className="text-white">~0.00025 SOL ($0.04)</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400 flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    Estimated Time
                  </span>
                  <span className="text-white">~15 seconds</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400 flex items-center">
                    <Info className="w-4 h-4 mr-2" />
                    Price Impact
                  </span>
                  <span className="text-green-400">{'<'}0.01%</span>
                </div>
              </div>

              {/* Swap Button */}
              <button className="w-full mt-6 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl shadow-orange-500/25 flex items-center justify-center group">
                <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Swap Tokens
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Popular Tokens */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl border border-orange-500/20 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-orange-400" />
                Popular Tokens
              </h3>
              <div className="space-y-3">
                {popularTokens.map((token, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-800/40 hover:bg-gray-700/40 rounded-xl transition-all duration-200 cursor-pointer border border-transparent hover:border-orange-500/20">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{token.logo}</span>
                      <div>
                        <div className="font-semibold">{token.symbol}</div>
                        <div className="text-sm text-gray-400">{token.name}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{token.price}</div>
                      <div className={`text-sm ${token.change.startsWith('+') ? 'text-green-400' : token.change.startsWith('-') ? 'text-red-400' : 'text-gray-400'}`}>
                        {token.change}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Trades */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl border border-orange-500/20 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Repeat className="w-5 h-5 mr-2 text-orange-400" />
                Recent Trades
              </h3>
              <div className="space-y-3">
                {recentTrades.map((trade, index) => (
                  <div key={index} className="p-3 bg-gray-800/40 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">{trade.from} → {trade.to}</span>
                      <span className="text-xs text-gray-400">{trade.time}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-300">{trade.amount} {trade.from}</span>
                      <span className="text-sm text-orange-400 font-medium">{trade.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl border border-orange-500/20 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">24h Volume</span>
                  <span className="text-white font-semibold">$45.2M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Active Pairs</span>
                  <span className="text-white font-semibold">850+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Avg Fee</span>
                  <span className="text-green-400 font-semibold">0.25%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Success Rate</span>
                  <span className="text-green-400 font-semibold">99.7%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwapPage;