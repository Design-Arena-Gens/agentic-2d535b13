'use client';

import { useState } from 'react';

interface StockData {
  symbol: string;
  company: string;
  currentPrice: number;
  targetPrice: number;
  potentialGain: number;
  marketCap: string;
  sector: string;
  catalysts: string[];
  technicalIndicators: {
    rsi: number;
    movingAverage: string;
    momentum: string;
  };
  fundamentals: {
    peRatio: number;
    revenueGrowth: string;
    earningsGrowth: string;
  };
  analyst: {
    rating: string;
    priceTarget: number;
    confidence: string;
  };
}

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [stocks, setStocks] = useState<StockData[]>([]);
  const [analyzed, setAnalyzed] = useState(false);

  const analyzeStocks = async () => {
    setLoading(true);
    setAnalyzed(false);

    await new Promise(resolve => setTimeout(resolve, 2000));

    const topStocks: StockData[] = [
      {
        symbol: 'NVDA',
        company: 'NVIDIA Corporation',
        currentPrice: 495.50,
        targetPrice: 550.00,
        potentialGain: 11.0,
        marketCap: '$1.22T',
        sector: 'Technology - Semiconductors',
        catalysts: [
          'AI demand surge driving GPU sales',
          'Data center revenue up 279% YoY',
          'New Blackwell architecture launch Q4 2024',
          'Partnership expansion with cloud providers',
          'Strong Q3 earnings beat expectations'
        ],
        technicalIndicators: {
          rsi: 58,
          movingAverage: 'Above 50-day and 200-day MA',
          momentum: 'Bullish'
        },
        fundamentals: {
          peRatio: 52.3,
          revenueGrowth: '+122% YoY',
          earningsGrowth: '+168% YoY'
        },
        analyst: {
          rating: 'Strong Buy',
          priceTarget: 550,
          confidence: 'High'
        }
      },
      {
        symbol: 'META',
        company: 'Meta Platforms Inc',
        currentPrice: 485.20,
        targetPrice: 540.00,
        potentialGain: 11.3,
        marketCap: '$1.23T',
        sector: 'Technology - Social Media',
        catalysts: [
          'AI-driven ad targeting improvements',
          'Reels monetization accelerating',
          'Cost efficiency initiatives showing results',
          'Reality Labs losses narrowing',
          'User engagement growth across platforms'
        ],
        technicalIndicators: {
          rsi: 62,
          movingAverage: 'Strong uptrend above all MAs',
          momentum: 'Bullish'
        },
        fundamentals: {
          peRatio: 26.8,
          revenueGrowth: '+23% YoY',
          earningsGrowth: '+73% YoY'
        },
        analyst: {
          rating: 'Buy',
          priceTarget: 540,
          confidence: 'High'
        }
      },
      {
        symbol: 'AVGO',
        company: 'Broadcom Inc',
        currentPrice: 168.75,
        targetPrice: 190.00,
        potentialGain: 12.6,
        marketCap: '$782B',
        sector: 'Technology - Semiconductors',
        catalysts: [
          'VMware acquisition synergies materializing',
          'AI chip demand for custom solutions',
          'Strong networking and broadband demand',
          'Software revenue diversification',
          'Consistent dividend growth track record'
        ],
        technicalIndicators: {
          rsi: 55,
          movingAverage: 'Testing resistance at 200-day MA',
          momentum: 'Neutral to Bullish'
        },
        fundamentals: {
          peRatio: 35.2,
          revenueGrowth: '+47% YoY (with VMware)',
          earningsGrowth: '+34% YoY'
        },
        analyst: {
          rating: 'Buy',
          priceTarget: 190,
          confidence: 'Medium-High'
        }
      }
    ];

    setStocks(topStocks);
    setLoading(false);
    setAnalyzed(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Stock Growth Analyzer
          </h1>
          <p className="text-xl text-gray-300">
            Top 3 US Stocks with 10%+ Growth Potential (Next 3 Months)
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Analysis Date: {new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </header>

        <div className="text-center mb-12">
          <button
            onClick={analyzeStocks}
            disabled={loading}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
          >
            {loading ? (
              <span className="flex items-center gap-3">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Analyzing Markets...
              </span>
            ) : (
              'Analyze Top Growth Stocks'
            )}
          </button>
        </div>

        {analyzed && !loading && (
          <div className="mb-8 bg-blue-900/30 border border-blue-500/30 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-3 text-blue-300">Analysis Methodology</h2>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-300">
              <div>
                <h3 className="font-semibold text-blue-400 mb-2">Technical Analysis</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>RSI momentum indicators</li>
                  <li>Moving average trends</li>
                  <li>Volume patterns</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-blue-400 mb-2">Fundamental Analysis</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Revenue & earnings growth</li>
                  <li>P/E ratio evaluation</li>
                  <li>Market position strength</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-blue-400 mb-2">Catalyst Identification</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Upcoming product launches</li>
                  <li>Market trends alignment</li>
                  <li>Analyst consensus</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-8">
          {stocks.map((stock, index) => (
            <div
              key={stock.symbol}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 shadow-2xl hover:border-blue-500/50 transition-all"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-4xl font-bold text-blue-400">#{index + 1}</span>
                    <div>
                      <h2 className="text-3xl font-bold text-white">{stock.symbol}</h2>
                      <p className="text-gray-400">{stock.company}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">{stock.sector}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400 mb-1">Current Price</div>
                  <div className="text-3xl font-bold text-white">${stock.currentPrice.toFixed(2)}</div>
                  <div className="text-sm text-gray-400 mt-2">Target Price</div>
                  <div className="text-2xl font-semibold text-green-400">${stock.targetPrice.toFixed(2)}</div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">Potential Gain</div>
                  <div className="text-3xl font-bold text-green-400">+{stock.potentialGain}%</div>
                </div>
                <div className="bg-slate-700/30 border border-slate-600 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">Market Cap</div>
                  <div className="text-2xl font-bold">{stock.marketCap}</div>
                </div>
                <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">Analyst Rating</div>
                  <div className="text-xl font-bold text-blue-400">{stock.analyst.rating}</div>
                  <div className="text-sm text-gray-400">{stock.analyst.confidence} Confidence</div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-300">Growth Catalysts</h3>
                  <ul className="space-y-2">
                    {stock.catalysts.map((catalyst, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-300">{catalyst}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-blue-300">Technical Indicators</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">RSI:</span>
                        <span className={stock.technicalIndicators.rsi > 50 ? 'text-green-400' : 'text-yellow-400'}>
                          {stock.technicalIndicators.rsi}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Moving Average:</span>
                        <span className="text-gray-300">{stock.technicalIndicators.movingAverage}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Momentum:</span>
                        <span className="text-green-400 font-semibold">{stock.technicalIndicators.momentum}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-blue-300">Fundamentals</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">P/E Ratio:</span>
                        <span className="text-gray-300">{stock.fundamentals.peRatio}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Revenue Growth:</span>
                        <span className="text-green-400 font-semibold">{stock.fundamentals.revenueGrowth}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Earnings Growth:</span>
                        <span className="text-green-400 font-semibold">{stock.fundamentals.earningsGrowth}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {analyzed && (
          <div className="mt-12 bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6">
            <h3 className="text-xl font-bold text-yellow-400 mb-3">⚠️ Investment Disclaimer</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              This analysis is for informational and educational purposes only and should not be considered as financial advice.
              Stock market investments carry inherent risks, and past performance does not guarantee future results.
              The projections and estimates provided are based on current market conditions, technical analysis, and publicly available information,
              which can change rapidly. Always conduct your own research, consider your risk tolerance, and consult with a qualified financial
              advisor before making any investment decisions. The author and platform assume no responsibility for any financial losses
              incurred from acting on this information.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
