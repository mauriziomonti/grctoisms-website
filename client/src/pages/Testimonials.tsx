/*
 * Home Page - grctoisms Consulting Website
 * 
 * Design Philosophy: Warm Contemporary Consulting
 * - Soft forest green primary color (#3D7B5F)
 * - Rounded corners and soft shadows for approachable feel
 * - Organic, flowing layouts with generous whitespace
 * - Warm color accents (coral, mauve, sky blue)
 * - Humanist typography with Outfit headlines and Open Sans body
 */

import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header Navigation */}
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img src="/images/grctoisms-logo.png" alt="grctoisms" className="h-40 w-auto" />
          </a>
          
          {/* Logo Text */}
          <a className="text-3xl md:text-4xl font-bold text-center text-gray-800">
            GRCtoISMS
          </a>   
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/about"
              className="text-gray-800 hover:text-green-700 transition-colors duration-200 font-medium"
            >
              About
            </a>
            <a
              href="/testimonials"
              className="text-gray-800 hover:text-green-700 transition-colors duration-200 font-medium"
            >
              Testimonials
            </a>
            <a
              href="/contact"
              className="text-gray-800 hover:text-green-700 transition-colors duration-200 font-medium"
            >
              Get in Touch
            </a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Information Security planning for peace of mind.
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Professional consulting services tailored to your unique needs. We bring expertise, innovation, and dedication to every project.
              </p>
              <div className="flex gap-4">
                <Button className="bg-green-700 hover:bg-green-800 text-white rounded-lg px-8 py-3 transition-all duration-200 transform hover:scale-105">
                  Learn More
                </Button>
                <Button
                  variant="outline"
                  className="border-green-700 text-green-700 hover:bg-green-50 rounded-lg px-8 py-3 transition-all duration-200"
                >
                  Explore Services
                </Button>
              </div>
            </div>

            {/* Right: Visual Element */}
            <div className="bg-gradient-to-br from-blue-100 to-orange-100 rounded-3xl h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">✨</div>
                <p className="text-gray-600 font-medium">Visual Element</p>
              </div>
            </div>
          </div>
        </section>

        {/* Four Service Boxes Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
              Our Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Box 1 - Starter */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200">
                <div className="bg-blue-100 rounded-xl h-24 mb-6 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-gray-900">Starter</h3>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
                <p className="text-gray-600 leading-relaxed">
                  Discover how our consulting services can transform your business and drive meaningful results.
                </p>
              </div>

              {/* Box 2 - Growth */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200">
                <div className="bg-orange-100 rounded-xl h-24 mb-6 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-gray-900">Growth</h3>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Growth</h3>
                <p className="text-gray-600 leading-relaxed">
                  Strategic planning and execution to help you achieve your business goals with precision.
                </p>
              </div>

              {/* Box 3 - Advanced */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200">
                <div className="bg-purple-100 rounded-xl h-24 mb-6 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-gray-900">Advanced</h3>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced</h3>
                <p className="text-gray-600 leading-relaxed">
                  Innovative solutions designed to address your unique challenges and opportunities.
                </p>
              </div>

              {/* Box 4 - Fractional */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200">
                <div className="bg-pink-100 rounded-xl h-24 mb-6 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-gray-900">Fractional</h3>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Fractional security and privacy</h3>
                <p className="text-gray-600 leading-relaxed">
                  Accelerate your growth with our proven methodologies and expert guidance.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-auto">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left: Copyright */}
            <div>
              <p className="text-sm md:text-base">
                © 2025 grctoisms.com. All rights reserved.
              </p>
            </div>

            {/* Right: Links */}
            <div className="flex items-center gap-6">
              <a
                href="/terms"
                className="text-sm md:text-base hover:text-blue-400 transition-colors duration-200"
              >
                Terms of Service
              </a>
              <span className="text-gray-500">|</span>
              <a
                href="/privacy"
                className="text-sm md:text-base hover:text-blue-400 transition-colors duration-200"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
