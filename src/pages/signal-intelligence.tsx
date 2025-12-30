import { ArrowRight, Brain, Target, TrendingUp, CheckCircle2, Lightbulb, Users, BarChart3, FileText, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function SignalIntelligencePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                <Brain className="h-4 w-4" />
                The Core Framework
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                  Signal Intelligence™
                  <br />
                  <span className="text-primary">Observable Behavioral Signals</span>
                </h1>
                <p className="text-lg text-muted-foreground italic max-w-xl">
                  The foundation of adaptive, signal-driven practice for life sciences teams.
                </p>
                <p className="text-xl text-muted-foreground max-w-xl">
                  Signal Intelligence™ identifies meaningful behavioral patterns in customer conversations—what they say, how they respond, and when engagement shifts. No psychological profiling. No employment decisions. Just observable signals that guide better conversations.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base" asChild>
                  <a href="/signal-intelligence-learn-more.html" target="_blank" rel="noopener noreferrer">
                    <FileText className="mr-2 h-5 w-5" />
                    View Full Documentation
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-base" asChild>
                  <Link to="/contact">
                    Request Demo
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden border border-border shadow-2xl">
                <img
                  src="https://media.gettyimages.com/id/1456153632/photo/business-people-meeting-and-discussing-strategy-in-office.jpg?b=1&s=2048x2048&w=0&k=20&c=VeMue_yQ8R5vGPFKZxqQ8R0qN8sN0YvqxqQxqQxqQxo="
                  alt="Signal Intelligence Framework"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Link Section */}
      <section className="py-12 bg-primary/5 border-y border-primary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-lg bg-white border-2 border-primary/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Complete Framework Documentation</h3>
                  <p className="text-muted-foreground">
                    Access the full Signal Intelligence™ framework guide with detailed explanations, examples, and implementation guidelines.
                  </p>
                </div>
              </div>
              <Button size="lg" className="flex-shrink-0" asChild>
                <a href="/signal-intelligence-learn-more.html" target="_blank" rel="noopener noreferrer">
                  View Documentation
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Signal Intelligence */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold">What is Signal Intelligence™?</h2>
              <p className="text-xl text-muted-foreground">
                A framework for detecting and responding to observable behavioral cues in customer conversations
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Signal Intelligence™ is ReflectivAI's proprietary framework for identifying meaningful behavioral patterns during practice sessions. It analyzes what customers say, how they respond, and when engagement shifts—providing real-time guidance to help sales professionals adapt their approach.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Observable Signals Only</h3>
                      <p className="text-muted-foreground">
                        We detect behavioral cues—tone shifts, question patterns, engagement indicators—not psychological states or personality traits.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Practice-Only Focus</h3>
                      <p className="text-muted-foreground">
                        Signal Intelligence™ is used exclusively during practice sessions—never on live customer calls.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Guidance, Not Judgment</h3>
                      <p className="text-muted-foreground">
                        Insights support reflection and improvement—professional judgment and decisions remain with the individual.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Human-Centered Design</h3>
                      <p className="text-muted-foreground">
                        Built to augment human capability, not replace it. Respects autonomy and preserves dignity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 8 Core Capabilities */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold">The 8 Core Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Observable, behavioral outcomes that drive measurable performance improvement
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Metric 1: Question Quality */}
            <div className="p-6 rounded-xl border-2 border-primary bg-white space-y-3 hover:shadow-xl transition-shadow shadow-md">
              <div className="text-4xl font-bold text-primary">92%</div>
              <div className="text-sm font-semibold text-foreground">Question Quality</div>
              <p className="text-xs text-muted-foreground">Open-ended, diagnostic questions that uncover needs</p>
            </div>

            {/* Metric 2: Listening & Responsiveness */}
            <div className="p-6 rounded-xl border-2 border-primary bg-white space-y-3 hover:shadow-xl transition-shadow shadow-md">
              <div className="text-4xl font-bold text-primary">88%</div>
              <div className="text-sm font-semibold text-foreground">Listening & Responsiveness</div>
              <p className="text-xs text-muted-foreground">Paraphrasing, acknowledging, building on customer input</p>
            </div>

            {/* Metric 3: Customer Engagement Cues */}
            <div className="p-6 rounded-xl border-2 border-primary bg-white space-y-3 hover:shadow-xl transition-shadow shadow-md">
              <div className="text-4xl font-bold text-primary">91%</div>
              <div className="text-sm font-semibold text-foreground">Customer Engagement Cues</div>
              <p className="text-xs text-muted-foreground">Detecting and responding to customer interest and resistance</p>
            </div>

            {/* Metric 4: Conversation Control & Structure */}
            <div className="p-6 rounded-xl border-2 border-primary bg-white space-y-3 hover:shadow-xl transition-shadow shadow-md">
              <div className="text-4xl font-bold text-primary">85%</div>
              <div className="text-sm font-semibold text-foreground">Conversation Control & Structure</div>
              <p className="text-xs text-muted-foreground">Guiding dialogue without dominating or losing direction</p>
            </div>

            {/* Metric 5: Objection Handling */}
            <div className="p-6 rounded-xl border-2 border-primary bg-white space-y-3 hover:shadow-xl transition-shadow shadow-md">
              <div className="text-4xl font-bold text-primary">87%</div>
              <div className="text-sm font-semibold text-foreground">Objection Handling</div>
              <p className="text-xs text-muted-foreground">Addressing concerns without defensiveness or avoidance</p>
            </div>

            {/* Metric 6: Adaptability */}
            <div className="p-6 rounded-xl border-2 border-primary bg-white space-y-3 hover:shadow-xl transition-shadow shadow-md">
              <div className="text-4xl font-bold text-primary">90%</div>
              <div className="text-sm font-semibold text-foreground">Adaptability</div>
              <p className="text-xs text-muted-foreground">Adjusting tone, pace, and approach based on signals</p>
            </div>

            {/* Metric 7: Value Framing (Making It Matter) */}
            <div className="p-6 rounded-xl border-2 border-primary bg-white space-y-3 hover:shadow-xl transition-shadow shadow-md">
              <div className="text-4xl font-bold text-primary">86%</div>
              <div className="text-sm font-semibold text-foreground">Value Framing (Making It Matter)</div>
              <p className="text-xs text-muted-foreground">Connecting information to outcomes that matter to customers</p>
            </div>

            {/* Metric 8: Commitment Gaining */}
            <div className="p-6 rounded-xl border-2 border-primary bg-white space-y-3 hover:shadow-xl transition-shadow shadow-md">
              <div className="text-4xl font-bold text-primary">83%</div>
              <div className="text-sm font-semibold text-foreground">Commitment Gaining</div>
              <p className="text-xs text-muted-foreground">Securing clear, voluntary next actions with mutual agreement</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold">How Signal Intelligence™ Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From observable signals to informed action
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">1. Observable Signals</h3>
              <p className="text-muted-foreground">
                What customers say, how they respond, engagement shifts
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">2. AI Signal Detection</h3>
              <p className="text-muted-foreground">
                Identifies meaningful behavioral changes, separates signal from noise
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">3. Behavioral Guidance</h3>
              <p className="text-muted-foreground">
                Indicates when to advance, pause, protect credibility
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">4. Measured Outcomes</h3>
              <p className="text-muted-foreground">
                Stronger conversations, clearer next steps, consistent performance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Signal Intelligence is NOT */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold">What Signal Intelligence™ is NOT</h2>
              <p className="text-xl text-muted-foreground">
                Clear boundaries and ethical commitments
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg border-2 border-destructive/20 bg-white space-y-3">
                <div className="text-destructive font-semibold">NOT Psychological Profiling</div>
                <p className="text-sm text-muted-foreground">
                  We do not assess personality, emotional states, or psychological traits. Only observable behavioral patterns.
                </p>
              </div>

              <div className="p-6 rounded-lg border-2 border-destructive/20 bg-white space-y-3">
                <div className="text-destructive font-semibold">NOT Used for Employment Decisions</div>
                <p className="text-sm text-muted-foreground">
                  Signal Intelligence™ is a training tool, not an evaluation system. It does not inform hiring, firing, or promotion decisions.
                </p>
              </div>

              <div className="p-6 rounded-lg border-2 border-destructive/20 bg-white space-y-3">
                <div className="text-destructive font-semibold">NOT Live Call Monitoring</div>
                <p className="text-sm text-muted-foreground">
                  Used exclusively during practice sessions with AI role-play scenarios—never on actual customer calls.
                </p>
              </div>

              <div className="p-6 rounded-lg border-2 border-destructive/20 bg-white space-y-3">
                <div className="text-destructive font-semibold">NOT Predictive Analytics</div>
                <p className="text-sm text-muted-foreground">
                  We analyze current behavioral patterns to support immediate improvement—not predict future success or retention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Experience Signal Intelligence™ in Action
            </h2>
            <p className="text-xl opacity-90">
              See how observable behavioral signals transform practice sessions into measurable performance gains.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-base" asChild>
                <Link to="/contact">
                  Request Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/role-play">
                  Try Role Play
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
