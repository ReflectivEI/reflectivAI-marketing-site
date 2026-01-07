'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';

/**
 * USE CASES PAGE
 * Content moved from homepage - onboarding, coaching, program insights sections
 * Visual standards: Navy borders (#1e3a8a), teal hover shadows, white/light grey backgrounds
 */

export default function UseCasesPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6">
              Use Cases
            </h1>
            <p className="text-xl text-gray-600">
              Discover how Signal Intelligence™ transforms sales training across onboarding, coaching, and program insights.
            </p>
          </div>
        </div>
      </section>

      {/* Where This Fits in Sales Enablement */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold">
                Where This Fits in Sales Enablement
              </h2>
              <p className="text-xl text-gray-600">
                Signal Intelligence™ plugs into existing life sciences training and coaching workflows.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl border-2 border-[#1e3a8a] bg-blue-50 space-y-3 shadow-md hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-300">
                <div className="h-12 w-12 rounded-lg bg-[#1e3a8a]/10 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-[#1e3a8a]" />
                </div>
                <h3 className="text-xl font-semibold">Onboarding & Certification</h3>
                <p className="text-gray-600">
                  Reps demonstrate capability across eight Signal Intelligence™ behaviors before full territory deployment.
                </p>
              </div>

              <div className="p-6 rounded-xl border-2 border-[#1e3a8a] bg-white space-y-3 shadow-md hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-300">
                <div className="h-12 w-12 rounded-lg bg-[#1e3a8a]/10 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-[#1e3a8a]" />
                </div>
                <h3 className="text-xl font-semibold">Ongoing Coaching</h3>
                <p className="text-gray-600">
                  Managers use coaching cards and scores to focus 1:1s on real conversational decisions.
                </p>
              </div>

              <div className="p-6 rounded-xl border-2 border-[#1e3a8a] bg-purple-50 space-y-3 shadow-md hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-300">
                <div className="h-12 w-12 rounded-lg bg-[#1e3a8a]/10 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-[#1e3a8a]" />
                </div>
                <h3 className="text-xl font-semibold">Program Insight</h3>
                <p className="text-gray-600">
                  Enablement leaders see which capabilities are strong or weak across teams to target support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Coaching Modules */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold">Structured Coaching Modules</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Master the essential skills for pharma sales success with proven frameworks and hands-on practice
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg border-2 border-[#1e3a8a] bg-white shadow-md hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-300 space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Discovery Questions Mastery</h3>
              <p className="text-gray-600">
                Learn to ask powerful questions that uncover stakeholder needs, challenges, and priorities
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 bg-[#1e3a8a]/10 text-[#1e3a8a] rounded text-xs font-medium">Question Quality</span>
                <span className="px-2 py-1 bg-[#14b8a6]/10 text-[#14b8a6] rounded text-xs font-medium">Signal Awareness</span>
              </div>
            </div>

            <div className="p-6 rounded-lg border-2 border-[#1e3a8a] bg-white shadow-md hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-300 space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Stakeholder Mapping</h3>
              <p className="text-gray-600">
                Identify and understand all decision-makers in the healthcare ecosystem
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-xs font-medium">Value Connection</span>
                <span className="px-2 py-1 bg-[#14b8a6]/10 text-[#14b8a6] rounded text-xs font-medium">Customer Engagement</span>
              </div>
            </div>

            <div className="p-6 rounded-lg border-2 border-[#1e3a8a] bg-white shadow-md hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-300 space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Clinical Evidence Communication</h3>
              <p className="text-gray-600">
                Present clinical data effectively to different stakeholder types
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-xs font-medium">Signal Interpretation</span>
                <span className="px-2 py-1 bg-[#1e3a8a]/10 text-[#1e3a8a] rounded text-xs font-medium">Conversation Management</span>
              </div>
            </div>

            <div className="p-6 rounded-lg border-2 border-[#1e3a8a] bg-white shadow-md hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-300 space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Objection Handling</h3>
              <p className="text-gray-600">
                Address concerns and objections with evidence and responsiveness
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 bg-[#1e3a8a]/10 text-[#1e3a8a] rounded text-xs font-medium">Signal Interpretation</span>
                <span className="px-2 py-1 bg-[#14b8a6]/10 text-[#14b8a6] rounded text-xs font-medium">Objection Navigation</span>
              </div>
            </div>

            <div className="p-6 rounded-lg border-2 border-[#1e3a8a] bg-white shadow-md hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-300 space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Closing Techniques</h3>
              <p className="text-gray-600">
                Guide stakeholders toward commitment with confidence and integrity
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 bg-[#14b8a6]/10 text-[#14b8a6] rounded text-xs font-medium">Commitment Generation</span>
                <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-xs font-medium">Adaptive Response</span>
              </div>
            </div>

            <div className="p-6 rounded-lg border-2 border-[#1e3a8a] bg-white shadow-md hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-300 space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Signal Intelligence™ Mastery for Pharma</h3>
              <p className="text-gray-600">
                Integrate all conversational intelligence frameworks for healthcare selling
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-xs font-medium">Value Connection</span>
                <span className="px-2 py-1 bg-[#1e3a8a]/10 text-[#1e3a8a] rounded text-xs font-medium">Signal Awareness</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-Time Coaching in Action */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold">Real-Time Coaching in Action</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how ReflectivAI provides instant, actionable feedback during role-play conversations.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {/* Coaching Card 1 - Strong Performance */}
            <div className="bg-white rounded-xl border-2 border-[#1e3a8a] p-6 space-y-4 shadow-md hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-300">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Responsiveness</h3>
                  <p className="text-sm text-gray-600 mt-1">Turn 4 of conversation</p>
                </div>
                <div className="flex-shrink-0 px-3 py-1 bg-yellow-50 border border-yellow-200 rounded-full">
                  <span className="text-sm font-semibold text-[#1e3a8a]">Consistently strong</span>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">What you did well:</span> You directly addressed the physician's concern about patient compliance by acknowledging their experience and offering a specific solution.
                </p>
                <p className="text-sm text-[#1e3a8a] font-medium">
                  This is a strong example of Responsiveness—you stayed on topic and provided relevant information without deflecting.
                </p>
              </div>
            </div>

            {/* Coaching Card 2 - Needs Improvement */}
            <div className="bg-white rounded-xl border-2 border-gray-300 p-6 space-y-4 shadow-md hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-300">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Intent Alignment</h3>
                  <p className="text-sm text-gray-600 mt-1">Turn 7 of conversation</p>
                </div>
                <div className="flex-shrink-0 px-3 py-1 bg-yellow-50 border border-yellow-200 rounded-full">
                  <span className="text-sm font-semibold text-[#1e3a8a]">Inconsistent</span>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">Opportunity to improve:</span> Your response drifted into product features when the physician was asking about clinical outcomes. This shifted focus away from their core concern.
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">Try this instead:</span> "Let me address the outcomes data you're asking about. In the Phase 3 trial, we saw a 23% improvement in..."
                </p>
              </div>
            </div>

            {/* Coaching Card 3 - Strong Performance */}
            <div className="bg-white rounded-xl border-2 border-[#1e3a8a] p-6 space-y-4 shadow-md hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-300">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Behavioral Adaptability</h3>
                  <p className="text-sm text-gray-600 mt-1">Turn 9 of conversation</p>
                </div>
                <div className="flex-shrink-0 px-3 py-1 bg-yellow-50 border border-yellow-200 rounded-full">
                  <span className="text-sm font-semibold text-[#1e3a8a]">Generally strong</span>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">What you did well:</span> When the physician expressed skepticism, you adjusted your approach by offering to share peer-reviewed data rather than continuing with your prepared talking points.
                </p>
                <p className="text-sm text-[#1e3a8a] font-medium">
                  This shows strong Behavioral Adaptability—you read the signal and changed course appropriately.
                </p>
              </div>
            </div>

            {/* Coaching Card 4 - Needs Improvement */}
            <div className="bg-white rounded-xl border-2 border-gray-300 p-6 space-y-4 shadow-md hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-300">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Conversational Balance</h3>
                  <p className="text-sm text-gray-600 mt-1">Turn 11 of conversation</p>
                </div>
                <div className="flex-shrink-0 px-3 py-1 bg-yellow-50 border border-yellow-200 rounded-full">
                  <span className="text-sm font-semibold text-[#1e3a8a]">Generally strong</span>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">Opportunity to improve:</span> Your last three responses were longer than necessary. The physician tried to interject twice but you continued speaking.
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">Try this instead:</span> After making your key point, pause and ask: "Does that address your question, or would you like me to elaborate on any part?"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
