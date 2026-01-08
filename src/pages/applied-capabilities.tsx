'use client';

/*
 * INTERNAL NOTE FOR FUTURE EDITORS:
 * This page is for applied transparency only.
 * No evaluative language, ranking logic, or performance framing may be added.
 * All metrics shown must remain illustrative and contextual.
 */

import * as React from 'react';

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

const capabilityDetails: CapabilityDetail[] = [
  {
    id: 'signal-awareness',
    index: 1,
    name: 'Signal Awareness',
    behavioralMetric: 'Question Quality',
    exampleScore: '4.3 / 5',
    definition: 'The ability to notice what matters in the conversation and ask purposeful, customer-centric questions.',
    whatScoreReflects: 'How consistently questions surface customer priorities rather than gather surface information.',
    whatGoodLooksLike: ['Open-ended, diagnostic questions', 'Follow-ups that build on prior answers', 'Logical sequencing without interrogation'],
    howCalculated: ['Open vs. closed question ratio', 'Relevance to stated customer goals', 'Depth of follow-up questioning'],
    scoreCalculation:
      '(Open Questions Ratio: 0.92 × 2.0) + (Goal Relevance Score: 0.88 × 2.0) + (Follow-Up Depth Score: 0.85 × 1.0) = 4.30 / 5',
    howMeasured: 'Question structure classification, topic-goal alignment detection, turn-to-turn continuity'
  },
  {
    id: 'signal-interpretation',
    index: 2,
    name: 'Signal Interpretation',
    behavioralMetric: 'Listening & Responsiveness',
    exampleScore: '4.1 / 5',
    definition: 'The ability to accurately hear, acknowledge, and respond to customer input.',
    whatScoreReflects: 'Whether responses demonstrate understanding and adapt to new information.',
    whatGoodLooksLike: ['Clear acknowledgment before responding', 'Accurate paraphrasing', 'Adjustments after new input'],
    howCalculated: ['Acknowledgment frequency', 'Paraphrase accuracy', 'Response alignment'],
    scoreCalculation:
      '(Acknowledgment Presence: 0.90 × 1.5) + (Paraphrase Accuracy: 0.85 × 2.0) + (Response Alignment: 0.80 × 1.5) = 4.10 / 5',
    howMeasured: 'Turn-level response mapping, linguistic acknowledgment markers, adjustment detection'
  },
  {
    id: 'value-connection',
    index: 3,
    name: 'Value Connection',
    behavioralMetric: 'Value Framing (Making It Matter)',
    exampleScore: '4.0 / 5',
    definition: 'The ability to connect information to outcomes that matter to the customer.',
    whatScoreReflects: 'How consistently communication emphasizes customer outcomes over product features.',
    whatGoodLooksLike: ['Outcome-based language', 'Clear linkage to priorities', 'Minimal feature dumping'],
    howCalculated: ['Outcome vs. feature language ratio', 'Explicit goal references'],
    scoreCalculation: '(Outcome Language Ratio: 0.80 × 2.5) + (Goal Link Frequency: 0.75 × 2.5) = 4.00 / 5',
    howMeasured: 'Language classification, goal-outcome linkage detection'
  },
  {
    id: 'customer-engagement-monitoring',
    index: 4,
    name: 'Customer Engagement Monitoring',
    behavioralMetric: 'Customer Engagement Cues',
    exampleScore: '4.2 / 5',
    definition: 'The ability to notice shifts in engagement and conversational momentum.',
    whatScoreReflects: 'Sensitivity to participation changes and engagement signals.',
    whatGoodLooksLike: ['Awareness of silence or pacing changes', 'Recognition of forward-looking cues', 'Adjustment when engagement drops'],
    howCalculated: ['Talk-time balance', 'Question depth', 'Forward-looking language'],
    scoreCalculation: '(Talk-Time Balance: 0.85 × 1.5) + (Question Depth: 0.90 × 1.5) + (Forward-Looking Cues: 0.88 × 2.0) = 4.20 / 5',
    howMeasured: 'Participation pattern tracking, cue frequency analysis'
  },
  {
    id: 'objection-navigation',
    index: 5,
    name: 'Objection Navigation',
    behavioralMetric: 'Objection Handling',
    exampleScore: '3.9 / 5',
    definition: 'The ability to respond constructively to resistance without defensiveness.',
    whatScoreReflects: 'Quality of acknowledgment and composure during objections.',
    whatGoodLooksLike: ['Acknowledgment before rebuttal', 'Calm pacing', 'Exploratory questioning'],
    howCalculated: ['Acknowledgment presence', 'Rebuttal timing', 'Defensive language absence'],
    scoreCalculation:
      '(Acknowledgment Score: 0.85 × 2.0) + (Rebuttal Timing Score: 0.75 × 1.5) + (Defensive Language Avoidance: 0.80 × 1.5) = 3.90 / 5',
    howMeasured: 'Objection-response sequencing, tone marker detection'
  },
  {
    id: 'conversation-management',
    index: 6,
    name: 'Conversation Management',
    behavioralMetric: 'Conversation Control & Structure',
    exampleScore: '4.4 / 5',
    definition: 'The ability to guide the conversation with clarity and purpose.',
    whatScoreReflects: 'Structural coherence and directional control.',
    whatGoodLooksLike: ['Clear purpose setting', 'Smooth transitions', 'Effective summarization'],
    howCalculated: ['Purpose clarity', 'Transition effectiveness', 'Summary presence'],
    scoreCalculation:
      '(Purpose Statements: 0.95 × 1.5) + (Transition Clarity: 0.90 × 1.5) + (Summarization Quality: 0.88 × 2.0) = 4.40 / 5',
    howMeasured: 'Structural markers, topic transition detection, close-out language'
  },
  {
    id: 'adaptive-response',
    index: 7,
    name: 'Adaptive Response',
    behavioralMetric: 'Adaptability',
    exampleScore: '4.1 / 5',
    definition: 'The ability to adjust approach based on what is happening in the moment.',
    whatScoreReflects: 'Responsiveness to new conversational signals.',
    whatGoodLooksLike: ['Adjustments in tone, depth, or pacing', 'Abandoning scripts when needed'],
    howCalculated: ['Signal-response alignment', 'Degree of approach change'],
    scoreCalculation: '(Signal Detection Accuracy: 0.85 × 2.0) + (Response Adjustment Strength: 0.80 × 2.0) = 4.10 / 5',
    howMeasured: 'Cue-response mapping, language shift analysis'
  },
  {
    id: 'commitment-generation',
    index: 8,
    name: 'Commitment Generation',
    behavioralMetric: 'Commitment Gaining',
    exampleScore: '4.5 / 5',
    definition: 'The ability to secure clear, voluntary next actions.',
    whatScoreReflects: 'Clarity and mutuality of next steps.',
    whatGoodLooksLike: ['Specific next steps', 'Clear ownership', 'Mutual confirmation'],
    howCalculated: ['Next-step specificity', 'Confirmation language'],
    scoreCalculation: '(Next-Step Clarity: 0.95 × 2.5) + (Mutual Confirmation: 0.90 × 2.5) = 4.50 / 5',
    howMeasured: 'Commitment markers, agreement confirmation'
  }
];

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

