'use client';

import { ArrowRight, CheckCircle2, Brain, Target, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
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

type CompetencyDetail = {
  name: string;
  whatItMeasures: string;
  howEvaluated: string;
  howRated: string;
  whatGoodLooksLike: string[];
};

const competencyDetails: Record<string, CompetencyDetail> = {
  'communication-clarity': {
    name: 'Communication Clarity',
    whatItMeasures: 'How clearly and coherently ideas are expressed throughout a conversation.',
    howEvaluated: 'Patterns in how information is structured, sequenced, and explained during role-play.',
    howRated: 'Based on consistency of clarity across the interaction, not a single moment.',
    whatGoodLooksLike: [
      'Ideas are easy to follow',
      'Key points are stated directly',
      'Explanations are concise and relevant',
      'Transitions between topics are clear'
    ]
  },
  'intent-alignment': {
    name: 'Intent Alignment',
    whatItMeasures: 'How well communication stays aligned with the purpose of the interaction.',
    howEvaluated: 'Language is compared against the stated goal of the role-play scenario.',
    howRated: 'Based on how consistently communication supports the intended outcome.',
    whatGoodLooksLike: [
      'Responses stay focused on purpose',
      'Messaging reinforces the goal',
      'Minimal drift or distraction',
      'Clear awareness of why the conversation is happening'
    ]
  },
  'responsiveness': {
    name: 'Responsiveness',
    whatItMeasures: 'How effectively input from the other party is acknowledged and addressed.',
    howEvaluated: 'Response timing, relevance, and acknowledgment of prior points.',
    howRated: 'Based on timely and context-aware engagement.',
    whatGoodLooksLike: [
      'Direct answers to questions',
      'Clear acknowledgment of concerns',
      'Relevant follow-ups',
      'Minimal repetition or avoidance'
    ]
  },
  'conversational-balance': {
    name: 'Conversational Balance',
    whatItMeasures: 'How well participation and pacing are managed.',
    howEvaluated: 'Turn-taking, pacing, and space created for dialogue.',
    howRated: 'Based on overall balance across the interaction.',
    whatGoodLooksLike: [
      'Natural back-and-forth',
      'Few interruptions',
      'Space for the other party to engage',
      'Adjustments to conversational flow'
    ]
  },
  'behavioral-adaptability': {
    name: 'Behavioral Adaptability',
    whatItMeasures: 'How well communication adjusts to what\'s happening in the moment.',
    howEvaluated: 'Shifts in language, depth, or approach following new cues.',
    howRated: 'Based on timeliness and relevance of adjustments.',
    whatGoodLooksLike: [
      'Clarifies when confusion appears',
      'Adjusts pacing or depth as needed',
      'Avoids rigid or scripted responses',
      'Responds calmly and constructively under pressure'
    ]
  },
  'outcome-orientation': {
    name: 'Outcome Orientation',
    whatItMeasures: 'How effectively communication moves toward a clear next step.',
    howEvaluated: 'Presence of summaries, confirmations, and next-step language.',
    howRated: 'Based on clarity and closure by the end of the interaction.',
    whatGoodLooksLike: [
      'Clear summaries',
      'Explicit next steps',
      'Mutual understanding',
      'Reduced ambiguity at close'
    ]
  }
};

export default function HomePage() {
  const [selectedCapability, setSelectedCapability] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openCapabilityDetail = (capabilityKey: string) => {
    setSelectedCapability(capabilityKey);
    setIsDialogOpen(true);
  };

  const currentCompetency = selectedCapability ? competencyDetails[selectedCapability] : null;
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
                  ReflectivAI is powered by Signal Intelligence™—the human capacity to detect, interpret, and respond to meaningful changes in conversation and context in ways that preserve credibility, trust, and access.
                </p>
                <p className="text-lg text-muted-foreground max-w-xl">
                  Signal Intelligence™ improves how professionals interpret and respond to human signals—without claiming authority over meaning, emotion, or choice.
                </p>
                <p className="text-base text-muted-foreground max-w-xl">
                  Built for sales and customer-facing teams navigating high-stakes conversations where credibility and access are on the line.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base" asChild>
                  <Link to="/contact">
                    Request a Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-base" asChild>
                  <Link to="/ai-coach">
                    Watch Platform Tour
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

      {/* Signal Intelligence Explainer */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold">How It Works</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                During role-play practice, ReflectivAI highlights patterns in how conversations unfold—such as pacing, clarity, and engagement—using the Signal Intelligence framework. These insights support reflection and improvement, while judgment and decisions remain with the professional.
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
                For sales professionals, these insights reveal where conversations stay aligned with purpose—and where hesitation, overload, or disengagement may be emerging before deals are at risk.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Signal Intelligence - Primary */}
              <div className="bg-primary/5 border-2 border-primary rounded-xl p-8 space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center">
                    <Brain className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold">Signal Intelligence™</h3>
                </div>
                <p className="text-lg font-semibold text-primary">The Core Operating System</p>
                <p className="text-muted-foreground">
                  Detects, scores, and learns from observable behaviors in real-time conversations.
                </p>
                <div className="space-y-2 pt-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Converts conversations into measurable data</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Produces objective, auditable scores</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Enables repeatable, scalable training</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Works in simulations and real conversations</span>
                  </div>
                </div>
              </div>

              {/* Emotional Intelligence - Secondary */}
              <div className="bg-background border border-border rounded-xl p-8 space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center">
                    <Target className="h-6 w-6 text-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold">Emotional Intelligence</h3>
                </div>
                <p className="text-lg font-semibold">The Interpretive Lens</p>
                <p className="text-muted-foreground">
                  Applied on top of Signal Intelligence to explain why behaviors worked or failed.
                </p>
                <div className="space-y-2 pt-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Interprets signals through human context</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Explains empathy gaps and trust erosion</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Guides adaptive improvement strategies</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Humanizes coaching feedback</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Distinction */}
            <div className="bg-background border-2 border-primary/20 rounded-xl p-8 text-center">
              <p className="text-xl font-semibold mb-4">The Key Distinction</p>
              <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                <div>
                  <p className="text-lg font-bold text-primary mb-2">Signal Intelligence =</p>
                  <p className="text-muted-foreground">What happened</p>
                </div>
                <div>
                  <p className="text-lg font-bold mb-2">Emotional Intelligence =</p>
                  <p className="text-muted-foreground">Why it mattered</p>
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
                    <p className="font-semibold text-foreground">Signal Intelligence metrics</p>
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
                Transforming training from static to adaptive, from delayed to instant, from generic to emotionally intelligent.
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
            <div className="p-6 rounded-lg border border-border bg-background space-y-4">
              <h3 className="text-xl font-semibold">Discovery Questions Mastery</h3>
              <p className="text-muted-foreground">
                Learn to ask powerful questions that uncover stakeholder needs, challenges, and priorities
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">Active Listening</span>
                <span className="px-2 py-1 bg-accent/10 text-accent rounded text-xs font-medium">Empathy Mapping</span>
              </div>
            </div>

            <div className="p-6 rounded-lg border border-border bg-background space-y-4">
              <h3 className="text-xl font-semibold">Stakeholder Mapping</h3>
              <p className="text-muted-foreground">
                Identify and understand all decision-makers in the healthcare ecosystem
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 bg-secondary/10 text-secondary rounded text-xs font-medium">DISC</span>
                <span className="px-2 py-1 bg-accent/10 text-accent rounded text-xs font-medium">Empathy Mapping</span>
              </div>
            </div>

            <div className="p-6 rounded-lg border border-border bg-background space-y-4">
              <h3 className="text-xl font-semibold">Clinical Evidence Communication</h3>
              <p className="text-muted-foreground">
                Present clinical data effectively to different stakeholder types
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 bg-secondary/10 text-secondary rounded text-xs font-medium">DISC</span>
                <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">Active Listening</span>
              </div>
            </div>

            <div className="p-6 rounded-lg border border-border bg-background space-y-4">
              <h3 className="text-xl font-semibold">Objection Handling</h3>
              <p className="text-muted-foreground">
                Address concerns and objections with empathy and evidence
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">Active Listening</span>
                <span className="px-2 py-1 bg-accent/10 text-accent rounded text-xs font-medium">Rapport Building</span>
              </div>
            </div>

            <div className="p-6 rounded-lg border border-border bg-background space-y-4">
              <h3 className="text-xl font-semibold">Closing Techniques</h3>
              <p className="text-muted-foreground">
                Guide stakeholders toward commitment with confidence and integrity
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 bg-accent/10 text-accent rounded text-xs font-medium">Rapport Building</span>
                <span className="px-2 py-1 bg-secondary/10 text-secondary rounded text-xs font-medium">DISC</span>
              </div>
            </div>

            <div className="p-6 rounded-lg border border-border bg-background space-y-4">
              <h3 className="text-xl font-semibold">Signal Intelligence Mastery for Pharma</h3>
              <p className="text-muted-foreground">
                Integrate all conversational intelligence frameworks for healthcare selling
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 bg-secondary/10 text-secondary rounded text-xs font-medium">DISC</span>
                <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">Active Listening</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EI Frameworks - Positioned as Interpretive Layer */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-muted rounded-xl p-8 md:p-12">
            <div className="text-center space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">Signal Intelligence™ + EI Frameworks</h2>
              <p className="text-lg text-muted-foreground">
                Our Signal Intelligence platform detects and scores behaviors. Then we apply proven emotional intelligence frameworks—<span className="font-semibold text-foreground">Active Listening</span>, <span className="font-semibold text-foreground">DISC</span>, <span className="font-semibold text-foreground">Empathy Mapping</span>, and <span className="font-semibold text-foreground">Rapport Building</span>—to help you understand why those behaviors worked or failed, and how to adapt.
              </p>
              <div className="pt-4 border-t border-border mt-6">
                <p className="text-sm text-muted-foreground italic">
                  Signal Intelligence captures what happened. Emotional intelligence explains why it mattered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Signal Intelligence™ Competencies */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold">6 Signal Intelligence™ Competencies</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              ReflectivAI evaluates communication using six Signal Intelligence competencies. Each competency focuses on observable behaviors that reflect decision quality under pressure.
            </p>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto italic">
              All Signal Intelligence competencies focus on observable behaviors that reflect decision quality under pressure.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
            <button
              onClick={() => openCapabilityDetail('communication-clarity')}
              className="p-6 rounded-lg border border-border bg-background space-y-4 text-left hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer"
            >
              <h3 className="text-xl font-semibold">Communication Clarity</h3>
              <p className="text-muted-foreground">
                How clearly and coherently ideas are expressed throughout a conversation.
              </p>
              <div className="flex gap-2 flex-wrap items-center">
                <span className="text-xs text-primary font-medium">Click to learn more →</span>
              </div>
            </button>

            <button
              onClick={() => openCapabilityDetail('intent-alignment')}
              className="p-6 rounded-lg border border-border bg-background space-y-4 text-left hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer"
            >
              <h3 className="text-xl font-semibold">Intent Alignment</h3>
              <p className="text-muted-foreground">
                How well communication stays aligned with the purpose of the interaction.
              </p>
              <div className="flex gap-2 flex-wrap items-center">
                <span className="text-xs text-primary font-medium">Click to learn more →</span>
              </div>
            </button>

            <button
              onClick={() => openCapabilityDetail('responsiveness')}
              className="p-6 rounded-lg border border-border bg-background space-y-4 text-left hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer"
            >
              <h3 className="text-xl font-semibold">Responsiveness</h3>
              <p className="text-muted-foreground">
                How effectively input from the other party is acknowledged and addressed.
              </p>
              <div className="flex gap-2 flex-wrap items-center">
                <span className="text-xs text-primary font-medium">Click to learn more →</span>
              </div>
            </button>

            <button
              onClick={() => openCapabilityDetail('conversational-balance')}
              className="p-6 rounded-lg border border-border bg-background space-y-4 text-left hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer"
            >
              <h3 className="text-xl font-semibold">Conversational Balance</h3>
              <p className="text-muted-foreground">
                How well participation and pacing are managed.
              </p>
              <div className="flex gap-2 flex-wrap items-center">
                <span className="text-xs text-primary font-medium">Click to learn more →</span>
              </div>
            </button>

            <button
              onClick={() => openCapabilityDetail('behavioral-adaptability')}
              className="p-6 rounded-lg border border-border bg-background space-y-4 text-left hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer"
            >
              <h3 className="text-xl font-semibold">Behavioral Adaptability</h3>
              <p className="text-muted-foreground">
                How well communication adjusts to what's happening in the moment.
              </p>
              <div className="flex gap-2 flex-wrap items-center">
                <span className="text-xs text-primary font-medium">Click to learn more →</span>
              </div>
            </button>

            <button
              onClick={() => openCapabilityDetail('outcome-orientation')}
              className="p-6 rounded-lg border border-border bg-background space-y-4 text-left hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer"
            >
              <h3 className="text-xl font-semibold">Outcome Orientation</h3>
              <p className="text-muted-foreground">
                How effectively communication moves toward a clear next step.
              </p>
              <div className="flex gap-2 flex-wrap items-center">
                <span className="text-xs text-primary font-medium">Click to learn more →</span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* How It Works - Signal Intelligence Engine */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold">
                Powered by Signal Intelligence
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
                <h3 className="text-xl font-semibold">Interpret Meaning</h3>
                <p className="text-muted-foreground">
                  Frameworks help you understand what signals mean in context
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

            <div className="bg-background border border-border rounded-lg p-8 space-y-4 mt-8">
              <h4 className="text-xl font-semibold">Built on Behavioral Science</h4>
              <p className="text-muted-foreground">
                Signal Intelligence combines conversational intelligence research, behavioral psychology, and social dynamics theory. The result: practical skills that help you read situations accurately and respond in ways that preserve trust and credibility.
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
                  <span>Progress tracking across all coaching modules and frameworks</span>
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

      {/* Signal Intelligence Metrics */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold">Signal Intelligence Metrics</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Observable, behavioral outcomes that drive measurable performance improvement
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg border border-border bg-card space-y-3 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-primary">92%</div>
              <div className="text-sm font-semibold text-foreground">Question Quality</div>
              <p className="text-xs text-muted-foreground">Open-ended, diagnostic questions that uncover needs</p>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card space-y-3 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-primary">88%</div>
              <div className="text-sm font-semibold text-foreground">Listening & Responsiveness</div>
              <p className="text-xs text-muted-foreground">Paraphrasing, acknowledging, building on customer input</p>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card space-y-3 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-primary">85%</div>
              <div className="text-sm font-semibold text-foreground">Conversation Control</div>
              <p className="text-xs text-muted-foreground">Guiding dialogue without dominating or losing direction</p>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card space-y-3 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-primary">90%</div>
              <div className="text-sm font-semibold text-foreground">Adaptability</div>
              <p className="text-xs text-muted-foreground">Adjusting tone, pace, and approach based on signals</p>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card space-y-3 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-primary">83%</div>
              <div className="text-sm font-semibold text-foreground">Commitment Gaining</div>
              <p className="text-xs text-muted-foreground">Securing clear, voluntary next actions with mutual agreement</p>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card space-y-3 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-primary">87%</div>
              <div className="text-sm font-semibold text-foreground">Objection Navigation</div>
              <p className="text-xs text-muted-foreground">Addressing concerns without defensiveness or avoidance</p>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card space-y-3 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-primary">94%</div>
              <div className="text-sm font-semibold text-foreground">Clinical Accuracy</div>
              <p className="text-xs text-muted-foreground">Precise, compliant communication of product information</p>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card space-y-3 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-primary">91%</div>
              <div className="text-sm font-semibold text-foreground">Engagement Signals</div>
              <p className="text-xs text-muted-foreground">Detecting and responding to customer interest and resistance</p>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card space-y-3 hover:shadow-lg transition-shadow">
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
              Signal Intelligence respects autonomy, preserves dignity, and supports professional judgment—never replacing it.
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
                  If a response would feel inappropriate if the roles were reversed, it is outside the Signal Intelligence boundary.
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

      {/* CTA */}
      <CTASection />

      {/* Competency Detail Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          {currentCompetency && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">{currentCompetency.name}</DialogTitle>
                <DialogDescription className="text-base">
                  {currentCompetency.whatItMeasures}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6 mt-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2">How It's Evaluated</h4>
                  <p className="text-muted-foreground">{currentCompetency.howEvaluated}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2">How It's Rated</h4>
                  <p className="text-muted-foreground">{currentCompetency.howRated}</p>
                </div>

                <div className="bg-muted rounded-lg p-4">
                  <h4 className="text-lg font-semibold mb-3">What Good Looks Like</h4>
                  <ul className="space-y-2">
                    {currentCompetency.whatGoodLooksLike.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-border pt-4">
                  <p className="text-sm text-muted-foreground italic">
                    If a response would feel inappropriate if the roles were reversed, it is outside the Signal Intelligence boundary.
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
