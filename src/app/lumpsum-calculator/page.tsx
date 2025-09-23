'use client'

import React, { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'


export default function LumpSumCalculator() {
  const [investment, setInvestment] = useState('')
  const [returnRate, setReturnRate] = useState('')
  const [duration, setDuration] = useState('')
  const [results, setResults] = useState({
    futureValue: 0,
    totalGain: 0,
    principal: 0
  })

  // Sample static data for the chart - Replace with dynamic data based on calculations
  const sampleChartData = [
    { year: 0, amount: 10000 },
    { year: 1, amount: 11000 },
    { year: 2, amount: 12100 },
    { year: 3, amount: 13310 },
    { year: 4, amount: 14641 },
    { year: 5, amount: 16105 },
    { year: 10, amount: 25937 },
    { year: 15, amount: 41772 },
    { year: 20, amount: 67275 },
  ]

  const calculateInvestment = () => {
    const principal = parseFloat(investment)
    const rate = parseFloat(returnRate) / 100
    const years = parseInt(duration)
    
    if (principal && rate && years) {
      const futureValue = principal * Math.pow(1 + rate, years)
      const totalGain = futureValue - principal
      
      setResults({
        futureValue: Number(futureValue.toFixed(2)),
        totalGain: Number(totalGain.toFixed(2)),
        principal: Number(principal.toFixed(2))
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.3),transparent_70%)]"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
            Lump Sum Calculator
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Calculate the future value of your one-time investment with compound interest
          </p>
          
          {/* CTA Button - AFFILIATE LINK SPOT */}
          <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
            <span className="relative z-10">Start Investing Today</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Investment Calculator</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Input Form */}
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Initial Investment ($)</label>
                  <input
                    type="number"
                    value={investment}
                    onChange={(e) => setInvestment(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                    placeholder="10,000"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Expected Annual Return (%)</label>
                  <input
                    type="number"
                    value={returnRate}
                    onChange={(e) => setReturnRate(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                    placeholder="10"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Investment Duration (Years)</label>
                  <input
                    type="number"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                    placeholder="20"
                  />
                </div>
                
                <button
                  onClick={calculateInvestment}
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <span className="inline mr-2" role="img" aria-label="calculator">🧮</span>
                  Calculate Returns
                </button>
              </div>

              {/* Results */}
              <div className="space-y-4">
                {results ? (
                  <>
                    <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl p-6">
                      <div className="flex items-center mb-2">
                        <span className="text-green-400 mr-2" role="img" aria-label="trending-up">📈</span>
                        <h3 className="text-green-400 font-semibold">Future Value</h3>
                      </div>
                      <p className="text-3xl font-bold text-white">${Number(results.futureValue).toLocaleString()}</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-xl p-6">
                      <div className="flex items-center mb-2">
                        <span className="text-blue-400 mr-2" role="img" aria-label="dollar">💵</span>
                        <h3 className="text-blue-400 font-semibold">Total Gain</h3>
                      </div>
                      <p className="text-3xl font-bold text-white">${Number(results.totalGain).toLocaleString()}</p>
                    </div>
                    
                    {/* AFFILIATE LINK SPOT - Next to Results */}
                    <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl p-4">
                      <p className="text-purple-300 text-sm mb-2">Ready to invest?</p>
                      <button className="w-full py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                        Open Investment Account
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="text-center text-gray-400 py-12">
                    <span className="mx-auto mb-4 opacity-50 text-5xl block" role="img" aria-label="target">🎯</span>
                    <p>Enter your investment details to see projected returns</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Graph Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
            {/* Graph Header with Gradient */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6">
              <h2 className="text-3xl font-bold text-white">Investment Growth Projection</h2>
              <p className="text-purple-100 mt-2">See how your investment grows over time</p>
            </div>
            
            <div className="p-8">
              {/* TODO: Replace with dynamic data based on user inputs */}
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={sampleChartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis 
                    dataKey="year" 
                    stroke="#9CA3AF"
                    tick={{ fill: '#9CA3AF' }}
                  />
                  <YAxis 
                    stroke="#9CA3AF"
                    tick={{ fill: '#9CA3AF' }}
                    tickFormatter={(value) => `$${value.toLocaleString()}`}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(0,0,0,0.8)', 
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: '12px',
                      color: 'white'
                    }}
                    formatter={(value) => [`$${value.toLocaleString()}`, 'Investment Value']}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="amount" 
                    stroke="url(#colorGradient)" 
                    strokeWidth={3}
                    dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 6 }}
                    activeDot={{ r: 8, stroke: '#8B5CF6', strokeWidth: 2, fill: '#A855F7' }}
                  />
                  <defs>
                    <linearGradient id="colorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#EC4899" />
                    </linearGradient>
                  </defs>
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Tips / How It Works Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">How Lump Sum Investing Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:transform hover:scale-105 transition-all duration-300 group">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:shadow-xl group-hover:shadow-blue-500/25 transition-all duration-300">
                <span className="text-white text-2xl mr-2" role="img" aria-label="dollar">💵</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">One-Time Investment</h3>
              <p className="text-gray-300 mb-6">Invest a large sum all at once instead of making regular contributions over time.</p>
              
              {/* AFFILIATE LINK SPOT */}
              <button className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300">
                Learn More →
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:transform hover:scale-105 transition-all duration-300 group">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:shadow-xl group-hover:shadow-green-500/25 transition-all duration-300">
                <span className="text-white text-2xl mr-2" role="img" aria-label="trending-up">📈</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Compound Growth</h3>
              <p className="text-gray-300 mb-6">Your money grows exponentially as returns generate their own returns over time.</p>
              
              {/* AFFILIATE LINK SPOT */}
              <button className="text-green-400 hover:text-green-300 font-medium transition-colors duration-300">
                Start Investing →
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:transform hover:scale-105 transition-all duration-300 group">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:shadow-xl group-hover:shadow-purple-500/25 transition-all duration-300">
                <span className="text-white text-2xl mr-2" role="img" aria-label="target">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Long-term Strategy</h3>
              <p className="text-gray-300 mb-6">Best suited for investors with a long time horizon and risk tolerance.</p>
              
              {/* AFFILIATE LINK SPOT */}
              <button className="text-purple-400 hover:text-purple-300 font-medium transition-colors duration-300">
                Get Started →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter / Lead Capture Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-lg rounded-3xl p-12 border border-white/20 text-center">
            <span className="mx-auto mb-6 text-purple-400 text-5xl block" role="img" aria-label="mail">✉️</span>
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated on Investment Tips</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get weekly insights, market analysis, and investment strategies delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* BRAND COLUMN */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Financial Calculator Hub</h3>
              <p className="text-gray-400 mb-6">
                Your trusted source for accurate financial calculations and expert advice. 
                Make informed decisions with our comprehensive suite of calculators.
              </p>
              {/* SOCIAL MEDIA LINKS - Add your social media profiles */}
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="text-2xl">📘</span> {/* Replace with actual social icons */}
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="text-2xl">🐦</span> {/* Replace with actual social icons */}
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="text-2xl">📸</span> {/* Replace with actual social icons */}
                </a>
              </div>
            </div>

            {/* QUICK LINKS COLUMN */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {/* FOOTER NAVIGATION LINKS - Update these URLs */}
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Calculators</a></li>
              </ul>
            </div>

            {/* LEGAL LINKS COLUMN */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                {/* LEGAL PAGE LINKS - Create and link these pages */}
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Disclaimer</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          {/* FOOTER BOTTOM */}
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Financial Calculator Hub. All rights reserved. 
              {/* AFFILIATE DISCLOSURE LINK - Important for compliance */}
              <a href="#" className="hover:text-white ml-2">Affiliate Disclosure</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}