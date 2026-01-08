import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleFAQClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: '/demo', label: 'Product Tour' },
    { href: '/#faq', label: 'FAQ' },
  ];

  const platformCapabilitiesLinks = [
    { href: '/ai-coach', label: 'AI Coach', description: 'Personalized coaching and feedback' },
    { href: '/role-play', label: 'Role Play', description: 'Practice with realistic scenarios' },
  ];

  const learnMoreLinks = [
    { href: '/signal-intelligence', label: 'Signal Intelligence™', description: 'Science, methodology, and theoretical foundations' },
    { href: '/applied-capabilities', label: 'How Signal Intelligence™ Is Applied', description: 'Detailed capability breakdown and metrics' },
    { href: '/use-cases', label: 'Use Cases', description: 'Onboarding, coaching, and program insights' },
    { href: '/trust-governance', label: 'Trust & Governance', description: 'Ethics, privacy, and responsible AI' },
    { href: '/roi-business-impact', label: 'ROI & Business Impact', description: 'Metrics, calculator, and business value' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="https://img1.wsimg.com/isteam/ip/1de1dc96-7231-4608-aa4f-91d58be98037/83AD436E-122D-4EE6-BF94-AE7A018FBE00.png" 
              alt="ReflectivAI Logo" 
              className="h-14 w-auto"
            />
            <span className="text-2xl font-bold">ReflectivAI</span>
          </Link>

          <nav className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              link.label === 'FAQ' ? (
                <a
                  key={link.href}
                  href="#faq"
                  onClick={handleFAQClick}
                  className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              )
            ))}
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                    Platform Capabilities
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      {platformCapabilitiesLinks.map((link) => (
                        <li key={link.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={link.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{link.label}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {link.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                    Learn More
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      {learnMoreLinks.map((link) => (
                        <li key={link.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={link.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{link.label}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {link.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/contact">Sign In</Link>
            </Button>
            <Button size="sm" asChild>
              <Link to="/contact">Request Demo</Link>
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:bg-accent rounded-md"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                link.label === 'FAQ' ? (
                  <a
                    key={link.href}
                    href="#faq"
                    onClick={handleFAQClick}
                    className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-sm font-medium hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              ))}
              <div className="border-t border-border pt-4">
                <div className="text-xs font-semibold text-muted-foreground mb-2 px-2">Platform Capabilities</div>
                {platformCapabilitiesLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block text-sm font-medium hover:text-primary transition-colors px-2 py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="border-t border-border pt-4">
                <div className="text-xs font-semibold text-muted-foreground mb-2 px-2">Learn More</div>
                {learnMoreLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block text-sm font-medium hover:text-primary transition-colors px-2 py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button variant="ghost" size="sm" className="w-full" asChild>
                  <Link to="/contact">Sign In</Link>
                </Button>
                <Button size="sm" className="w-full" asChild>
                  <Link to="/contact">Request Demo</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}