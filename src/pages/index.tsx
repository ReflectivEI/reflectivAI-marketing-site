'use client';

import { ArrowRight, CheckCircle2, Brain, Target, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useState } from 'react';
import { PlatformShowcase } from '@/components/PlatformShowcase';
import { AnimatedStats } from '@/components/AnimatedStats';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { CTASection } from '@/components/CTASection';
import { LiveMetricsDashboard } from '@/components/LiveMetricsDashboard';
import { LiveActivityFeed } from '@/components/LiveActivityFeed';
import { ROICalculator } from '@/components/ROICalculator';
import { SocialProofTicker } from '@/components/SocialProofTicker';

type CapabilityDetail = {
  id: string;
  index: number;
  name: string;
  behavioralMetric: string;
  exampleScore: string;
  definition: string;
  whatScoreReflects: string;
  whatGoodLooksLike: string[];
  howCalculated: string[];
  scoreCalculation: string;
  howMeasured: string;
};

const capabilityDetails: Record<string, CapabilityDetail> = {
  'signal-awareness': {
    id: 'signal-awareness',
    index: 1,
    name: 'Signal Awareness',
    behavioralMetric: 'Question Quality',
    exampleScore: '4.3 / 5',
    definition: 'The ability to notice what matters in the conversation and ask purposeful, customer-centric questions.',
    whatScoreReflects: 'How consistently questions surface customer priorities rather than gather surface information.',
    whatGoodLooksLike: [
      'Open-ended, diagnostic questions',
      'Follow-ups that build on prior answers',
      'Logical sequencing without interrogation'
    ],
    howCalculated: [
      'Open vs. closed question ratio',
      'Relevance to stated customer goals',
      'Depth of follow-up questioning'
    ],
    scoreCalculation: '(Open Questions Ratio: 0.92 × 2.0) + (Goal Relevance Score: 0.88 × 2.0) + (Follow-Up Depth Score: 0.85 × 1.0) = 4.30 / 5',
    howMeasured: 'Question structure classification, topic-goal alignment detection, turn-to-turn continuity'
  },
  'signal-interpretation': {
    id: 'signal-interpretation',
    index: 2,
    name: 'Signal Interpretation',
    behavioralMetric: 'Listening & Responsiveness',
    exampleScore: '4.1 / 5',
    definition: 'The ability to accurately hear, acknowledge, and respond to customer input.',
    whatScoreReflects: 'Whether responses demonstrate understanding and adapt to new information.',
    whatGoodLooksLike: [
      'Clear acknowledgment before responding',
      'Accurate paraphrasing',
      'Adjustments after new input'
    ],
    howCalculated: [
      'Acknowledgment frequency',
      'Paraphrase accuracy',
      'Response alignment'
    ],
    scoreCalculation: '(Acknowledgment Presence: 0.90 × 1.5) + (Paraphrase Accuracy: 0.85 × 2.0) + (Response Alignment: 0.80 × 1.5) = 4.10 / 5',
    howMeasured: 'Turn-level response mapping, linguistic acknowledgment markers, adjustment detection'
  },
  'value-connection': {
    id: 'value-connection',
    index: 3,
    name: 'Value Connection',
    behavioralMetric: 'Value Framing (Making It Matter)',
    exampleScore: '4.0 / 5',
    definition: 'The ability to connect information to outcomes that matter to the customer.',
    whatScoreReflects: 'How consistently communication emphasizes customer outcomes over product features.',
    whatGoodLooksLike: [
      'Outcome-based language',
      'Clear linkage to priorities',
      'Minimal feature dumping'
    ],
    howCalculated: [
      'Outcome vs. feature language ratio',
      'Explicit goal references'
    ],
    scoreCalculation: '(Outcome Language Ratio: 0.80 × 2.5) + (Goal Link Frequency: 0.75 × 2.5) = 4.00 / 5',
    howMeasured: 'Language classification, goal-outcome linkage detection'
  },
  'customer-engagement-monitoring': {
    id: 'customer-engagement-monitoring',
    index: 4,
    name: 'Customer Engagement Monitoring',
    behavioralMetric: 'Customer Engagement Cues',
    exampleScore: '4.2 / 5',
    definition: 'The ability to notice shifts in engagement and conversational momentum.',
    whatScoreReflects: 'Sensitivity to participation changes and engagement signals.',
    whatGoodLooksLike: [
      'Awareness of silence or pacing changes',
      'Recognition of forward-looking cues',
      'Adjustment when engagement drops'
    ],
    howCalculated: [
      'Talk-time balance',
      'Question depth',
      'Forward-looking language'
    ],
    scoreCalculation: '(Talk-Time Balance: 0.85 × 1.5) + (Question Depth: 0.90 × 1.5) + (Forward-Looking Cues: 0.88 × 2.0) = 4.20 / 5',
    howMeasured: 'Participation pattern tracking, cue frequency analysis'
  },
  'objection-navigation': {
    id: 'objection-navigation',
    index: 5,
    name: 'Objection Navigation',
    behavioralMetric: 'Objection Handling',
    exampleScore: '3.9 / 5',
    definition: 'The ability to respond constructively to resistance without defensiveness.',
    whatScoreReflects: 'Quality of acknowledgment and composure during objections.',
    whatGoodLooksLike: [
      'Acknowledgment before rebuttal',
      'Calm pacing',
      'Exploratory questioning'
    ],
    howCalculated: [
      'Acknowledgment presence',
      'Rebuttal timing',
      'Defensive language absence'
    ],
    scoreCalculation: '(Acknowledgment Score: 0.85 × 2.0) + (Rebuttal Timing Score: 0.75 × 1.5) + (Defensive Language Avoidance: 0.80 × 1.5) = 3.90 / 5',
    howMeasured: 'Objection-response sequencing, tone marker detection'
  },
  'conversation-management': {
    id: 'conversation-management',
    index: 6,
    name: 'Conversation Management',
    behavioralMetric: 'Conversation Control & Structure',
    exampleScore: '4.4 / 5',
    definition: 'The ability to guide the conversation with clarity and purpose.',
    whatScoreReflects: 'Structural coherence and directional control.',
    whatGoodLooksLike: [
      'Clear purpose setting',
      'Smooth transitions',
      'Effective summarization'
    ],
    howCalculated: [
      'Purpose clarity',
      'Transition effectiveness',
      'Summary presence'
    ],
    scoreCalculation: '(Purpose Statements: 0.95 × 1.5) + (Transition Clarity: 0.90 × 1.5) + (Summarization Quality: 0.88 × 2.0) = 4.40 / 5',
    howMeasured: 'Structural markers, topic transition detection, close-out language'
  },
  'adaptive-response': {
    id: 'adaptive-response',
    index: 7,
    name: 'Adaptive Response',
    behavioralMetric: 'Adaptability',
    exampleScore: '4.1 / 5',
    definition: 'The ability to adjust approach based on what is happening in the moment.',
    whatScoreReflects: 'Responsiveness to new conversational signals.',
    whatGoodLooksLike: [
      'Adjustments in tone, depth, or pacing',
      'Abandoning scripts when needed'
    ],
    howCalculated: [
      'Signal-response alignment',
      'Degree of approach change'
    ],
    scoreCalculation: '(Signal Detection Accuracy: 0.85 × 2.0) + (Response Adjustment Strength: 0.80 × 2.0) = 4.10 / 5',
    howMeasured: 'Cue-response mapping, language shift analysis'
  },
  'commitment-generation': {
    id: 'commitment-generation',
    index: 8,
    name: 'Commitment Generation',
    behavioralMetric: 'Commitment Gaining',
    exampleScore: '4.5 / 5',
    definition: 'The ability to secure clear, voluntary next actions.',
    whatScoreReflects: 'Clarity and mutuality of next steps.',
    whatGoodLooksLike: [
      'Specific next steps',
      'Clear ownership',
      'Mutual confirmation'
    ],
    howCalculated: [
      'Next-step specificity',
      'Confirmation language'
    ],
    scoreCalculation: '(Next-Step Clarity: 0.95 × 2.5) + (Mutual Confirmation: 0.90 × 2.5) = 4.50 / 5',
    howMeasured: 'Commitment markers, agreement confirmation'
  }
};

