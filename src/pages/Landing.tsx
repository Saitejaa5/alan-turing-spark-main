import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Code, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import clubLogo from '@/assets/alan-turing-logo.jpg';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-hero circuit-pattern">
      {/* Hero Section */}
      <div className="container mx-auto px-6 flex items-center justify-center min-h-screen">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src={clubLogo} 
              alt="Alan Turing Club" 
              className="w-32 h-32 md:w-48 md:h-48 floating-animation pulse-glow rounded-2xl"
            />
          </div>

          {/* Main Content */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent">
              Alan Turing Club
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
            Where Innovation Meets Intelligence
          </p>
          
          <p className="text-lg text-muted-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join the premier technical community at our college. Explore cutting-edge technology, 
            collaborate on groundbreaking projects, and shape the future of computing.
          </p>

          {/* CTA Button */}
          <div className="mb-16">
            <Link to="/dashboard">
              <Button size="lg" className="tech-button-primary text-lg px-12 py-6 rounded-xl group">
                Get Started
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="tech-card p-6 text-center tech-glow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-lg mb-4">
                <Code className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Learn & Code</h3>
              <p className="text-muted-foreground text-sm">
                Access cutting-edge resources, workshops, and coding sessions
              </p>
            </div>

            <div className="tech-card p-6 text-center tech-glow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary rounded-lg mb-4">
                <Users className="h-6 w-6 text-secondary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Connect</h3>
              <p className="text-muted-foreground text-sm">
                Network with like-minded tech enthusiasts and industry experts
              </p>
            </div>

            <div className="tech-card p-6 text-center tech-glow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-lg mb-4">
                <Zap className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Innovate</h3>
              <p className="text-muted-foreground text-sm">
                Work on real-world projects and showcase your innovations
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
        <p className="text-muted-foreground/60 text-sm">
          © 2024 Alan Turing Club. Advancing the future of technology.
        </p>
      </div>
    </div>
  );
};

export default Landing;