function getFocusableElements(container: HTMLElement | null): HTMLElement[] {
  if (!container) return [];
  const selectors = [
    'a[href]',
    'area[href]',
    'button:not([disabled])',
    'input:not([disabled]):not([type="hidden"])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    'iframe',
    'object',
    'embed',
    '[contenteditable="true"]',
    '[tabindex]:not([tabindex="-1"])'
  ];
  return Array.from(container.querySelectorAll<HTMLElement>(selectors.join(','))).filter((el) => {
    const style = window.getComputedStyle(el);
    const visible = style.visibility !== 'hidden' && style.display !== 'none';
    return visible && !el.hasAttribute('disabled');
  });
}

type CapabilityModalProps = {
  isOpen: boolean;
  title: string;
  capability: CapabilityDetail | null;
  onClose: () => void;
  labelledById: string;
};

function CapabilityModal({ isOpen, title, capability, onClose, labelledById }: CapabilityModalProps) {
  const panelRef = React.useRef<HTMLDivElement | null>(null);
  const closeButtonRef = React.useRef<HTMLButtonElement | null>(null);
  const previouslyFocusedRef = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    if (!isOpen) return;

    previouslyFocusedRef.current = document.activeElement as HTMLElement | null;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const raf = window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key !== 'Tab') return;

      const focusables = getFocusableElements(panelRef.current);
      if (focusables.length === 0) {
        e.preventDefault();
        return;
      }

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
        return;
      }

      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = originalOverflow;
      previouslyFocusedRef.current?.focus?.();
    };
  }, [isOpen, onClose]);

  if (!isOpen || !capability) return null;

  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        className="absolute inset-0 bg-black/50"
        aria-label="Close dialog"
        onClick={onClose}
      />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={labelledById}
          className="relative w-full max-w-3xl rounded-2xl border-2 border-primary bg-background shadow-2xl"
        >
          <div className="flex items-start justify-between gap-4 border-b border-border px-6 py-5">
            <div className="min-w-0">
              <p className="text-xs font-semibold text-muted-foreground">{title}</p>
              <h3 id={labelledById} className="mt-1 text-xl font-bold text-primary">
                {capability.name}
              </h3>
              <div className="mt-3">
                <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                  {capability.behavioralMetric}
                </span>
              </div>
            </div>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="shrink-0 rounded-lg border-2 border-primary bg-white px-3 py-2 text-sm font-semibold text-primary transition-transform duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Close
            </button>
          </div>

          <div className="max-h-[75vh] overflow-auto px-6 py-6">
            <div className="grid gap-6">
              <div className="rounded-xl border-2 border-border bg-white p-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-foreground">Definition</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{capability.definition}</p>
                  </div>
                  <div className="shrink-0 rounded-xl border-2 border-yellow-200 bg-yellow-50 px-4 py-3 text-center">
                    <p className="text-xs font-semibold text-muted-foreground">Example Score</p>
                    <p className="mt-1 text-2xl font-bold text-primary">{capability.exampleScore}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border-2 border-border bg-white p-5">
                <p className="text-sm font-semibold text-foreground">What the score reflects</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{capability.whatScoreReflects}</p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border-2 border-border bg-white p-5">
                  <p className="text-sm font-semibold text-foreground">What good looks like</p>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {capability.whatGoodLooksLike.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-[6px] h-2 w-2 shrink-0 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border-2 border-border bg-white p-5">
                  <p className="text-sm font-semibold text-foreground">How it is calculated</p>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {capability.howCalculated.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-[6px] h-2 w-2 shrink-0 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="rounded-xl border-2 border-border bg-white p-5">
                <p className="text-sm font-semibold text-foreground">Score calculation (illustrative)</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{capability.scoreCalculation}</p>
              </div>

              <div className="rounded-xl border-2 border-border bg-white p-5">
                <p className="text-sm font-semibold text-foreground">How it is measured (illustrative)</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{capability.howMeasured}</p>
              </div>

              <div className="rounded-xl border-2 border-primary bg-muted/30 p-5">
                <p className="text-sm font-semibold text-primary">Important</p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="mt-[6px] h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span>Examples shown are illustrative, not prescriptive.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-[6px] h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span>Signals support reflection and coaching. They do not determine outcomes.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-[6px] h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span>Interpretation and judgment always remain with the professional.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-[6px] h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span>Nothing here diagnoses intent, emotion, or competence.</span>
                  </li>
                </ul>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-lg border-2 border-primary bg-white px-4 py-2 text-sm font-semibold text-primary transition-transform duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  Close
                </button>
              </div>
            </div>
          </div>

          <div className="px-6 pb-6">
            <p className="text-center text-xs text-muted-foreground">
              This page supports applied transparency through structured observation. It is not an evaluation of people.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CapabilityCardButton({
  capability,
  onOpen,
  variant
}: {
  capability: CapabilityDetail;
  onOpen: (capability: CapabilityDetail) => void;
  variant: 'section1' | 'section2';
}) {
  const base =
    'group relative w-full rounded-xl border-2 bg-white text-left shadow-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2';
  const border =
    variant === 'section2'
      ? 'border-primary hover:border-accent hover:shadow-2xl hover:scale-[1.02]'
      : 'border-primary hover:shadow-2xl hover:scale-[1.02]';

  return (
    <button
      type="button"
      onClick={() => onOpen(capability)}
      className={cx(base, border, 'p-6')}
      aria-label={`Open details for ${capability.name}`}
    >
      <div className="absolute top-4 left-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary shadow-sm">
        <span className="text-sm font-bold text-primary-foreground">{capability.index}</span>
      </div>

      <div className="mt-1 pl-10">
        <div className="space-y-2">
          <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
            {capability.name}
          </span>
          <div>
            <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
              {capability.behavioralMetric}
            </span>
          </div>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground"><span className="font-bold">Definition:</span> {capability.definition}</p>

        <div className="mt-4 flex items-end justify-between gap-3">
          <div className="text-xs font-semibold text-muted-foreground">Example score</div>
          <div className="text-2xl font-bold text-primary">{capability.exampleScore}</div>
        </div>

        <div className="mt-4 text-xs font-semibold text-muted-foreground underline decoration-muted-foreground/40 underline-offset-4">
          Tap to view calculation
        </div>
      </div>
    </button>
  );
}

export default function AppliedCapabilitiesPage() {
  const [section1Open, setSection1Open] = React.useState(false);
  const [section1Selected, setSection1Selected] = React.useState<CapabilityDetail | null>(null);

  const [section2Open, setSection2Open] = React.useState(false);
  const [section2Selected, setSection2Selected] = React.useState<CapabilityDetail | null>(null);

  const openSection1 = React.useCallback((capability: CapabilityDetail) => {
    setSection1Selected(capability);
    setSection1Open(true);
  }, []);

  const closeSection1 = React.useCallback(() => {
    setSection1Open(false);
    setSection1Selected(null);
  }, []);

  const openSection2 = React.useCallback((capability: CapabilityDetail) => {
    setSection2Selected(capability);
    setSection2Open(true);
  }, []);

  const closeSection2 = React.useCallback(() => {
    setSection2Open(false);
    setSection2Selected(null);
  }, []);

  return (
    <div className="flex flex-col">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">How Signal Intelligence™ Is Applied</h1>

            <div className="space-y-4 text-lg text-foreground leading-relaxed mb-12">
              <p>
                Signal Intelligence™ is applied through observable behaviors that occur during real conversations. This page shows how those behaviors are organized, monitored, and used to support professional judgment, without diagnosing intent, emotion, or competence.
              </p>
              <p>
                Each capability represents what can be noticed in the moment, how it is described, and why it may matter for next decisions. The goal is not to score people, but to support reflection, coaching, and consistency in complex conversations.
              </p>
              <p className="font-medium">Signal Intelligence™ is applied through structured observation, not interpretation or automation.</p>
            </div>

            <div className="bg-muted/50 border-l-4 border-primary rounded p-6 space-y-4">
              <h2 className="text-xl font-semibold text-primary">How to Read This Page</h2>
              <p className="text-base text-foreground">This page is designed for exploration, not evaluation.</p>
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

      {/* SECTION 1 — INTERACTIVE CAPABILITY SYSTEM — HIDDEN
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 space-y-3">
              <h2 className="text-3xl lg:text-4xl font-bold">8 Signal Intelligence™ Capabilities</h2>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                ReflectivAI organizes observable behaviors into eight capabilities. Each capability focuses on what can be noticed and practiced during real conversations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {capabilityDetails.map((capability) => (
                <CapabilityCardButton key={capability.id} capability={capability} onOpen={openSection1} variant="section1" />
              ))}
            </div>
          </div>
        </div>

        <CapabilityModal
          isOpen={section1Open}
          title="Capability Detail"
          capability={section1Selected}
          onClose={closeSection1}
          labelledById="capability-detail-modal-title"
        />
      </section> */}

      {/* SECTION 2 — INTERACTIVE "CAPABILITIES IN PRACTICE" */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 space-y-3">
              <h2 className="text-3xl lg:text-4xl font-bold">8 Signal Intelligence™ Capabilities</h2>
              <p className="text-base text-muted-foreground max-w-4xl mx-auto">
                ReflectivAI evaluates communication using eight Signal Intelligence™ capabilities. Each capability focuses on observable behaviors during structured practice.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {capabilityDetails.map((capability) => (
                <button
                  key={capability.id}
                  type="button"
                  onClick={() => openSection2(capability)}
                  className={cx(
                    'group w-full rounded-xl border-2 border-primary bg-white p-6 text-left shadow-md transition-all duration-300 ease-in-out',
                    'hover:border-accent hover:shadow-2xl hover:scale-[1.02]',
                    'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
                  )}
                  aria-label={`Open in-practice detail for ${capability.name}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="space-y-2">
                        <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                          {capability.name}
                        </span>
                        <div>
                          <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                            {capability.behavioralMetric}
                          </span>
                        </div>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground"><span className="font-bold">Definition:</span> {capability.definition}</p>
                    </div>

                    <div className="shrink-0 rounded-full border-2 border-yellow-200 bg-yellow-50 px-3 py-1 text-xs font-semibold text-primary">
                      {capability.exampleScore}
                    </div>
                  </div>

                  <div className="mt-5 text-xs font-semibold text-muted-foreground underline decoration-muted-foreground/40 underline-offset-4">
                    Click to view the full calculation and what good looks like.
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="text-xs text-muted-foreground">
                Click any capability card above to see the full calculation and learn what good looks like.
              </p>
            </div>
          </div>
        </div>

        <CapabilityModal
          isOpen={section2Open}
          title="Capabilities in Practice"
          capability={section2Selected}
          onClose={closeSection2}
          labelledById="capabilities-in-practice-modal-title"
        />
      </section>

      {/* SECTION 3 — STATIC SUMMARY GRID (NON-INTERACTIVE) — HIDDEN
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold">Signal Intelligence™ Metrics</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Observable, behavioral outcomes that drive measurable performance improvement
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilityDetails.map((capability) => (
              <div
                key={capability.id}
                className="rounded-xl border-2 border-primary bg-white p-6 shadow-md transition-transform duration-200 hover:shadow-xl"
              >
                <div className="space-y-2">
                  <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    {capability.name}
                  </span>
                  <div>
                    <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                      {capability.behavioralMetric}
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground"><span className="font-bold">Definition:</span> {capability.definition}</p>

                <div className="mt-5 flex items-end justify-between gap-3">
                  <div className="text-xs font-semibold text-muted-foreground">Example score</div>
                  <div className="text-2xl font-bold text-primary">{capability.exampleScore}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-xs text-muted-foreground">
              This summary grid is visual-only. It does not include click behavior.
            </p>
          </div>
        </div>
      </section> */}

    </div>
  );
}
