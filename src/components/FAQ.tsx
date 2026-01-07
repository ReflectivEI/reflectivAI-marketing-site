'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

const faqs = [
  {
    question: "How does ReflectivAI ensure regulatory compliance?",
    answer: "Every interaction is validated by human experts and aligned with FDA, EMA, and industry standards. We maintain 100% compliance through continuous monitoring and validation of all AI-generated content."
  },
  {
    question: "What makes ReflectivAI different from traditional sales training?",
    answer: "Unlike one-time workshops, ReflectivAI provides 24/7 AI-powered coaching, real-time feedback, and personalized learning paths. You practice with realistic scenarios and receive instant, actionable insights to improve your Signal Intelligence™ capabilities and sales effectiveness."
  },
  {
    question: "How long does it take to see results?",
    answer: "Most users report improved confidence and stakeholder engagement within 2 weeks. Our data shows measurable improvements in Signal Intelligence™ Capabilities (Signal Awareness, Signal Interpretation, Value Connection) after just 10 practice sessions."
  },
  {
    question: "Can ReflectivAI integrate with our existing CRM?",
    answer: "Yes! ReflectivAI integrates with major CRM platforms including Salesforce, Veeva, and Microsoft Dynamics. We can also provide custom integrations for your specific tech stack."
  },
  {
    question: "What therapeutic areas do you cover?",
    answer: "We currently offer scenarios across HIV, Oncology, Cardiology, Vaccines, COVID-19, and Rare Disease. We're continuously expanding our library and can create custom scenarios for your specific products and therapeutic areas."
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We use enterprise-grade encryption, comply with HIPAA and GDPR, and never share your data with third parties. All conversations are stored securely and can be deleted at your request."
  },
  {
    question: "How is pricing structured?",
    answer: "We offer flexible pricing based on team size and features needed. Plans include per-user licensing, enterprise packages, and custom solutions. Contact our sales team for a personalized quote."
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required. Schedule a demo to get started."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-accent text-accent-foreground">FAQ</Badge>
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about ReflectivAI
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-2 mb-4 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:text-accent">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
