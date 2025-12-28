'use client';

import { ArrowRight, CheckCircle2, Brain, Target, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useState } from 'react';

type CapabilityDetail = {
  name: string;
  definition: string;
  calculation: string;
  goodExample: string;
  improvementTips: string[];
};

const capabilityDetails: Record<string, CapabilityDetail> = {
  'signal-awareness': {
    name: 'Signal Awareness',
    definition: 'The ability to detect and recognize behavioral cues, verbal patterns, and non-verbal signals during HCP conversations that indicate engagement, concern, interest, or resistance.',
    calculation: 'Measured by tracking question quality, follow-up opportunities identified, and recognition of customer verbal/non-verbal cues during conversations.',
    goodExample: 'A rep notices an HCP\'s hesitation when discussing side effects and immediately asks, "I sense you have concerns about tolerability. What specific patient scenarios are you thinking about?"',
    improvementTips: [
      'Practice active observation during every call',
      'Note changes in tone, pace, or energy',
      'Track question patterns and engagement signals',
      'Review recorded calls to identify missed signals'
    ]
  },
  'signal-interpretation': {
    name: 'Signal Interpretation',
    definition: 'The capacity to accurately understand what detected signals mean in context—distinguishing between uncertainty, skepticism, interest, or information overload.',
    calculation: 'Evaluated through listening quality, paraphrasing accuracy, and appropriate acknowledgment of customer concerns in conversation analysis.',
    goodExample: 'When an HCP says "I\'ve heard mixed results," the rep interprets this as uncertainty rather than rejection and responds with clinical evidence rather than defensiveness.',
    improvementTips: [
      'Paraphrase to confirm understanding',
      'Ask clarifying questions before responding',
      'Consider multiple interpretations of signals',
      'Practice empathy mapping exercises'
    ]
  },
  'value-connection': {
    name: 'Value Connection',
    definition: 'The skill of linking product features to specific HCP priorities and patient outcomes, moving beyond feature lists to meaningful clinical value.',
    calculation: 'Tracked by analyzing outcome-based language usage versus feature-focused messaging in conversations.',
    goodExample: '"Based on your patient population with high cardiovascular risk, this once-daily dosing could improve adherence by 40%, leading to better long-term outcomes."',
    improvementTips: [
      'Lead with outcomes, not features',
      'Connect to HCP\'s specific patient population',
      'Use clinical evidence to support value claims',
      'Practice translating features into benefits'
    ]
  },
  'customer-engagement': {
    name: 'Customer Engagement Monitoring',
    definition: 'Continuous assessment of HCP participation, interest level, and conversational investment through talk time, question quality, and forward-looking statements.',
    calculation: 'Measured by customer talk time percentage, quality of questions asked by HCP, and presence of future-oriented statements.',
    goodExample: 'Rep tracks that HCP is asking detailed questions about dosing protocols and mentions "I\'d like to try this with my next appropriate patient"—high engagement signals.',
    improvementTips: [
      'Aim for 60/40 HCP-to-rep talk ratio',
      'Encourage HCP questions throughout',
      'Listen for future commitment language',
      'Track engagement trends across calls'
    ]
  },
  'objection-navigation': {
    name: 'Objection Navigation',
    definition: 'The ability to handle concerns, pushback, and skepticism with calm curiosity rather than defensiveness, exploring objections to understand root causes.',
    calculation: 'Assessed by detecting defensive responses and evaluating use of exploratory, non-defensive approaches to objections.',
    goodExample: 'HCP: "This is too expensive." Rep: "I appreciate that concern. Help me understand—are you thinking about formulary coverage, patient out-of-pocket costs, or overall treatment value?"',
    improvementTips: [
      'Stay curious, not defensive',
      'Acknowledge concerns before responding',
      'Ask questions to understand root issues',
      'Practice objection handling scenarios'
    ]
  },
  'conversation-management': {
    name: 'Conversation Management',
    definition: 'Structuring conversations with clear purpose, smooth transitions, effective summarization, and explicit next steps to maintain focus and drive outcomes.',
    calculation: 'Evaluated by tracking purpose-setting, transition quality, summarization frequency, and next-step clarity.',
    goodExample: '"Today I\'d like to discuss the new efficacy data [purpose]. Let me share three key findings [transition]. To summarize [recap]. What would be a good next step? [commitment]"',
    improvementTips: [
      'Set clear objectives at the start',
      'Use verbal signposts for transitions',
      'Summarize key points regularly',
      'Always secure clear next steps'
    ]
  },
  'commitment-generation': {
    name: 'Commitment Generation',
    definition: 'Identifying and securing clear, voluntary next actions from HCPs that advance the relationship and move toward prescribing or advocacy.',
    calculation: 'Measured by identifying opportunities for securing specific, voluntary next actions during conversations.',
    goodExample: '"Based on our discussion, would you be open to starting with one appropriate patient this month and reviewing outcomes together?" [Specific, voluntary, time-bound]',
    improvementTips: [
      'Ask for specific commitments, not vague interest',
      'Make commitments voluntary and low-pressure',
      'Tie commitments to HCP\'s stated priorities',
      'Follow up on previous commitments'
    ]
  },
  'adaptive-response': {
    name: 'Adaptive Response',
    definition: 'Flexibly adjusting communication style, depth, pacing, and approach based on real-time HCP cues and conversational dynamics.',
    calculation: 'Assessed by analyzing when and how reps shift tone, depth, or pacing in response to customer behavioral cues.',
    goodExample: 'Rep notices HCP is rushed and immediately shifts from detailed clinical discussion to: "I know you\'re pressed for time. Here\'s the one key takeaway, and I\'ll email the full data."',
    improvementTips: [
      'Monitor HCP energy and time constraints',
      'Adjust depth based on HCP expertise',
      'Match HCP communication style',
      'Practice flexible conversation pivots'
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
                  AI Sales Enablement
                  <br />
                  <span className="text-primary">for Life Sciences</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-xl">
                  Connect and Convert with Intelligence. ReflectivAI blends clinical accuracy, emotional intelligence, and adaptive AI coaching so every HCP conversation feels authentic, confident, and compliant.
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
                  src="https://img1.wsimg.com/isteam/ip/1de1dc96-7231-4608-aa4f-91d58be98037/197460A4-BECD-471D-91B5-E9CA924F9D72.png"
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
                    <p className="text-muted-foreground">Minimal focus on emotional intelligence</p>
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
                    <p className="font-semibold text-foreground">EI metrics</p>
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
              <h3 className="text-xl font-semibold">EI Mastery for Pharma</h3>
              <p className="text-muted-foreground">
                Integrate all emotional intelligence frameworks for healthcare selling
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 bg-secondary/10 text-secondary rounded text-xs font-medium">DISC</span>
                <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">Active Listening</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EI Frameworks */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-muted rounded-xl p-8 md:p-12">
            <div className="text-center space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">Built on Proven EI Frameworks</h2>
              <p className="text-lg text-muted-foreground">
                Every module integrates evidence-based emotional intelligence frameworks: <span className="font-semibold text-foreground">Active Listening</span>, <span className="font-semibold text-foreground">DISC</span>, <span className="font-semibold text-foreground">Empathy Mapping</span>, and <span className="font-semibold text-foreground">Rapport Building</span>. These aren't abstract concepts—they're practical tools you'll use in every conversation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8 Signal Intelligence Capabilities - What Gets Measured */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold">8 Core Competencies We Measure</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every coaching module develops these behavioral capabilities. Track your progress across all 8 competencies.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
            <button
              onClick={() => openCapabilityDetail('signal-awareness')}
              className="p-6 rounded-lg border border-border bg-background space-y-4 text-left hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer"
            >
              <h3 className="text-xl font-semibold">Signal Awareness</h3>
              <p className="text-muted-foreground">
                Ask purposeful, customer-centric questions; sequence questions logically; follow up effectively
              </p>
              <div className="flex gap-2 flex-wrap items-center">
                <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">Question Quality</span>
                <span className="text-xs text-primary font-medium">Click to learn more →</span>
              </div>
            </button>

            <button
              onClick={() => openCapabilityDetail('signal-interpretation')}
              className="p-6 rounded-lg border border-border bg-background space-y-4 text-left hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer"
            >
              <h3 className="text-xl font-semibold">Signal Interpretation</h3>
              <p className="text-muted-foreground">
                Accurately hear, reflect, and build on customer statements; acknowledge concerns
              </p>
              <div className="flex gap-2 flex-wrap items-center">
                <span className="px-2 py-1 bg-accent/10 text-accent rounded text-xs font-medium">Listening & Responsiveness</span>
                <span className="text-xs text-primary font-medium">Click to learn more →</span>
              </div>
            </button>

            <button
              onClick={() => openCapabilityDetail('value-connection')}
              className="p-6 rounded-lg border border-border bg-background space-y-4 text-left hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer"
            >
              <h3 className="text-xl font-semibold">Value Connection</h3>
              <p className="text-muted-foreground">
                Connect offerings to customer outcomes rather than features; emphasize customer priorities
              </p>
              <div className="flex gap-2 flex-wrap items-center">
                <span className="px-2 py-1 bg-secondary/10 text-secondary rounded text-xs font-medium">Making It Matter</span>
                <span className="text-xs text-primary font-medium">Click to learn more →</span>
              </div>
            </button>

            <button
              onClick={() => openCapabilityDetail('customer-engagement')}
              className="p-6 rounded-lg border border-border bg-background space-y-4 text-left hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer"
            >
              <h3 className="text-xl font-semibold">Customer Engagement Monitoring</h3>
              <p className="text-muted-foreground">
                Monitor and interpret customer behavior for engagement; identify forward-looking cues
              </p>
              <div className="flex gap-2 flex-wrap items-center">
                <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">Customer Engagement Signals</span>
                <span className="text-xs text-primary font-medium">Click to learn more →</span>
              </div>
            </button>

            <button
              onClick={() => openCapabilityDetail('objection-navigation')}
              className="p-6 rounded-lg border border-border bg-background space-y-4 text-left hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer"
            >
              <h3 className="text-xl font-semibold">Objection Navigation</h3>
              <p className="text-muted-foreground">
                Respond calmly to resistance; explore underlying concerns; acknowledge objections
              </p>
              <div className="flex gap-2 flex-wrap items-center">
                <span className="px-2 py-1 bg-accent/10 text-accent rounded text-xs font-medium">Objection Navigation</span>
                <span className="text-xs text-primary font-medium">Click to learn more →</span>
              </div>
            </button>

            <button
              onClick={() => openCapabilityDetail('conversation-management')}
              className="p-6 rounded-lg border border-border bg-background space-y-4 text-left hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer"
            >
              <h3 className="text-xl font-semibold">Conversation Management</h3>
              <p className="text-muted-foreground">
                Guide conversation with purpose; transition smoothly; summarize and clarify next steps
              </p>
              <div className="flex gap-2 flex-wrap items-center">
                <span className="px-2 py-1 bg-secondary/10 text-secondary rounded text-xs font-medium">Conversation Control & Structure</span>
                <span className="text-xs text-primary font-medium">Click to learn more →</span>
              </div>
            </button>

            <button
              onClick={() => openCapabilityDetail('commitment-generation')}
              className="p-6 rounded-lg border border-border bg-background space-y-4 text-left hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer"
            >
              <h3 className="text-xl font-semibold">Commitment Generation</h3>
              <p className="text-muted-foreground">
                Secure clear, voluntary next actions; ensure mutual agreement and ownership
              </p>
              <div className="flex gap-2 flex-wrap items-center">
                <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">Commitment Gaining</span>
                <span className="text-xs text-primary font-medium">Click to learn more →</span>
              </div>
            </button>

            <button
              onClick={() => openCapabilityDetail('adaptive-response')}
              className="p-6 rounded-lg border border-border bg-background space-y-4 text-left hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer"
            >
              <h3 className="text-xl font-semibold">Adaptive Response</h3>
              <p className="text-muted-foreground">
                Adjust approach based on customer signals; shift tone, depth, or pacing as needed
              </p>
              <div className="flex gap-2 flex-wrap items-center">
                <span className="px-2 py-1 bg-accent/10 text-accent rounded text-xs font-medium">Adaptability</span>
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
                Signal Intelligence combines emotional intelligence research, behavioral psychology, and social dynamics theory. The result: practical skills that help you read situations accurately and respond in ways that preserve trust and credibility.
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

      {/* Performance Analytics */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold">Performance Analytics & Coaching Intelligence</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Turn training data into measurable business outcomes with EI-driven metrics
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="p-6 rounded-lg border border-border bg-card text-center space-y-2 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-primary">94%</div>
              <div className="text-sm font-medium text-foreground">Accuracy Index</div>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card text-center space-y-2 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-primary">1.4x</div>
              <div className="text-sm font-medium text-foreground">Readiness Velocity</div>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card text-center space-y-2 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-primary">88%</div>
              <div className="text-sm font-medium text-foreground">Empathy Index</div>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card text-center space-y-2 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-primary">100%</div>
              <div className="text-sm font-medium text-foreground">Compliance Score</div>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card text-center space-y-2 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-primary">8.5/10</div>
              <div className="text-sm font-medium text-foreground">Confidence Level</div>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card text-center space-y-2 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-primary">92%</div>
              <div className="text-sm font-medium text-foreground">Clarity Index</div>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card text-center space-y-2 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-primary">85%</div>
              <div className="text-sm font-medium text-foreground">Objection Handling</div>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card text-center space-y-2 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-primary">78%</div>
              <div className="text-sm font-medium text-foreground">Discovery Index</div>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card text-center space-y-2 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-primary">90%</div>
              <div className="text-sm font-medium text-foreground">Active Listening</div>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card text-center space-y-2 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-primary">83%</div>
              <div className="text-sm font-medium text-foreground">Emotional Adaptability</div>
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

      {/* CTA */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold">
                  Ready to Master Pharma Sales?
                </h2>
                <p className="text-xl text-muted-foreground">
                  See how ReflectivAI helps Life Sciences teams build trust with healthcare providers through AI-powered coaching and proven frameworks.
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

      {/* Capability Detail Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          {currentCapability && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">{currentCapability.name}</DialogTitle>
                <DialogDescription className="text-base">
                  {currentCapability.definition}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6 mt-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2">How It's Calculated</h4>
                  <p className="text-muted-foreground">{currentCapability.calculation}</p>
                </div>

                <div className="bg-muted rounded-lg p-4">
                  <h4 className="text-lg font-semibold mb-2">Example of Excellence</h4>
                  <p className="text-foreground italic">"{currentCapability.goodExample}"</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3">How to Improve</h4>
                  <ul className="space-y-2">
                    {currentCapability.improvementTips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
