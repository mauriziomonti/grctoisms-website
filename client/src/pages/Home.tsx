/**
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

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header Navigation */}
      <header className="bg-white border-b border-border shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/images/grctoisms-logo.png" alt="grctoisms" className="h-12 w-auto" />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
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
          <Button
            className="bg-primary hover:bg-primary/90 text-white rounded-lg px-6 py-2 transition-all duration-200 transform hover:scale-105"
          >
            Get in Touch
          </Button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Information Security planning for peace of mind.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Professional consulting services tailored to your unique needs. We bring expertise, innovation, and dedication to every project.
              </p>
              <div className="flex gap-4">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-lg px-8 py-3 transition-all duration-200 transform hover:scale-105">
                  Learn More
                </Button>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 rounded-lg px-8 py-3 transition-all duration-200"
                >
                  Explore Services
                </Button>
              </div>
            </div>

            {/* Right: Visual Element */}
            <div className="bg-gradient-to-br from-accent/20 to-secondary/20 rounded-3xl h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">✨</div>
                <p className="text-muted-foreground font-medium">Visual Element</p>
              </div>
            </div>
          </div>
        </section>

        {/* Four Placeholder Boxes Section */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
              Our Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Box 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-border">
                <div className="bg-accent/20 rounded-xl h-24 mb-6 flex items-center justify-center">
                  <span className="text-4xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Placeholder</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Discover how our consulting services can transform your business and drive meaningful results.
                </p>
              </div>

              {/* Box 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-border">
                <div className="bg-secondary/20 rounded-xl h-24 mb-6 flex items-center justify-center">
                  <span className="text-4xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Placeholder</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Strategic planning and execution to help you achieve your business goals with precision.
                </p>
              </div>

              {/* Box 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-border">
                <div className="bg-chart-4/20 rounded-xl h-24 mb-6 flex items-center justify-center">
                  <span className="text-4xl">💡</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Placeholder</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Innovative solutions designed to address your unique challenges and opportunities.
                </p>
              </div>

              {/* Box 4 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-border">
                <div className="bg-chart-2/20 rounded-xl h-24 mb-6 flex items-center justify-center">
                  <span className="text-4xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Placeholder</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Accelerate your growth with our proven methodologies and expert guidance.
                </p>
              </div>
            </div>
          </div>
        </section>
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
