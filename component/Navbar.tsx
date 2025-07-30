'use client'
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Home, BarChart3 } from 'lucide-react';

// Custom styles for WalletMultiButton to match the page theme
const walletButtonStyles = `
  .wallet-adapter-button {
    background: linear-gradient(135deg, #f97316, #dc2626) !important;
    border: none !important;
    border-radius: 0.75rem !important;
    padding: 0.625rem 1.5rem !important;
    font-weight: 600 !important;
    font-size: 0.875rem !important;
    color: white !important;
    transition: all 0.2s ease !important;
    box-shadow: 0 4px 6px -1px rgba(249, 115, 22, 0.25) !important;
    font-family: inherit !important;
  }
  
  .wallet-adapter-button:hover:not([disabled]) {
    background: linear-gradient(135deg, #ea580c, #b91c1c) !important;
    transform: translateY(-1px) !important;
    box-shadow: 0 8px 15px -3px rgba(249, 115, 22, 0.35) !important;
  }
  
  .wallet-adapter-button:active {
    transform: translateY(0) !important;
    box-shadow: 0 4px 6px -1px rgba(249, 115, 22, 0.25) !important;
  }
  
  .wallet-adapter-button[disabled] {
    background: #374151 !important;
    opacity: 0.6 !important;
    cursor: not-allowed !important;
  }
  
  .wallet-adapter-dropdown {
    background: rgba(17, 24, 39, 0.95) !important;
    backdrop-filter: blur(12px) !important;
    border: 1px solid rgba(249, 115, 22, 0.2) !important;
    border-radius: 0.75rem !important;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5) !important;
  }
  
  .wallet-adapter-dropdown-list {
    padding: 0.5rem !important;
  }
  
  .wallet-adapter-dropdown-list-item {
    background: transparent !important;
    border-radius: 0.5rem !important;
    margin: 0.125rem 0 !important;
    padding: 0.75rem 1rem !important;
    color: #f3f4f6 !important;
    transition: all 0.2s ease !important;
  }
  
  .wallet-adapter-dropdown-list-item:hover {
    background: rgba(249, 115, 22, 0.1) !important;
    color: #f97316 !important;
  }
  
  .wallet-adapter-modal {
    background: rgba(0, 0, 0, 0.8) !important;
    backdrop-filter: blur(8px) !important;
  }
  
  .wallet-adapter-modal-container {
    background: linear-gradient(145deg, rgba(17, 24, 39, 0.95), rgba(31, 41, 55, 0.95)) !important;
    border: 1px solid rgba(249, 115, 22, 0.2) !important;
    border-radius: 1rem !important;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8) !important;
  }
  
  .wallet-adapter-modal-title {
    color: #f3f4f6 !important;
    font-weight: 700 !important;
  }
  
  .wallet-adapter-modal-list {
    padding: 1rem !important;
  }
  
  .wallet-adapter-modal-list-item {
    background: rgba(31, 41, 55, 0.5) !important;
    border: 1px solid rgba(75, 85, 99, 0.3) !important;
    border-radius: 0.75rem !important;
    margin: 0.5rem 0 !important;
    padding: 1rem !important;
    transition: all 0.2s ease !important;
  }
  
  .wallet-adapter-modal-list-item:hover {
    background: rgba(249, 115, 22, 0.1) !important;
    border-color: rgba(249, 115, 22, 0.4) !important;
    transform: translateY(-1px) !important;
  }
  
  .wallet-adapter-button-end-icon,
  .wallet-adapter-button-start-icon {
    margin: 0 0.25rem !important;
  }
`;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { publicKey, connected, disconnect } = useWallet();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Inject custom styles
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = walletButtonStyles;
    document.head.appendChild(styleElement);
    
    return () => {
      if (document.head.contains(styleElement)) {
        document.head.removeChild(styleElement);
      }
    };
  }, []);

  const handleNavigation = (path: string) => {
    router.push(path);
    setIsMobileMenuOpen(false);
  };

  const handleDisconnect = async () => {
    try {
      await disconnect();
    } catch (error) {
      console.error('Error disconnecting wallet:', error);
    }
  };

  const formatPublicKey = (pubkey: string) => {
    return `${pubkey.slice(0, 4)}...${pubkey.slice(-4)}`;
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-white/10' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <div 
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => handleNavigation('/')}
            >
              <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">ZapSwap</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => handleNavigation('/')}
                className="flex items-center space-x-2 text-gray-300 hover:text-orange-400 transition-colors duration-200"
              >
                <Home className="w-4 h-4" />
                <span className="font-medium">Home</span>
              </button>
              <button
                onClick={() => handleNavigation('/swap')}
                className="flex items-center space-x-2 text-gray-300 hover:text-orange-400 transition-colors duration-200"
              >
                <BarChart3 className="w-4 h-4" />
                <span className="font-medium">Swap</span>
              </button>
            </div>
            
            {/* Wallet Connection & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {connected && publicKey ? (
                <div className="flex items-center space-x-3">
                  <div className="bg-gray-900/60 backdrop-blur-sm border border-orange-500/20 rounded-lg px-4 py-2">
                    <span className="text-xs text-gray-400 block">Connected</span>
                    <span className="font-mono text-sm text-orange-400">
                      {formatPublicKey(publicKey.toString())}
                    </span>
                  </div>
                  <button 
                    onClick={handleDisconnect}
                    className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 transform hover:scale-105 hover:shadow-lg shadow-red-500/25"
                  >
                    Disconnect
                  </button>
                </div>
              ) : (
                <div className="wallet-button-container">
                  <WalletMultiButton />
                </div>
              )}
              
              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-gray-300 hover:text-white transition-colors p-2"
              >
                <svg 
                  className={`w-6 h-6 transform transition-transform duration-200 ${
                    isMobileMenuOpen ? 'rotate-90' : ''
                  }`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-80 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-4 pt-2 pb-4 space-y-2 bg-black/95 backdrop-blur-md border-b border-white/10">
            <button
              onClick={() => handleNavigation('/')}
              className="w-full flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-orange-400 hover:bg-gray-800/50 rounded-lg transition-all duration-200"
            >
              <Home className="w-5 h-5" />
              <span className="font-medium">Home</span>
            </button>
            <button
              onClick={() => handleNavigation('/Swap')}
              className="w-full flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-orange-400 hover:bg-gray-800/50 rounded-lg transition-all duration-200"
            >
              <BarChart3 className="w-5 h-5" />
              <span className="font-medium">Swap</span>
            </button>
            
          </div>
        </div>
      </nav>
      
      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;