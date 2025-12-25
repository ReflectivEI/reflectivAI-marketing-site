import { ArrowRight, Play, Users, Award, BarChart3, CheckCircle2, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function RolePlayPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                <Play className="h-4 w-4" />
                Interactive Training
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                  Practice Makes
                  <br />
                  <span className="text-primary">Perfect Sales</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-xl">
                  Practice pharma sales scenarios with AI feedback. Master disease state conversations, HCP engagement, and market access challenges across HIV, Oncology, Cardiology, Vaccines, and more.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base">
                  Try a Simulation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-base">
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden border border-border shadow-2xl">
                <img
                  src="https://media.gettyimages.com/id/2179876022/photo/business-colleagues-collaborating-on-a-project.jpg?b=1&s=2048x2048&w=0&k=20&c=xgxwnYyS6nWekGplCCbzQoEh3Wv1br7ZF0IPmqhSIdI="
                  alt="Role play simulation in action"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Role Play */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Why Role Play Training Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Research shows that experiential learning through role play increases skill retention by 75% compared to traditional training methods. Practice builds confidence, muscle memory, and emotional resilience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-4">
              <div className="text-5xl font-bold text-primary">75%</div>
              <p className="text-muted-foreground">Higher skill retention with experiential learning</p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-5xl font-bold text-primary">3x</div>
              <p className="text-muted-foreground">Faster ramp time for new sales reps</p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-5xl font-bold text-primary">89%</div>
              <p className="text-muted-foreground">Of reps report increased confidence after practice</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold">Simulation Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Realistic scenarios powered by AI that adapt to your responses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="space-y-4 p-6 rounded-lg border border-border bg-background">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Realistic AI Personas</h3>
              <p className="text-muted-foreground">
                Interact with AI-powered customer personas that exhibit authentic behaviors, objections, and emotional responses based on real Life Sciences buyer profiles.
              </p>
            </div>

            <div className="space-y-4 p-6 rounded-lg border border-border bg-background">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Lightbulb className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Adaptive Scenarios</h3>
              <p className="text-muted-foreground">
                Simulations adjust difficulty and complexity based on your performance, ensuring you're always challenged at the right level for optimal learning.
              </p>
            </div>

            <div className="space-y-4 p-6 rounded-lg border border-border bg-background">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Instant Feedback</h3>
              <p className="text-muted-foreground">
                Receive detailed performance analysis after each simulation, including emotional intelligence scores, objection handling effectiveness, and improvement recommendations.
              </p>
            </div>

            <div className="space-y-4 p-6 rounded-lg border border-border bg-background">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Award className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Skill Certification</h3>
              <p className="text-muted-foreground">
                Earn certifications as you master different conversation types, from initial discovery calls to complex negotiations and contract discussions.
              </p>
            </div>

            <div className="space-y-4 p-6 rounded-lg border border-border bg-background">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Play className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Unlimited Practice</h3>
              <p className="text-muted-foreground">
                Practice as many times as you need without judgment. Repeat challenging scenarios until you build confidence and mastery.
              </p>
            </div>

            <div className="space-y-4 p-6 rounded-lg border border-border bg-background">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Custom Scenarios</h3>
              <p className="text-muted-foreground">
                Create custom role play scenarios based on your specific products, customer types, and common objections unique to your organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Therapeutic Area Scenarios */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold">Disease State Scenarios</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Practice with realistic pharma sales scenarios across major therapeutic areas
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg border border-border bg-card space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                HIV
              </div>
              <h3 className="text-lg font-semibold">Low Descovy Share with Missed PrEP Opportunity</h3>
              <p className="text-sm text-muted-foreground">
                IM prescriber underutilizes PrEP despite steady STI testing in young MSM
              </p>
              <div className="text-xs text-muted-foreground">Intermediate Level</div>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                HIV
              </div>
              <h3 className="text-lg font-semibold">Slowing Biktarvy Switches in Stable Patients</h3>
              <p className="text-sm text-muted-foreground">
                Top HIV clinic with declining switch velocity; perception that most patients are optimized
              </p>
              <div className="text-xs text-muted-foreground">Advanced Level</div>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">
                Oncology
              </div>
              <h3 className="text-lg font-semibold">ADC Integration with IO Backbone</h3>
              <p className="text-sm text-muted-foreground">
                Solid-tumor center evaluating ADCs; P&T scrutinizes cost/response and chair time
              </p>
              <div className="text-xs text-muted-foreground">Advanced Level</div>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">
                Oncology
              </div>
              <h3 className="text-lg font-semibold">Pathway-Driven Care with Staffing Constraints</h3>
              <p className="text-sm text-muted-foreground">
                Community infusion site with conservative IO use and short-staffed AE clinics
              </p>
              <div className="text-xs text-muted-foreground">Intermediate Level</div>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium">
                Cardiology
              </div>
              <h3 className="text-lg font-semibold">HFrEF Clinic GDMT Optimization</h3>
              <p className="text-sm text-muted-foreground">
                Entresto uptake 62% of eligible HFrEF; SGLT2 at 38%; day-30 refill gaps
              </p>
              <div className="text-xs text-muted-foreground">Advanced Level</div>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium">
                Cardiology
              </div>
              <h3 className="text-lg font-semibold">Post-MI and HF Transitions Optimization</h3>
              <p className="text-sm text-muted-foreground">
                SGLT2 initiation often deferred to PCP; ARNI starts delayed pending echo
              </p>
              <div className="text-xs text-muted-foreground">Intermediate Level</div>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium">
                Vaccines
              </div>
              <h3 className="text-lg font-semibold">Adult Flu Program Optimization</h3>
              <p className="text-sm text-muted-foreground">
                ID group with LTC/high-risk adults; late clinic launches; weak reminder-recall
              </p>
              <div className="text-xs text-muted-foreground">Intermediate Level</div>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium">
                COVID
              </div>
              <h3 className="text-lg font-semibold">Outpatient Antiviral Optimization</h3>
              <p className="text-sm text-muted-foreground">
                High-risk COPD/ILD population; Paxlovid first line but DDI triage slows prescribing
              </p>
              <div className="text-xs text-muted-foreground">Advanced Level</div>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium">
                Rare Disease
              </div>
              <h3 className="text-lg font-semibold">Rare Disease Diagnosis Journey</h3>
              <p className="text-sm text-muted-foreground">
                Help a physician recognize and diagnose a rare metabolic disorder
              </p>
              <div className="text-xs text-muted-foreground">Intermediate Level</div>
            </div>
          </div>
        </div>
      </section>

      {/* Scenario Types */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold">Practice Every Conversation Type</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From discovery to close, master every stage of the sales process
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  Discovery
                </div>
                <h3 className="text-2xl font-bold">Initial Discovery Calls</h3>
                <p className="text-lg text-muted-foreground">
                  Practice asking the right questions, building rapport quickly, and uncovering customer pain points through active listening and emotional intelligence.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Open-ended questioning techniques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Building trust with healthcare providers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Identifying decision-making criteria</span>
                  </li>
                </ul>
              </div>
              <div className="aspect-video rounded-lg overflow-hidden border border-border shadow-lg">
                <img
                  src="https://media.gettyimages.com/id/1648451801/photo/employees-are-meeting-at-office.jpg?b=1&s=2048x2048&w=0&k=20&c=CDP0ignhH_bHtb1RpVuCy0YjIMlL-rxwJSTDDl3lMtA="
                  alt="Discovery call simulation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="aspect-video rounded-lg overflow-hidden border border-border shadow-lg order-first md:order-last">
                <img
                  src="https://media.gettyimages.com/id/2222793401/photo/multiracial-group-collaborating-with-remote-staff-during-a-hybrid-meeting-or-conference-call.jpg?b=1&s=2048x2048&w=0&k=20&c=IHVW4A0e1uZKOMCCb54c9iORt2Hw4g4s8MG6-rC0lfY="
                  alt="Objection handling simulation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4 order-last md:order-first">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  Objection Handling
                </div>
                <h3 className="text-2xl font-bold">Overcoming Objections</h3>
                <p className="text-lg text-muted-foreground">
                  Master the art of addressing concerns with empathy and confidence. Practice responding to price objections, competitive comparisons, and implementation concerns.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Price and budget objections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Competitive positioning responses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Timing and urgency concerns</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  Negotiation
                </div>
                <h3 className="text-2xl font-bold">Contract Negotiation</h3>
                <p className="text-lg text-muted-foreground">
                  Develop negotiation skills that protect margins while maintaining strong customer relationships. Practice finding win-win solutions in complex deal structures.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Value-based pricing discussions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Multi-stakeholder negotiations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Contract terms and conditions</span>
                  </li>
                </ul>
              </div>
              <div className="aspect-video rounded-lg overflow-hidden border border-border shadow-lg">
                <img
                  src="https://media.gettyimages.com/id/1953319673/photo/business-presentation.jpg?b=1&s=2048x2048&w=0&k=20&c=NWT1d90SqhQpceOCPHbWrjaDYZf5UTsXfX8Ka6zTjY8="
                  alt="Negotiation simulation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="aspect-video rounded-lg overflow-hidden border border-border shadow-lg order-first md:order-last">
                <img
                  src="https://media.gettyimages.com/id/1280309693/photo/manager-showing-presentation-details-to-boss.jpg?b=1&s=2048x2048&w=0&k=20&c=rrf5fD5CwJXOCJw3OPauuuoDwvzfhhJb6Ewl0hnbetY="
                  alt="Closing simulation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4 order-last md:order-first">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  Closing
                </div>
                <h3 className="text-2xl font-bold">Closing Techniques</h3>
                <p className="text-lg text-muted-foreground">
                  Practice asking for the business with confidence. Learn to recognize buying signals, handle last-minute concerns, and guide prospects to commitment.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Recognizing buying signals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Trial closes and commitment questions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Handling last-minute hesitation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold">How Role Play Simulations Work</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A simple, effective process for building sales mastery
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="mx-auto h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold">Choose Scenario</h3>
              <p className="text-sm text-muted-foreground">
                Select from our library or create a custom scenario based on your specific needs
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold">Practice Conversation</h3>
              <p className="text-sm text-muted-foreground">
                Engage with AI personas that respond realistically to your approach and techniques
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold">Get Feedback</h3>
              <p className="text-sm text-muted-foreground">
                Receive detailed analysis on your performance, emotional intelligence, and areas for improvement
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold">Improve & Repeat</h3>
              <p className="text-sm text-muted-foreground">
                Apply feedback and practice again until you achieve mastery and certification
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground rounded-2xl p-12 space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Safe Environment, Real Results
              </h2>
              <p className="text-lg text-primary-foreground/90">
                Role play simulations provide a judgment-free space to experiment, make mistakes, and learn without the pressure of real customer interactions. Build confidence before you need it most.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <CheckCircle2 className="h-6 w-6" />
                  <h3 className="font-semibold">No Risk, High Reward</h3>
                  <p className="text-sm text-primary-foreground/80">
                    Practice difficult conversations without fear of losing deals or damaging relationships
                  </p>
                </div>
                <div className="space-y-2">
                  <CheckCircle2 className="h-6 w-6" />
                  <h3 className="font-semibold">Build Muscle Memory</h3>
                  <p className="text-sm text-primary-foreground/80">
                    Repetition creates automatic responses that serve you well in high-pressure situations
                  </p>
                </div>
                <div className="space-y-2">
                  <CheckCircle2 className="h-6 w-6" />
                  <h3 className="font-semibold">Accelerate Learning</h3>
                  <p className="text-sm text-primary-foreground/80">
                    Experience months of scenarios in days, compressing your learning curve dramatically
                  </p>
                </div>
                <div className="space-y-2">
                  <CheckCircle2 className="h-6 w-6" />
                  <h3 className="font-semibold">Personalized Growth</h3>
                  <p className="text-sm text-primary-foreground/80">
                    Focus on your specific weaknesses and build on your unique strengths
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Start Practicing Today
            </h2>
            <p className="text-xl text-muted-foreground">
              Transform your sales skills through unlimited practice with AI-powered role play simulations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base">
                Try Free Simulation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-base">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Explore More Features</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Link to="/ai-coach" className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow space-y-3">
              <h3 className="text-xl font-semibold">AI Coach</h3>
              <p className="text-muted-foreground">
                Get real-time coaching guidance during live calls and personalized development plans.
              </p>
              <div className="flex items-center text-primary font-medium">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>
            <Link to="/" className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow space-y-3">
              <h3 className="text-xl font-semibold">Platform Overview</h3>
              <p className="text-muted-foreground">
                Discover all the capabilities of ReflectivAI's sales enablement platform.
              </p>
              <div className="flex items-center text-primary font-medium">
                View platform <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
