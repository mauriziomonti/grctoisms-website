/**
 * Privacy Policy Page - grctoisms Consulting Website
 * 
 * Design Philosophy: Warm Contemporary Consulting
 * - Matches the primary website design with soft forest green accents
 * - Clean, readable layout with proper typography hierarchy
 * - Accessible content structure with clear sections
 */

import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header Navigation */}
      <header className="bg-white border-b border-border shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img src="/images/grctoisms-logo.png" alt="grctoisms" className="h-40 w-auto" />
          </a>
          <a className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
            GRCtoISMS
          </a>
          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/about"
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              About
            </a>
            <a
              href="/testimonials"
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Get in Touch
            </a>
          </div>


        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 md:py-16">
          {/* Content Container */}
          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-border">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-sm text-muted-foreground mb-8">
              Last Updated: December 3, 2025
            </p>

            {/* Section 1 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">
                1. Data Controller
              </h2>
              <p className="text-foreground leading-relaxed">
                grctoisms.com, acting as advisory consultant.
              </p>
            </section>

            {/* Section 2 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">
                2. Information Collected
              </h2>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>Business contact details</li>
                <li>Processing activity information (for advisory purposes)</li>
                <li>Communication records</li>
                <li>Training attendance data</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">
                3. Lawful Basis
              </h2>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>Contract: Delivering DPO services</li>
                <li>Legitimate interests: Client compliance support</li>
                <li>Legal obligation: DPO statutory duties</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">
                4. Security Measures
              </h2>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>End-to-end encryption</li>
                <li>UK/EU data centres</li>
                <li>Access controls & audit logs</li>
                <li>Regular security training</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">
                5. Your Rights
              </h2>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>Access, rectification, erasure</li>
                <li>Restriction, portability</li>
                <li>Object to processing</li>
                <li>
                  <a
                    href="https://ico.org.uk/make-a-complaint/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors duration-200 underline"
                  >
                    Complain to ICO
                  </a>
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">
                6. Advisory Limitations
              </h2>
              <div className="bg-accent/10 border-l-4 border-secondary p-6 rounded-lg">
                <p className="font-semibold text-foreground mb-2">
                  We advise only.
                </p>
                <p className="text-foreground">
                  Client retains full operational responsibility for implementation and compliance decisions.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">
                7. AI Usage
              </h2>
              <p className="text-foreground leading-relaxed">
                AI tools used for analysis only. Client data never trains models. All outputs human-reviewed.
              </p>
            </section>

            {/* Section 8 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">
                8. Contact
              </h2>
              <p className="text-foreground leading-relaxed">
                For privacy queries:{" "}
                <a
                  href="mailto:contact@grctoisms.com"
                  className="text-primary hover:text-primary/80 transition-colors duration-200 underline"
                >
                  contact@grctoisms.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-white mt-auto">
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
                className="text-sm md:text-base hover:text-accent transition-colors duration-200"
              >
                Terms of Service
              </a>
              <span className="text-gray-400">|</span>
              <a
                href="/privacy"
                className="text-sm md:text-base hover:text-accent transition-colors duration-200"
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
