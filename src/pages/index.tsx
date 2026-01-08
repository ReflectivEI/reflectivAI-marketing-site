'use client';

import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { AnimatedStats } from '@/components/AnimatedStats';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { CTASection } from '@/components/CTASection';
import { LiveMetricsDashboard } from '@/components/LiveMetricsDashboard';
import { LiveActivityFeed } from '@/components/LiveActivityFeed';
import { ROICalculator } from '@/components/ROICalculator';
import { SocialProofTicker } from '@/components/SocialProofTicker';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 lg:py-32" style={{ backgroundColor: 'hsl(210, 50%, 20%)' }}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              {/* Lead-in Caption */}
              <div className="text-[15px] md:text-[17px] uppercase tracking-[0.06em] font-medium text-[hsl(180,50%,45%)]">
                Decision support for real customer interactions
              </div>
              
              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] max-w-3xl" style={{ color: 'hsl(0, 0%, 100%)' }}>
                ReflectivAI: Supporting Decisions in the Moments That Matter
              </h1>
              
              {/* Sub-headline */}
              <p className="text-xl md:text-2xl leading-[1.4] max-w-[640px]" style={{ color: 'hsl(0, 0%, 90%)' }}>
                ReflectivAI helps Life Sciences commercial teams navigate live customer interactions — supporting confident decision-making without changing how they already sell.
              </p>
              
              {/* Supporting Line */}
              <p className="text-base leading-[1.5] max-w-[640px]" style={{ color: 'hsl(0, 0%, 80%)' }}>
                Built on Signal Intelligence. Designed to fit your existing selling structure.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button size="lg" className="text-base hover:bg-[hsl(180,50%,45%)] hover:text-[hsl(0,0%,100%)] transition-colors duration-200 ease-out" asChild>
                  <Link to="/demo">
                    See How It Works
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-base border border-[hsl(180,50%,45%)] text-[hsl(180,50%,45%)] hover:bg-[hsl(180,50%,45%)] hover:text-[hsl(0,0%,100%)] transition-colors duration-200 ease-out" asChild>
                  <Link to="/signal-intelligence">
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="order-first lg:order-last">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://img1.wsimg.com/isteam/ip/1de1dc96-7231-4608-aa4f-91d58be98037/IMG_9247.jpeg"
                  alt="ReflectivAI Platform"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: What Gets Missed in High-Stakes Conversations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-5xl font-bold max-w-4xl mx-auto leading-tight text-center">
              What Gets Missed in High-Stakes Conversations
            </h2>
            
            <div className="space-y-4 text-lg text-foreground/90">
              <p>
                Subtle shifts in engagement often determine whether conversations advance—or quietly stall.
              </p>
              
              <p>
                In regulated, expert-to-expert conversations, outcomes rarely hinge on effort or product knowledge alone.
              </p>
              
              <p>
                They hinge on judgment—specifically, how well small changes in behavior, engagement, and confidence are noticed and responded to in the moment.
              </p>
              
              <p>
                Even experienced professionals can misread these signals under pressure. When that happens, trust, credibility, or access can erode quietly—without a clear misstep.
              </p>
              
              <p className="font-semibold">
                Most coaching tools aren't built to help:
              </p>
              
              <ul className="space-y-2 pl-6">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>They measure activity, not judgment</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>They emphasize compliance, not conversational quality</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>They reduce critical interpersonal decisions to "soft skills" that are difficult to see, coach, or improve</span>
                </li>
              </ul>
              
              <p>
                The issue isn't capability.
              </p>
              
              <p className="font-semibold">
                It's that the decisions that matter most in these interactions remain largely invisible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transition Statement */}
      <section className="py-12" style={{ backgroundColor: 'hsl(210, 50%, 20%)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" style={{ color: 'hsl(0, 0%, 100%)' }}>
              Human judgment, made visible.
            </h2>
            <p className="text-2xl md:text-3xl font-semibold" style={{ color: 'hsl(180, 50%, 45%)' }}>
              AI, responsibly applied.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Where Judgment Comes Into Focus */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-foreground/90">
            <p>
              Signal Intelligence™ helps professionals recognize what's changing in a conversation and respond in ways that preserve trust, credibility, and access.
            </p>
            
            <p>
              It brings visibility to the moments where judgment is exercised during high-stakes conversations—moments that are often difficult to see, discuss, or improve.
            </p>
            
            <p>
              By making these moments visible, Signal Intelligence allows professional judgment to be understood, coached, and strengthened over time, without reducing complex interactions to activity metrics or automated decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Section: What Signal Intelligence Looks Like in Practice */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg text-foreground/90">
              Signal Intelligence isn't a mindset or a personality trait. It's visible in how conversations unfold.
            </p>
            
            <ul className="space-y-3 text-lg text-foreground/90 pl-6">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Asking purposeful, customer-centric questions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Listening accurately and responding appropriately</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Recognizing engagement shifts and adjusting in real time</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Navigating resistance without pressure</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Securing clear, voluntary next steps</span>
              </li>
            </ul>
            
            <p className="text-lg text-foreground/90 font-semibold">
              These behaviors are observable, coachable, and measurable.
            </p>

            {/* Signal Intelligence Demo Video - Vimeo Embed */}
            <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
              <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                <iframe
                  src="https://player.vimeo.com/video/1152490995?badge=0&autopause=0&player_id=0&app_id=58479"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  title="Signal Intelligence Demo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: How ReflectivAI Applies Signal Intelligence */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-foreground/90">
            <p>
              ReflectivAI applies Signal Intelligence by making the moments that matter visible and coachable, while keeping professional decision-making firmly in human hands.
            </p>
            
            <p>
              It does this by analyzing observable interaction patterns to surface meaningful signals, providing structured insight into how conversations unfold without inferring intent, emotion, or motivation.
            </p>
            
            <p>
              The result is clearer understanding of decision-making in real interactions, and more consistent, confident judgment over time, supported by AI and governed by professionals.
            </p>
            
            <p className="font-semibold">
              One way ReflectivAI applies Signal Intelligence safely is through structured practice and coaching.
            </p>
          </div>
        </div>
      </section>

      {/* Structured Practice and Coaching (How It Works) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold max-w-3xl mx-auto leading-tight">Structured Practice and Coaching</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                During role-play practice, ReflectivAI highlights patterns in how conversations unfold—such as pacing, clarity, and engagement—using the Signal Intelligence™ framework. These insights support reflection and improvement, while judgment and decisions remain with the professional.
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
                Reps practice in simulated conversations. After each session, ReflectivAI organizes observable behaviors into Signal Intelligence™ domains to support reflection and coaching. Managers use coaching cards in 1:1s and training programs. Signal Intelligence™ is used in structured practice sessions, not on live customer calls.
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
                For sales professionals, these insights reveal where conversations stay aligned with purpose—and where hesitation, overload, or disengagement may be emerging before deals are at risk.
              </p>
            </div>

            {/* Visual Workflow */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold">Practice</h3>
                <p className="text-muted-foreground">
                  Reps engage in realistic role-play scenarios
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold">Analyze</h3>
                <p className="text-muted-foreground">
                  AI organizes observable behaviors into Signal Intelligence™ domains
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold">Coach</h3>
                <p className="text-muted-foreground">
                  Managers use insights in 1:1s and training programs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Approach-Agnostic by Design */}
      <section className="py-20" style={{ backgroundColor: 'hsl(210, 50%, 20%)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-5xl font-bold max-w-4xl mx-auto leading-tight text-center" style={{ color: 'hsl(0, 0%, 100%)' }}>
              Approach-Agnostic by Design
            </h2>
            
            <div className="space-y-4 text-lg" style={{ color: 'hsl(0, 0%, 90%)' }}>
              <p>
                Signal Intelligence strengthens how judgment is exercised during conversations—regardless of the selling approach or framework in use.
              </p>
              
              <p>
                It works within any approach—formal or informal—by improving how signals are recognized and responded to during the interaction.
              </p>
              
              <p>
                Whether teams follow a defined methodology or rely on individual expertise, Signal Intelligence complements existing practices without requiring change or disruption.
              </p>
            </div>
            
            <div className="text-center mt-8">
              <Link to="/signal-intelligence" className="text-lg font-medium" style={{ color: 'hsl(180, 50%, 45%)' }}>
                Learn more about how Signal Intelligence fits the way you already sell →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TEMPORARILY HIDDEN — "Designed to Fit How You Already Sell" Section */}
      {/* This section teaches the hierarchy: Selling Structure (WHAT) vs Signal Intelligence (HOW) */}
      {/* Can be re-enabled by uncommenting this block */}
      {/*
      <section className="py-20" style={{ backgroundColor: 'hsl(210, 50%, 20%)' }}>
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold text-white max-w-4xl mx-auto leading-tight">Designed to Fit How You Already Sell</h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Signal Intelligence™ strengthens execution without changing your selling model.
              </p>
              <p className="text-lg text-white/90 max-w-3xl mx-auto mt-4">
                Most Life Sciences organizations already have an established way of defining good selling — whether through a formal framework or an agreed set of practices.
              </p>
              <p className="text-lg text-white/90 max-w-3xl mx-auto mt-2">
                Signal Intelligence™ brings that structure into live customer interactions — where judgment and timing matter most.
              </p>
              <p className="text-lg text-white/90 max-w-3xl mx-auto mt-2">
                How you define great selling stays the same.
                Signal Intelligence™ supports how it is applied in the moment.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white rounded-xl p-8 space-y-4">
                <div className="inline-block px-3 py-1 bg-primary text-white text-sm font-semibold rounded mb-2">WHAT</div>
                <h3 className="text-2xl font-bold text-primary">Your Selling Structure Defines the Foundation</h3>
                <p className="text-primary/90">Across Life Sciences organizations, selling frameworks provide consistency. They define:</p>
                <ul className="space-y-2 text-primary/90">
                  <li className="flex items-start"><span className="mr-2">•</span><span>Stages and behaviors</span></li>
                  <li className="flex items-start"><span className="mr-2">•</span><span>Best-practice actions</span></li>
                  <li className="flex items-start"><span className="mr-2">•</span><span>Standards for success</span></li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-8 space-y-4">
                <div className="inline-block px-3 py-1 bg-primary text-white text-sm font-semibold rounded mb-2">HOW</div>
                <h3 className="text-2xl font-bold text-primary">Signal Intelligence™ Supports Real-Time Execution</h3>
                <p className="text-primary/90">Signal Intelligence™ helps professionals apply their selling structure in live interactions by:</p>
                <ul className="space-y-2 text-primary/90">
                  <li className="flex items-start"><span className="mr-2">•</span><span>Making engagement patterns visible</span></li>
                  <li className="flex items-start"><span className="mr-2">•</span><span>Supporting confident decision-making</span></li>
                  <li className="flex items-start"><span className="mr-2">•</span><span>Strengthening judgment in the moment</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Animated Stats */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <AnimatedStats />
        </div>
      </section>

      {/* TEMPORARILY HIDDEN — "Everything You Need to Excel" Section */}
      {/* Platform capabilities overview with feature cards */}
      {/* Can be re-enabled by uncommenting this block */}
      {/*
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold max-w-3xl mx-auto leading-tight">Everything You Need to Excel</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A complete platform for developing Signal Intelligence™ across your commercial organization.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8 space-y-4 border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold">AI Coach</h3>
              <p className="text-muted-foreground">Real-time guidance during customer interactions</p>
            </div>
            <div className="bg-card rounded-xl p-8 space-y-4 border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🎭</span>
              </div>
              <h3 className="text-2xl font-bold">Role Play</h3>
              <p className="text-muted-foreground">Practice scenarios with AI-powered feedback</p>
            </div>
            <div className="bg-card rounded-xl p-8 space-y-4 border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold">Analytics</h3>
              <p className="text-muted-foreground">Track behavioral patterns and development</p>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Live Metrics Dashboard */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <LiveMetricsDashboard />
        </div>
      </section>

      {/* TEMPORARILY HIDDEN — "Real-Time Coaching in Action" Section */}
      {/* Interactive coaching scenario cards */}
      {/* Can be re-enabled by uncommenting this block */}
      {/*
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold max-w-3xl mx-auto leading-tight">Real-Time Coaching in Action</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how Signal Intelligence™ supports professionals during live customer interactions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl p-8 space-y-4 border border-border">
              <h3 className="text-2xl font-bold">Detecting Engagement Shifts</h3>
              <p className="text-muted-foreground">
                When a customer's engagement changes, the AI highlights the pattern and suggests response strategies.
              </p>
            </div>
            <div className="bg-card rounded-xl p-8 space-y-4 border border-border">
              <h3 className="text-2xl font-bold">Navigating Resistance</h3>
              <p className="text-muted-foreground">
                Real-time guidance helps professionals respond to objections without applying pressure.
              </p>
            </div>
            <div className="bg-card rounded-xl p-8 space-y-4 border border-border">
              <h3 className="text-2xl font-bold">Securing Next Steps</h3>
              <p className="text-muted-foreground">
                Coaching supports professionals in establishing clear, voluntary commitments.
              </p>
            </div>
            <div className="bg-card rounded-xl p-8 space-y-4 border border-border">
              <h3 className="text-2xl font-bold">Building Rapport</h3>
              <p className="text-muted-foreground">
                Insights help professionals recognize and strengthen customer relationships.
              </p>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* TEMPORARILY HIDDEN — "Explore Signal Intelligence in Practice" Section */}
      {/* Interactive demo showcase */}
      {/* Can be re-enabled by uncommenting this block */}
      {/*
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl lg:text-5xl font-bold max-w-4xl mx-auto leading-tight">Explore Signal Intelligence™ in Practice</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience how ReflectivAI supports decision-making in real customer interactions.
          </p>
          <div className="pt-8">
            <Button size="lg" asChild>
              <Link to="/demo">
                Try Interactive Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      */}

      {/* ROI Calculator */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <ROICalculator />
        </div>
      </section>

      {/* Social Proof Ticker */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <SocialProofTicker />
        </div>
      </section>

      {/* TEMPORARILY HIDDEN — Live Activity Feed */}
      {/* Can be re-enabled by uncommenting this block */}
      {/*
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <LiveActivityFeed />
        </div>
      </section>
      */}

      {/* TEMPORARILY HIDDEN — "How ReflectivAI Supports Signal Intelligence" Section */}
      {/* Platform support capabilities with feature breakdown */}
      {/* Can be re-enabled by uncommenting this block */}
      {/*
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold max-w-5xl mx-auto leading-tight">How ReflectivAI Supports Signal Intelligence™</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Three integrated capabilities that strengthen judgment and execution.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8 space-y-4 border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-3xl font-bold">Real-Time Signal Detection</h3>
              <p className="text-muted-foreground">
                AI analyzes conversation patterns and highlights engagement shifts, helping professionals recognize critical moments.
              </p>
            </div>
            <div className="bg-card rounded-xl p-8 space-y-4 border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-3xl font-bold">Behavioral Coaching & Development</h3>
              <p className="text-muted-foreground">
                Structured practice scenarios with AI feedback help teams develop Signal Intelligence™ skills.
              </p>
            </div>
            <div className="bg-card rounded-xl p-8 space-y-4 border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-3xl font-bold">Leadership Analytics & Behavioral Metrics</h3>
              <p className="text-muted-foreground">
                Aggregate behavioral patterns help leaders understand team development and coaching needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* TEMPORARILY HIDDEN — "Ethics, Privacy & Governance" Section */}
      {/* Trust and transparency information */}
      {/* Can be re-enabled by uncommenting this block */}
      {/*
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold max-w-3xl mx-auto leading-tight">Ethics, Privacy & Governance</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              ReflectivAI is built on principles of responsible AI, data privacy, and transparent governance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 space-y-4">
              <h3 className="text-2xl font-bold">Data Privacy</h3>
              <p className="text-muted-foreground">
                All customer data is encrypted, anonymized, and stored securely. We never share data without explicit consent.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 space-y-4">
              <h3 className="text-2xl font-bold">Transparent AI</h3>
              <p className="text-muted-foreground">
                Our AI models are explainable, auditable, and designed to support human judgment, not replace it.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 space-y-4">
              <h3 className="text-2xl font-bold">Regulatory Compliance</h3>
              <p className="text-muted-foreground">
                Built for Life Sciences with HIPAA, GDPR, and industry-specific compliance standards.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 space-y-4">
              <h3 className="text-2xl font-bold">Human-Centered Design</h3>
              <p className="text-muted-foreground">
                AI provides insights and suggestions, but professionals always maintain control and decision-making authority.
              </p>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Testimonials />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <FAQ />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <CTASection />
        </div>
      </section>
    </div>
  );
}
