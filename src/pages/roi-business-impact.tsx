'use client';

import React from 'react';
import { CheckCircle2, TrendingUp, Target, Users, BarChart3 } from 'lucide-react';

/**
 * ROI & BUSINESS IMPACT PAGE
 * Content moved from homepage - business outcomes, metrics, value propositions
 * Visual standards: Navy borders (#1e3a8a), teal hover shadows, white/light grey backgrounds
 */

export default function ROIBusinessImpactPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6">
              ROI & Business Impact
            </h1>
            <p className="text-xl text-gray-600">
              Measurable outcomes that protect credibility and accelerate performance in life sciences sales.
            </p>
          </div>
        </div>
      </section>

      {/* Why Signal Intelligence™ Matters in Pharma */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Why Signal Intelligence™ Matters in Pharma
            </h2>
            <p className="text-xl text-gray-600">
              In high-expertise, regulated conversations, deals are rarely lost on data. They are lost when signals are missed.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="space-y-3 text-center">
              <div className="text-lg font-semibold text-[#1e3a8a]">Hesitation mistaken for resistance</div>
              <p className="text-gray-600">When uncertainty is misread as pushback, reps over-explain and lose credibility</p>
            </div>
            <div className="space-y-3 text-center">
              <div className="text-lg font-semibold text-[#1e3a8a]">Challenge triggering defensiveness</div>
              <p className="text-gray-600">When questions are met with justification instead of curiosity, trust erodes</p>
            </div>
            <div className="space-y-3 text-center">
              <div className="text-lg font-semibold text-[#1e3a8a]">Silence interpreted as disinterest</div>
              <p className="text-gray-600">When pauses are filled with more talking, the physician never gets to process</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Outcomes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold">
                Why It Matters for Life Sciences Sales Teams
              </h2>
              <p className="text-xl text-gray-600">
                Signal Intelligence™ helps life sciences reps protect credibility and access in high-stakes conversations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border-2 border-[#1e3a8a] bg-white space-y-3 shadow-md hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-300">
                <CheckCircle2 className="h-8 w-8 text-[#1e3a8a]" />
                <h3 className="text-xl font-semibold">Fewer Stalled Conversations</h3>
                <p className="text-gray-600">
                  Fewer calls that stall or end early when the conversation goes off-track.
                </p>
              </div>

              <div className="p-6 rounded-xl border-2 border-[#1e3a8a] bg-blue-50 space-y-3 shadow-md hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-300">
                <CheckCircle2 className="h-8 w-8 text-[#1e3a8a]" />
                <h3 className="text-xl font-semibold">Stronger Follow-Ups</h3>
                <p className="text-gray-600">
                  Stronger continuation commitments and follow-ups after clinical discussions.
                </p>
              </div>

              <div className="p-6 rounded-xl border-2 border-[#1e3a8a] bg-purple-50 space-y-3 shadow-md hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-300">
                <CheckCircle2 className="h-8 w-8 text-[#1e3a8a]" />
                <h3 className="text-xl font-semibold">Compliant Next Steps</h3>
                <p className="text-gray-600">
                  Clearer, more compliant next-step language with HCPs and access stakeholders.
                </p>
              </div>

              <div className="p-6 rounded-xl border-2 border-[#1e3a8a] bg-white space-y-3 shadow-md hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-300">
                <CheckCircle2 className="h-8 w-8 text-[#1e3a8a]" />
                <h3 className="text-xl font-semibold">Early Skill Visibility</h3>
                <p className="text-gray-600">
                  Managers see which conversational skills need support before performance dips.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Performance Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold">Key Performance Metrics</h2>
              <p className="text-xl text-gray-600">
                Track behavioral capabilities that drive conversational success
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border-2 border-[#1e3a8a] space-y-4 shadow-md hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-[#1e3a8a]/10 flex items-center justify-center">
                    <Target className="h-6 w-6 text-[#1e3a8a]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1e3a8a]">Question Quality</h3>
                </div>
                <p className="text-gray-600">
                  Measures how effectively reps ask discovery questions that uncover stakeholder needs and priorities
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 border-2 border-[#1e3a8a] space-y-4 shadow-md hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-[#1e3a8a]/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-[#1e3a8a]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1e3a8a]">Responsiveness</h3>
                </div>
                <p className="text-gray-600">
                  Tracks how well reps listen and respond directly to stakeholder concerns without deflecting
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 border-2 border-[#1e3a8a] space-y-4 shadow-md hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-[#1e3a8a]/10 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-[#1e3a8a]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1e3a8a]">Behavioral Adaptability</h3>
                </div>
                <p className="text-gray-600">
                  Evaluates ability to adjust approach based on stakeholder signals and conversation dynamics
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 border-2 border-[#1e3a8a] space-y-4 shadow-md hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-[#1e3a8a]/10 flex items-center justify-center">
                    <BarChart3 className="h-6 w-6 text-[#1e3a8a]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1e3a8a]">Intent Alignment</h3>
                </div>
                <p className="text-gray-600">
                  Measures how consistently reps stay aligned with stakeholder priorities throughout the conversation
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 border-2 border-[#1e3a8a] space-y-4 shadow-md hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-[#1e3a8a]/10 flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-[#1e3a8a]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1e3a8a]">Objection Navigation</h3>
                </div>
                <p className="text-gray-600">
                  Assesses how effectively reps address concerns and objections with evidence and empathy
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 border-2 border-[#1e3a8a] space-y-4 shadow-md hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-[#1e3a8a]/10 flex items-center justify-center">
                    <Target className="h-6 w-6 text-[#1e3a8a]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1e3a8a]">Conversational Balance</h3>
                </div>
                <p className="text-gray-600">
                  Monitors the balance between speaking and listening to ensure stakeholder engagement
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Analytics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold">Leadership Analytics & Behavioral Metrics</h2>
              <p className="text-xl text-gray-600">
                Give sales leaders visibility into team Signal Intelligence™ Capabilities
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 border-2 border-[#1e3a8a] space-y-6 shadow-md hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-300">
                <h3 className="text-2xl font-bold">Team-Wide Benchmarking</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[#1e3a8a] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Team-wide Signal Intelligence™ Capability benchmarking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[#1e3a8a] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Observable behavior tracking and measurement indicators</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[#1e3a8a] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Identify skill gaps before they impact field performance</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border-2 border-[#1e3a8a] space-y-6 shadow-md hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-300">
                <h3 className="text-2xl font-bold">Coaching Insights</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[#1e3a8a] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Adaptive learning paths based on behavioral metrics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[#1e3a8a] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Progress tracking across all coaching modules and frameworks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[#1e3a8a] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Role-play scenarios with AI-powered feedback on observable behaviors</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built on Behavioral Science */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 border-2 border-[#1e3a8a] rounded-xl p-8 space-y-4 shadow-md hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-300">
              <h4 className="text-xl font-semibold text-gray-900">Built on Behavioral Science</h4>
              <p className="text-gray-600">
                Signal Intelligence™ combines conversational intelligence research, behavioral psychology, and social dynamics theory. The result: practical skills that help you read situations accurately and respond in ways that preserve trust and credibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Statement */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600">
              Developed with former life sciences field leaders and compliance partners. Informed by thousands of simulated conversations in regulated, expert-to-expert environments.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
