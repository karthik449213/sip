'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';

export default function HomePage() {
  // State for calculator inputs
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [investmentYears, setInvestmentYears] = useState(10);
  const [results, setResults] = useState({
    futureValue: 0,
    totalInvestment: 0,
    totalGain: 0
  });

  // Sample data for the graph - Replace with dynamic calculation results
  const sampleChartData = [
    { year: 1, investment: 60000, value: 67200 },
    { year: 2, investment: 120000, value: 142080 },
    { year: 3, investment: 180000, value: 225446 },
    { year: 4, investment: 240000, value: 318899 },
    { year: 5, investment: 300000, value: 424807 },
    { year: 6, investment: 360000, value: 544712 },
    { year: 7, investment: 420000, value: 680344 },
    { year: 8, investment: 480000, value: 833625 },
    { year: 9, investment: 540000, value: 1007680 },
    { year: 10, investment: 600000, value: 1204860 }
  ];

  // SIP Calculation function - Replace with your actual calculation logic
  const calculateSIP = () => {
    const monthlyRate = expectedReturn / 100 / 12;
    const totalMonths = investmentYears * 12;
    const futureValue = monthlyInvestment * (((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * (1 + monthlyRate));
    const totalInvestment = monthlyInvestment * totalMonths;
    const totalGain = futureValue - totalInvestment;

    setResults({
      futureValue: Math.round(futureValue),
      totalInvestment: Math.round(totalInvestment),
      totalGain: Math.round(totalGain)
    });
  };

  return (
    <>
      <Head>
        <title>SIP Calculator - Accurate & Fast</title>
        <meta name="description" content="Calculate your SIP returns easily with our fast and accurate SIP calculator. Free, simple, and effective for all your investment planning needs." />
        <meta name="keywords" content="SIP, SIP Calculator, Investment, Mutual Funds, Returns, Finance, Planning" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="SIP Calculator - Accurate & Fast" />
        <meta property="og:description" content="Calculate your SIP returns easily with our fast and accurate SIP calculator." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-domain.com/" />
      </Head>
      <div className="min-h-screen bg-gray-50">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Page Title - Edit this for SEO optimization */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              SIP Calculator
            </h1>
            
            {/* Page Description - Edit this for better SEO */}
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
              Calculate the future value of your Systematic Investment Plan (SIP) and see how 
              your regular investments can grow with the power of compounding.
            </p>
            
            {/* PRIMARY CTA BUTTON - Insert affiliate link for investment platform */}
            <button className="bg-white text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Start Investing Today
            </button>
          </div>
        </div>
      </section>

      {/* SIP CALCULATOR FORM SECTION */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* CALCULATOR INPUT FORM */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Calculate Your SIP Returns
              </h2>

              <div className="space-y-6">
                {/* Monthly Investment Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly SIP Investment (₹)
                  </label>
                  <input
                    type="number"
                    value={monthlyInvestment}
                    onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="5000"
                    min="500"
                    step="500"
                  />
                </div>

                {/* Expected Return Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expected Annual Return (%)
                  </label>
                  <input
                    type="number"
                    value={expectedReturn}
                    onChange={(e) => setExpectedReturn(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="12"
                    min="1"
                    max="30"
                    step="0.5"
                  />
                </div>

                {/* Investment Duration Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Investment Duration (Years)
                  </label>
                  <input
                    type="number"
                    value={investmentYears}
                    onChange={(e) => setInvestmentYears(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="10"
                    min="1"
                    max="50"
                  />
                </div>

                {/* Calculate Button */}
                <button
                  onClick={calculateSIP}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Calculate SIP Returns
                </button>
              </div>
            </div>

            {/* RESULTS DISPLAY */}
            <div className="space-y-6">
              {/* Results Cards */}
              <div className="grid grid-cols-1 gap-6">
                {/* Future Value Card */}
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white shadow-xl">
                  <h3 className="text-lg font-medium opacity-90">Future Value</h3>
                  <p className="text-3xl font-bold">
                    ₹{results.futureValue ? results.futureValue.toLocaleString('en-IN') : '0'}
                  </p>
                </div>

                {/* Total Investment Card */}
                <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl p-6 text-white shadow-xl">
                  <h3 className="text-lg font-medium opacity-90">Total Investment</h3>
                  <p className="text-3xl font-bold">
                    ₹{results.totalInvestment ? results.totalInvestment.toLocaleString('en-IN') : '0'}
                  </p>
                </div>

                {/* Total Gain Card */}
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-6 text-white shadow-xl">
                  <h3 className="text-lg font-medium opacity-90">Total Gain</h3>
                  <p className="text-3xl font-bold">
                    ₹{results.totalGain ? results.totalGain.toLocaleString('en-IN') : '0'}
                  </p>
                </div>
              </div>

              {/* AFFILIATE LINK SECTION - Insert investment platform recommendations */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-yellow-800 mb-3">
                  💡 Ready to Start Your SIP Journey?
                </h4>
                <p className="text-yellow-700 mb-4">
                  Get started with these top-rated investment platforms
                </p>
                {/* AFFILIATE BUTTONS - Replace with your affiliate links */}
                <div className="space-y-3">
                  <button className="w-full bg-yellow-500 text-white py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors">
                    Start SIP with Platform A →
                  </button>
                  <button className="w-full bg-white border-2 border-yellow-500 text-yellow-600 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition-colors">
                    Compare Investment Options →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE GRAPH SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              SIP Growth Visualization
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how your SIP investment grows over time with the power of compounding
            </p>
          </div>

          {/* GRAPH CONTAINER - Replace sample data with dynamic calculation results */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart data={sampleChartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e4e7" />
                <XAxis 
                  dataKey="year" 
                  stroke="#6b7280"
                  fontSize={12}
                  tickLine={false}
                />
                <YAxis 
                  stroke="#6b7280"
                  fontSize={12}
                  tickLine={false}
                  tickFormatter={(value) => `₹${(value/100000).toFixed(1)}L`}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#1f2937',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#f9fafb'
                  }}
                  formatter={(value, name) => [
                    `₹${value.toLocaleString('en-IN')}`,
                    name === 'investment' ? 'Total Investment' : 'Investment Value'
                  ]}
                  labelFormatter={(label) => `Year ${label}`}
                />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="investment"
                  stackId="1"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.6}
                  name="Total Investment"
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stackId="2"
                  stroke="#10b981"
                  fill="#10b981"
                  fillOpacity={0.8}
                  name="Investment Value"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* GRAPH INSIGHTS - Add affiliate links for investment advice */}
          <div className="mt-8 bg-blue-50 rounded-2xl p-6">
            <h4 className="text-lg font-semibold text-blue-800 mb-3">
              📈 Investment Insights
            </h4>
            <p className="text-blue-700 mb-4">
              Your SIP can potentially grow significantly with consistent investing and compound returns.
            </p>
            {/* AFFILIATE LINK - Financial advisor or investment guide */}
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Professional Investment Advice →
            </button>
          </div>
        </div>
      </section>

      {/* TIPS / HOW IT WORKS SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              SIP Investment Tips
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Maximize your SIP returns with these expert strategies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* TIP CARD 1 - Add affiliate link for investment courses */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-green-600 text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Start Early, Stay Consistent
              </h3>
              <p className="text-gray-600 mb-6 text-center">
                The power of compounding works best when you start early and maintain regular investments.
              </p>
              {/* AFFILIATE LINK - Investment education or courses */}
              <button className="w-full bg-green-100 text-green-700 py-3 rounded-lg font-semibold hover:bg-green-200 transition-colors">
                Learn Investment Basics →
              </button>
            </div>

            {/* TIP CARD 2 - Add affiliate link for portfolio management */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-blue-600 text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Diversify Your Portfolio
              </h3>
              <p className="text-gray-600 mb-6 text-center">
                Spread your investments across different asset classes to reduce risk and optimize returns.
              </p>
              {/* AFFILIATE LINK - Portfolio management tools */}
              <button className="w-full bg-blue-100 text-blue-700 py-3 rounded-lg font-semibold hover:bg-blue-200 transition-colors">
                Explore Portfolio Tools →
              </button>
            </div>

            {/* TIP CARD 3 - Add affiliate link for mutual funds */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-purple-600 text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Choose Right Mutual Funds
              </h3>
              <p className="text-gray-600 mb-6 text-center">
                Select high-performing mutual funds that align with your financial goals and risk appetite.
              </p>
              {/* AFFILIATE LINK - Mutual fund platforms */}
              <button className="w-full bg-purple-100 text-purple-700 py-3 rounded-lg font-semibold hover:bg-purple-200 transition-colors">
                Find Best Mutual Funds →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER / LEAD CAPTURE SECTION */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get Expert Investment Tips
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Subscribe to receive weekly SIP strategies, market insights, and exclusive investment opportunities
          </p>
          
          {/* LEAD CAPTURE FORM - Connect to your email service provider */}
          <form className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 shadow-lg"
                required
              />
              {/* FORM SUBMISSION - Connect to your email service */}
              <button
                type="submit"
                className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Subscribe Free
              </button>
            </div>
            <p className="text-indigo-200 text-sm mt-4">
              Join 10,000+ investors. No spam, unsubscribe anytime.
            </p>
          </form>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* BRAND COLUMN */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">SIP Calculator Hub</h3>
              <p className="text-gray-400 mb-6">
                Your trusted partner for SIP calculations and investment planning. 
                Make informed decisions with accurate projections and expert insights.
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
                  <span className="text-2xl">💼</span> {/* Replace with actual social icons */}
                </a>
              </div>
            </div>

            {/* QUICK LINKS COLUMN */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Calculators</h4>
              <ul className="space-y-2">
                {/* CALCULATOR NAVIGATION LINKS - Update these URLs */}
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">SIP Calculator</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">SWP Calculator</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Lumpsum Calculator</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">EMI Calculator</a></li>
              </ul>
            </div>

            {/* LEGAL LINKS COLUMN */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                {/* SUPPORT PAGE LINKS - Create and link these pages */}
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Disclaimer</a></li>
              </ul>
            </div>
          </div>

          {/* FOOTER BOTTOM */}
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 SIP Calculator Hub. All rights reserved. 
              {/* AFFILIATE DISCLOSURE LINK - Important for compliance */}
              <a href="#" className="hover:text-white ml-2">Affiliate Disclosure</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}