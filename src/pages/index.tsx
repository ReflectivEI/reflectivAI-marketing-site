import { ArrowRight, CheckCircle2, Brain, Target, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                  Signal Intelligence
                  <br />
                  <span className="text-primary">The Human Capability That Preserves Credibility Under Pressure</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-xl">
                  ReflectivAI helps Life Sciences sales teams detect changes in human behavior and respond in ways that preserve credibility, trust, and access.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base">
                  Request a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-base">
                  Watch Platform Tour
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden border border-border shadow-2xl">
                <img
                  src="https://img1.wsimg.com/isteam/ip/1de1dc96-7231-4608-aa4f-91d58be98037/9F4B84D2-1ED2-4E75-B3C5-EB732344F88D.png"
                  alt="ReflectivAI Platform Interface"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-20 pt-12 border-t border-border">
            <p className="text-center text-sm text-muted-foreground mb-8">Trusted by leading Life Sciences organizations</p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
              <div className="text-2xl font-semibold">Pfizer</div>
              <div className="text-2xl font-semibold">Novartis</div>
              <div className="text-2xl font-semibold">Roche</div>
              <div className="text-2xl font-semibold">AstraZeneca</div>
              <div className="text-2xl font-semibold">Merck</div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Signal Intelligence */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold">
                What is Signal Intelligence?
              </h2>
              <p className="text-xl text-muted-foreground">
                The ability to detect changes in human behavior and respond in ways that preserve credibility, trust, and access.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Not Emotion</h3>
                <p className="text-muted-foreground">
                  Signal Intelligence is about judgment, not emotional manipulation. It's the discipline of observing, interpreting, and responding to interactional cues.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Not Persuasion</h3>
                <p className="text-muted-foreground">
                  This isn't about convincing or influencing. It's about detecting signals and making informed decisions that protect professional relationships.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Human Judgment</h3>
                <p className="text-muted-foreground">
                  AI detects patterns. Humans exercise judgment. Reps choose whether to probe, pause, reframe, or move forward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why it Matters in Pharma */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Why Signal Intelligence Matters in Pharma
            </h2>
            <p className="text-xl text-muted-foreground">
              In high-expertise, regulated conversations, deals are rarely lost on data. They are lost when signals are missed.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="space-y-3 text-center">
              <div className="text-lg font-semibold text-primary">Hesitation mistaken for resistance</div>
              <p className="text-muted-foreground">When uncertainty is misread as pushback, reps over-explain and lose credibility</p>
            </div>
            <div className="space-y-3 text-center">
              <div className="text-lg font-semibold text-primary">Challenge triggering defensiveness</div>
              <p className="text-muted-foreground">When questions are met with justification instead of curiosity, trust erodes</p>
            </div>
            <div className="space-y-3 text-center">
              <div className="text-lg font-semibold text-primary">Expertise triggering status threat</div>
              <p className="text-muted-foreground">When reps position themselves above HCPs, access is quietly withdrawn</p>
            </div>
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            <div className="bg-primary text-primary-foreground rounded-xl p-8 text-center space-y-4">
              <p className="text-2xl font-bold">
                Signal Intelligence prevents silent disengagement.
              </p>
              <p className="text-lg opacity-90">
                It turns emotional and social cues into information—so professionals know when to advance, when to pause, and when to protect trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold">
                How Signal Intelligence Works
              </h2>
              <p className="text-xl text-muted-foreground">
                A simple, powerful framework for professional judgment
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <h3 className="text-2xl font-semibold">Signals</h3>
                <p className="text-muted-foreground">
                  Shifts in tone, pace, questions, interruptions, silence
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <h3 className="text-2xl font-semibold">Interpretation</h3>
                <p className="text-muted-foreground">
                  Uncertainty, overload, threat, misalignment
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <h3 className="text-2xl font-semibold">Response</h3>
                <p className="text-muted-foreground">
                  Pause, reframe, clarify, de-escalate, or proceed
                </p>
              </div>
            </div>

            <div className="bg-background border border-border rounded-lg p-8 space-y-4">
              <h4 className="text-xl font-semibold">The Role of AI</h4>
              <p className="text-muted-foreground">
                AI detects patterns in conversation data—tone shifts, pacing changes, question types. But humans exercise judgment. The rep decides whether to probe deeper, pause for clarity, reframe the conversation, or move forward with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8 Signal Intelligence Capabilities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold">8 Signal Intelligence Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The core capabilities that enable professionals to detect, interpret, and respond to human signals
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg border border-border bg-background space-y-4">
              <h3 className="text-xl font-semibold">Signal Awareness</h3>
              <p className="text-muted-foreground">
                Ask purposeful, customer-centric questions; sequence questions logically; follow up effectively
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">Question Quality</span>
              </div>
            </div>

            <div className="p-6 rounded-lg border border-border bg-background space-y-4">
              <h3 className="text-xl font-semibold">Signal Interpretation</h3>
              <p className="text-muted-foreground">
                Accurately hear, reflect, and build on customer statements; acknowledge concerns
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 bg-accent/10 text-accent rounded text-xs font-medium">Listening & Responsiveness</span>
              </div>
            </div>

            <div className="p-6 rounded-lg border border-border bg-background space-y-4">
              <h3 className="text-xl font-semibold">Value Connection</h3>
              <p className="text-muted-foreground">
                Connect offerings to customer outcomes rather than features; emphasize customer priorities
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 bg-secondary/10 text-secondary rounded text-xs font-medium">Making It Matter</span>
              </div>
            </div>

            <div className="p-6 rounded-lg border border-border bg-background space-y-4">
              <h3 className="text-xl font-semibold">Customer Engagement Monitoring</h3>
              <p className="text-muted-foreground">
                Monitor and interpret customer behavior for engagement; identify forward-looking cues
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">Customer Engagement Signals</span>
              </div>
            </div>

            <div className="p-6 rounded-lg border border-border bg-background space-y-4">
              <h3 className="text-xl font-semibold">Objection Navigation</h3>
              <p className="text-muted-foreground">
                Respond calmly to resistance; explore underlying concerns; acknowledge objections
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 bg-accent/10 text-accent rounded text-xs font-medium">Objection Navigation</span>
              </div>
            </div>

            <div className="p-6 rounded-lg border border-border bg-background space-y-4">
              <h3 className="text-xl font-semibold">Conversation Management</h3>
              <p className="text-muted-foreground">
                Guide conversation with purpose; transition smoothly; summarize and clarify next steps
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 bg-secondary/10 text-secondary rounded text-xs font-medium">Conversation Control & Structure</span>
              </div>
            </div>

            <div className="p-6 rounded-lg border border-border bg-background space-y-4">
              <h3 className="text-xl font-semibold">Commitment Generation</h3>
              <p className="text-muted-foreground">
                Secure clear, voluntary next actions; ensure mutual agreement and ownership
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">Commitment Gaining</span>
              </div>
            </div>

            <div className="p-6 rounded-lg border border-border bg-background space-y-4">
              <h3 className="text-xl font-semibold">Adaptive Response</h3>
              <p className="text-muted-foreground">
                Adjust approach based on customer signals; shift tone, depth, or pacing as needed
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 bg-accent/10 text-accent rounded text-xs font-medium">Adaptability</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Spine - Functional Elements */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold">
                The Spine: Functional Elements
              </h2>
              <p className="text-xl text-muted-foreground">
                The rigorous combination of emotional intelligence, behavioral models, and social psychology that forms the basis of Signal Intelligence
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg border border-border bg-background space-y-3">
                <h3 className="text-lg font-semibold">Cognitive Empathy / Perspective Taking</h3>
                <p className="text-sm text-muted-foreground">
                  Understanding how others think and see the world, enabling accurate interpretation of their needs and concerns
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border bg-background space-y-3">
                <h3 className="text-lg font-semibold">Metacognition & Confidence Calibration</h3>
                <p className="text-sm text-muted-foreground">
                  Awareness of one's own thinking processes and accurate assessment of knowledge and certainty
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border bg-background space-y-3">
                <h3 className="text-lg font-semibold">Emotion Regulation</h3>
                <p className="text-sm text-muted-foreground">
                  Managing emotional responses to maintain composure and effectiveness under pressure
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border bg-background space-y-3">
                <h3 className="text-lg font-semibold">Motivation, Autonomy & Commitment</h3>
                <p className="text-sm text-muted-foreground">
                  Understanding what drives action and how to foster genuine, voluntary commitment
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border bg-background space-y-3">
                <h3 className="text-lg font-semibold">Social Threat, Status & Identity</h3>
                <p className="text-sm text-muted-foreground">
                  Recognizing how status dynamics and identity concerns influence behavior and decision-making
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border bg-background space-y-3">
                <h3 className="text-lg font-semibold">Abilities-Based Emotional Intelligence</h3>
                <p className="text-sm text-muted-foreground">
                  Embedded across all functional elements, providing the psychological foundation for effective Signal Intelligence
                </p>
              </div>
            </div>

            <div className="bg-background border border-border rounded-lg p-8 space-y-4">
              <h4 className="text-xl font-semibold">Research-Backed Foundation</h4>
              <p className="text-muted-foreground">
                These functional elements are grounded in decades of research in psychology, neuroscience, and behavioral economics. They represent the internal components that make Signal Intelligence capabilities work in practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold">How ReflectivAI Supports Signal Intelligence</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              AI-powered tools that help reps detect signals, interpret behavior, and make better judgments
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Real-Time Signal Detection</h3>
              <p className="text-lg text-muted-foreground">
                Our AI analyzes tone, pace, questions, and silence during live calls. Get instant insights into customer engagement, uncertainty, or resistance—so you can respond with precision.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Detects shifts in tone, pace, and energy</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Identifies forward-looking cues vs. disengagement</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Highlights moments requiring judgment: pause, probe, or proceed</span>
                </li>
              </ul>
            </div>
            <div className="order-first lg:order-last">
              <div className="aspect-[4/3] rounded-lg overflow-hidden border border-border shadow-xl">
                <img
                  src="https://media.gettyimages.com/id/1369254937/photo/horizontal-medium-shot-of-unrecognizable-young-black-man-sitting-at-desk-in-office-working.jpg?b=1&s=2048x2048&w=0&k=20&c=O5PRzIT3KLC8_HMOhp_1kNX4e1NvGKYHgvoKy3CrCUo="
                  alt="Real-time signal detection dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
            <div className="aspect-[4/3] rounded-lg overflow-hidden border border-border shadow-xl">
              <img
                src="https://media.gettyimages.com/id/2219654302/photo/teamwork-and-support-between-two-businesswomen.jpg?b=1&s=2048x2048&w=0&k=20&c=cFc7wLmOsIlxL59pYr89OwmTiawFHUGThub24Bf2gt0="
                alt="Personalized coaching sessions"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Behavioral Coaching & Development</h3>
              <p className="text-lg text-muted-foreground">
                Build Signal Intelligence capabilities through personalized coaching paths. Practice detecting signals, interpreting behavior, and responding effectively in safe role-play scenarios.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Adaptive learning paths based on behavioral metrics</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Role-play scenarios with AI-powered feedback on observable behaviors</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Competency tracking across all 8 Signal Intelligence capabilities</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Leadership Analytics & Behavioral Metrics</h3>
              <p className="text-lg text-muted-foreground">
                Give sales leaders visibility into team Signal Intelligence capabilities. Track behavioral metrics like Question Quality, Listening & Responsiveness, and Objection Navigation across the team.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Team-wide Signal Intelligence capability benchmarking</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Observable behavior tracking and measurement indicators</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Predictive analytics for rep success and retention</span>
                </li>
              </ul>
            </div>
            <div className="order-first lg:order-last">
              <div className="aspect-[4/3] rounded-lg overflow-hidden border border-border shadow-xl">
                <img
                  src="https://media.gettyimages.com/id/1897107863/photo/part-of-office-workspace-with-laptop.jpg?b=1&s=2048x2048&w=0&k=20&c=rUJpo_-7QWmsEBDhiGqV69IgJDVPvD1ar9XSUyJ0__Y="
                  alt="Leadership analytics dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What This Is NOT */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-background border-2 border-primary rounded-xl p-8 space-y-6">
              <h2 className="text-2xl font-bold text-center">What Signal Intelligence Is NOT</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center space-y-2">
                  <div className="text-3xl">🚫</div>
                  <p className="font-semibold">Not emotional manipulation</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl">🚫</div>
                  <p className="font-semibold">Not personality scoring</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl">🚫</div>
                  <p className="font-semibold">Not "soft skills"</p>
                </div>
              </div>
              <div className="pt-4 border-t border-border text-center space-y-2">
                <p className="text-lg font-semibold text-primary">Always ethical • Always human-validated</p>
                <p className="text-muted-foreground">
                  Signal Intelligence respects autonomy, preserves dignity, and supports professional judgment—never replacing it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-muted rounded-2xl p-12 space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary">
                    JM
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-xl lg:text-2xl font-medium leading-relaxed">
                    ReflectivAI transformed how our team reads customer signals. Our reps now know when to pause, when to probe, and when to proceed with confidence. We've seen a 34% increase in close rates within six months.
                  </p>
                  <div>
                    <div className="font-semibold">Jennifer Martinez</div>
                    <div className="text-muted-foreground">VP of Sales Enablement, Global Pharma Leader</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold">
                  Ready to Build Signal Intelligence?
                </h2>
                <p className="text-xl text-muted-foreground">
                  See how ReflectivAI can help your Life Sciences organization develop the human capability that preserves credibility under pressure.
                </p>
              </div>
              <div className="space-y-4">
                <Button size="lg" className="w-full text-base">
                  Schedule a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="w-full text-base">
                  Download Case Study
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  Join 500+ Life Sciences sales teams using ReflectivAI
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
