'use client';

import { CheckCircle2 } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useState } from 'react';

/*
 * INTERNAL NOTE FOR FUTURE EDITORS:
 * This page is for applied transparency only.
 * No evaluative language, ranking logic, or performance framing may be added.
 * All metrics shown must remain illustrative and contextual.
 */

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

export default function AppliedCapabilitiesPage() {
  const [selectedCapability, setSelectedCapability] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openCapabilityDetail = (capabilityKey: string) => {
    setSelectedCapability(capabilityKey);
    setIsDialogOpen(true);
  };

  const currentCapability = selectedCapability ? capabilityDetails[selectedCapability] : null;

  return (
    <div className="flex flex-col">
      {/* Page Title */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">
              How Signal Intelligence™ Is Applied
            </h1>

            {/* Page Intro */}
            <div className="space-y-4 text-lg text-foreground leading-relaxed mb-12">
              <p>
                Signal Intelligence™ is applied through observable behaviors that occur during real conversations.
                This page shows how those behaviors are organized, monitored, and used to support professional judgment, without diagnosing intent, emotion, or competence.
              </p>
              <p>
                Each capability represents what can be noticed in the moment, how it is described, and why it may matter for next decisions. The goal is not to score people, but to support reflection, coaching, and consistency in complex conversations.
              </p>
              <p className="font-medium">
                Signal Intelligence™ is applied through structured observation, not interpretation or automation.
              </p>
            </div>

            {/* How to Read This Page */}
            <div className="bg-muted/50 border-l-4 border-primary rounded p-6 space-y-4">
              <h2 className="text-xl font-semibold text-primary">How to Read This Page</h2>
              <p className="text-base text-foreground">
                This page is designed for exploration, not evaluation.
              </p>
              <ul className="space-y-2 text-base text-foreground list-disc list-inside">
                <li>Each card represents a Signal Intelligence™ capability used in practice.</li>
                <li>Capabilities are grounded in observable behaviors only, such as what is said, how responses unfold, and how momentum shifts.</li>
                <li>Expanding a card reveals the behavioral focus, observable indicators, and an illustrative explanation of how the signal is surfaced.</li>
              </ul>
              <div className="pt-2">
                <p className="text-base font-semibold text-foreground mb-2">Important:</p>
                <ul className="space-y-2 text-base text-foreground list-disc list-inside">
                  <li>Examples shown are illustrative, not prescriptive.</li>
                  <li>Signals support reflection and coaching. They do not determine outcomes.</li>
                  <li>Interpretation and judgment always remain with the professional.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signal Intelligence™ Capabilities in Practice */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
              Signal Intelligence™ Capabilities in Practice
            </h2>

            {/* Project Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
        </div>
      </section>

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
                  <h4 className="text-lg font-semibold mb-2 text-foreground">How it's evaluated</h4>
                  <p className="text-muted-foreground">{currentCapability.whatScoreReflects}</p>
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
