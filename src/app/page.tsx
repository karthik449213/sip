import React from 'react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Main headline - Edit this for your brand */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Financial Calculator Hub
            </h1>
            
            {/* Subtitle - Edit this description */}
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Discover powerful financial calculators to make smarter money decisions. 
              From loans to investments, we've got you covered.
            </p>
            
            {/* PRIMARY CTA BUTTON - Insert main affiliate link or lead magnet here */}
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started Free
            </button>
          </div>
        </div>
      </section>

      {/* FEATURED CALCULATORS SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Calculators
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our most popular financial calculators
            </p>
          </div>

          {/* Calculator cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* CALCULATOR CARD 1 - Mortgage Calculator */}
            <div className="calculator-card bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition-all border border-blue-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Mortgage Calculator</h3>
              <p className="text-gray-600 mb-4">Calculate monthly payments and total interest</p>
              <a className='' href='/sip-calculator'>
              {/* AFFILIATE LINK PLACEHOLDER - Replace href with your affiliate link */}
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Try Calculator
              </button>
              
              </a>
            </div>

            {/* CALCULATOR CARD 2 - Insert affiliate link for loan calculator */}
            <div className="calculator-card bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition-all border border-green-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-green-600 text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Loan Calculator</h3>
              <p className="text-gray-600 mb-4">Plan your personal or auto loan payments</p>
              {/* AFFILIATE LINK PLACEHOLDER - Replace href with your affiliate link */}
              <a href='/lumpsum-calculator' className=''>
              <button className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
                Try Calculator
              </button>
              
              </a>
            </div>

            {/* CALCULATOR CARD 3 - Insert affiliate link for investment calculator */}
            <div className="calculator-card bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition-all border border-purple-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-600 text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Investment Calculator</h3>
              <p className="text-gray-600 mb-4">Project your investment growth over time</p>
              {/* AFFILIATE LINK PLACEHOLDER - Replace href with your affiliate link */}
              <a href='/goal-sip-calculator' className=''>
              <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
                Try Calculator
              </button>
              
              </a>
            </div>

            {/* CALCULATOR CARD 4 - Insert affiliate link for retirement calculator */}
            <div className="calculator-card bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition-all border border-orange-100">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-orange-600 text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Retirement Calculator</h3>
              <p className="text-gray-600 mb-4">Plan for your retirement savings goals</p>
              {/* AFFILIATE LINK PLACEHOLDER - Replace href with your affiliate link */}
              <a href='/retirement-calculator' className=''>
              <button className="w-full bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors">
                Try Calculator
              </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get accurate financial calculations in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* STEP 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose Your Calculator</h3>
              <p className="text-gray-600">
                Select from our comprehensive library of financial calculators tailored to your needs
              </p>
            </div>

            {/* STEP 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Enter Your Information</h3>
              <p className="text-gray-600">
                Input your financial details using our user-friendly interface with helpful guidance
              </p>
            </div>

            {/* STEP 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Instant Results</h3>
              <p className="text-gray-600">
                Receive accurate calculations and actionable insights to make informed decisions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG/RESOURCES SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Financial Insights
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay informed with our expert financial advice and tips
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* BLOG POST 1 - Replace with actual blog links */}
            <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  5 Tips for Better Mortgage Planning
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn how to optimize your mortgage strategy and save thousands on interest payments.
                </p>
                {/* BLOG LINK PLACEHOLDER - Replace with actual blog post URL */}
                <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Read More →
                </a>
              </div>
            </article>

            {/* BLOG POST 2 - Replace with actual blog links */}
            <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-r from-green-400 to-green-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Investment Basics for Beginners
                </h3>
                <p className="text-gray-600 mb-4">
                  Start your investment journey with these fundamental principles and strategies.
                </p>
                {/* BLOG LINK PLACEHOLDER - Replace with actual blog post URL */}
                <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Read More →
                </a>
              </div>
            </article>

            {/* BLOG POST 3 - Replace with actual blog links */}
            <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-r from-purple-400 to-purple-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Retirement Planning Mistakes to Avoid
                </h3>
                <p className="text-gray-600 mb-4">
                  Common pitfalls that could derail your retirement plans and how to avoid them.
                </p>
                {/* BLOG LINK PLACEHOLDER - Replace with actual blog post URL */}
                <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Read More →
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* NEWSLETTER/LEAD CAPTURE SECTION */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated with Financial Tips
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get weekly insights, calculator updates, and exclusive financial advice delivered to your inbox
          </p>
          
          {/* LEAD CAPTURE FORM - Connect to your email service provider */}
          <form className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
              {/* FORM SUBMISSION - Connect to your email service */}
              <button
                type="submit"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                Subscribe Now
              </button>
            </div>
            <p className="text-blue-200 text-sm mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
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
  );
}