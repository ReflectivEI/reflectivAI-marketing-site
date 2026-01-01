import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <Badge className="mb-4" variant="secondary">
            <Sparkles className="h-3 w-3 mr-1" />
            Interactive Experience
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Experience ReflectivAI in Action
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Explore our AI-powered coaching platform with interactive demos. See how Signal Intelligence transforms sales conversations - no signup required.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Book a Live Demo</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/signal-intelligence">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Demo Cards */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* AI Coach Demo */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Play className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>AI Coach Simulation</CardTitle>
                <CardDescription>
                  Experience real-time coaching feedback on pharma sales conversations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  See how our AI Coach analyzes conversations and provides actionable insights using Signal Intelligence.
                </p>
                <Badge variant="secondary" className="mb-2">Coming Soon</Badge>
              </CardContent>
            </Card>

            {/* Role Play Demo */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Play className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Role Play Scenarios</CardTitle>
                <CardDescription>
                  Practice with realistic customer interactions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Engage with AI-powered customer personas and receive instant feedback on your approach.
                </p>
                <Badge variant="secondary" className="mb-2">Coming Soon</Badge>
              </CardContent>
            </Card>

            {/* Framework Explorer */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Framework Explorer</CardTitle>
                <CardDescription>
                  Discover the Signal Intelligence framework
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Explore our 8 core capabilities and see how they translate to measurable behavioral metrics.
                </p>
                <Button variant="outline" size="sm" asChild className="w-full">
                  <Link to="/signal-intelligence">Explore Framework</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Sales Team?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            See how ReflectivAI can help your team master high-stakes conversations
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Request a Demo</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
