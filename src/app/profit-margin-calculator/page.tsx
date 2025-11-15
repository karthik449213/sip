'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Calculator, TrendingUp, Menu, X, Mail, Phone, MapPin, ArrowLeft } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import Link from 'next/link'


export default function ProfitMarginCalculatorPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Profit Margin Calculator state
  const [costPrice, setCostPrice] = useState('')
  const [sellingPrice, setSellingPrice] = useState('')
  const [expenses, setExpenses] = useState('')
  const [result, setResult] = useState<{
    grossProfit: number;
    grossMargin: number;
    netProfit: number;
    netMargin: number;
  } | null>(null)

  // Profit Margin Calculation function
  const calculateProfitMargin = () => {
    const cp = parseFloat(costPrice)
    const sp = parseFloat(sellingPrice)
    const exp = parseFloat(expenses) || 0

    if (cp && sp) {
      const grossProfit = sp - cp
      const grossMargin = (grossProfit / sp) * 100
      const netProfit = grossProfit - exp
      const netMargin = (netProfit / sp) * 100

      setResult({
        grossProfit: Math.round(grossProfit * 100) / 100,
        grossMargin: Math.round(grossMargin * 100) / 100,
        netProfit: Math.round(netProfit * 100) / 100,
        netMargin: Math.round(netMargin * 100) / 100
      })
    }
  }

  const resetCalculator = () => {
    setCostPrice('')
    setSellingPrice('')
    setExpenses('')
    setResult(null)
  }

  // Prepare chart data
  const barChartData = result ? [
    {
      name: 'Cost Price',
      amount: parseFloat(costPrice),
      color: '#ef4444'
    },
    {
      name: 'Gross Profit',
      amount: result.grossProfit,
      color: '#f59e0b'
    },
    {
      name: 'Expenses',
      amount: parseFloat(expenses) || 0,
      color: '#8b5cf6'
    },
    {
      name: 'Net Profit',
      amount: result.netProfit,
      color: '#10b981'
    }
  ] : []

  const pieChartData = result ? [
    { name: 'Cost Price', value: parseFloat(costPrice), color: '#ef4444' },
    { name: 'Gross Profit', value: result.grossProfit, color: '#f59e0b' },
    { name: 'Expenses', value: parseFloat(expenses) || 0, color: '#8b5cf6' }
  ] : []

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
              <Link href="/profit-margin-calculator" className="text-blue-600 font-medium border-b-2 border-blue-600 pb-2">Profit Margin Calculator</Link>
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
                <Link href="/profit-margin-calculator" className="text-blue-600 font-medium">Profit Margin Calculator</Link>
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
              Profit Margin{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Calculator
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Calculate your gross and net profit margins instantly. Make informed pricing decisions and optimize your business profitability with our advanced calculator.
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

      {/* Profit Margin Calculator Section */}
      <section id="calculator" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Calculator Content */}
            <div className="mx-auto max-w-4xl">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Profit Margin Calculator
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Enter your cost price, selling price, and additional expenses to calculate your gross and net profit margins.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-12 lg:p-16 shadow-xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                  {/* Calculator Input Form */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8">Business Details</h3>

                    {/* Cost Price */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Cost Price (₹)
                      </label>
                      <input
                        type="number"
                        value={costPrice}
                        onChange={(e) => setCostPrice(e.target.value)}
                        placeholder="Enter cost price"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                      />
                    </div>

                    {/* Selling Price */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Selling Price (₹)
                      </label>
                      <input
                        type="number"
                        value={sellingPrice}
                        onChange={(e) => setSellingPrice(e.target.value)}
                        placeholder="Enter selling price"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                      />
                    </div>

                    {/* Additional Expenses */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Additional Expenses (₹) <span className="text-gray-500 text-sm">(optional)</span>
                      </label>
                      <input
                        type="number"
                        value={expenses}
                        onChange={(e) => setExpenses(e.target.value)}
                        placeholder="Enter additional expenses"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                      />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <button
                        onClick={calculateProfitMargin}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                      >
                        <TrendingUp className="h-5 w-5" />
                        <span>Calculate Margin</span>
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
                    <h3 className="text-2xl font-bold text-gray-900 mb-8">Profit Analysis</h3>

                    {result ? (
                      <div className="space-y-6">
                        {/* Gross Profit */}
                        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-200">
                          <div className="text-sm text-orange-600 font-medium mb-1">Gross Profit</div>
                          <div className="text-3xl font-bold text-orange-700">
                            ₹{result.grossProfit.toLocaleString('en-IN')}
                          </div>
                          <div className="text-sm text-orange-600 mt-1">
                            Gross Margin: {result.grossMargin.toFixed(2)}%
                          </div>
                        </div>

                        {/* Net Profit */}
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                          <div className="text-sm text-green-600 font-medium mb-1">Net Profit</div>
                          <div className="text-3xl font-bold text-green-700">
                            ₹{result.netProfit.toLocaleString('en-IN')}
                          </div>
                          <div className="text-sm text-green-600 mt-1">
                            Net Margin: {result.netMargin.toFixed(2)}%
                          </div>
                        </div>

                        {/* Additional Info */}
                        <div className="bg-gray-50 rounded-xl p-6 text-center">
                          <div className="text-sm text-gray-600 mb-2">Profitability Status</div>
                          <div className="text-xl font-bold text-gray-800">
                            {result.netProfit > 0 ? 'Profitable' : result.netProfit === 0 ? 'Break-Even' : 'Loss'}
                          </div>
                        </div>

                        {/* Bar Chart */}
                        <div className="mt-8">
                          <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">Profit Breakdown</h4>
                          <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={barChartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="name" />
                              <YAxis />
                              <Tooltip formatter={(value) => [`₹${Number(value).toLocaleString('en-IN')}`, 'Amount']} />
                              <Legend />
                              <Bar dataKey="amount" fill="#3b82f6" />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>

                        {/* Pie Chart */}
                        <div className="mt-8">
                          <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">Cost vs Profit Distribution</h4>
                          <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                              <Pie
                                data={pieChartData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={({ name, percent }) => `${name} ${(percent as number * 100).toFixed(0)}%`}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                              >
                                {pieChartData.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                              </Pie>
                              <Tooltip formatter={(value) => [`₹${Number(value).toLocaleString('en-IN')}`, 'Amount']} />
                            </PieChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <div className="bg-gray-100 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                          <Calculator className="h-8 w-8 text-gray-400" />
                        </div>
                        <p className="text-gray-500 text-lg">
                          Enter your business details and click Calculate Margin to see your profit analysis.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
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
