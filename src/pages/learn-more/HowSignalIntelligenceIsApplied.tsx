'use client';

import { SignalIntelligenceCapabilityCards } from '@/components/SignalIntelligenceCapabilityCards';
// NOTE: Project cards are illustrative and non-evaluative.
// Do not add performance, ranking, or scoring logic here.

type CapabilityDetail = {
  id: string;
  index: number;
  name: string;
  behavioralMetric: string;
  exampleScore: string;
};

const capabilityDetails: Record<string, CapabilityDetail> = {
  'signal-awareness': {
    id: 'signal-awareness',
    index: 1,
    name: 'Signal Awareness',
    behavioralMetric: 'Question Quality',
    exampleScore: '4.3 / 5'
  },
  'signal-interpretation': {
    id: 'signal-interpretation',
    index: 2,
    name: 'Signal Interpretation',
    behavioralMetric: 'Listening & Responsiveness',
    exampleScore: '4.1 / 5'
  },
  'value-connection': {
    id: 'value-connection',
    index: 3,
    name: 'Value Connection',
    behavioralMetric: 'Value Framing (Making It Matter)',
    exampleScore: '4.0 / 5'
  },
  'customer-engagement-monitoring': {
    id: 'customer-engagement-monitoring',
    index: 4,
    name: 'Customer Engagement Monitoring',
    behavioralMetric: 'Customer Engagement Cues',
    exampleScore: '4.2 / 5'
  },
  'objection-navigation': {
    id: 'objection-navigation',
    index: 5,
    name: 'Objection Navigation',
    behavioralMetric: 'Objection Handling',
    exampleScore: '3.9 / 5'
  },
  'conversation-management': {
    id: 'conversation-management',
    index: 6,
    name: 'Conversation Management',
    behavioralMetric: 'Conversation Control & Structure',
    exampleScore: '4.4 / 5'
  },
  'adaptive-response': {
    id: 'adaptive-response',
    index: 7,
    name: 'Adaptive Response',
    behavioralMetric: 'Adaptability',
    exampleScore: '4.1 / 5'
  },
  'commitment-generation': {
    id: 'commitment-generation',
    index: 8,
    name: 'Commitment Generation',
    behavioralMetric: 'Commitment Gaining',
    exampleScore: '4.5 / 5'
  }
};

export default function HowSignalIntelligenceIsApplied() {
  return (
    <div className="flex flex-col">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 space-y-6 max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">How Signal Intelligence™ Is Applied</h1>

          <div className="space-y-4 text-lg text-foreground leading-relaxed">
            <p>
              Signal Intelligence™ is applied through observable behaviors that occur during real conversations.
              This page shows how those behaviors are organized, monitored, and used to support professional judgment,
              without diagnosing intent, emotion, or competence.
            </p>

            <p>
              Each capability represents what can be noticed in the moment, how it is described, and why it may matter
              for next decisions. The goal is not to score people, but to support reflection, coaching, and consistency
              in complex conversations.
            </p>

            <p>
              Signal Intelligence™ is applied through structured observation, not interpretation or automation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4 space-y-4 max-w-4xl">
          <h2 id="how-to-read" className="text-2xl md:text-3xl font-bold text-primary">How to Read This Page</h2>
          <ul className="list-disc list-inside space-y-2 text-foreground">
            <li>Each card represents a Signal Intelligence™ capability used in practice.</li>
            <li>Capabilities are grounded in observable behaviors only.</li>
            <li>Expanding a card reveals behavioral focus, indicators, and illustrative calculations.</li>
          </ul>
          <p className="text-foreground">
            Examples shown are illustrative, not prescriptive. Signals support reflection and coaching.
            Interpretation and judgment always remain with the professional.
          </p>
        </div>
      </section>

      <SignalIntelligenceCapabilityCards />

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
              Signal Intelligence™ Capabilities in Practice
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.values(capabilityDetails).map((capability) => (
                <div
                  key={capability.id}
                  className="group relative p-6 rounded-xl border-2 border-primary bg-white text-left transition-all duration-200 shadow-md"
                  aria-label={`Signal Intelligence capability ${capability.name}`}
                >
                  <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">{capability.index}</span>
                  </div>

                  <div className="mt-8 mb-3">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {capability.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">{capability.behavioralMetric}</p>
                  </div>

                  <div className="text-2xl font-bold text-primary">{capability.exampleScore}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold">Signal Intelligence™ Metrics</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Observable, behavioral outcomes that drive measurable performance improvement
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl border-2 border-primary bg-white space-y-3 hover:shadow-xl transition-shadow shadow-md">
              <div className="text-4xl font-bold text-primary">92%</div>
              <div className="text-sm font-semibold text-foreground">Question Quality</div>
              <p className="text-xs text-muted-foreground">Open-ended, diagnostic questions that uncover needs</p>
            </div>

            <div className="p-6 rounded-xl border-2 border-primary bg-white space-y-3 hover:shadow-xl transition-shadow shadow-md">
              <div className="text-4xl font-bold text-primary">88%</div>
              <div className="text-sm font-semibold text-foreground">Listening & Responsiveness</div>
              <p className="text-xs text-muted-foreground">Paraphrasing, acknowledging, building on customer input</p>
            </div>

            <div className="p-6 rounded-xl border-2 border-primary bg-white space-y-3 hover:shadow-xl transition-shadow shadow-md">
              <div className="text-4xl font-bold text-primary">91%</div>
              <div className="text-sm font-semibold text-foreground">Customer Engagement Cues</div>
              <p className="text-xs text-muted-foreground">Detecting and responding to customer interest and resistance</p>
            </div>

            <div className="p-6 rounded-xl border-2 border-primary bg-white space-y-3 hover:shadow-xl transition-shadow shadow-md">
              <div className="text-4xl font-bold text-primary">85%</div>
              <div className="text-sm font-semibold text-foreground">Conversation Control & Structure</div>
              <p className="text-xs text-muted-foreground">Guiding dialogue without dominating or losing direction</p>
            </div>

            <div className="p-6 rounded-xl border-2 border-primary bg-white space-y-3 hover:shadow-xl transition-shadow shadow-md">
              <div className="text-4xl font-bold text-primary">87%</div>
              <div className="text-sm font-semibold text-foreground">Objection Handling</div>
              <p className="text-xs text-muted-foreground">Addressing concerns without defensiveness or avoidance</p>
            </div>

            <div className="p-6 rounded-xl border-2 border-primary bg-white space-y-3 hover:shadow-xl transition-shadow shadow-md">
              <div className="text-4xl font-bold text-primary">90%</div>
              <div className="text-sm font-semibold text-foreground">Adaptability</div>
              <p className="text-xs text-muted-foreground">Adjusting tone, pace, and approach based on signals</p>
            </div>

            <div className="p-6 rounded-xl border-2 border-primary bg-white space-y-3 hover:shadow-xl transition-shadow shadow-md">
              <div className="text-4xl font-bold text-primary">86%</div>
              <div className="text-sm font-semibold text-foreground">Value Framing (Making It Matter)</div>
              <p className="text-xs text-muted-foreground">Connecting information to outcomes that matter to customers</p>
            </div>

            <div className="p-6 rounded-xl border-2 border-primary bg-white space-y-3 hover:shadow-xl transition-shadow shadow-md">
              <div className="text-4xl font-bold text-primary">83%</div>
              <div className="text-sm font-semibold text-foreground">Commitment Gaining</div>
              <p className="text-xs text-muted-foreground">Securing clear, voluntary next actions with mutual agreement</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
