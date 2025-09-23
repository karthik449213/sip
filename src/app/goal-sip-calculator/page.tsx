'use client'

import React, { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'


export default function GoalSIPCalculator() {
  const [targetGoal, setTargetGoal] = useState('')
  const [returnRate, setReturnRate] = useState('')
  const [duration, setDuration] = useState('')
  const [results, setResults] = useState({
    monthlySIP: 0,
    totalInvestment: 0,
    futureValue: 0,
    duration: 0
  })

  // Sample static data for the chart - Compare Target Goal vs SIP Growth
  const sampleChartData = [
    { year: 0, sipGrowth: 0, targetGoal: 500000 },
    { year: 1, sipGrowth: 12650, targetGoal: 500000 },
    { year: 2, sipGrowth: 26954, targetGoal: 500000 },
    { year: 3, sipGrowth: 43074, targetGoal: 500000 },
    { year: 4, sipGrowth: 61198, targetGoal: 500000 },
    { year: 5, sipGrowth: 81541, targetGoal: 500000 },
    { year: 10, sipGrowth: 204837, targetGoal: 500000 },
    { year: 15, sipGrowth: 387218, targetGoal: 500000 },
    { year: 20, sipGrowth: 500000, targetGoal: 500000 },
  ]

  const calculateSIP = () => {
    const goal = parseFloat(targetGoal)
    const rate = parseFloat(returnRate) / 100 / 12 // Monthly rate
    const months = parseInt(duration) * 12
    
    if (goal && rate && months) {
      // SIP formula: PMT = FV * r / [(1 + r)^n - 1]
      const monthlyRate = rate
      const futureValue = goal
      const monthlySIP = (futureValue * monthlyRate) / (Math.pow(1 + monthlyRate, months) - 1)
      const totalInvestment = monthlySIP * months
      
      setResults({
        monthlySIP: Number(monthlySIP.toFixed(2)),
        totalInvestment: Number(totalInvestment.toFixed(2)),
        futureValue: Number(goal.toFixed(2)),
        duration: Number(duration)
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(99,102,241,0.3),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(168,85,247,0.3),transparent_70%)]"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
            Goal SIP Calculator
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Calculate the monthly SIP amount needed to reach your financial goals
          </p>
          
          {/* CTA Button - AFFILIATE LINK SPOT */}
          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
            <span className="relative z-10">Start Your SIP Journey</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Calculate Your Monthly SIP</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Input Form */}
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Target Goal Amount ($)</label>
                  <input
                    type="number"
                    value={targetGoal}
                    onChange={(e) => setTargetGoal(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    placeholder="500,000"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Expected Annual Return (%)</label>
                  <input
                    type="number"
                    value={returnRate}
                    onChange={(e) => setReturnRate(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    placeholder="12"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Investment Duration (Years)</label>
                  <input
                    type="number"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    placeholder="20"
                  />
                </div>
                
                <button
                  onClick={calculateSIP}
                  className="w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl text-white font-semibold text-lg hover:from-cyan-700 hover:to-blue-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <span className="inline mr-2" role="img" aria-label="calculator">🧮</span>
                  Calculate Monthly SIP
                </button>
              </div>

              {/* Results */}
              <div className="space-y-4">
                {results ? (
                  <>
                    {/* Main Result - Monthly SIP */}
                    <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-xl p-6">
                      <div className="flex items-center mb-2">
                        <span className="text-cyan-400 mr-2" role="img" aria-label="repeat">🔁</span>
                        <h3 className="text-cyan-400 font-semibold">Required Monthly SIP</h3>
                      </div>
                      <p className="text-4xl font-bold text-white">${Number(results.monthlySIP).toLocaleString()}</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 rounded-xl p-6">
                      <div className="flex items-center mb-2">
                        <span className="text-purple-400 mr-2" role="img" aria-label="piggy-bank">🐷</span>
                        <h3 className="text-purple-400 font-semibold">Total Investment</h3>
                      </div>
                      <p className="text-2xl font-bold text-white">${Number(results.totalInvestment).toLocaleString()}</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl p-6">
                      <div className="flex items-center mb-2">
                        <span className="text-green-400 mr-2" role="img" aria-label="target">🎯</span>
                        <h3 className="text-green-400 font-semibold">Goal Achievement</h3>
                      </div>
                      <p className="text-2xl font-bold text-white">${Number(results.futureValue).toLocaleString()}</p>
                    </div>
                    
                    {/* AFFILIATE LINK SPOT - Next to Results */}
                    <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-xl p-4">
                      <p className="text-orange-300 text-sm mb-2">Ready to start your SIP?</p>
                      <button className="w-full py-2 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg text-white font-medium hover:from-orange-700 hover:to-red-700 transition-all duration-300">
                        Open SIP Account
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="text-center text-gray-400 py-12">
                    <span className="mx-auto mb-4 opacity-50 text-5xl block" role="img" aria-label="target">🎯</span>
                    <p>Enter your goal details to calculate the required monthly SIP</p>
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
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
              <h2 className="text-3xl font-bold text-white">SIP Growth vs Target Goal</h2>
              <p className="text-blue-100 mt-2">Track how your SIP investments grow towards your goal</p>
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
                    tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(0,0,0,0.8)', 
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: '12px',
                      color: 'white'
                    }}
                    formatter={(value, name) => [
                      `$${value.toLocaleString()}`, 
                      name === 'sipGrowth' ? 'SIP Growth' : 'Target Goal'
                    ]}
                  />
                  <Legend 
                    wrapperStyle={{ color: '#9CA3AF' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="sipGrowth" 
                    stroke="#06B6D4" 
                    strokeWidth={3}
                    dot={{ fill: '#06B6D4', strokeWidth: 2, r: 6 }}
                    activeDot={{ r: 8, stroke: '#06B6D4', strokeWidth: 2, fill: '#0891B2' }}
                    name="SIP Growth"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="targetGoal" 
                    stroke="#8B5CF6" 
                    strokeWidth={3}
                    strokeDasharray="5 5"
                    dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 6 }}
                    activeDot={{ r: 8, stroke: '#8B5CF6', strokeWidth: 2, fill: '#A855F7' }}
                    name="Target Goal"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Why Choose Goal-Based SIP?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:transform hover:scale-105 transition-all duration-300 group">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:shadow-xl group-hover:shadow-cyan-500/25 transition-all duration-300">
                <span className="text-white text-2xl mr-2" role="img" aria-label="target">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Clear Financial Goals</h3>
              <p className="text-gray-300 mb-6">Define specific targets like buying a house, child's education, or retirement planning.</p>
              
              {/* AFFILIATE LINK SPOT */}
              <button className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300">
                Set Your Goals →
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:transform hover:scale-105 transition-all duration-300 group">
              <div className="bg-gradient-to-br from-purple-500 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:shadow-xl group-hover:shadow-purple-500/25 transition-all duration-300">
                <span className="text-white text-2xl mr-2" role="img" aria-label="repeat">🔁</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Disciplined Investing</h3>
              <p className="text-gray-300 mb-6">Regular monthly investments help build wealth through market ups and downs.</p>
              
              {/* AFFILIATE LINK SPOT */}
              <button className="text-purple-400 hover:text-purple-300 font-medium transition-colors duration-300">
                Start SIP Now →
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:transform hover:scale-105 transition-all duration-300 group">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:shadow-xl group-hover:shadow-green-500/25 transition-all duration-300">
                <span className="text-white text-2xl mr-2" role="img" aria-label="trending-up">📈</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Power of Compounding</h3>
              <p className="text-gray-300 mb-6">Time multiplies your money as returns generate their own returns over years.</p>
              
              {/* AFFILIATE LINK SPOT */}
              <button className="text-green-400 hover:text-green-300 font-medium transition-colors duration-300">
                Learn Strategies →
              </button>
            </div>
          </div>

          {/* AFFILIATE BANNER SPOT */}
          <div className="mt-12 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-lg rounded-2xl p-8 border border-indigo-500/30 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Achieve Your Financial Goals?</h3>
            <p className="text-gray-300 mb-6">Start your SIP journey with India's most trusted investment platform</p>
            <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-white font-semibold hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Open Free Account
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter / Lead Capture Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-900/50 to-indigo-900/50 backdrop-blur-lg rounded-3xl p-12 border border-white/20 text-center">
            <span className="mx-auto mb-6 text-blue-400 text-5xl block" role="img" aria-label="mail">✉️</span>
            <h2 className="text-3xl font-bold text-white mb-4">Get Expert SIP Advice</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Receive personalized investment tips, market insights, and SIP strategies in your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full text-white font-semibold hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Get Tips
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