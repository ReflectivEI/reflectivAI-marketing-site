'use client';

import React from 'react';
import { CheckCircle2, Shield, Lock, FileCheck } from 'lucide-react';

/**
 * TRUST & GOVERNANCE PAGE
 * Content moved from homepage - ethics, privacy, compliance sections
 * Visual standards: Navy borders (#1e3a8a), teal hover shadows, white/light grey backgrounds
 */

export default function TrustGovernancePage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6">
              Trust & Governance
            </h1>
            <p className="text-xl text-gray-600">
              Built on observable behavior, ethical boundaries, and human-led interpretation.
            </p>
          </div>
        </div>
      </section>

      {/* Trust & Transparency */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold">Trust & Transparency</h2>
              <p className="text-xl text-gray-600">
                Signal Intelligence™ is built on observable behavior, ethical boundaries, and human-led interpretation
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4 text-center">
                <div className="w-16 h-16 rounded-full bg-[#1e3a8a]/10 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="h-8 w-8 text-[#1e3a8a]" />
                </div>
                <h3 className="text-xl font-semibold">Observable Behavior Only</h3>
                <p className="text-gray-600">
                  We measure what can be seen and heard—not what someone might be thinking or feeling. No psychological profiling, no emotional scoring.
                </p>
              </div>

              <div className="space-y-4 text-center">
                <div className="w-16 h-16 rounded-full bg-[#1e3a8a]/10 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="h-8 w-8 text-[#1e3a8a]" />
                </div>
                <h3 className="text-xl font-semibold">Ethical Boundary</h3>
                <p className="text-gray-600">
                  If a response would feel inappropriate if the roles were reversed, it is outside the Signal Intelligence™ boundary.
                </p>
              </div>

              <div className="space-y-4 text-center">
                <div className="w-16 h-16 rounded-full bg-[#1e3a8a]/10 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="h-8 w-8 text-[#1e3a8a]" />
                </div>
                <h3 className="text-xl font-semibold">Human-Led Interpretation</h3>
                <p className="text-gray-600">
                  AI highlights patterns. Professionals interpret meaning and decide how to respond. Judgment always stays with the human.
                </p>
              </div>
            </div>

            <div className="bg-white border-2 border-[#1e3a8a] rounded-lg p-8 space-y-4">
              <h4 className="text-xl font-semibold">Our Commitment</h4>
              <p className="text-gray-600">
                ReflectivAI is designed to support professional judgment, not replace it. We provide information and suggestions, but you always maintain control. This ensures accountability, authenticity, and ethical engagement in every interaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* From AI-Detected Signals to Informed Action */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold">From AI-Detected Signals to Informed Action</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                ReflectivAI uses AI to detect patterns in observable behavior during structured practice. These signals do not represent intent, emotion, or motivation. They provide context that helps professionals decide how to respond in high-stakes conversations.
              </p>
            </div>

            {/* Three-Column Interpretive Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Column 1: What AI Detects */}
              <div className="bg-white rounded-xl p-6 border-2 border-[#1e3a8a] space-y-4 shadow-md hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900">What AI Detects</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#1e3a8a] mt-1">•</span>
                    <span>Question sequencing and structure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1e3a8a] mt-1">•</span>
                    <span>Response timing and turn length</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1e3a8a] mt-1">•</span>
                    <span>Topic continuity or drift</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1e3a8a] mt-1">•</span>
                    <span>Frequency of customer participation</span>
                  </li>
                </ul>
                <p className="text-xs text-gray-500 italic pt-2 border-t border-gray-200">
                  No evaluation. No scoring.
                </p>
              </div>

              {/* Column 2: What the Signal Indicates */}
              <div className="bg-white rounded-xl p-6 border-2 border-[#1e3a8a] space-y-4 shadow-md hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900">What the Signal Indicates</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#1e3a8a] mt-1">•</span>
                    <span>Alignment vs. misalignment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1e3a8a] mt-1">•</span>
                    <span>Engagement vs. overload</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1e3a8a] mt-1">•</span>
                    <span>Progression vs. hesitation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1e3a8a] mt-1">•</span>
                    <span>Clarity vs. ambiguity</span>
                  </li>
                </ul>
                <p className="text-xs text-gray-500 italic pt-2 border-t border-gray-200">
                  Situational context, not internal state.
                </p>
              </div>

              {/* Column 3: What It Informs */}
              <div className="bg-white rounded-xl p-6 border-2 border-[#1e3a8a] space-y-4 shadow-md hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900">What It Informs</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#1e3a8a] mt-1">•</span>
                    <span>Whether to clarify or proceed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1e3a8a] mt-1">•</span>
                    <span>Whether to pause or reframe</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1e3a8a] mt-1">•</span>
                    <span>Whether to summarize or ask a follow-up</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1e3a8a] mt-1">•</span>
                    <span>Whether to propose next steps</span>
                  </li>
                </ul>
                <p className="text-xs text-gray-500 italic pt-2 border-t border-gray-200">
                  Professional options, not recommendations.
                </p>
              </div>
            </div>

            {/* Boundary Statement */}
            <div className="bg-[#1e3a8a]/5 border-2 border-[#1e3a8a] rounded-xl p-6 text-center">
              <p className="text-lg font-semibold text-gray-900">
                ReflectivAI detects behavioral signals and provides context. Professionals interpret those signals and choose how to respond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Disclosures */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold">Important Disclosures</h2>
            </div>

            <div className="space-y-6">
              {/* Disclosure 1: Scoring Transparency */}
              <div className="bg-white rounded-lg p-6 border-2 border-[#1e3a8a] shadow-md hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <FileCheck className="h-6 w-6 text-[#1e3a8a]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900">Scoring Transparency</h3>
                    <p className="text-sm text-gray-600">
                      Signal Intelligence™ scores reflect observable communication behaviors during structured practice. They are not assessments of personality, intent, emotional state, or professional competence, and are not used for automated decision-making.
                    </p>
                  </div>
                </div>
              </div>

              {/* Disclosure 2: Illustrative Example Disclaimer */}
              <div className="bg-white rounded-lg p-6 border-2 border-[#1e3a8a] shadow-md hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Shield className="h-6 w-6 text-[#1e3a8a]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900">Illustrative Examples</h3>
                    <p className="text-sm text-gray-600">
                      All scores, calculations, and examples shown on this site are illustrative demonstrations for educational purposes. Actual scores vary based on individual performance during practice sessions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Disclosure 3: AI Role Boundary */}
              <div className="bg-white rounded-lg p-6 border-2 border-[#1e3a8a] shadow-md hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Lock className="h-6 w-6 text-[#1e3a8a]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900">AI Role Boundary</h3>
                    <p className="text-sm text-gray-600">
                      AI identifies behavioral patterns; interpretation and judgment remain with the professional. Signal Intelligence™ supports reflection and skill development—it does not replace human decision-making or professional expertise.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Reinforcement */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg font-medium text-[#1e3a8a]">
              AI surfaces patterns. People decide what to do next.
            </p>
          </div>
        </div>
      </section>

      {/* Credibility Statement */}
      <section className="py-12 bg-gray-50">
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
