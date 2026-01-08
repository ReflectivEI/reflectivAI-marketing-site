'use client';

import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function PricingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Pricing Philosophy */}
      <section className="py-20 lg:py-32" style={{ backgroundColor: 'hsl(210, 50%, 20%)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]" style={{ color: 'hsl(0, 0%, 100%)' }}>
              Pricing Built for Life Sciences Commercial Teams
            </h1>
            <p className="text-xl md:text-2xl leading-[1.4]" style={{ color: 'hsl(0, 0%, 90%)' }}>
              Value-based pricing designed for regulated, high-expertise selling environments.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Philosophy */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">How ReflectivAI Pricing Works</h2>
              <p className="text-lg text-muted-foreground">
                Our pricing reflects deployment complexity, governance requirements, and required capabilities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 pt-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">What Drives Pricing</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Number of users and roles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Use cases (training, coaching, live enablement)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Deployment scale and team structure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Data integrations and system connectivity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Governance and compliance requirements</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">What Does Not Drive Pricing</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Per-emotion or per-signal charges</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Personality scoring or diagnostic metrics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Behavioral evaluation counts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Performance outcome guarantees</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tiered Plans */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: 'hsl(210, 50%, 20%)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold" style={{ color: 'hsl(0, 0%, 100%)' }}>
              Core Deployment Tiers
            </h2>
            <p className="text-lg" style={{ color: 'hsl(0, 0%, 90%)' }}>
              Select the tier that aligns with your team structure, governance needs, and deployment scope.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Foundation Tier */}
            <div className="bg-white rounded-xl p-8 space-y-6 shadow-lg">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Foundation</h3>
                <p className="text-muted-foreground">Signal Intelligence fundamentals for individual or small-team use</p>
              </div>

              <div className="space-y-4 pt-4 border-t">
                <h4 className="font-semibold">Intended For</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Individual contributors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Small teams (up to 10 users)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Training and coaching contexts</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4 pt-4 border-t">
                <h4 className="font-semibold">What's Included</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Core Signal Intelligence framework</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Basic behavioral visibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Standard reporting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Self-guided learning resources</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4 pt-4 border-t">
                <h4 className="font-semibold">Not Included</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Advanced analytics</li>
                  <li>• Custom Signal Intelligence mappings</li>
                  <li>• CRM integrations</li>
                  <li>• Enterprise governance controls</li>
                </ul>
              </div>

              <Button className="w-full" variant="outline" asChild>
                <Link to="/contact">Request Details</Link>
              </Button>
            </div>

            {/* Professional Tier */}
            <div className="bg-white rounded-xl p-8 space-y-6 shadow-lg border-2 border-primary relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Common
              </div>
              
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Professional</h3>
                <p className="text-muted-foreground">Expanded capabilities with AI-supported interpretation and team-level insights</p>
              </div>

              <div className="space-y-4 pt-4 border-t">
                <h4 className="font-semibold">Intended For</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Sales teams (10-100 users)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Manager-led coaching programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Multi-team deployments</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4 pt-4 border-t">
                <h4 className="font-semibold">What's Included</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Everything in Foundation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Expanded Signal Intelligence coverage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Advanced behavioral metrics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>AI-supported interpretation (human-validated)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Team-level insights and manager enablement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Standard integrations</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4 pt-4 border-t">
                <h4 className="font-semibold">Not Included</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Custom Signal Intelligence mappings</li>
                  <li>• Enterprise governance controls</li>
                  <li>• Advanced compliance configuration</li>
                  <li>• Dedicated support</li>
                </ul>
              </div>

              <Button className="w-full" asChild>
                <Link to="/contact">Request Details</Link>
              </Button>
            </div>

            {/* Enterprise Tier */}
            <div className="bg-white rounded-xl p-8 space-y-6 shadow-lg">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Enterprise</h3>
                <p className="text-muted-foreground">Full Signal Intelligence framework with custom configuration and enterprise governance</p>
              </div>

              <div className="space-y-4 pt-4 border-t">
                <h4 className="font-semibold">Intended For</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Large commercial organizations (100+ users)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Multi-region deployments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Complex compliance requirements</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4 pt-4 border-t">
                <h4 className="font-semibold">What's Included</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Everything in Professional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Full Signal Intelligence framework</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Custom behavioral mappings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Enterprise governance and controls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Compliance configuration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>CRM and enablement integrations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Scaled, multi-team deployment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Dedicated support and success management</span>
                  </li>
                </ul>
              </div>

              <Button className="w-full" variant="outline" asChild>
                <Link to="/contact">Request Details</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Modular Add-Ons */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">Modular Add-Ons</h2>
              <p className="text-lg text-muted-foreground">
                Enhance your deployment with optional modules. Add-ons extend tier capabilities but do not replace human judgment or decision-making.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg border border-border bg-card space-y-3">
                <h3 className="text-xl font-semibold">Advanced Analytics & Pattern Analysis</h3>
                <p className="text-muted-foreground">
                  Deeper behavioral pattern recognition and trend analysis across teams, regions, or time periods. Pricing varies by data volume and analysis scope.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border bg-card space-y-3">
                <h3 className="text-xl font-semibold">Custom Signal Intelligence Mappings</h3>
                <p className="text-muted-foreground">
                  Tailored behavioral frameworks aligned to your selling methodology, therapeutic areas, or customer segments. Priced by configuration complexity.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border bg-card space-y-3">
                <h3 className="text-xl font-semibold">Role- or Function-Specific Deployments</h3>
                <p className="text-muted-foreground">
                  Specialized configurations for MSLs, account managers, or other commercial roles. Pricing based on role count and customization requirements.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border bg-card space-y-3">
                <h3 className="text-xl font-semibold">Scenario Libraries</h3>
                <p className="text-muted-foreground">
                  Pre-built or custom interaction scenarios for training, coaching, or role-play. Priced per scenario or library package.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border bg-card space-y-3">
                <h3 className="text-xl font-semibold">Compliance & Governance Extensions</h3>
                <p className="text-muted-foreground">
                  Enhanced audit trails, data residency controls, and regulatory reporting. Pricing varies by compliance framework and deployment scale.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border bg-card space-y-3">
                <h3 className="text-xl font-semibold">Custom Reporting and Insights</h3>
                <p className="text-muted-foreground">
                  Tailored dashboards, executive summaries, or integration with existing BI tools. Priced by report complexity and delivery frequency.
                </p>
              </div>
            </div>

            <div className="text-center pt-8">
              <p className="text-muted-foreground max-w-4xl mx-auto">
                Add-on pricing is determined by deployment scope, configuration requirements, and integration complexity. Contact our team to explore options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Ethics Notice */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: 'hsl(210, 50%, 96%)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">Compliance & Ethical Use</h2>
              <p className="text-lg text-muted-foreground">
                ReflectivAI is designed to support professional judgment in regulated commercial environments. Our platform operates within clear ethical boundaries.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 space-y-4 shadow-sm">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong>ReflectivAI supports judgment, not evaluation.</strong> The platform provides behavioral visibility to inform decisions—it does not make decisions or evaluate individuals.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong>AI assists interpretation; humans decide actions.</strong> All insights are human-validated. AI supports pattern recognition but does not replace professional expertise.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong>No medical, psychological, or performance diagnosis.</strong> ReflectivAI does not diagnose conditions, assess personality, or predict performance outcomes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong>Designed for ethical, compliant professional use.</strong> The platform is built for regulated life sciences commercial teams and adheres to industry standards for data governance and ethical AI use.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: 'hsl(210, 50%, 20%)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold" style={{ color: 'hsl(0, 0%, 100%)' }}>
              Ready to Explore Deployment Options?
            </h2>
            <p className="text-xl" style={{ color: 'hsl(0, 0%, 90%)' }}>
              Our team will work with you to understand your requirements, governance needs, and deployment scope—then provide detailed pricing aligned to your use case.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base bg-white text-primary hover:bg-white/90" asChild>
                <Link to="/contact">
                  Request Pricing Details
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base border-white text-white hover:bg-white/10" asChild>
                <Link to="/demo">
                  Explore the Platform
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
