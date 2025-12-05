/**
 * Terms of Service Page - grctoisms Consulting Website
 * 
 * Design Philosophy: Warm Contemporary Consulting
 * - Matches the primary website design with soft forest green accents
 * - Clean, readable layout with proper typography hierarchy
 * - Accessible content structure with clear sections
 */

import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header Navigation */}
      <header className="bg-white border-b border-border shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img src="/images/grctoisms-logo.png" alt="grctoisms" className="h-12 w-auto" />
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/">
              <a className="text-foreground hover:text-primary transition-colors duration-200 font-medium">
                Home
              </a>
            </Link>
            <a
              href="#about"
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              About Me
            </a>
            <a
              href="#pricing"
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Pricing packages
            </a>
            <a
              href="#testimonials"
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

          {/* CTA Button */}
          <Button className="bg-primary hover:bg-primary/90 text-white rounded-lg px-6 py-2 transition-all duration-200 transform hover:scale-105">
            Get in Touch
          </Button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 md:py-16">
          {/* Content Container */}
          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-border">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Terms of Service
            </h1>
            <p className="text-sm text-muted-foreground mb-8">
              Last Updated: December 3, 2025
            </p>

            {/* Section 1 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">
                1. Service Overview
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                grctoisms.com provides <strong>advisory-only</strong> Data Protection Officer (DPO) services. We do not make operational decisions or implement compliance measures.
              </p>
            </section>

            {/* Section 2 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">
                2. Scope of Services
              </h2>
              <ul className="list-disc list-inside space-y-2 text-foreground mb-6">
                <li>GDPR/UK GDPR compliance advice</li>
                <li>Data mapping and processing reviews</li>
                <li>DPIA recommendations</li>
                <li>Staff training materials</li>
                <li>Policy templates and guidance</li>
                <li>Breach response advice</li>
                <li>Regulator liaison support</li>
              </ul>
              <div className="bg-accent/10 border-l-4 border-secondary p-6 rounded-lg">
                <p className="font-semibold text-foreground mb-2">EXCLUDED:</p>
                <p className="text-foreground">
                  Operational implementation, IT security fixes, legal representation, decision-making.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">
                3. Client Responsibilities
              </h2>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>Implement all recommendations</li>
                <li>Make final compliance decisions</li>
                <li>Maintain operational records</li>
                <li>Engage legal counsel when needed</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">
                4. Limitation of Liability
              </h2>
              <div className="bg-accent/10 border-l-4 border-secondary p-6 rounded-lg">
                <p className="font-semibold text-foreground mb-4">
                  To the fullest extent permitted by law:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  <li>Total liability capped at fees paid in preceding 12 months</li>
                  <li>No liability for indirect damages, fines, or lost profits</li>
                  <li>No liability for Client's failure to implement advice</li>
                  <li>No liability for Client operational decisions</li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">
                5. Documentation & Due Diligence
              </h2>
              <p className="text-foreground mb-4">We provide:</p>
              <ul className="space-y-2 text-foreground">
                <li>✓ Written dated recommendations</li>
                <li>✓ Quarterly compliance reports</li>
                <li>✓ DPIA templates</li>
                <li>✓ Training certificates</li>
                <li>✓ Audit trail of all advice</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">
                6. Client Indemnification
              </h2>
              <p className="text-foreground leading-relaxed">
                Client indemnifies grctoisms.com against claims from failure to implement advice or operational decisions.
              </p>
            </section>

            {/* Section 7 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">
                7. Governing Law
              </h2>
              <p className="text-foreground leading-relaxed">
                UK law applies. Disputes resolved through negotiation/mediation first.
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
              <Link href="/terms">
                <a className="text-sm md:text-base hover:text-accent transition-colors duration-200">
                  Terms of Service
                </a>
              </Link>
              <span className="text-gray-400">|</span>
              <Link href="/privacy">
                <a className="text-sm md:text-base hover:text-accent transition-colors duration-200">
                  Privacy Policy
                </a>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
