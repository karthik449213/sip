// app/page.tsx
'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Calculator,TrendingUp, Menu, X, Mail, Phone, MapPin } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import GifAd from "@/components/GifAd";
import VideoAd from "@/components/VideoAd";
export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  // SIP Calculator state
  const [monthlyAmount, setMonthlyAmount] = useState('')
  const [tenure, setTenure] = useState('')
  const [expectedReturn, setExpectedReturn] = useState('')
  const [result, setResult] = useState<{
    maturityAmount: number;
    totalInvestment: number;
    totalGains: number;
  } | null>(null)

  // SIP Calculation function
  const calculateSIP = () => {
    const P = parseFloat(monthlyAmount)
    const r = parseFloat(expectedReturn) / 100 / 12 // Monthly rate
    const n = parseFloat(tenure) * 12 // Total months
    
    if (P && r && n) {
      // SIP Formula: M = P × ({[1 + r]^n - 1} / r) × (1 + r)
      const maturityAmount = P * (((Math.pow(1 + r, n) - 1) / r) * (1 + r))
      const totalInvestment = P * n
      const totalGains = maturityAmount - totalInvestment
      
      setResult({
        maturityAmount: Math.round(maturityAmount),
        totalInvestment: Math.round(totalInvestment),
        totalGains: Math.round(totalGains)
      })
    }
  }

  const resetCalculator = () => {
    setMonthlyAmount('')
    setTenure('')
    setExpectedReturn('')
    setResult(null)
  }

  // Prepare chart data
  const chartData = result ? [
    {
      name: 'Total Investment',
      amount: result.totalInvestment,
      color: '#3b82f6'
    },
    {
      name: 'Total Gains',
      amount: result.totalGains,
      color: '#8b5cf6'
    },
    {
      name: 'Maturity Amount',
      amount: result.maturityAmount,
      color: '#10b981'
    }
  ] : []

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Merged Header & Navbar */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo Section - Image Holder */}
            <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
                {/* Logo Banner from public folder */}
                <Image 
                  src="/logo.png" 
                  alt="SIP Calculator Pro logo banner showing calculator icon and bold text SIP Calculator Pro on a blue and indigo gradient background, conveying trust and professionalism" 
                  width={120} 
                  height={40} 
                  className="h-10 w-auto rounded shadow" 
                />
                 
                </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">SIP Calculator Pro</h1>
                <p className="text-xs text-gray-600">Investment Planning Made Easy</p>
              </div>
              
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-blue-600 font-medium border-b-2 border-blue-600 pb-2">Home</a>
              <a href="#calculator" className="text-gray-700 hover:text-blue-600 transition-colors pb-2">Calculator</a>
              <a href="/profit-margin-calculator" className="text-gray-700 hover:text-blue-600 transition-colors pb-2">Profit Margin</a>
              <a href="/startup-runway-calculator" className="text-gray-700 hover:text-blue-600 transition-colors pb-2">Startup Runway</a>
            </div>

            {/* Mobile Contact Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 transition-colors p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Open menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-blue-600 font-medium">Home</a>
                <a href="#calculator" className="text-gray-700">Calculator</a>
                <a href="/profit-margin-calculator" className="text-gray-700">Profit Margin</a>
                <a href="/startup-runway-calculator" className="text-gray-700">Startup Runway</a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Main Heading - H1 for SEO */}
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Calculate Your{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                SIP Returns
              </span>
              <br />
              Plan Your Future
            </h1>

            {/* Hero Description - SEO friendly */}
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              {/* INSERT YOUR HERO DESCRIPTION - Focus on benefits and keywords */}
              Discover the power of Systematic Investment Plans with our advanced calculator. 
              Make informed investment decisions and achieve your financial goals with precision.
            </p>

            {/* Hero Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">10,000+</div>
                <div className="text-gray-600">Calculations Done</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">₹50Cr+</div>
                <div className="text-gray-600">Investment Planned</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600">99.9%</div>
                <div className="text-gray-600">Accuracy Rate</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start Calculating Now
              </button>
              <button 
               onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                Learn More {/* INSERT LEARN MORE LINK */}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Unit 1: Custom Banner after Hero */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <a href="https://try.elevenlabs.io/u17m47p67o8u" target="_blank" rel="noopener noreferrer">
              <Image
                src="/Lin Personal cover 1584x386-16.png" // Replace with your custom banner image
                alt="Custom Ad Banner 1"
                width={728}
                height={90}
                className="mx-auto rounded-lg shadow-md"
              />
            </a>
          </div>
        </div>
      </section>

      {/* SIP Calculator Section */}
      <section id="calculator" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              SIP Calculator
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {/* INSERT YOUR CALCULATOR DESCRIPTION - SEO optimized */}
              Calculate your Systematic Investment Plan returns with our advanced calculator. 
              Enter your investment details and see how your money can grow over time.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 lg:p-12 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                
                {/* Calculator Input Form */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">Investment Details</h3>
                  
                  {/* Monthly Investment Amount */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Monthly Investment Amount (₹)
                    </label>
                    <input
                      type="number"
                      value={monthlyAmount}
                      onChange={(e) => setMonthlyAmount(e.target.value)}
                      placeholder="Enter monthly SIP amount"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                    />
                  </div>

                  {/* Investment Tenure */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Investment Tenure (Years)
                    </label>
                    <input
                      type="number"
                      value={tenure}
                      onChange={(e) => setTenure(e.target.value)}
                      placeholder="Enter investment period in years"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                    />
                  </div>

                  {/* Expected Annual Return */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expected Annual Return (%)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={expectedReturn}
                      onChange={(e) => setExpectedReturn(e.target.value)}
                      placeholder="Enter expected annual return rate"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button
                      onClick={calculateSIP}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                    >
                      <TrendingUp className="h-5 w-5" />
                      <span>Calculate SIP</span>
                    </button>
                    <button
                      onClick={resetCalculator}
                      className="flex-1 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                    >
                      Reset
                    </button>
                  </div>
                </div>

                {/* Results Display */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">Investment Results</h3>
                  
                  {result ? (
                    <div className="space-y-6">
                      {/* Maturity Amount */}
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                        <div className="text-sm text-green-600 font-medium mb-1">Maturity Amount</div>
                        <div className="text-3xl font-bold text-green-700">
                          ₹{result.maturityAmount.toLocaleString('en-IN')}
                        </div>
                      </div>

                      {/* Total Investment */}
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                        <div className="text-sm text-blue-600 font-medium mb-1">Total Investment</div>
                        <div className="text-2xl font-bold text-blue-700">
                          ₹{result.totalInvestment.toLocaleString('en-IN')}
                        </div>
                      </div>

                      {/* Total Gains */}
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                        <div className="text-sm text-purple-600 font-medium mb-1">Total Gains</div>
                        <div className="text-2xl font-bold text-purple-700">
                          ₹{result.totalGains.toLocaleString('en-IN')}
                        </div>
                      </div>

                      {/* Additional Info */}
                      <div className="bg-gray-50 rounded-xl p-6 text-center">
                        <div className="text-sm text-gray-600 mb-2">Return on Investment</div>
                        <div className="text-xl font-bold text-gray-800">
                          {((result.totalGains / result.totalInvestment) * 100).toFixed(1)}%
                        </div>
                      </div>

                      {/* Bar Chart */}
                      <div className="mt-8">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">Investment Breakdown</h4>
                        <ResponsiveContainer width="100%" height={300}>
                          <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip formatter={(value) => [`₹${value.toLocaleString('en-IN')}`, 'Amount']} />
                            <Legend />
                            <Bar dataKey="amount" fill="#3b82f6" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="bg-gray-100 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                        <Calculator className="h-8 w-8 text-gray-400" />
                      </div>
                      <p className="text-gray-500 text-lg">
                        Enter your investment details and click &quot;Calculate SIP&quot; to see your potential returns.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Unit 2: Video Ad and GIF Ads after Calculator */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center space-x-4 mb-4">
              <VideoAd
                videoSrc="/Video-follow-to-dm-for-you.mp4"
                link="https://try.elevenlabs.io/u17m47p67o8u"
                altText="Video Ad: Follow to DM for you"
                width={300}
                height="auto"
              />
            </div>
            <div className="flex justify-center space-x-4">
              <GifAd
                gifSrc="/GIF-follow-to-dm-for-them.gif"
                link="https://try.elevenlabs.io/u17m47p67o8u"
                altText="Follow to DM for them"
                width={300}
                height="auto"
              />
              <GifAd
                gifSrc="/GIF-follow-to-dm-for-you.gif"
                link="https://try.elevenlabs.io/u17m47p67o8u"
                altText="Follow to DM for you"
                width={300}
                height="auto"
              />
            </div>
            <p className="mt-2 text-sm text-gray-600">Sponsored: Best Investment Tools</p>
          </div>
        </div>
      </section>

      {/* Features/Benefits Section */}
      <section className="py-20 bg-gray-50" id="benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our SIP Calculator?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {/* INSERT YOUR BENEFITS DESCRIPTION */}
              Discover the advantages of using our advanced SIP calculator for your investment planning needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Calculator className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Accurate Calculations</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {/* INSERT FEATURE 1 DESCRIPTION */}
                Get precise SIP calculations using advanced financial formulas. Our calculator ensures 99.9% accuracy for reliable investment planning.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Easy to Use</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {/* INSERT FEATURE 2 DESCRIPTION */}
                Simple and intuitive interface that anyone can use. No complex financial knowledge required - just enter your details and get instant results.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Phone className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Mobile Friendly</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {/* INSERT FEATURE 3 DESCRIPTION */}
                Responsive design that works perfectly on all devices. Calculate your SIP returns anywhere, anytime from your smartphone or tablet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Unit 3: Custom Banner before Footer */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <a href="https://try.elevenlabs.io/u17m47p67o8u" target="_blank" rel="noopener noreferrer">
              <Image
                src="/RET-AD2-1200X1200PX -  IG Broadcast Channel.png" // Replace with your custom banner image
                alt="Custom Ad Banner 3"
                width={728}
                height={90}
                className="mx-auto rounded-lg shadow-md"
              />
            </a>
          </div>
        </div>
      </section>
      {/* Benefits of SIP Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50" id="benefits-sip">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits of SIP (Systematic Investment Plan)
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A Systematic Investment Plan (SIP) allows you to invest a fixed amount regularly in mutual funds, helping you build long-term wealth with discipline and convenience. Below are some of the major advantages:
            </p>
          </div>

          {/* Ad Unit: Banner after intro */}
          <div className="mb-12">
            <div className="text-center">
              <a href="https://manychat.partnerlinks.io/c08p8qna3uyj" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/COLD-AD2-960  x 1200 -  Lead Generation.png"
                  alt="Custom Ad Banner for SIP Benefits"
                  width={728}
                  height={90}
                  className="mx-auto rounded-lg shadow-md"
                />
              </a>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-12">
              <li><strong>Rupee Cost Averaging:</strong> You buy more units when prices are low and fewer when prices are high, reducing the overall cost of investment.</li>
              <li><strong>Power of Compounding:</strong> Long-term SIPs allow your gains to generate additional returns, significantly growing your wealth over time.</li>
              <li><strong>Low Entry Barrier:</strong> Start your investment journey with as little as ₹500 per month—ideal for beginners.</li>
              <li><strong>Disciplined Saving Habit:</strong> Automated monthly investments keep you consistent and prevent impulsive financial decisions.</li>
              <li><strong>Flexible & Convenient:</strong> You can increase, pause, or stop SIPs anytime based on your financial goals.</li>
              <li><strong>Better Risk Management:</strong> SIPs reduce the impact of market volatility since investments are spread over time.</li>
            </ul>

            {/* Ad Unit: Two GIF Ads after benefits list */}
            <div className="mb-12">
              <div className="text-center">
                <div className="flex justify-center space-x-4">
                  <GifAd
                    gifSrc="/GIF-follow-to-dm-for-them.gif"
                    link="https://manychat.partnerlinks.io/1cs5r40j5vyo-ogcg6e"
                    altText="Follow to DM for them"
                    width={300}
                    height="auto"
                  />
                  <GifAd
                    gifSrc="/GIF-follow-to-dm-for-you.gif"
                    link="https://manychat.partnerlinks.io/1cs5r40j5vyo-ogcg6e"
                    altText="Follow to DM for you"
                    width={300}
                    height="auto"
                  />
                </div>
                <p className="mt-2 text-sm text-gray-600">Sponsored: Best Investment Tools</p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
              SIP Tips & Smart Investment Tricks
            </h3>

            <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-12">
              <li><strong>Start Early:</strong> Even small SIPs started early can beat larger late investments due to compounding.</li>
              <li><strong>Increase SIP Annually:</strong> Use a Step-Up SIP to boost your contributions as your income grows.</li>
              <li><strong>Link SIPs to Goals:</strong> Retirement, education, emergency fund—assign a purpose to each SIP.</li>
              <li><strong>Avoid Frequent Stopping:</strong> Market dips are the best time to continue your SIP, not stop it.</li>
              <li><strong>Review Funds Twice a Year:</strong> Track performance but avoid unnecessary switching.</li>
              <li><strong>Diversify Wisely:</strong> Combine equity, debt, and hybrid SIPs based on your risk appetite.</li>
            </ul>

            <div className="bg-white mt-10 p-6 rounded-lg shadow-sm border">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Pro Tip</h4>
              <p className="text-gray-700">
                Combine SIPs with an emergency fund and term insurance for a complete financial safety net.
              </p>
            </div>
          </div>
        </div>
  </section>

      {/* Business & Startup Calculators Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Business & Startup Calculators
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Make smarter business decisions with our free financial calculators. From profit margins to break-even analysis, get instant insights to grow your startup or optimize your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Profit Margin Calculator
              </h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Calculate your gross and net profit margins to understand your business profitability. Essential for pricing strategy and financial planning.
              </p>
              <a href="/profit-margin-calculator" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 inline-block text-center">
                Calculate Now
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                GST Calculator
              </h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Quickly calculate GST on your products and services. Add or remove GST from any amount with support for multiple tax rates.
              </p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                Calculate Now
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                ROI Calculator
              </h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Measure the return on your investments and marketing campaigns. Compare different investment options and make data-driven decisions.
              </p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                Calculate Now
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Break-Even Calculator
              </h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Determine how many units you need to sell to cover your costs. Perfect for pricing decisions and financial forecasting for startups.
              </p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                Calculate Now
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Freelancer Rate Calculator
              </h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Calculate your ideal hourly or project rate based on your desired income, expenses, and billable hours. Price your services confidently.
              </p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                Calculate Now
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Startup Runway Calculator
              </h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Calculate how long your startup can operate with current funding. Plan your burn rate and know when you need to raise more capital.
              </p>
              <Link href="/startup-runway-calculator" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 inline-block text-center">
                Calculate Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
                  <Calculator className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">SIP Calculator Pro</h3>
                  <p className="text-sm text-gray-400">Investment Planning Made Easy</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {/* INSERT YOUR COMPANY DESCRIPTION */}
                Empowering investors with accurate SIP calculations and comprehensive investment planning tools. 
                Make informed financial decisions with our advanced calculator.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-blue-400" />
                  <span>+1 (555) 123-4567</span> {/* INSERT YOUR PHONE */}
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-blue-400" />
                  <span>info@sipcalculator.com</span> {/* INSERT YOUR EMAIL */}
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-blue-400" />
                  <span>New York, NY 10001</span> {/* INSERT YOUR ADDRESS */}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                <li><a href="#calculator" className="text-gray-300 hover:text-white transition-colors">SIP Calculator</a></li>
                <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
                <li><a href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Resources</h4>
              <ul className="space-y-3">
                <li><a href="/investment-guide" className="text-gray-300 hover:text-white transition-colors">Investment Guide</a></li>
                <li><a href="/sip-benefits" className="text-gray-300 hover:text-white transition-colors">SIP Benefits</a></li>
                <li><a href="/mutual-funds" className="text-gray-300 hover:text-white transition-colors">Mutual Funds</a></li>
                <li><a href="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2025 SIP Calculator . All rights reserved. {/* INSERT YOUR COPYRIGHT */}
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
