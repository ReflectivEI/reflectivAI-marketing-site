'use client';

import { SignalIntelligenceCapabilityCards } from '@/components/SignalIntelligenceCapabilityCards';
// NOTE: Project cards are illustrative and non-evaluative.
// Do not add performance, ranking, or scoring logic here.

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
    </div>
  );
}