export default function HomePage() {
  const [selectedCapability, setSelectedCapability] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openCapabilityDetail = (capabilityKey: string) => {
    setSelectedCapability(capabilityKey);
    setIsDialogOpen(true);
  };

  const currentCapability = selectedCapability ? capabilityDetails[selectedCapability] : null;
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                  Signal Intelligence™
                  <br />
                  <span className="text-primary">for Life Sciences Sales</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-xl">
                  Signal Intelligence™ is the ability to detect changes in human behavior and respond in ways that preserve credibility, trust, and access.
                </p>
                <p className="text-lg text-muted-foreground max-w-xl">
                  ReflectivAI helps professionals develop this capability through structured practice—without claiming authority over meaning, emotion, or choice.
                </p>
                <p className="text-base text-muted-foreground max-w-xl">
                  Built for sales and customer-facing teams navigating high-stakes conversations where credibility and access are on the line.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base" asChild>
                  <Link to="/contact">
                    Request Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-base" asChild>
                  <Link to="/ai-coach">
                    Explore Platform
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden border border-border shadow-2xl">
                <img
                  src="https://img1.wsimg.com/isteam/ip/1de1dc96-7231-4608-aa4f-91d58be98037/IMG_9247.jpeg"
                  alt="ReflectivAI Platform Interface"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signal Intelligence™ Explainer */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold">How It Works</h2>
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

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Signal Intelligence™ - Primary */}
              <div className="bg-primary/5 border-2 border-primary rounded-xl p-8 space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center">
                    <Brain className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold">Signal Intelligence™</h3>
                </div>
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
      <section className="py-20 bg-background">
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
              <div className="space-y-6">
                <div className="text-center mb-6">
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
              <div className="space-y-6">
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



      {/* 8 Signal Intelligence™ Capabilities */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold">8 Signal Intelligence™ Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                ReflectivAI evaluates communication using eight Signal Intelligence™ capabilities. Each capability focuses on observable behaviors during structured practice.
            </p>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto italic">
                Scores shown are illustrative examples for demonstration purposes.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.values(capabilityDetails).map((capability) => (
              <button
                key={capability.id}
                onClick={() => openCapabilityDetail(capability.id)}
                className="group relative p-6 rounded-xl border-2 border-primary bg-white hover:bg-white text-left transition-all duration-200 cursor-pointer hover:scale-[1.02] hover:shadow-xl hover:border-accent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 shadow-md"
                aria-label={`View details for ${capability.name}`}
              >
                {/* Index number badge */}
                <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">{capability.index}</span>
                </div>

                {/* Capability name */}
                <div className="mt-8 mb-3">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {capability.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">{capability.behavioralMetric}</p>
                </div>

                {/* Example score */}
                <div className="mb-3">
                  <div className="text-2xl font-bold text-primary">{capability.exampleScore}</div>
                </div>

                {/* Tap to view affordance */}
                <div className="text-xs text-muted-foreground">
                  Tap to view calculation
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Signal Intelligence™ Framework Structure */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">How the Framework is Organized</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Signal Intelligence™ capabilities are grouped by function to help you understand how different skills work together during conversations.
              </p>
            </div>

            {/* Tiered Bands */}
            <div className="space-y-6">
              {/* Band 1: Signal Detection */}
              <div className="bg-white rounded-xl border-2 border-slate-200 p-8 space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-2 w-2 rounded-full bg-teal-500"></div>
                  <h3 className="text-xl font-semibold text-slate-700">Signal Detection</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="h-1.5 w-1.5 rounded-full bg-slate-400"></div>
                    <span className="text-sm font-medium text-slate-700">Question Quality</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="h-1.5 w-1.5 rounded-full bg-slate-400"></div>
                    <span className="text-sm font-medium text-slate-700">Listening & Responsiveness</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="h-1.5 w-1.5 rounded-full bg-slate-400"></div>
                    <span className="text-sm font-medium text-slate-700">Customer Engagement Cues</span>
                  </div>
                </div>
              </div>

              {/* Band 2: Conversation Control */}
              <div className="bg-white rounded-xl border-2 border-slate-200 p-8 space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-2 w-2 rounded-full bg-teal-500"></div>
                  <h3 className="text-xl font-semibold text-slate-700">Conversation Control</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="h-1.5 w-1.5 rounded-full bg-slate-400"></div>
                    <span className="text-sm font-medium text-slate-700">Conversation Control</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="h-1.5 w-1.5 rounded-full bg-slate-400"></div>
                    <span className="text-sm font-medium text-slate-700">Objection Navigation</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="h-1.5 w-1.5 rounded-full bg-slate-400"></div>
                    <span className="text-sm font-medium text-slate-700">Adaptability</span>
                  </div>
                </div>
              </div>

              {/* Band 3: Progression & Outcomes */}
              <div className="bg-white rounded-xl border-2 border-slate-200 p-8 space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-2 w-2 rounded-full bg-teal-500"></div>
                  <h3 className="text-xl font-semibold text-slate-700">Progression & Outcomes</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="h-1.5 w-1.5 rounded-full bg-slate-400"></div>
                    <span className="text-sm font-medium text-slate-700">Value Framing (Making It Matter)</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="h-1.5 w-1.5 rounded-full bg-slate-400"></div>
                    <span className="text-sm font-medium text-slate-700">Commitment Gaining</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Explanatory Note */}
            <div className="text-center pt-6">
              <p className="text-sm text-muted-foreground italic">
                This structure helps you see how capabilities build on each other—from detecting signals to guiding conversations to achieving outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real-Time Coaching Cards */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold">How You Did in This Conversation</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Real-time feedback on your performance across all 8 Signal Intelligence™ Capabilities
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {Object.values(capabilityDetails).map((capability) => {
                return (
                  <button
                    key={capability.id}
                    onClick={() => openCapabilityDetail(capability.id)}
                    className="bg-white rounded-xl border-2 border-primary p-6 space-y-4 hover:shadow-xl transition-all duration-200 cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 shadow-md"
                    aria-label={`View details for ${capability.name}`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {capability.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {capability.behavioralMetric}
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="px-4 py-2 bg-yellow-50 border border-yellow-200 rounded-full">
                          <span className="text-sm font-semibold text-primary">{capability.exampleScore}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-border">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">Definition:</span> {capability.definition}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-muted-foreground italic">
                Click any capability card above to see the full calculation and learn what good looks like.
              </p>
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
              <h3 className="text-3xl font-bold">Real-Time Signal Detection</h3>
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
              <h3 className="text-3xl font-bold">Behavioral Coaching & Development</h3>
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
              <h3 className="text-3xl font-bold">Leadership Analytics & Behavioral Metrics</h3>
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

      {/* Signal Intelligence™ Metrics */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold">Signal Intelligence™ Metrics</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Observable, behavioral outcomes that drive measurable performance improvement
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border-2 border-primary bg-blue-50 space-y-3 hover:shadow-xl transition-shadow shadow-md">
              <div className="text-4xl font-bold text-primary">92%</div>
              <div className="text-sm font-semibold text-foreground">Question Quality</div>
              <p className="text-xs text-muted-foreground">Open-ended, diagnostic questions that uncover needs</p>
            </div>

            <div className="p-6 rounded-xl border-2 border-primary bg-white space-y-3 hover:shadow-xl transition-shadow shadow-md">
              <div className="text-4xl font-bold text-primary">88%</div>
              <div className="text-sm font-semibold text-foreground">Listening & Responsiveness</div>
              <p className="text-xs text-muted-foreground">Paraphrasing, acknowledging, building on customer input</p>
            </div>

            <div className="p-6 rounded-xl border-2 border-primary bg-purple-50 space-y-3 hover:shadow-xl transition-shadow shadow-md">
              <div className="text-4xl font-bold text-primary">85%</div>
              <div className="text-sm font-semibold text-foreground">Conversation Control</div>
              <p className="text-xs text-muted-foreground">Guiding dialogue without dominating or losing direction</p>
            </div>

            <div className="p-6 rounded-xl border-2 border-primary bg-white space-y-3 hover:shadow-xl transition-shadow shadow-md">
              <div className="text-4xl font-bold text-primary">90%</div>
              <div className="text-sm font-semibold text-foreground">Adaptability</div>
              <p className="text-xs text-muted-foreground">Adjusting tone, pace, and approach based on signals</p>
            </div>

            <div className="p-6 rounded-xl border-2 border-primary bg-blue-50 space-y-3 hover:shadow-xl transition-shadow shadow-md">
              <div className="text-4xl font-bold text-primary">83%</div>
              <div className="text-sm font-semibold text-foreground">Commitment Gaining</div>
              <p className="text-xs text-muted-foreground">Securing clear, voluntary next actions with mutual agreement</p>
            </div>

            <div className="p-6 rounded-xl border-2 border-primary bg-white space-y-3 hover:shadow-xl transition-shadow shadow-md">
              <div className="text-4xl font-bold text-primary">87%</div>
              <div className="text-sm font-semibold text-foreground">Objection Navigation</div>
              <p className="text-xs text-muted-foreground">Addressing concerns without defensiveness or avoidance</p>
            </div>

            <div className="p-6 rounded-xl border-2 border-primary bg-purple-50 space-y-3 hover:shadow-xl transition-shadow shadow-md">
              <div className="text-4xl font-bold text-primary">94%</div>
              <div className="text-sm font-semibold text-foreground">Clinical Accuracy</div>
              <p className="text-xs text-muted-foreground">Precise, compliant communication of product information</p>
            </div>

            <div className="p-6 rounded-xl border-2 border-primary bg-white space-y-3 hover:shadow-xl transition-shadow shadow-md">
              <div className="text-4xl font-bold text-primary">91%</div>
              <div className="text-sm font-semibold text-foreground">Engagement Signals</div>
              <p className="text-xs text-muted-foreground">Detecting and responding to customer interest and resistance</p>
            </div>

            <div className="p-6 rounded-xl border-2 border-primary bg-blue-50 space-y-3 hover:shadow-xl transition-shadow shadow-md">
              <div className="text-4xl font-bold text-primary">100%</div>
              <div className="text-sm font-semibold text-foreground">Compliance</div>
              <p className="text-xs text-muted-foreground">Adherence to regulatory and company guidelines</p>
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

      {/* Capability Detail Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-white">
          {currentCapability && (
            <>
              {/* Navy header bar */}
              <DialogHeader className="bg-primary text-primary-foreground -m-6 mb-0 p-6 rounded-t-lg">
                <DialogTitle className="text-2xl font-bold">{currentCapability.name}</DialogTitle>
                <p className="text-sm text-primary-foreground/90 mt-2">Behavioral Metric: {currentCapability.behavioralMetric}</p>
              </DialogHeader>
              
              <div className="space-y-6 mt-6 px-6 pb-6">
                {/* Example Score */}
                <div className="flex items-center gap-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div>
                    <div className="text-2xl font-bold text-foreground">{currentCapability.exampleScore}</div>
                    <div className="text-sm text-muted-foreground mt-1">Example score (illustrative)</div>
                  </div>
                </div>

                {/* Definition */}
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">Definition</h4>
                  <p className="text-muted-foreground">{currentCapability.definition}</p>
                </div>

                {/* How it's evaluated */}
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">How it’s evaluated</h4>
                  <p className="text-muted-foreground">{currentCapability.whatScoreReflects}</p>
                </div>

                {/* How it's rated */}
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">How it’s rated</h4>
                  <p className="text-muted-foreground">{/* Removed - not in new model */}</p>
                </div>

                {/* What good looks like */}
                <div className="bg-muted rounded-lg p-4">
                  <h4 className="text-lg font-semibold mb-3 text-foreground">What Good Looks Like</h4>
                  <ul className="space-y-2">
                    {currentCapability.whatGoodLooksLike.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* How It's Calculated */}
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">How It's Calculated</h4>
                  <ul className="space-y-1 list-disc list-inside text-muted-foreground">
                    {currentCapability.howCalculated.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Score Calculation (Example) */}
                <div className="border-t border-border pt-4">
                  <h4 className="text-lg font-semibold mb-2 text-foreground">Score Calculation (Example)</h4>
                  <div className="bg-muted p-4 rounded-lg font-mono text-sm text-foreground">
                    {currentCapability.scoreCalculation}
                  </div>
                </div>

                {/* How It's Measured */}
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">How It's Measured</h4>
                  <p className="text-muted-foreground">{currentCapability.howMeasured}</p>
                </div>

                {/* Disclaimers */}
                <div className="border-t border-border pt-4 space-y-3">
                  <p className="text-sm text-muted-foreground italic">
                    Signal Intelligence™ scores reflect observable communication behaviors during structured practice. They are not assessments of personality, intent, emotional state, or professional competence, and are not used for automated decision-making.
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    AI identifies behavioral patterns; interpretation and judgment remain with the professional.
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
