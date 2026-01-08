import { Users, GraduationCap, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function UseCasesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20" style={{ backgroundColor: 'hsl(210, 50%, 20%)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight" style={{ color: 'hsl(0, 0%, 100%)' }}>
              Use Cases for Signal Intelligence™
            </h1>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto" style={{ color: 'hsl(0, 0%, 90%)' }}>
              Onboarding, coaching, and program insights across the commercial organization.
            </p>
          </div>
        </div>
      </section>

      {/* Three Primary Use Cases */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            
            {/* Use Case 1: Onboarding & Training */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  <span className="font-semibold text-primary">Onboarding & Training</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Accelerate New Rep Readiness
                </h2>
                <p className="text-lg text-muted-foreground">
                  New representatives practice Signal Intelligence™ capabilities in realistic scenarios before engaging with customers. Role play simulations provide structured practice environments where reps can develop judgment, timing, and response patterns specific to Life Sciences selling.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Practice disease state conversations with AI-powered HCP simulations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Build confidence in recognizing and responding to customer signals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Reduce time-to-productivity for new hires</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Establish consistent application of selling frameworks from day one</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 lg:p-12">
                <div className="space-y-6">
                  <div className="text-5xl font-bold text-primary">60%</div>
                  <p className="text-xl font-semibold">Faster time to first successful customer interaction</p>
                  <p className="text-muted-foreground">
                    Reps who practice with Signal Intelligence™ simulations demonstrate readiness earlier in their onboarding cycle.
                  </p>
                </div>
              </div>
            </div>

            {/* Use Case 2: Ongoing Coaching */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-accent/30 to-accent/10 rounded-2xl p-8 lg:p-12 order-2 md:order-1">
                <div className="space-y-6">
                  <div className="text-5xl font-bold text-primary">3x</div>
                  <p className="text-xl font-semibold">More coaching conversations per manager</p>
                  <p className="text-muted-foreground">
                    AI Coach provides structured feedback that managers can review and build upon, multiplying coaching capacity.
                  </p>
                </div>
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-accent/30 rounded-lg">
                  <Users className="w-6 h-6 text-primary" />
                  <span className="font-semibold text-primary">Ongoing Coaching</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Scale Personalized Development
                </h2>
                <p className="text-lg text-muted-foreground">
                  AI Coach provides continuous, capability-specific feedback that complements manager coaching. Representatives receive immediate insights on Signal Intelligence™ application, while managers gain visibility into development patterns and coaching priorities.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Continuous feedback on all 8 Signal Intelligence™ capabilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Identify specific development opportunities for each rep</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Support manager coaching with structured, objective observations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Track progress over time across the team</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Use Case 3: Program Insights */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  <span className="font-semibold text-primary">Program Insights</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Understand Capability Trends Across Teams
                </h2>
                <p className="text-lg text-muted-foreground">
                  Aggregated Signal Intelligence™ data reveals patterns in how capabilities are applied across regions, therapeutic areas, and selling scenarios. Commercial leaders gain visibility into where teams excel and where additional support may be needed.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Identify capability strengths and gaps across the organization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Compare performance across regions, teams, and therapeutic areas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Inform training priorities and resource allocation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Track program effectiveness over time</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 lg:p-12">
                <div className="space-y-6">
                  <div className="text-5xl font-bold text-primary">8</div>
                  <p className="text-xl font-semibold">Capabilities tracked consistently</p>
                  <p className="text-muted-foreground">
                    Every interaction provides structured data on Signal Intelligence™ application, enabling meaningful analysis without subjective interpretation.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How Use Cases Work Together */}
      <section className="py-20" style={{ backgroundColor: 'hsl(210, 50%, 20%)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold" style={{ color: 'hsl(0, 0%, 100%)' }}>
                How Use Cases Work Together
              </h2>
              <p className="text-xl" style={{ color: 'hsl(0, 0%, 90%)' }}>
                Signal Intelligence™ creates a continuous development cycle across the commercial organization.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold">Practice & Onboard</h3>
                <p className="text-muted-foreground">
                  New reps build foundational Signal Intelligence™ capabilities through structured role play before customer interactions.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold">Coach & Develop</h3>
                <p className="text-muted-foreground">
                  AI Coach and manager coaching work together to provide continuous, personalized feedback on capability application.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold">Analyze & Improve</h3>
                <p className="text-muted-foreground">
                  Program insights reveal patterns that inform training priorities, resource allocation, and continuous improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration with Existing Programs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Designed to Integrate with Existing Programs
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Signal Intelligence™ complements your current training, coaching, and enablement infrastructure.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-border rounded-xl p-6 space-y-4">
                <h3 className="text-xl font-semibold">Works With Your Selling Framework</h3>
                <p className="text-muted-foreground">
                  Signal Intelligence™ operates beneath your existing selling methodology, supporting execution without replacing your established approach.
                </p>
              </div>

              <div className="border border-border rounded-xl p-6 space-y-4">
                <h3 className="text-xl font-semibold">Complements Manager Coaching</h3>
                <p className="text-muted-foreground">
                  AI Coach provides structured observations that managers can use to focus coaching conversations on high-impact development areas.
                </p>
              </div>

              <div className="border border-border rounded-xl p-6 space-y-4">
                <h3 className="text-xl font-semibold">Fits Within LMS and Training Systems</h3>
                <p className="text-muted-foreground">
                  Role play simulations and coaching sessions can be integrated into existing learning management and training workflows.
                </p>
              </div>

              <div className="border border-border rounded-xl p-6 space-y-4">
                <h3 className="text-xl font-semibold">Supports Compliance Requirements</h3>
                <p className="text-muted-foreground">
                  All interactions are logged and auditable, supporting regulatory and governance requirements for Life Sciences organizations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to See How Signal Intelligence™ Fits Your Use Cases?
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore the platform capabilities or request a personalized demonstration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/demo">
                  Explore Platform Capabilities
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Request Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
