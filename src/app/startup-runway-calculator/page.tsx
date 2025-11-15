'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Calculator, TrendingUp, Menu, X, Mail, Phone, MapPin, ArrowLeft, Clock, DollarSign } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts'
import Link from 'next/link'
import GifAd from "@/components/GifAd";

export default function StartupRunwayCalculatorPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Startup Runway Calculator state
  const [currentCash, setCurrentCash] = useState('')
  const [monthlyBurnRate, setMonthlyBurnRate] = useState('')
  const [result, setResult] = useState<{
    runwayMonths: number;
    runwayDays: number;
    totalBurn: number;
  } | null>(null)

  // Startup Runway Calculation function
  const calculateRunway = () => {
    const cash = parseFloat(currentCash)
    const burn = parseFloat(monthlyBurnRate)

    if (cash && burn && burn > 0) {
      const runwayMonths = cash / burn
      const runwayDays = Math.floor(runwayMonths * 30.44) // Average days per month
      const totalBurn = cash

      setResult({
        runwayMonths: Math.round(runwayMonths * 100) / 100,
        runwayDays: runwayDays,
        totalBurn: totalBurn
      })
    }
  }

  const resetCalculator = () => {
    setCurrentCash('')
    setMonthlyBurnRate('')
    setResult(null)
  }

  // Prepare chart data - Cash depletion over time
  const chartData = result ? Array.from({ length: Math.min(Math.ceil(result.runwayMonths) + 1, 24) }, (_, i) => {
    const remainingCash = parseFloat(currentCash) - (i * parseFloat(monthlyBurnRate))
    return {
      month: i,
      remainingCash: Math.max(0, remainingCash),
      burnAmount: i * parseFloat(monthlyBurnRate)
    }
  }) : []

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo Section */}
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
                  <Image
                    src="/logo.png"
                    alt="SIP Calculator Pro logo banner"
                    width={120}
                    height={40}
                    className="h-10 w-auto rounded shadow"
                  />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">SIP Calculator Pro</h1>
                  <p className="text-xs text-gray-600">Investment Planning Made Easy</p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors pb-2">Home</Link>
              <Link href="/profit-margin-calculator" className="text-gray-700 hover:text-blue-600 transition-colors pb-2">Profit Margin</Link>
              <Link href="/startup-runway-calculator" className="text-blue-600 font-medium border-b-2 border-blue-600 pb-2">Startup Runway</Link>
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
                <Link href="/" className="text-gray-700">Home</Link>
                <Link href="/profit-margin-calculator" className="text-gray-700">Profit Margin</Link>
                <Link href="/startup-runway-calculator" className="text-blue-600 font-medium">Startup Runway</Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Link>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Startup Runway{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Calculator
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Calculate how long your startup can operate with current funding. Plan your burn rate and know when you need to raise more capital.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start Calculating
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Unit 1: Custom Banner after Hero */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <a href="https://manychat.partnerlinks.io/c08p8qna3uyj" target="_blank" rel="noopener noreferrer">
              <Image
                src="/RET-AD2-1200X1200PX -  IG Broadcast Channel.png"
                alt="Custom Ad Banner 1"
                width={728}
                height={90}
                className="mx-auto rounded-lg shadow-md"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Startup Runway Calculator Section */}
      <section id="calculator" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Startup Runway Calculator
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enter your current cash position and monthly burn rate to calculate how many months your startup can operate.
            </p>
          </div>

          {/* Ad Unit 2: GIF Ad after Calculator Title */}
          <div className="mb-16">
            <GifAd gifSrc="/path-to-your-gif.gif" link="https://manychat.partnerlinks.io/c08p8qna3uyj" altText="ManyChat Ad" />
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 lg:p-12 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* Calculator Input Form */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">Financial Details</h3>

                  {/* Current Cash */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Cash Available (₹)
                    </label>
                    <input
                      type="number"
                      value={currentCash}
                      onChange={(e) => setCurrentCash(e.target.value)}
                      placeholder="Enter current cash position"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                    />
                  </div>

                  {/* Monthly Burn Rate */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Monthly Burn Rate (₹)
                    </label>
                    <input
                      type="number"
                      value={monthlyBurnRate}
                      onChange={(e) => setMonthlyBurnRate(e.target.value)}
                      placeholder="Enter monthly expenses"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button
                      onClick={calculateRunway}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                    >
                      <Clock className="h-5 w-5" />
                      <span>Calculate Runway</span>
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">Runway Analysis</h3>

                  {result ? (
                    <div className="space-y-6">
                      {/* Runway Months */}
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                        <div className="text-sm text-blue-600 font-medium mb-1">Runway Duration</div>
                        <div className="text-3xl font-bold text-blue-700">
                          {result.runwayMonths.toFixed(1)} months
                        </div>
                        <div className="text-sm text-blue-600 mt-1">
                          Approximately {result.runwayDays} days
                        </div>
                      </div>

                      {/* Status */}
                      <div className={`rounded-xl p-6 border ${result.runwayMonths >= 12 ? 'bg-green-50 border-green-200' : result.runwayMonths >= 6 ? 'bg-yellow-50 border-yellow-200' : 'bg-red-50 border-red-200'}`}>
                        <div className={`text-sm font-medium mb-1 ${result.runwayMonths >= 12 ? 'text-green-600' : result.runwayMonths >= 6 ? 'text-yellow-600' : 'text-red-600'}`}>
                          Status
                        </div>
                        <div className={`text-xl font-bold ${result.runwayMonths >= 12 ? 'text-green-700' : result.runwayMonths >= 6 ? 'text-yellow-600' : 'text-red-700'}`}>
                          {result.runwayMonths >= 12 ? 'Healthy Runway' : result.runwayMonths >= 6 ? 'Monitor Closely' : 'Critical - Raise Funds'}
                        </div>
                      </div>

                      {/* Total Burn */}
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                        <div className="text-sm text-purple-600 font-medium mb-1">Total Available Funds</div>
                        <div className="text-2xl font-bold text-purple-700">
                          ₹{result.totalBurn.toLocaleString('en-IN')}
                        </div>
                      </div>

                      {/* Cash Depletion Chart */}
                      <div className="mt-8">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">Cash Depletion Over Time</h4>
                        <ResponsiveContainer width="100%" height={300}>
                          <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis
                              dataKey="month"
                              label={{ value: 'Months', position: 'insideBottom', offset: -5 }}
                            />
                            <YAxis
                              label={{ value: 'Cash (₹)', angle: -90, position: 'insideLeft' }}
                            />
                            <Tooltip
                              formatter={(value, name) => [
                                `₹${Number(value).toLocaleString('en-IN')}`,
                                name === 'remainingCash' ? 'Remaining Cash' : 'Total Burn'
                              ]}
                            />
                            <Legend />
                            <Line
                              type="monotone"
                              dataKey="remainingCash"
                              stroke="#3b82f6"
                              strokeWidth={3}
                              name="Remaining Cash"
                              dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="bg-gray-100 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                        <DollarSign className="h-8 w-8 text-gray-400" />
                      </div>
                      <p className="text-gray-500 text-lg">
                        Enter your financial details and click "Calculate Runway" to see your startup's runway analysis.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Unit 3: Before Footer */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <a href="https://manychat.partnerlinks.io/c08p8qna3uyj" target="_blank" rel="noopener noreferrer">
              <Image
                src="/COLD-AD1-960x1200PX - IG DMs.png"
                alt="Custom Ad Banner 3"
                width={300}
                height={250}
                className="mx-auto rounded-lg shadow-md"
              />
            </a>
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
                Empowering investors with accurate SIP calculations and comprehensive investment planning tools.
                Make informed financial decisions with our advanced calculator.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-blue-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-blue-400" />
                  <span>info@sipcalculator.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-blue-400" />
                  <span>New York, NY 10001</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/profit-margin-calculator" className="text-gray-300 hover:text-white transition-colors">Profit Margin Calculator</Link></li>
                <li><Link href="/startup-runway-calculator" className="text-gray-300 hover:text-white transition-colors">Startup Runway Calculator</Link></li>
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
              © 2025 SIP Calculator . All rights reserved.
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
