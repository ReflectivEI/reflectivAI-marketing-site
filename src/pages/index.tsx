'use client';

import { ArrowRight, CheckCircle2, Brain, Target, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { PlatformShowcase } from '@/components/PlatformShowcase';
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
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              {/* Domain Descriptor */}
              <div className="text-[15px] md:text-[17px] uppercase tracking-[0.06em] font-medium" style={{ color: 'hsl(215, 16%, 47%)' }}>
                SIGNAL INTELLIGENCE™ FOR LIFE SCIENCES SALES
              </div>
              
              {/* Primary Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]" style={{ color: 'hsl(210, 50%, 20%)' }}>
                Human judgment, made visible.
              </h1>
              
              {/* Secondary Headline */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold" style={{ color: 'hsl(180, 50%, 45%)' }}>
                AI, responsibly applied.
              </h2>
              
              {/* Body Paragraph */}
              <p className="text-lg leading-[1.5] max-w-[640px]" style={{ color: 'hsl(215, 16%, 27%)' }}>
                Signal Intelligence™ helps professionals recognize what's changing in a conversation—and respond in ways that preserve trust and credibility.
              </p>
              
              {/* Capability Line */}
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: 'hsl(180, 50%, 45%, 0.1)', color: 'hsl(210, 50%, 20%)' }}>
                Behavior-based • Human-in-the-loop by design
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button size="lg" className="text-base" asChild>
                  <Link to="/contact">
                    Request Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-base" asChild>
                  <Link to="/demo">
                    Explore Platform
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

      {/* 1. Page-Level Interpretive Anchor (MANDATORY) */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-background border-l-4 border-primary rounded-lg p-8">
              <h3 className="text-xl font-semibold text-primary mb-4">How to Read This Page</h3>
              <p className="text-base text-foreground leading-relaxed">
                Signal Intelligence™ focuses on observable conversational behavior, not internal traits, intent, or competence.
              </p>
              <p className="text-base text-foreground leading-relaxed mt-3">
                AI highlights patterns in what happens during interactions. Professionals retain full judgment over how—and whether—to respond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Narrative Transition Cue (STRUCTURAL ONLY) */}
      <section className="py-6 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-base text-primary text-center">
              The sections below explain how Signal Intelligence™ supports decision-making without changing how selling is defined or measured.
            </p>
          </div>
        </div>
      </section>

      {/* Where Signal Intelligence Fits - Conceptual Onboarding */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold text-white">Designed to Fit How You Already Sell</h2>
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

            {/* Block 2 & 3 - Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Block 2 - Selling Structure (WHAT) */}
              <div className="bg-white rounded-xl p-8 space-y-4">
                <div className="inline-block px-3 py-1 bg-primary text-white text-sm font-semibold rounded mb-2">
                  WHAT
                </div>
                <h3 className="text-2xl font-bold text-primary">Your Selling Structure Defines the Foundation</h3>
                <p className="text-primary/90">
                  Across Life Sciences organizations, selling frameworks and established selling approaches provide consistency and alignment across commercial teams. They define:
                </p>
                <ul className="space-y-2 text-primary/90">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Stages and behaviors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Best-practice actions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Standards for success across the organization</span>
                  </li>
                </ul>
                <p className="text-primary/90">
                  They are essential, and intentionally stable.
                </p>
              </div>

              {/* Block 3 - Signal Intelligence (HOW) */}
              <div className="bg-white rounded-xl p-8 space-y-4">
                <div className="inline-block px-3 py-1 bg-primary text-white text-sm font-semibold rounded mb-2">
                  HOW
                </div>
                <h3 className="text-2xl font-bold text-primary">Signal Intelligence™ Supports Decisions in the Moment</h3>
                <p className="text-primary/90">
                  Signal Intelligence™ operates beneath your existing selling structure, supporting real-time decision-making by helping reps:
                </p>
                <ul className="space-y-2 text-primary/90">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Recognize meaningful customer signals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Interpret context and intent</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Prioritize which selling behaviors matter most in each interaction</span>
                  </li>
                </ul>
                <p className="text-primary/90">
                  Signal Intelligence™ introduces a decision-support capability that strengthens judgment inside the selling approach you already use.
                </p>
              </div>
            </div>

            {/* Block 4 - Hierarchy Diagram */}
            <div className="max-w-2xl mx-auto mb-16">
              <img 
                src="https://img1.wsimg.com/isteam/ip/1de1dc96-7231-4608-aa4f-91d58be98037/d99854ba-ef71-445d-b8b1-0617a82e9a8b.png" 
                alt="How Signal Intelligence Fits" 
                className="w-full h-auto rounded-xl"
              />
              <p className="text-center text-white/90 mt-4">
                Signal Intelligence™ is the decision layer between how selling is defined and real customer behavior.
              </p>
            </div>

            {/* Block 5 - Comparative Table */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-center mb-8 text-white">How Selling Structures and Signal Intelligence™ Work Together</h3>
              <div className="overflow-x-auto bg-white rounded-xl p-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-primary">
                      <th className="text-left py-4 px-6 font-bold text-primary">Your Selling Structure Provides</th>
                      <th className="text-left py-4 px-6 font-bold text-primary">Signal Intelligence™ Enables</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-primary/30">
                      <td className="py-4 px-6 text-primary/90">A shared language for commercial execution</td>
                      <td className="py-4 px-6 text-primary/90">Decision-making within that structure</td>
                    </tr>
                    <tr className="border-b border-primary/30">
                      <td className="py-4 px-6 text-primary/90">Defined stages and behaviors</td>
                      <td className="py-4 px-6 text-primary/90">Recognition of which behaviors matter most in each situation</td>
                    </tr>
                    <tr className="border-b border-primary/30">
                      <td className="py-4 px-6 text-primary/90">Best-practice guidance</td>
                      <td className="py-4 px-6 text-primary/90">Interpretation of customer signals in real time</td>
                    </tr>
                    <tr className="border-b border-primary/30">
                      <td className="py-4 px-6 text-primary/90">Consistency across teams</td>
                      <td className="py-4 px-6 text-primary/90">Confident adaptation at the point of interaction</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-center text-white/90 mt-6">
                Together, they support consistent strategy and effective execution in complex customer environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Signal Intelligence™ Explainer */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* 1. Visual Classification Label */}
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-background border border-primary rounded-full text-xs font-medium text-primary">
                Decision-Support View
              </span>
            </div>
            {/* 3. Canonical Explanation Declaration */}
            <div className="text-left mb-6">
              <p className="text-xs uppercase tracking-wider font-semibold" style={{ color: 'hsl(215, 16%, 47%)' }}>
                This is the core Signal Intelligence™ process. Other sections on this page build from it.
              </p>
            </div>
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold">How It Works</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                During role-play practice, ReflectivAI highlights patterns in how conversations unfold using the Signal Intelligence™ framework. These patterns are drawn from observable interaction behaviors—not internal traits, intent, or motivation—and are presented to support professional reflection.
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
                Reps practice in simulated conversations. After each session, ReflectivAI organizes observable behaviors into Signal Intelligence™ domains so they can be reviewed and discussed in coaching and training contexts. Managers use these outputs in 1:1s and structured programs.
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
                Signal Intelligence™ is used in structured practice sessions—not on live customer calls. Judgment, interpretation, and decisions remain with the professional.
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
                For sales professionals, this process helps reveal where conversations remain aligned with purpose—and where hesitation, overload, or disengagement may be emerging before deals are at risk.
              </p>
            </div>

            {/* 3. Behavioral Scope Clarifier */}
            <div className="bg-muted/50 border-l-4 border-primary rounded p-4 mb-12">
              <p className="text-sm text-foreground">
                Outputs reflect observable interaction patterns used for reflection and coaching. They are not performance ratings or assessments.
              </p>
            </div>

            <div className="flex justify-center mb-12">
              {/* Signal Intelligence™ - Primary */}
              <div className="bg-primary/5 border-2 border-primary rounded-xl p-8 space-y-4 max-w-2xl w-full">
                <h3 className="text-2xl font-bold text-center mb-4">Signal Intelligence™</h3>
                <p className="text-lg font-semibold text-primary">The Core Capabilities</p>
                <p className="text-muted-foreground">
                  Detects patterns in observable behaviors during practice conversations and surfaces reflections for professional judgment.
                </p>
                <div className="space-y-2 pt-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Highlights behavioral patterns in practice sessions</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Surfaces insights for reflection and coaching</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Enables repeatable, scalable training</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Used in structured practice, not live calls</span>
                  </div>
                </div>
              </div>

              {/* Human Decision Drivers - Explanatory Only */}
              {/* HIDDEN: Human Decision Drivers Framework section
              <div className="bg-background border border-border rounded-xl p-8 space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center">
                    <Target className="h-6 w-6 text-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold">Human Decision Drivers Framework</h3>
                </div>
                <p className="text-lg font-semibold">Explanatory Context (Not Scored)</p>
                <p className="text-muted-foreground">
                  Human Decision Drivers provide explanatory context for why certain behaviors may have worked or failed. These are never scored, measured, or used as standalone metrics—they exist only to help professionals understand the human context behind observable patterns.
                </p>
                <div className="space-y-2 pt-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Provides explanatory context for behavioral patterns</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Never scored or measured independently</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Supports professional reflection and learning</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Humanizes coaching feedback</span>
                  </div>
                </div>
              </div>
              */}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Ticker */}
      <SocialProofTicker />

      {/* Trusted By */}
      <section className="w-full py-16 bg-background">
        <div className="container mx-auto px-4">
          <div>
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

      {/* Traditional Training vs ReflectivAI Impact */}
      {/* <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold">Traditional Training vs ReflectivAI Impact</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how ReflectivAI transforms pharmaceutical sales training from static workshops to dynamic, emotionally intelligent practice
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Traditional Training */}
              {/* <div className="space-y-6">
              {/*   <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-muted-foreground">Traditional Training</h3>
                </div>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-muted border border-border">
                    <p className="text-muted-foreground">One-time workshops with limited follow-up</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted border border-border">
                    <p className="text-muted-foreground">Static role-plays with limited scenarios</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted border border-border">
                    <p className="text-muted-foreground">Delayed feedback from managers</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted border border-border">
                    <p className="text-muted-foreground">Minimal focus on conversational intelligence</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted border border-border">
                    <p className="text-muted-foreground">Difficult to scale across field force</p>
                  </div>
                </div>
              </div>

              {/* ReflectivAI Impact */}
              {/* <div className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-primary">ReflectivAI Impact</h3>
                </div>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-colors">
                    <p className="font-semibold text-foreground">AI HCP role-play</p>
                    <p className="text-sm text-muted-foreground mt-1">with realistic personas and objections</p>
                  </div>
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-colors">
                    <p className="font-semibold text-foreground">Instant coach feedback</p>
                    <p className="text-sm text-muted-foreground mt-1">with suggested phrasing and improvements</p>
                  </div>
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-colors">
                    <p className="font-semibold text-foreground">Signal Intelligence™ insights</p>
                    <p className="text-sm text-muted-foreground mt-1">that translate scores into coaching steps</p>
                  </div>
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-colors">
                    <p className="font-semibold text-foreground">Compliance protection</p>
                    <p className="text-sm text-muted-foreground mt-1">with label-only guardrails built in</p>
                  </div>
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-colors">
                    <p className="font-semibold text-foreground">Scalable practice</p>
                    <p className="text-sm text-muted-foreground mt-1">anytime, anywhere across your team</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-muted-foreground italic">
                Transforming training from static to adaptive, from delayed to immediate, and from unstructured to signal-driven practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold">Everything You Need to Excel</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From daily coaching to realistic practice scenarios, ReflectivAI gives you the tools to master pharma sales conversations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="p-6 rounded-lg border border-border bg-background space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">AI Coach</h3>
              <p className="text-muted-foreground">
                Get personalized coaching and real-time feedback on your conversations
              </p>
            </div>

            <div className="p-6 rounded-lg border border-border bg-background space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Role Play Simulator</h3>
              <p className="text-muted-foreground">
                Practice with realistic pharma scenarios across HIV, Oncology, Cardiology, and more
              </p>
            </div>

            <div className="p-6 rounded-lg border border-border bg-background space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Coaching Modules</h3>
              <p className="text-muted-foreground">
                Structured learning paths for Discovery, Stakeholder Mapping, Clinical Evidence, and more
              </p>
            </div>

            <div className="p-6 rounded-lg border border-border bg-background space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Performance Analytics</h3>
              <p className="text-muted-foreground">
                Track progress with behavioral metrics and skill development insights
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why it Matters in Pharma */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Why Signal Intelligence™ Matters in Pharma
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
                Signal Intelligence™ prevents silent disengagement.
              </p>
              <p className="text-lg opacity-90">
                It turns observable behavioral cues into actionable responses so sales reps know when to advance, when to pause, and when to protect credibility and access.
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
                How Signal Intelligence™ Works
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

      {/* Coaching Modules */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold">Structured Coaching Modules</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Master the essential skills for pharma sales success with proven frameworks and hands-on practice
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg border-2 border-primary bg-white shadow-md hover:shadow-lg transition-shadow space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Discovery Questions Mastery</h3>
              <p className="text-muted-foreground">
                Learn to ask powerful questions that uncover stakeholder needs, challenges, and priorities
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">Question Quality</span>
                <span className="px-2 py-1 bg-accent/10 text-accent rounded text-xs font-medium">Signal Awareness</span>
              </div>
            </div>

            <div className="p-6 rounded-lg border-2 border-primary bg-white shadow-md hover:shadow-lg transition-shadow space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Stakeholder Mapping</h3>
              <p className="text-muted-foreground">
                Identify and understand all decision-makers in the healthcare ecosystem
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 bg-secondary/10 text-secondary rounded text-xs font-medium">Value Connection</span>
                <span className="px-2 py-1 bg-accent/10 text-accent rounded text-xs font-medium">Customer Engagement</span>
              </div>
            </div>

            <div className="p-6 rounded-lg border-2 border-primary bg-white shadow-md hover:shadow-lg transition-shadow space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Clinical Evidence Communication</h3>
              <p className="text-muted-foreground">
                Present clinical data effectively to different stakeholder types
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 bg-secondary/10 text-secondary rounded text-xs font-medium">Signal Interpretation</span>
                <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">Conversation Management</span>
              </div>
            </div>

            <div className="p-6 rounded-lg border-2 border-primary bg-white shadow-md hover:shadow-lg transition-shadow space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Objection Handling</h3>
              <p className="text-muted-foreground">
                Address concerns and objections with evidence and responsiveness
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">Signal Interpretation</span>
                <span className="px-2 py-1 bg-accent/10 text-accent rounded text-xs font-medium">Objection Navigation</span>
              </div>
            </div>

            <div className="p-6 rounded-lg border-2 border-primary bg-white shadow-md hover:shadow-lg transition-shadow space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Closing Techniques</h3>
              <p className="text-muted-foreground">
                Guide stakeholders toward commitment with confidence and integrity
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 bg-accent/10 text-accent rounded text-xs font-medium">Commitment Generation</span>
                <span className="px-2 py-1 bg-secondary/10 text-secondary rounded text-xs font-medium">Adaptive Response</span>
              </div>
            </div>

            <div className="p-6 rounded-lg border-2 border-primary bg-white shadow-md hover:shadow-lg transition-shadow space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Signal Intelligence™ Mastery for Pharma</h3>
              <p className="text-muted-foreground">
                Integrate all conversational intelligence frameworks for healthcare selling
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 bg-secondary/10 text-secondary rounded text-xs font-medium">Value Connection</span>
                <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">Signal Awareness</span>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl lg:text-5xl font-bold">Explore Signal Intelligence™ in Practice</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See the full Signal Intelligence™ capability cards, calculations, and interactive details on the dedicated Learn More page.
          </p>
          <div>
            <Button size="lg" asChild>
              <Link to="/applied-capabilities">
                Explore how Signal Intelligence™ is applied
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How Signal Intelligence™ Works */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">How Signal Intelligence™ Works</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Signal Intelligence™ translates observable behavior into structured guidance that helps professionals navigate high-stakes conversations with consistency and credibility.
              </p>
            </div>

            {/* Horizontal Process Flow */}
            <div className="relative">
              {/* Connecting Flow Line */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-slate-300 via-teal-400 to-slate-300 -translate-y-1/2 hidden lg:block opacity-0 animate-[fadeIn_0.8s_ease-in-out_0.3s_forwards]"></div>
              
              {/* Process Stages */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                {/* Stage 1: Observable Signals */}
                <div className="bg-white rounded-lg border border-slate-200 p-6 space-y-3 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.4s_forwards]">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 border-2 border-slate-300 mx-auto">
                    <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-center text-slate-800">Observable Signals</h3>
                  <p className="text-sm text-slate-600 text-center leading-relaxed">
                    What customers say, how they respond, and when engagement shifts during a conversation.
                  </p>
                </div>

                {/* Stage 2: AI Signal Detection */}
                <div className="bg-white rounded-lg border border-slate-200 p-6 space-y-3 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.55s_forwards]">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-50 border-2 border-teal-300 mx-auto">
                    <div className="w-3 h-3 rounded-full bg-teal-500"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-center text-slate-800">AI Signal Detection</h3>
                  <p className="text-sm text-slate-600 text-center leading-relaxed">
                    AI identifies meaningful behavioral changes and separates signal from noise in structured practice.
                  </p>
                </div>

                {/* Stage 3: Behavioral Guidance */}
                <div className="bg-white rounded-lg border border-slate-200 p-6 space-y-3 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.7s_forwards]">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 border-2 border-slate-300 mx-auto">
                    <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-center text-slate-800">Behavioral Guidance</h3>
                  <p className="text-sm text-slate-600 text-center leading-relaxed">
                    Guidance indicates when to advance, when to pause, and how to protect credibility and access.
                  </p>
                </div>

                {/* Stage 4: Measured Outcomes */}
                <div className="bg-white rounded-lg border border-slate-200 p-6 space-y-3 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.85s_forwards]">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 border-2 border-slate-300 mx-auto">
                    <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-center text-slate-800">Measured Outcomes</h3>
                  <p className="text-sm text-slate-600 text-center leading-relaxed">
                    Stronger conversations, clearer next steps, and more consistent performance over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-Time Coaching Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold">Real-Time Coaching in Action</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how ReflectivAI provides instant, actionable feedback during role-play conversations.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {/* Coaching Card 1 - Strong Performance */}
            <div className="bg-white rounded-xl border-2 border-primary p-6 space-y-4 shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Responsiveness</h3>
                  <p className="text-sm text-muted-foreground mt-1">Turn 4 of conversation</p>
                </div>
                <div className="flex-shrink-0 px-3 py-1 bg-yellow-50 border border-yellow-200 rounded-full">
                  <span className="text-sm font-semibold text-primary">Consistently strong</span>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">What you did well:</span> You directly addressed the physician's concern about patient compliance by acknowledging their experience and offering a specific solution.
                </p>
                <p className="text-sm text-primary font-medium">
                  This is a strong example of Responsiveness—you stayed on topic and provided relevant information without deflecting.
                </p>
              </div>
            </div>

            {/* Coaching Card 2 - Needs Improvement */}
            <div className="bg-white rounded-xl border-2 border-border p-6 space-y-4 shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Intent Alignment</h3>
                  <p className="text-sm text-muted-foreground mt-1">Turn 7 of conversation</p>
                </div>
                <div className="flex-shrink-0 px-3 py-1 bg-yellow-50 border border-yellow-200 rounded-full">
                  <span className="text-sm font-semibold text-primary">Inconsistent</span>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Opportunity to improve:</span> Your response drifted into product features when the physician was asking about clinical outcomes. This shifted focus away from their core concern.
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Try this instead:</span> "Let me address the outcomes data you're asking about. In the Phase 3 trial, we saw a 23% improvement in..."
                </p>
              </div>
            </div>

            {/* Coaching Card 3 - Strong Performance */}
            <div className="bg-white rounded-xl border-2 border-primary p-6 space-y-4 shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Behavioral Adaptability</h3>
                  <p className="text-sm text-muted-foreground mt-1">Turn 9 of conversation</p>
                </div>
                <div className="flex-shrink-0 px-3 py-1 bg-yellow-50 border border-yellow-200 rounded-full">
                  <span className="text-sm font-semibold text-primary">Generally strong</span>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">What you did well:</span> When the physician expressed skepticism, you adjusted your approach by offering to share peer-reviewed data rather than continuing with your prepared talking points.
                </p>
                <p className="text-sm text-primary font-medium">
                  This shows strong Behavioral Adaptability—you read the signal and changed course appropriately.
                </p>
              </div>
            </div>

            {/* Coaching Card 4 - Needs Improvement */}
            <div className="bg-white rounded-xl border-2 border-border p-6 space-y-4 shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Conversational Balance</h3>
                  <p className="text-sm text-muted-foreground mt-1">Turn 11 of conversation</p>
                </div>
                <div className="flex-shrink-0 px-3 py-1 bg-yellow-50 border border-yellow-200 rounded-full">
                  <span className="text-sm font-semibold text-primary">Generally strong</span>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Opportunity to improve:</span> Your last three responses were longer than necessary. The physician tried to interject twice but you continued speaking.
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Try this instead:</span> After making your key point, pause and ask: "Does that address your question, or would you like me to elaborate on any part?"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Disclosures */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold">Important Disclosures</h2>
            </div>

            <div className="space-y-6">
              {/* Disclosure 1: Scoring Transparency */}
              <div className="bg-white rounded-lg p-6 border border-border">
                <h3 className="text-lg font-semibold mb-3 text-foreground">Scoring Transparency</h3>
                <p className="text-sm text-muted-foreground">
                  Signal Intelligence™ scores reflect observable communication behaviors during structured practice. They are not assessments of personality, intent, emotional state, or professional competence, and are not used for automated decision-making.
                </p>
              </div>

              {/* Disclosure 2: Illustrative Example Disclaimer */}
              <div className="bg-white rounded-lg p-6 border border-border">
                <h3 className="text-lg font-semibold mb-3 text-foreground">Illustrative Examples</h3>
                <p className="text-sm text-muted-foreground">
                  All scores, calculations, and examples shown on this site are illustrative demonstrations for educational purposes. Actual scores vary based on individual performance during practice sessions.
                </p>
              </div>

              {/* Disclosure 3: AI Role Boundary */}
              <div className="bg-white rounded-lg p-6 border border-border">
                <h3 className="text-lg font-semibold mb-3 text-foreground">AI Role Boundary</h3>
                <p className="text-sm text-muted-foreground">
                  AI identifies behavioral patterns; interpretation and judgment remain with the professional. Signal Intelligence™ supports reflection and skill development—it does not replace human decision-making or professional expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* From AI-Detected Signals to Informed Action */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold">From AI-Detected Signals to Informed Action</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                ReflectivAI uses AI to detect patterns in observable behavior during structured practice. These signals do not represent intent, emotion, or motivation. They provide context that helps professionals decide how to respond in high-stakes conversations.
              </p>
            </div>

            {/* Three-Column Interpretive Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Column 1: What AI Detects */}
              <div className="bg-white rounded-xl p-6 border-2 border-border space-y-4">
                <h3 className="text-xl font-bold text-foreground">What AI Detects</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Question sequencing and structure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Response timing and turn length</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Topic continuity or drift</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Frequency of customer participation</span>
                  </li>
                </ul>
                <p className="text-xs text-muted-foreground italic pt-2 border-t border-border">
                  No evaluation. No scoring.
                </p>
              </div>

              {/* Column 2: What the Signal Indicates */}
              <div className="bg-white rounded-xl p-6 border-2 border-border space-y-4">
                <h3 className="text-xl font-bold text-foreground">What the Signal Indicates</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Alignment vs. misalignment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Engagement vs. overload</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Progression vs. hesitation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Clarity vs. ambiguity</span>
                  </li>
                </ul>
                <p className="text-xs text-muted-foreground italic pt-2 border-t border-border">
                  Situational context, not internal state.
                </p>
              </div>

              {/* Column 3: What It Informs */}
              <div className="bg-white rounded-xl p-6 border-2 border-border space-y-4">
                <h3 className="text-xl font-bold text-foreground">What It Informs</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Whether to clarify or proceed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Whether to pause or reframe</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Whether to summarize or ask a follow-up</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Whether to propose next steps</span>
                  </li>
                </ul>
                <p className="text-xs text-muted-foreground italic pt-2 border-t border-border">
                  Professional options, not recommendations.
                </p>
              </div>
            </div>

            {/* Boundary Statement */}
            <div className="bg-primary/5 border-2 border-primary rounded-xl p-6 text-center">
              <p className="text-lg font-semibold text-foreground">
                ReflectivAI detects behavioral signals and provides context. Professionals interpret those signals and choose how to respond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Signal Intelligence™ Engine */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* 1. Visual Classification Label */}
            <div className="text-center mb-4">
              <span className="inline-block px-3 py-1 bg-background border border-primary rounded-full text-xs font-medium text-primary">
                Conceptual Framework
              </span>
            </div>
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold">
                Powered by Signal Intelligence™
              </h2>
              <p className="text-xl text-muted-foreground">
                Behind every coaching module and role play scenario is a science-backed framework for detecting behavioral signals and responding effectively
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-3">
                <div className="text-5xl font-bold text-primary">1</div>
                <h3 className="text-xl font-semibold">Detect Signals</h3>
                <p className="text-muted-foreground">
                  AI identifies behavioral patterns—tone shifts, hesitation, engagement cues
                </p>
              </div>

              <div className="space-y-3">
                <div className="text-5xl font-bold text-primary">2</div>
                <h3 className="text-xl font-semibold">Support Reflection</h3>
                <p className="text-muted-foreground">
                  Frameworks help you reflect on what signals might mean in context
                </p>
              </div>

              <div className="space-y-3">
                <div className="text-5xl font-bold text-primary">3</div>
                <h3 className="text-xl font-semibold">Respond Effectively</h3>
                <p className="text-muted-foreground">
                  You choose how to respond—probe, pause, reframe, or move forward
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border-2 border-primary rounded-xl p-8 space-y-4 mt-8 shadow-md hover:shadow-xl transition-shadow">
              <h4 className="text-xl font-semibold text-foreground">Built on Behavioral Science</h4>
              <p className="text-muted-foreground">
                Signal Intelligence™ combines conversational intelligence research, behavioral psychology, and social dynamics theory. The result: practical skills that help you read situations accurately and respond in ways that preserve trust and credibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters - Business Outcomes */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold">
                Why It Matters for Life Sciences Sales Teams
              </h2>
              <p className="text-xl text-muted-foreground">
                Signal Intelligence™ helps life sciences reps protect credibility and access in high-stakes conversations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border-2 border-primary bg-white space-y-3 shadow-md hover:shadow-xl transition-shadow">
                <CheckCircle2 className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold">Fewer Stalled Conversations</h3>
                <p className="text-muted-foreground">
                  Fewer calls that stall or end early when the conversation goes off-track.
                </p>
              </div>

              <div className="p-6 rounded-xl border-2 border-primary bg-blue-50 space-y-3 shadow-md hover:shadow-xl transition-shadow">
                <CheckCircle2 className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold">Stronger Follow-Ups</h3>
                <p className="text-muted-foreground">
                  Stronger continuation commitments and follow-ups after clinical discussions.
                </p>
              </div>

              <div className="p-6 rounded-xl border-2 border-primary bg-purple-50 space-y-3 shadow-md hover:shadow-xl transition-shadow">
                <CheckCircle2 className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold">Compliant Next Steps</h3>
                <p className="text-muted-foreground">
                  Clearer, more compliant next-step language with HCPs and access stakeholders.
                </p>
              </div>

              <div className="p-6 rounded-xl border-2 border-primary bg-white space-y-3 shadow-md hover:shadow-xl transition-shadow">
                <CheckCircle2 className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold">Early Skill Visibility</h3>
                <p className="text-muted-foreground">
                  Managers see which conversational skills need support before performance dips.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where This Fits in Sales Enablement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold">
                Where This Fits in Sales Enablement
              </h2>
              <p className="text-xl text-muted-foreground">
                Signal Intelligence™ plugs into existing life sciences training and coaching workflows.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl border-2 border-primary bg-blue-50 space-y-3 shadow-md hover:shadow-xl transition-shadow">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Onboarding & Certification</h3>
                <p className="text-muted-foreground">
                  Reps demonstrate capability across eight Signal Intelligence™ behaviors before full territory deployment.
                </p>
              </div>

              <div className="p-6 rounded-xl border-2 border-primary bg-white space-y-3 shadow-md hover:shadow-xl transition-shadow">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Ongoing Coaching</h3>
                <p className="text-muted-foreground">
                  Managers use coaching cards and scores to focus 1:1s on real conversational decisions.
                </p>
              </div>

              <div className="p-6 rounded-xl border-2 border-primary bg-purple-50 space-y-3 shadow-md hover:shadow-xl transition-shadow">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Program Insight</h3>
                <p className="text-muted-foreground">
                  Enablement leaders see which capabilities are strong or weak across teams to target support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold">How ReflectivAI Supports Signal Intelligence™</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              AI-powered tools that help reps detect signals, interpret behavior, and make better judgments
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <img 
                  src="https://img1.wsimg.com/isteam/ip/1de1dc96-7231-4608-aa4f-91d58be98037/E3495A4D-3DF5-4F48-A08B-700A67979836-b2f7133.png" 
                  alt="Perception Logo" 
                  className="h-10 w-auto object-contain"
                />
                <h3 className="text-3xl font-bold">Real-Time Signal Detection</h3>
              </div>
              <p className="text-lg text-muted-foreground">
                Our AI analyzes tone, pace, questions, and silence during practice sessions. Get instant insights into customer engagement patterns, uncertainty signals, or resistance indicators—so you can refine your approach.
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
              <div className="flex items-center gap-4">
                <img 
                  src="https://img1.wsimg.com/isteam/ip/1de1dc96-7231-4608-aa4f-91d58be98037/F3E6B8BC-80B8-4AE3-A65A-D0ADC8BD9FAC-5d38294.png" 
                  alt="Practice Logo" 
                  className="h-10 w-auto object-contain"
                />
                <h3 className="text-3xl font-bold">Behavioral Coaching & Development</h3>
              </div>
              <p className="text-lg text-muted-foreground">
                Build Signal Intelligence™ Capabilities through personalized coaching paths. Practice detecting signals, interpreting behavior, and responding effectively in safe role-play scenarios.
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
                  <span>Progress tracking across all coaching modules and frameworks</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <img 
                  src="https://img1.wsimg.com/isteam/ip/1de1dc96-7231-4608-aa4f-91d58be98037/864AFBE9-BF89-4048-AF45-18D6B1BC4B20-c65469f.png" 
                  alt="Trust Logo" 
                  className="h-10 w-auto object-contain"
                />
                <h3 className="text-3xl font-bold">Leadership Analytics & Behavioral Metrics</h3>
              </div>
              <p className="text-lg text-muted-foreground">
                Give sales leaders visibility into team Signal Intelligence™ Capabilities. Track behavioral metrics like Question Quality, Listening & Responsiveness, and Objection Navigation across the team.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Team-wide Signal Intelligence™ Capability benchmarking</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Observable behavior tracking and measurement indicators</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Behavioral trend analysis for coaching prioritization</span>
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

          <div className="mt-16 max-w-4xl mx-auto bg-muted rounded-xl p-8">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold">Plus: Knowledge Base & Resources</h3>
              <p className="text-lg text-muted-foreground">
                Access a comprehensive library of pharma sales resources, best practices, clinical data guides, and therapeutic area insights. Everything you need to stay informed and prepared.
              </p>
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

      {/* Ethics & Governance */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold">Ethics, Privacy & Governance</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Compliance and responsible AI built for the rigors of life-sciences training
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-lg border border-border bg-card space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Data Privacy & Security</h3>
              <p className="text-muted-foreground">
                PHI is off by default; when enabled, BAA, encryption, and RBAC apply.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Algorithmic Bias & Fairness</h3>
              <p className="text-muted-foreground">
                Pre-deployment bias testing with monitoring and remediation steps.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Transparency & Explainability</h3>
              <p className="text-muted-foreground">
                Reason codes in-product; model cards document limits and cadence.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Human Oversight & Accountability</h3>
              <p className="text-muted-foreground">
                Curated scenarios; MLR versioning for full traceability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Showcase */}
      <PlatformShowcase />

      {/* Animated Stats */}
      <AnimatedStats />

      {/* Testimonials */}
      <Testimonials />

      {/* Social Proof Ticker */}
      <SocialProofTicker />

      {/* Live Metrics Dashboard */}
      <LiveMetricsDashboard />

      {/* Live Activity Feed */}
      <LiveActivityFeed />

      {/* ROI Calculator */}
      <ROICalculator />

      {/* Trust & Transparency */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold">Trust & Transparency</h2>
              <p className="text-xl text-muted-foreground">
                Signal Intelligence™ is built on observable behavior, ethical boundaries, and human-led interpretation
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Observable Behavior Only</h3>
                <p className="text-muted-foreground">
                  We measure what can be seen and heard—not what someone might be thinking or feeling. No psychological profiling, no emotional scoring.
                </p>
              </div>

              <div className="space-y-4 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Ethical Boundary</h3>
                <p className="text-muted-foreground">
                  If a response would feel inappropriate if the roles were reversed, it is outside the Signal Intelligence™ boundary.
                </p>
              </div>

              <div className="space-y-4 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Human-Led Interpretation</h3>
                <p className="text-muted-foreground">
                  AI highlights patterns. Professionals interpret meaning and decide how to respond. Judgment always stays with the human.
                </p>
              </div>
            </div>

            <div className="bg-background border border-border rounded-lg p-8 space-y-4">
              <h4 className="text-xl font-semibold">Our Commitment</h4>
              <p className="text-muted-foreground">
                ReflectivAI is designed to support professional judgment, not replace it. We provide information and suggestions, but you always maintain control. This ensures accountability, authenticity, and ethical engagement in every interaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* 2. Trust Reinforcement Line (Single Use Only) */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg font-medium" style={{ color: 'hsl(215, 16%, 27%)' }}>
              AI surfaces patterns. People decide what to do next.
            </p>
          </div>
        </div>
      </section>

      {/* Credibility Statement */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground">
              Developed with former life sciences field leaders and compliance partners. Informed by thousands of simulated conversations in regulated, expert-to-expert environments.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
