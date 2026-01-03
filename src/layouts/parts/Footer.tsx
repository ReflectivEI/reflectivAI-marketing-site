import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-muted">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="https://img1.wsimg.com/isteam/ip/1de1dc96-7231-4608-aa4f-91d58be98037/83AD436E-122D-4EE6-BF94-AE7A018FBE00.png" 
                alt="ReflectivAI Logo" 
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold">ReflectivAI</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Signal Intelligence™ for sales professionals in high-stakes conversations. Built on clarity and restraint, designed for teams where judgment matters.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-foreground transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link to="/ai-coach" className="hover:text-foreground transition-colors">
                  AI Coach
                </Link>
              </li>
              <li>
                <Link to="/role-play" className="hover:text-foreground transition-colors">
                  Role Play
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-foreground transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/ai-coach" className="hover:text-foreground transition-colors">
                  AI Coach Guide
                </Link>
              </li>
              <li>
                <Link to="/role-play" className="hover:text-foreground transition-colors">
                  Role Play Scenarios
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-foreground transition-colors">
                  Signal Intelligence™
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-foreground transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-foreground transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border space-y-4">
          <div className="text-xs text-muted-foreground text-center max-w-4xl mx-auto">
            Signal Intelligence™ focuses on observable interaction changes and response principles; it does not infer or diagnose a person's intent, emotion, motivation, or psychological state. AI may surface patterns, but people remain responsible for judgment and decisions.
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} ReflectivAI. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <span>HIPAA Compliant</span>
              <span>SOC 2 Type II</span>
              <span>ISO 27001</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
