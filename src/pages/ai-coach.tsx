import { ArrowRight, Brain, MessageSquare, TrendingUp, CheckCircle2, Target, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function AICoachPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                <Brain className="h-4 w-4" />
                Signal Intelligence™ Support
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                  AI Coach
                  <br />
                  <span className="text-primary">Your Personal Pharma Sales Coach</span>
                </h1>
                <p className="text-lg text-muted-foreground italic max-w-xl">
                  For managers and enablement leaders coaching life sciences field teams.
                </p>
                <p className="text-xl text-muted-foreground max-w-xl">
                  AI Coach highlights patterns in how conversations unfold—such as pacing, clarity, and engagement—using the Signal Intelligence™ framework. These insights support reflection and improvement, while judgment and decisions remain with the professional. Available 24/7.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base" asChild>
                  <Link to="/contact">
                    Request Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-base">
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden border border-border shadow-2xl">
                <img
                  src="https://media.gettyimages.com/id/2222332337/photo/cheerful-young-african-american-man-listing-to-a-hiring-manager-business-woman-during-job.jpg?b=1&s=2048x2048&w=0&k=20&c=uMsDL-oPZMCxQlqCjRlFFnlX28qpvRo83NIwy3X0BnI="
                  alt="AI Coach in action"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What AI Coach Does */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold">AI Detects Patterns. You Exercise Judgment.</h2>
              <p className="text-xl text-muted-foreground">
                AI Coach analyzes conversation data to surface signals—but you decide how to respond
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Activity className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Detects Signals</h3>
                <p className="text-muted-foreground">
                  Shifts in tone, pace, questions, interruptions, silence—AI identifies patterns you might miss
                </p>
              </div>
              <div className="space-y-4 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Surfaces Patterns</h3>
                <p className="text-muted-foreground">
                  Uncertainty, overload, threat, misalignment—AI highlights patterns for your reflection
                </p>
              </div>
              <div className="space-y-4 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Supports Your Decision</h3>
                <p className="text-muted-foreground">
                  You choose: pause, probe, reframe, clarify, de-escalate, or proceed—AI never decides for you
                </p>
              </div>
            </div>

            <div className="bg-muted rounded-xl p-8 space-y-4">
              <h3 className="text-xl font-semibold">Human Judgment Drives Action</h3>
              <p className="text-muted-foreground">
                AI Coach provides information and suggestions, but the rep always maintains control. This ensures accountability, authenticity, and ethical engagement. Signal Intelligence™ is about supporting professional judgment—not replacing it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Interface Features */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold">What You Can Do with AI Coach</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Access your personal coaching assistant anytime through our chat interface
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border-2 border-primary bg-blue-50 space-y-4 shadow-md hover:shadow-xl transition-shadow">
              <MessageSquare className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold">Ask Questions</h3>
              <p className="text-muted-foreground">
                Get instant answers about pharma sales techniques, objection handling, stakeholder mapping, and more
              </p>
            </div>

            <div className="p-6 rounded-xl border-2 border-primary bg-white space-y-4 shadow-md hover:shadow-xl transition-shadow">
              <Brain className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold">Get Personalized Feedback</h3>
              <p className="text-muted-foreground">
                Share your conversation scenarios and receive tailored coaching on how to improve
              </p>
            </div>

            <div className="p-6 rounded-xl border-2 border-primary bg-purple-50 space-y-4 shadow-md hover:shadow-xl transition-shadow">
              <Target className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold">Practice Scenarios</h3>
              <p className="text-muted-foreground">
                Work through challenging situations with guidance before facing them in real calls
              </p>
            </div>

            <div className="p-6 rounded-xl border-2 border-primary bg-white space-y-4 shadow-md hover:shadow-xl transition-shadow">
              <TrendingUp className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold">Track Your Progress</h3>
              <p className="text-muted-foreground">
                Review coaching insights and see how your skills develop across all 8 Signal Intelligence™ Capabilities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Signal Intelligence™ Capabilities Supported */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold">8 Signal Intelligence™ Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              AI Coach helps professionals develop all 8 Signal Intelligence™ Capabilities with scored feedback
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="space-y-3 p-6 rounded-xl border-2 border-primary bg-blue-50 shadow-md hover:shadow-xl transition-shadow">
              <div className="text-2xl font-bold text-primary">1</div>
              <h3 className="text-lg font-semibold">Signal Awareness</h3>
              <p className="text-xs text-muted-foreground">Question Quality</p>
              <p className="text-sm text-muted-foreground">
                How effectively questions uncover customer needs and priorities
              </p>
            </div>

            <div className="space-y-3 p-6 rounded-xl border-2 border-primary bg-white shadow-md hover:shadow-xl transition-shadow">
              <div className="text-2xl font-bold text-primary">2</div>
              <h3 className="text-lg font-semibold">Signal Interpretation</h3>
              <p className="text-xs text-muted-foreground">Listening & Responsiveness</p>
              <p className="text-sm text-muted-foreground">
                How well you listen and respond to customer signals
              </p>
            </div>

            <div className="space-y-3 p-6 rounded-xl border-2 border-primary bg-purple-50 shadow-md hover:shadow-xl transition-shadow">
              <div className="text-2xl font-bold text-primary">3</div>
              <h3 className="text-lg font-semibold">Value Connection</h3>
              <p className="text-xs text-muted-foreground">Value Framing</p>
              <p className="text-sm text-muted-foreground">
                How effectively you connect product benefits to customer priorities
              </p>
            </div>

            <div className="space-y-3 p-6 rounded-xl border-2 border-primary bg-white shadow-md hover:shadow-xl transition-shadow">
              <div className="text-2xl font-bold text-primary">4</div>
              <h3 className="text-lg font-semibold">Customer Engagement Monitoring</h3>
              <p className="text-xs text-muted-foreground">Customer Engagement Cues</p>
              <p className="text-sm text-muted-foreground">
                How well you detect and respond to customer interest and concern
              </p>
            </div>

            <div className="space-y-3 p-6 rounded-xl border-2 border-primary bg-blue-50 shadow-md hover:shadow-xl transition-shadow">
              <div className="text-2xl font-bold text-primary">5</div>
              <h3 className="text-lg font-semibold">Objection Navigation</h3>
              <p className="text-xs text-muted-foreground">Objection Handling</p>
              <p className="text-sm text-muted-foreground">
                How effectively you address customer concerns and objections
              </p>
            </div>

            <div className="space-y-3 p-6 rounded-xl border-2 border-primary bg-white shadow-md hover:shadow-xl transition-shadow">
              <div className="text-2xl font-bold text-primary">6</div>
              <h3 className="text-lg font-semibold">Conversation Management</h3>
              <p className="text-xs text-muted-foreground">Conversation Control & Structure</p>
              <p className="text-sm text-muted-foreground">
                How well you guide conversation flow and maintain focus
              </p>
            </div>

            <div className="space-y-3 p-6 rounded-xl border-2 border-primary bg-purple-50 shadow-md hover:shadow-xl transition-shadow">
              <div className="text-2xl font-bold text-primary">7</div>
              <h3 className="text-lg font-semibold">Adaptive Response</h3>
              <p className="text-xs text-muted-foreground">Adaptability</p>
              <p className="text-sm text-muted-foreground">
                How well you adjust approach based on customer reactions
              </p>
            </div>

            <div className="space-y-3 p-6 rounded-xl border-2 border-primary bg-white shadow-md hover:shadow-xl transition-shadow">
              <div className="text-2xl font-bold text-primary">8</div>
              <h3 className="text-lg font-semibold">Commitment Generation</h3>
              <p className="text-xs text-muted-foreground">Commitment Gaining</p>
              <p className="text-sm text-muted-foreground">
                How effectively you secure clear next steps and commitments
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground italic max-w-2xl mx-auto">
              If a response would feel inappropriate if the roles were reversed, it is outside the Signal Intelligence™ boundary.
            </p>
          </div>
        </div>
      </section>

      {/* How the Coach Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold">How the Coach Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              AI Coach analyzes conversations using the 8 Signal Intelligence™ Capabilities to provide scored, actionable feedback
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-12">
            {/* Signal Intelligence™ Dimensions */}
            <div className="bg-muted rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">8 Signal Intelligence™ Capabilities</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-lg bg-background border border-border text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1</div>
                  <div className="text-sm font-semibold">Signal Awareness</div>
                </div>
                <div className="p-4 rounded-lg bg-background border border-border text-center">
                  <div className="text-3xl font-bold text-primary mb-2">2</div>
                  <div className="text-sm font-semibold">Signal Interpretation</div>
                </div>
                <div className="p-4 rounded-lg bg-background border border-border text-center">
                  <div className="text-3xl font-bold text-primary mb-2">3</div>
                  <div className="text-sm font-semibold">Value Connection</div>
                </div>
                <div className="p-4 rounded-lg bg-background border border-border text-center">
                  <div className="text-3xl font-bold text-primary mb-2">4</div>
                  <div className="text-sm font-semibold">Customer Engagement Monitoring</div>
                </div>
                <div className="p-4 rounded-lg bg-background border border-border text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5</div>
                  <div className="text-sm font-semibold">Objection Navigation</div>
                </div>
                <div className="p-4 rounded-lg bg-background border border-border text-center">
                  <div className="text-3xl font-bold text-primary mb-2">6</div>
                  <div className="text-sm font-semibold">Conversation Management</div>
                </div>
                <div className="p-4 rounded-lg bg-background border border-border text-center">
                  <div className="text-3xl font-bold text-primary mb-2">7</div>
                  <div className="text-sm font-semibold">Adaptive Response</div>
                </div>
                <div className="p-4 rounded-lg bg-background border border-border text-center">
                  <div className="text-3xl font-bold text-primary mb-2">8</div>
                  <div className="text-sm font-semibold">Commitment Generation</div>
                </div>
              </div>
            </div>

            {/* Real-Time Coaching Cards */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-center">Real-Time Coaching Cards</h3>
              <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
                The moment you hit "Send," the system evaluates clinical precision, behavioral signals, regulatory alignment, and conversational strategy—organizing observable behaviors into Signal Intelligence™ domains to support reflection and coaching.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="p-6 rounded-lg border-2 border-green-500/30 bg-green-500/5">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold">Responsiveness</h4>
                    <div className="text-lg font-semibold text-green-600">Consistently strong</div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Strong acknowledgment: "So you're concerned about patient adherence with twice-daily dosing?" This shows you're building on their input.
                  </p>
                </div>

                <div className="p-6 rounded-lg border-2 border-green-500/30 bg-green-500/5">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold">Communication Clarity</h4>
                    <div className="text-lg font-semibold text-green-600">Generally strong</div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Clear structure. Your explanation was easy to follow and you addressed the key concern directly.
                  </p>
                </div>

                <div className="p-6 rounded-lg border-2 border-yellow-500/30 bg-yellow-500/5">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold">Intent Alignment</h4>
                    <div className="text-lg font-semibold text-yellow-600">Inconsistent</div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    You stayed mostly on purpose, but consider tightening the focus: "Let's return to the efficacy data you asked about."
                  </p>
                </div>

                <div className="p-6 rounded-lg border-2 border-green-500/30 bg-green-500/5">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold">Outcome Orientation</h4>
                    <div className="text-lg font-semibold text-green-600">Generally strong</div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Excellent close: "Would it make sense to schedule a follow-up after you've reviewed the data?" Clear next step.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EI in Practice */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold">How It Works: Detect, Analyze, Support</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Signal Intelligence™ captures observable patterns in your conversation. AI Coach highlights what happened and suggests what it might mean—but you decide how to respond.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-8">
              <div className="p-6 rounded-lg border border-border bg-background space-y-4">
                <h3 className="text-xl font-semibold">Regulate Tone Under Pressure</h3>
                <p className="text-muted-foreground">
                  Learn to stay calm and confident when HCPs push back or challenge your message.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border bg-background space-y-4">
                <h3 className="text-xl font-semibold">Detect Engagement Signals</h3>
                <p className="text-muted-foreground">
                  Recognize hesitation, skepticism, or interest in HCP responses and adjust your approach accordingly.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border bg-background space-y-4">
                <h3 className="text-xl font-semibold">Respond with Understanding</h3>
                <p className="text-muted-foreground">
                  Acknowledge HCP concerns while guiding back to approved, compliant messaging.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[3/4] rounded-lg overflow-hidden border border-border shadow-2xl">
                <img
                  src="https://img1.wsimg.com/isteam/ip/1de1dc96-7231-4608-aa4f-91d58be98037/9F4B84D2-1ED2-4E75-B3C5-EB732344F88D.png"
                  alt="AI Coach providing real-time Signal Intelligence™ feedback"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto hidden">

          </div>

          <div className="mt-12 text-center max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground">
              The Coach doesn't just score you—it teaches you. With every simulation, reps build muscle memory for signal-aware conversations that drive trust, adherence, and long-term HCP relationships.
            </p>
          </div>
        </div>
      </section>

      {/* Real-Time, Actionable Coaching */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-5xl font-bold">Real-Time, Actionable Coaching</h2>
            <p className="text-xl text-muted-foreground">
              The Coach doesn't just score you—it teaches you. With every simulation, reps build muscle memory for signal-aware conversations that drive trust, adherence, and long-term HCP relationships.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold">AI Coach in Action</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real scenarios where Signal Intelligence™ makes the difference
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-lg border border-border bg-background space-y-4">
              <h3 className="text-xl font-bold">Pre-Call Preparation</h3>
              <p className="text-muted-foreground">
                Before important meetings, AI Coach provides customer history, past signal patterns, and suggests conversation strategies based on previous interactions and behavioral profiles.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Customer engagement history and signal patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Suggested question sequences for Signal Awareness</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Objection Navigation preparation based on past concerns</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-lg border border-border bg-background space-y-4">
              <h3 className="text-xl font-bold">During Practice Sessions</h3>
              <p className="text-muted-foreground">
                Practice with simulated conversations. AI Coach highlights patterns in tone, pacing, and engagement. You reflect on what these patterns might mean and decide how to respond.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Pattern detection during practice sessions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Response options: pause, probe, reframe, or proceed</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Behavioral pattern highlights for reflection</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-lg border border-border bg-background space-y-4">
              <h3 className="text-xl font-bold">Post-Call Review</h3>
              <p className="text-muted-foreground">
                After each interaction, receive detailed feedback on Signal Intelligence™ Capabilities: which signals you detected, how you interpreted them, and how effectively you responded.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Pattern recognition and opportunities for reflection</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Observable behaviors: Question Quality, Listening, Objection Navigation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Specific coaching on Signal Intelligence™ Capabilities</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-lg border border-border bg-background space-y-4">
              <h3 className="text-xl font-bold">Ongoing Development</h3>
              <p className="text-muted-foreground">
                Access personalized training on Signal Intelligence™ Capabilities, practice scenarios with AI feedback, and track your development across all 8 capabilities over time.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Customized learning paths for each capability</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Capability gap analysis and recommendations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Progress tracking with observable behaviors</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ethics Statement */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-3">
            <p className="text-lg font-semibold text-primary">Always ethical • Always human-validated</p>
            <p className="text-muted-foreground">
              Signal Intelligence™ respects autonomy, preserves dignity, and supports professional judgment—never replacing it.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Ready to Build Signal Intelligence™?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Join hundreds of Life Sciences sales professionals developing the human capability that preserves credibility under pressure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-base" asChild>
                <Link to="/contact">
                  Schedule a Signal Intelligence™ walkthrough
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base border-primary-foreground/20 hover:bg-primary-foreground/10">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Features */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Explore More Features</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Link to="/role-play" className="p-6 rounded-lg border border-border bg-background hover:shadow-lg transition-shadow space-y-3">
              <h3 className="text-xl font-semibold">Role Play Simulation</h3>
              <p className="text-muted-foreground">
                Practice detecting and responding to signals in safe, AI-powered scenarios with instant behavioral feedback.
              </p>
              <div className="flex items-center text-primary font-medium">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>
            <Link to="/" className="p-6 rounded-lg border border-border bg-background hover:shadow-lg transition-shadow space-y-3">
              <h3 className="text-xl font-semibold">Platform Overview</h3>
              <p className="text-muted-foreground">
                Discover how ReflectivAI supports all 8 Signal Intelligence™ Capabilities across your sales team.
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
