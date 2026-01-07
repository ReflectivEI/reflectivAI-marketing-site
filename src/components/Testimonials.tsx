'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const testimonials = [
  {
    quote: "ReflectivAI transformed how our team approaches stakeholder conversations. The real-time coaching has been invaluable.",
    author: "Sarah Chen",
    role: "Senior Medical Science Liaison",
    company: "Leading Biotech Company",
    initials: "SC"
  },
  {
    quote: "The role-play scenarios are incredibly realistic. I feel more confident in my HCP interactions after just two weeks.",
    author: "Michael Rodriguez",
    role: "Oncology Sales Representative",
    company: "Global Pharma Leader",
    initials: "MR"
  },
  {
    quote: "Finally, a platform that understands the nuances of life sciences sales. The compliance validation gives us peace of mind.",
    author: "Dr. Emily Watson",
    role: "Director of Sales Enablement",
    company: "Specialty Pharma",
    initials: "EW"
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-accent text-accent-foreground">Testimonials</Badge>
          <h2 className="text-4xl font-bold mb-4">Trusted by Life Sciences Professionals</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what sales teams are saying about ReflectivAI
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 hover:border-accent transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <Quote className="h-10 w-10 text-accent mb-4" />
                <p className="text-lg mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 bg-primary text-primary-foreground">
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
