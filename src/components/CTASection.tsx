'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Sales Team?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            See how this works for your life sciences field team in a 30-minute session.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <Link to="/contact">
                <Calendar className="mr-2 h-5 w-5" />
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" asChild>
              <Link to="/contact">
                <MessageCircle className="mr-2 h-5 w-5" />
                Talk to Sales
              </Link>
            </Button>
          </div>

          {/* Hidden: Free Trial / No Credit Card / 24/7 Support cards
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <Card className="bg-primary-foreground/10 border-primary-foreground/20">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold mb-2">14 Days</div>
                <p className="opacity-90">Free Trial</p>
              </CardContent>
            </Card>
            <Card className="bg-primary-foreground/10 border-primary-foreground/20">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold mb-2">No Credit Card</div>
                <p className="opacity-90">Required</p>
              </CardContent>
            </Card>
            <Card className="bg-primary-foreground/10 border-primary-foreground/20">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <p className="opacity-90">Support</p>
              </CardContent>
            </Card>
          </div>
          */}
        </div>
      </div>
    </section>
  );
}
