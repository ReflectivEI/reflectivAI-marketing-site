import { TrendingUp, DollarSign, Clock, Users, Target, BarChart3, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ROICalculator } from '@/components/ROICalculator';

export default function ROIBusinessImpactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              ROI & Business Impact
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Measurable outcomes that drive revenue, reduce costs, and accelerate team performance.
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Proven Business Impact
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Organizations using Signal Intelligence™ see measurable improvements across key performance indicators.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="border border-border rounded-xl p-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <div className="text-5xl font-bold text-primary">60%</div>
                <h3 className="text-xl font-semibold">Faster Time to First Interaction</h3>
                <p className="text-muted-foreground">
                  New reps reach productivity milestones significantly faster with structured practice and AI coaching.
                </p>
              </div>

              <div className="border border-border rounded-xl p-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div className="text-5xl font-bold text-primary">3x</div>
                <h3 className="text-xl font-semibold">More Coaching Conversations</h3>
                <p className="text-muted-foreground">
                  Managers scale personalized coaching without increasing time investment per rep.
                </p>
              </div>

              <div className="border border-border rounded-xl p-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <div className="text-5xl font-bold text-primary">8</div>
                <h3 className="text-xl font-semibold">Capabilities Tracked Consistently</h3>
                <p className="text-muted-foreground">
                  Standardized observation across all coaching interactions provides reliable program insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Drivers */}
      <section className="py-20" style={{ backgroundColor: 'hsl(210, 50%, 20%)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold" style={{ color: 'hsl(0, 0%, 100%)' }}>
                Where Value Is Created
              </h2>
              <p className="text-xl" style={{ color: 'hsl(0, 0%, 90%)' }}>
                Signal Intelligence™ drives ROI across four key areas of commercial operations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Revenue Acceleration</h3>
                    <p className="text-muted-foreground">
                      Faster onboarding means reps reach quota-carrying capacity sooner. Improved capability execution drives higher win rates and larger deal sizes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Cost Reduction</h3>
                    <p className="text-muted-foreground">
                      Reduced time-to-productivity lowers onboarding costs. Managers scale coaching without proportional increases in headcount or time investment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Retention & Engagement</h3>
                    <p className="text-muted-foreground">
                      Structured development and consistent coaching improve rep confidence and job satisfaction, reducing costly turnover.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Program Visibility</h3>
                    <p className="text-muted-foreground">
                      Consistent capability tracking provides reliable data for program optimization, resource allocation, and strategic planning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Calculate Your ROI
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                See how Signal Intelligence™ could impact your team's performance and bottom line.
              </p>
            </div>

            <ROICalculator />
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Time to Value
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Most organizations see measurable impact within the first quarter of deployment.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div className="w-0.5 h-full bg-border mt-2"></div>
                </div>
                <div className="pb-12 space-y-2">
                  <h3 className="text-xl font-semibold">Week 1-2: Setup & Configuration</h3>
                  <p className="text-muted-foreground">
                    Platform deployment, user provisioning, and initial training for managers and administrators.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div className="w-0.5 h-full bg-border mt-2"></div>
                </div>
                <div className="pb-12 space-y-2">
                  <h3 className="text-xl font-semibold">Week 3-4: Pilot Launch</h3>
                  <p className="text-muted-foreground">
                    Small group of reps begin using Role Play and AI Coach. Early feedback informs broader rollout.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div className="w-0.5 h-full bg-border mt-2"></div>
                </div>
                <div className="pb-12 space-y-2">
                  <h3 className="text-xl font-semibold">Month 2-3: Full Deployment</h3>
                  <p className="text-muted-foreground">
                    Organization-wide rollout with ongoing support. Coaching conversations increase, practice becomes routine.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    4
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Month 3+: Measurable Impact</h3>
                  <p className="text-muted-foreground">
                    First cohort of new reps shows faster time-to-productivity. Program insights inform training optimization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Highlights */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Real-World Results
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Organizations across Life Sciences are seeing measurable improvements with Signal Intelligence™.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-background rounded-xl p-8 space-y-6">
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-primary">SPECIALTY PHARMA</div>
                  <h3 className="text-2xl font-bold">45% Reduction in Time to First Call</h3>
                </div>
                <p className="text-muted-foreground">
                  A 200-person commercial team integrated Signal Intelligence™ into their onboarding program. New reps reached their first customer interaction 45% faster than the previous cohort, with higher confidence scores and better early performance metrics.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>200 commercial reps</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>45% faster onboarding</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Higher confidence scores</span>
                  </div>
                </div>
              </div>

              <div className="bg-background rounded-xl p-8 space-y-6">
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-primary">MEDICAL DEVICE</div>
                  <h3 className="text-2xl font-bold">3x Increase in Coaching Frequency</h3>
                </div>
                <p className="text-muted-foreground">
                  A medical device company with 150 field reps used AI Coach to scale personalized development. Managers increased coaching conversations from once per quarter to once per month without adding headcount or reducing field time.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>150 field reps</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>3x more coaching</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>No added headcount</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to See Your ROI?
            </h2>
            <p className="text-xl text-muted-foreground">
              Schedule a consultation to discuss how Signal Intelligence™ can drive measurable impact for your team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Schedule ROI Discussion
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/demo">Explore Platform</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
