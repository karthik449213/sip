'use client';

import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';

export default function RetirementCalculatorPage() {
  // State for calculator inputs
  const [currentAge, setCurrentAge] = useState(25);
  const [retirementAge, setRetirementAge] = useState(60);
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [inflationRate, setInflationRate] = useState(6);
  const [results, setResults] = useState({
    requiredCorpus: 0,
    totalInvestment: 0,
    futureValue: 0,
    yearsToRetirement: 0
  });

  // Sample data for the graph - Replace with dynamic calculation results
  const sampleChartData = [
    { age: 25, investment: 120000, value: 134400, inflationAdjusted: 120000 },
    { age: 30, investment: 720000, value: 1142857, inflationAdjusted: 640000 },
    { age: 35, investment: 1440000, value: 2845714, inflationAdjusted: 1280000 },
    { age: 40, investment: 2160000, value: 5654286, inflationAdjusted: 1920000 },
    { age: 45, investment: 2880000, value: 9768571, inflationAdjusted: 2560000 },
    { age: 50, investment: 3600000, value: 15645714, inflationAdjusted: 3200000 },
    { age: 55, investment: 4320000, value: 23828571, inflationAdjusted: 3840000 },
    { age: 60, investment: 5040000, value: 35085714, inflationAdjusted: 4480000 }
  ];

  // Retirement Calculation function - Replace with your actual calculation logic
  const calculateRetirement = () => {
    const yearsToRetirement = retirementAge - currentAge;
    const monthlyRate = expectedReturn / 100 / 12;
    const totalMonths = yearsToRetirement * 12;
    
    // Future Value calculation
    const futureValue = monthlyInvestment * (((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * (1 + monthlyRate));
    const totalInvestment = monthlyInvestment * totalMonths;
    
    // Required corpus considering inflation
    const inflationAdjustedCorpus = futureValue / Math.pow(1 + inflationRate/100, yearsToRetirement);

    setResults({
      requiredCorpus: Math.round(inflationAdjustedCorpus),
      totalInvestment: Math.round(totalInvestment),
      futureValue: Math.round(futureValue),
      yearsToRetirement: yearsToRetirement
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-emerald-600 via-teal-700 to-cyan-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Page Title - Edit this for SEO optimization */}
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
              Retirement Calculator
            </h1>
            
            {/* Page Description - Edit this for better SEO */}
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-95 leading-relaxed">
              Plan your dream retirement with precision. Calculate how much you need to invest today 
              to secure your financial freedom tomorrow.
            </p>
            
            {/* PRIMARY CTA BUTTON - Insert affiliate link for retirement planning services */}
            <button className="bg-white text-emerald-700 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-emerald-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105">
              Start Retirement Planning
            </button>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white bg-opacity-10 rounded-full blur-xl"></div>
        <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-emerald-300 bg-opacity-20 rounded-full blur-2xl"></div>
      </section>

      {/* RETIREMENT CALCULATOR FORM SECTION */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
            
            {/* CALCULATOR INPUT FORM */}
            <div className="xl:col-span-2 bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">
              <div className="text-center mb-10">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
                  Calculate Your Retirement Needs
                </h2>
                <p className="text-gray-600 text-lg">Fill in your details to get a personalized retirement plan</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Current Age Input */}
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
                    Current Age
                  </label>
                  <input
                    type="number"
                    value={currentAge}
                    onChange={(e) => setCurrentAge(Number(e.target.value))}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 transition-all duration-300 text-lg font-medium"
                    placeholder="25"
                    min="18"
                    max="65"
                  />
                </div>

                {/* Retirement Age Input */}
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
                    Retirement Age
                  </label>
                  <input
                    type="number"
                    value={retirementAge}
                    onChange={(e) => setRetirementAge(Number(e.target.value))}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 transition-all duration-300 text-lg font-medium"
                    placeholder="60"
                    min="45"
                    max="75"
                  />
                </div>

                {/* Monthly Investment Input */}
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
                    Monthly Investment (₹)
                  </label>
                  <input
                    type="number"
                    value={monthlyInvestment}
                    onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 transition-all duration-300 text-lg font-medium"
                    placeholder="10000"
                    min="1000"
                    step="1000"
                  />
                </div>

                {/* Expected Return Input */}
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
                    Expected Annual Return (%)
                  </label>
                  <input
                    type="number"
                    value={expectedReturn}
                    onChange={(e) => setExpectedReturn(Number(e.target.value))}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 transition-all duration-300 text-lg font-medium"
                    placeholder="12"
                    min="1"
                    max="25"
                    step="0.5"
                  />
                </div>

                {/* Inflation Rate Input */}
                <div className="space-y-3 md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
                    Inflation Rate (%) - Optional
                  </label>
                  <input
                    type="number"
                    value={inflationRate}
                    onChange={(e) => setInflationRate(Number(e.target.value))}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 transition-all duration-300 text-lg font-medium"
                    placeholder="6"
                    min="1"
                    max="15"
                    step="0.5"
                  />
                </div>
              </div>

              {/* Calculate Button */}
              <div className="mt-10">
                <button
                  onClick={calculateRetirement}
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-5 rounded-2xl font-bold text-xl hover:from-emerald-700 hover:to-teal-800 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
                >
                  Calculate My Retirement Plan
                </button>
              </div>
            </div>

            {/* RESULTS DISPLAY */}
            <div className="space-y-6">
              {/* Years to Retirement Info */}
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-8 text-white shadow-2xl">
                <h3 className="text-lg font-medium opacity-90 mb-2">Years to Retirement</h3>
                <p className="text-4xl font-bold">{results.yearsToRetirement || retirementAge - currentAge} Years</p>
              </div>

              {/* Future Value Card */}
              <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-3xl p-8 text-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-lg font-medium opacity-90 mb-2">Future Value</h3>
                <p className="text-4xl font-bold">
                  ₹{results.futureValue ? (results.futureValue/10000000).toFixed(1) + ' Cr' : '0'}
                </p>
                <p className="text-sm opacity-75 mt-2">Total corpus at retirement</p>
              </div>

              {/* Total Investment Card */}
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl p-8 text-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-lg font-medium opacity-90 mb-2">Total Investment</h3>
                <p className="text-4xl font-bold">
                  ₹{results.totalInvestment ? (results.totalInvestment/1000000).toFixed(1) + ' L' : '0'}
                </p>
                <p className="text-sm opacity-75 mt-2">Amount you will invest</p>
              </div>

              {/* Required Corpus Card */}
              <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl p-8 text-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-lg font-medium opacity-90 mb-2">Inflation Adjusted Value</h3>
                <p className="text-4xl font-bold">
                  ₹{results.requiredCorpus ? (results.requiredCorpus/10000000).toFixed(1) + ' Cr' : '0'}
                </p>
                <p className="text-sm opacity-75 mt-2">Real purchasing power</p>
              </div>

              {/* AFFILIATE LINK SECTION - Insert retirement planning services */}
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl p-8 shadow-2xl">
                <h4 className="text-xl font-bold text-gray-800 mb-4">
                  🎯 Ready to Secure Your Future?
                </h4>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Get expert retirement planning guidance from certified financial advisors
                </p>
                {/* AFFILIATE BUTTONS - Replace with your affiliate links */}
                <div className="space-y-4">
                  <button className="w-full bg-white text-orange-600 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg">
                    Get Professional Advice →
                  </button>
                  <button className="w-full border-2 border-white text-white py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300">
                    Compare Retirement Plans →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE GRAPH SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
              Retirement Growth Visualization
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Watch your retirement savings grow over time and see the impact of inflation on your purchasing power
            </p>
          </div>

          {/* GRAPH CONTAINER - Replace sample data with dynamic calculation results */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-10 shadow-2xl border border-gray-100">
            <ResponsiveContainer width="100%" height={500}>
              <AreaChart data={sampleChartData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                <defs>
                  <linearGradient id="colorInvestment" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.2}/>
                  </linearGradient>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0.2}/>
                  </linearGradient>
                  <linearGradient id="colorInflation" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.2}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis 
                  dataKey="age" 
                  stroke="#64748b"
                  fontSize={14}
                  fontWeight="500"
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis 
                  stroke="#64748b"
                  fontSize={14}
                  fontWeight="500"
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `₹${(value/1000000).toFixed(0)}L`}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#1e293b',
                    border: 'none',
                    borderRadius: '16px',
                    color: '#f8fafc',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                    padding: '16px'
                  }}
                  formatter={(value, name) => [
                    `₹${Number(value).toLocaleString('en-IN')}`,
                    name === 'investment' ? 'Total Investment' : 
                    name === 'value' ? 'Investment Value' : 'Inflation Adjusted'
                  ]}
                  labelFormatter={(label) => `Age: ${label}`}
                />
                <Legend 
                  wrapperStyle={{ paddingTop: '20px', fontSize: '14px', fontWeight: '500' }}
                />
                <Area
                  type="monotone"
                  dataKey="investment"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  fill="url(#colorInvestment)"
                  name="Total Investment"
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#10b981"
                  strokeWidth={3}
                  fill="url(#colorValue)"
                  name="Investment Value"
                />
                <Area
                  type="monotone"
                  dataKey="inflationAdjusted"
                  stroke="#f59e0b"
                  strokeWidth={3}
                  fill="url(#colorInflation)"
                  name="Inflation Adjusted"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* GRAPH INSIGHTS - Add affiliate links for retirement investment advice */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 border-2 border-emerald-100">
              <h4 className="text-2xl font-bold text-emerald-800 mb-4">
                💡 Investment Insights
              </h4>
              <p className="text-emerald-700 mb-6 leading-relaxed">
                Starting early gives your investments more time to compound. Even small increases in monthly contributions can significantly impact your retirement corpus.
              </p>
              {/* AFFILIATE LINK - Investment education or courses */}
              <button className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-emerald-700 transition-all duration-300 shadow-lg">
                Learn Investment Strategies →
              </button>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border-2 border-blue-100">
              <h4 className="text-2xl font-bold text-blue-800 mb-4">
                🎯 Inflation Impact
              </h4>
              <p className="text-blue-700 mb-6 leading-relaxed">
                Inflation reduces purchasing power over time. Plan for higher returns to maintain your desired lifestyle in retirement.
              </p>
              {/* AFFILIATE LINK - Inflation-protected investments */}
              <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all duration-300 shadow-lg">
                Explore Inflation Protection →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How Retirement Planning Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Build your retirement wealth with these proven strategies
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* STRATEGY CARD 1 - Add affiliate link for retirement accounts */}
            <div className="bg-white rounded-3xl shadow-2xl p-10 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl flex items-center justify-center mb-8 mx-auto">
                <span className="text-blue-600 text-3xl">💰</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Start Early & Stay Consistent
              </h3>
              <p className="text-gray-600 mb-8 text-center leading-relaxed">
                Time is your biggest asset in retirement planning. Start investing early and maintain regular contributions to maximize compound growth.
              </p>
              {/* AFFILIATE LINK - Retirement account platforms */}
              <button className="w-full bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 py-4 rounded-2xl font-bold hover:from-blue-200 hover:to-blue-300 transition-all duration-300">
                Open Retirement Account →
              </button>
            </div>

            {/* STRATEGY CARD 2 - Add affiliate link for diversified portfolios */}
            <div className="bg-white rounded-3xl shadow-2xl p-10 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-green-200 rounded-3xl flex items-center justify-center mb-8 mx-auto">
                <span className="text-emerald-600 text-3xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Diversify Your Portfolio
              </h3>
              <p className="text-gray-600 mb-8 text-center leading-relaxed">
                Spread your investments across different asset classes to reduce risk and optimize returns for long-term wealth building.
              </p>
              {/* AFFILIATE LINK - Portfolio management services */}
              <button className="w-full bg-gradient-to-r from-emerald-100 to-green-200 text-emerald-700 py-4 rounded-2xl font-bold hover:from-emerald-200 hover:to-green-300 transition-all duration-300">
                Build Diversified Portfolio →
              </button>
            </div>

            {/* STRATEGY CARD 3 - Add affiliate link for financial planning */}
            <div className="bg-white rounded-3xl shadow-2xl p-10 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-200 rounded-3xl flex items-center justify-center mb-8 mx-auto">
                <span className="text-purple-600 text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Regular Review & Adjust
              </h3>
              <p className="text-gray-600 mb-8 text-center leading-relaxed">
                Monitor your retirement plan regularly and adjust contributions based on life changes, market conditions, and goal updates.
              </p>
              {/* AFFILIATE LINK - Financial advisory services */}
              <button className="w-full bg-gradient-to-r from-purple-100 to-pink-200 text-purple-700 py-4 rounded-2xl font-bold hover:from-purple-200 hover:to-pink-300 transition-all duration-300">
                Get Expert Guidance →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER / LEAD CAPTURE SECTION */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Master Your Retirement Planning
          </h2>
          <p className="text-xl text-indigo-100 mb-10 leading-relaxed">
            Get exclusive retirement strategies, market insights, and personalized planning tips delivered weekly
          </p>
          
          {/* LEAD CAPTURE FORM - Connect to your email service provider */}
          <form className="max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50 shadow-2xl text-lg font-medium"
                required
              />
              {/* FORM SUBMISSION - Connect to your email service */}
              <button
                type="submit"
                className="bg-white text-indigo-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-indigo-50 transition-all duration-300 whitespace-nowrap shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
              >
                Get Free Guide
              </button>
            </div>
            <p className="text-indigo-200 text-sm mt-6">
              Join 25,000+ smart investors. Privacy guaranteed. Unsubscribe anytime.
            </p>
          </form>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white bg-opacity-5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-300 bg-opacity-10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* BRAND COLUMN */}
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Retirement Calculator Hub
              </h3>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                Your comprehensive partner for retirement planning and wealth building. 
                Make informed decisions with accurate projections and expert financial insights.
              </p>
              {/* SOCIAL MEDIA LINKS - Add your social media profiles */}
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors transform hover:scale-110">
                  <span className="text-3xl">📘</span> {/* Replace with actual social icons */}
                </a>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors transform hover:scale-110">
                  <span className="text-3xl">🐦</span> {/* Replace with actual social icons */}
                </a>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors transform hover:scale-110">
                  <span className="text-3xl">💼</span> {/* Replace with actual social icons */}
                </a>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors transform hover:scale-110">
                  <span className="text-3xl">📸</span> {/* Replace with actual social icons */}
                </a>
              </div>
            </div>

            {/* CALCULATORS COLUMN */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-emerald-400">Financial Tools</h4>
              <ul className="space-y-4">
                <li><a href="/" className="text-gray-400 hover:text-white transition-colors">SIP Calculator</a></li>
                <li><a href="/retirement-calculator" className="text-gray-400 hover:text-white transition-colors">Retirement Calculator</a></li>
                <li><a href="/lumpsum-calculator" className="text-gray-400 hover:text-white transition-colors">Lumpsum Calculator</a></li>
                <li><a href="/emi-calculator" className="text-gray-400 hover:text-white transition-colors">EMI Calculator</a></li>
              </ul>
            </div>

            {/* SUPPORT COLUMN */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-emerald-400">Support</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Disclaimer</a></li>
              </ul>
            </div>

            {/* LEGAL COLUMN */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-emerald-400">Legal</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Affiliate Disclosure</a></li>
              </ul>
            </div>
          </div>

          {/* FOOTER BOTTOM */}
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Retirement Calculator Hub. All rights reserved.
              <a href="#" className="hover:text-white ml-2">Affiliate Disclosure</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}