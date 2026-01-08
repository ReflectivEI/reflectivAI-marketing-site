import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { ArrowRight, CheckCircle2, AlertCircle, TrendingUp, MessageSquare, Users, ChevronRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

// Demo data structures
interface ConversationTurn {
  speaker: 'rep' | 'customer';
  text: string;
  signals?: {
    capability: string;
    metric: string;
    rating: 'strong' | 'good' | 'needs-work';
    note: string;
  }[];
}

interface Scenario {
  id: string;
  title: string;
  description: string;
  persona: {
    name: string;
    role: string;
    concerns: string[];
    decisionStyle: string;
  };
  conversation: ConversationTurn[];
  coachingFeedback: {
    strengths: string[];
    improvements: string[];
    recommendations: string[];
    metrics: { name: string; score: number; max: number }[];
  };
}

const scenarios: Scenario[] = [
  {
    id: 'oncologist-discovery',
    title: 'Discovery Call with Oncologist',
    description: 'Navigate a time-constrained conversation while uncovering key priorities',
    persona: {
      name: 'Dr. Sarah Chen',
      role: 'Oncology Department Head',
      concerns: ['Patient outcomes', 'Time constraints', 'Evidence quality'],
      decisionStyle: 'Data-driven, values efficiency'
    },
    conversation: [
      {
        speaker: 'rep',
        text: "Dr. Chen, thanks for making time. I know you only have about 10 minutes, so I'll be mindful of that.",
        signals: [{
          capability: 'Signal Awareness',
          metric: 'Question Quality',
          rating: 'strong',
          note: 'Acknowledges time constraint upfront - shows awareness of customer context'
        }]
      },
      {
        speaker: 'customer',
        text: "I appreciate that. What did you want to discuss?"
      },
      {
        speaker: 'rep',
        text: "I wanted to understand what's top of mind for you right now when it comes to treatment options for your advanced melanoma patients.",
        signals: [{
          capability: 'Signal Awareness',
          metric: 'Question Quality',
          rating: 'strong',
          note: 'Open-ended question focused on customer priorities, not product features'
        }]
      },
      {
        speaker: 'customer',
        text: "Honestly, I'm seeing more patients who've failed first-line therapy. The challenge is finding options that balance efficacy with quality of life."
      },
      {
        speaker: 'rep',
        text: "That balance is critical. When you say quality of life, what specifically are you seeing that concerns you most?",
        signals: [{
          capability: 'Signal Interpretation',
          metric: 'Listening & Responsiveness',
          rating: 'strong',
          note: 'Picks up on key phrase and explores deeper - demonstrates active listening'
        }]
      },
      {
        speaker: 'customer',
        text: "Side effect profiles. Some of these therapies are so aggressive that patients struggle to maintain daily activities. I need options that work without destroying their remaining quality time."
      },
      {
        speaker: 'rep',
        text: "So if I'm hearing you right, you're looking for efficacy data, but the tolerability profile is equally important because it directly impacts whether patients can stay on therapy. Is that fair?",
        signals: [{
          capability: 'Value Connection',
          metric: 'Value Framing',
          rating: 'strong',
          note: 'Connects clinical need to patient adherence - frames value in doctor terms'
        }]
      },
      {
        speaker: 'customer',
        text: "Exactly. If they can't tolerate it, the efficacy doesn't matter."
      },
      {
        speaker: 'rep',
        text: "That makes complete sense. Would it be helpful if I shared some data on how our therapy performs on both dimensions—efficacy and tolerability—specifically in the second-line setting?",
        signals: [{
          capability: 'Commitment Generation',
          metric: 'Commitment Gaining',
          rating: 'good',
          note: 'Asks permission before presenting - respectful of time and builds engagement'
        }]
      }
    ],
    coachingFeedback: {
      strengths: [
        'Excellent signal awareness - acknowledged time constraint immediately',
        'Strong listening and responsiveness - picked up on "quality of life" and explored deeper',
        'Effective value framing - connected clinical need to patient adherence'
      ],
      improvements: [
        'Could have explored "failed first-line therapy" comment earlier',
        'Opportunity to ask about decision-making process or formulary considerations'
      ],
      recommendations: [
        'When a customer mentions a specific patient population ("failed first-line"), dig into that immediately - it often reveals urgency',
        'Consider asking: "What would need to be true for you to consider changing your current approach?" to understand decision criteria',
        'Before presenting data, confirm: "Is there anything else I should understand about your patient population before I share this?"'
      ],
      metrics: [
        { name: 'Question Quality', score: 9, max: 10 },
        { name: 'Listening & Responsiveness', score: 9, max: 10 },
        { name: 'Value Framing', score: 8, max: 10 },
        { name: 'Engagement Cues', score: 7, max: 10 },
        { name: 'Commitment Gaining', score: 7, max: 10 }
      ]
    }
  },
  {
    id: 'budget-objection',
    title: 'Handling Budget Objections',
    description: 'Navigate cost concerns with a hospital administrator',
    persona: {
      name: 'Michael Torres',
      role: 'Hospital Pharmacy Director',
      concerns: ['Budget constraints', 'Formulary impact', 'Cost-effectiveness'],
      decisionStyle: 'Analytical, risk-averse'
    },
    conversation: [
      {
        speaker: 'customer',
        text: "I've reviewed your proposal, but I have to be honest - the cost is significantly higher than our current standard of care."
      },
      {
        speaker: 'rep',
        text: "I appreciate you being direct about that. Cost is absolutely a real consideration. Can I ask - what are you currently using as your standard of care?",
        signals: [{
          capability: 'Objection Navigation',
          metric: 'Objection Handling',
          rating: 'strong',
          note: 'Acknowledges objection without being defensive, then seeks to understand context'
        }]
      },
      {
        speaker: 'customer',
        text: "We're using Drug X. It's been on formulary for years, and while it's not perfect, it's affordable and physicians are comfortable with it."
      },
      {
        speaker: 'rep',
        text: "That makes sense - familiarity and cost predictability matter. You mentioned it's not perfect. What are the gaps you're seeing with Drug X?",
        signals: [{
          capability: 'Signal Interpretation',
          metric: 'Listening & Responsiveness',
          rating: 'strong',
          note: 'Catches subtle signal ("not perfect") and explores it - turns objection into discovery'
        }]
      },
      {
        speaker: 'customer',
        text: "Well, we do see some patients who don't respond or have to discontinue due to side effects. Then we're scrambling for alternatives, which gets expensive."
      },
      {
        speaker: 'rep',
        text: "So there's a hidden cost when Drug X doesn't work - you're paying for the initial therapy plus the rescue therapy, plus the clinical time managing those transitions. Is that what you're experiencing?",
        signals: [{
          capability: 'Value Connection',
          metric: 'Value Framing',
          rating: 'strong',
          note: 'Reframes cost conversation from acquisition price to total cost of care'
        }]
      },
      {
        speaker: 'customer',
        text: "That's exactly it. We hadn't really quantified that, but yes - the failures are costly."
      },
      {
        speaker: 'rep',
        text: "Would it be useful to look at the total cost per successfully treated patient rather than just the per-unit cost? Our data shows that when you factor in response rates and tolerability, the cost per successful outcome is actually comparable - and in some cases, lower.",
        signals: [{
          capability: 'Adaptive Response',
          metric: 'Adaptability',
          rating: 'strong',
          note: 'Shifts conversation from price to value - adapts approach based on customer hidden cost insight'
        }]
      },
      {
        speaker: 'customer',
        text: "I'd need to see that analysis. If you can show me the math on that, it would help me make the case to the committee."
      },
      {
        speaker: 'rep',
        text: "Absolutely. I can pull together a cost-per-outcome analysis specific to your patient population. Would it also be helpful to include some case examples from similar institutions who've made this transition?",
        signals: [{
          capability: 'Commitment Generation',
          metric: 'Commitment Gaining',
          rating: 'good',
          note: 'Secures next step and offers additional value (peer examples) to strengthen case'
        }]
      }
    ],
    coachingFeedback: {
      strengths: [
        'Excellent objection handling - acknowledged concern without defensiveness',
        'Strong listening - caught "not perfect" signal and explored it',
        'Effective value reframing - shifted from price to total cost of care',
        'Good adaptability - pivoted approach based on customer insight'
      ],
      improvements: [
        'Could have asked about budget cycle timing to understand urgency',
        'Opportunity to explore who else needs to be involved in the decision'
      ],
      recommendations: [
        'When a customer mentions making the case to the committee, immediately ask who is on that committee and what matters most to each of them',
        'Consider asking what a successful outcome would look like for them personally in this decision to understand individual motivations',
        'Follow up with what concerns they think the committee will raise that should be addressed proactively'
      ],
      metrics: [
        { name: 'Objection Handling', score: 9, max: 10 },
        { name: 'Listening & Responsiveness', score: 9, max: 10 },
        { name: 'Value Framing', score: 9, max: 10 },
        { name: 'Adaptability', score: 8, max: 10 },
        { name: 'Commitment Gaining', score: 7, max: 10 }
      ]
    }
  },
  {
    id: 'clinical-evidence',
    title: 'Clinical Evidence Discussion',
    description: 'Present complex clinical data to a skeptical pharmacy director',
    persona: {
      name: 'Dr. Jennifer Patel',
      role: 'Pharmacy Director',
      concerns: ['Evidence quality', 'Real-world applicability', 'Patient safety'],
      decisionStyle: 'Evidence-focused, methodical'
    },
    conversation: [
      {
        speaker: 'customer',
        text: "I've seen your Phase 3 data. The efficacy looks promising, but I have questions about the patient population in the trial versus who we actually treat."
      },
      {
        speaker: 'rep',
        text: "That's a really important question - trial populations don't always match real-world patients. What differences are you seeing that concern you?",
        signals: [{
          capability: 'Signal Awareness',
          metric: 'Question Quality',
          rating: 'strong',
          note: 'Validates concern and invites customer to articulate specific gap - builds credibility'
        }]
      },
      {
        speaker: 'customer',
        text: "Well, your trial excluded patients over 75 and those with significant comorbidities. That's probably 40% of the patients I see."
      },
      {
        speaker: 'rep',
        text: "You're right - the trial had those exclusion criteria for safety monitoring purposes. That's a real gap. We do have some emerging real-world evidence from post-marketing surveillance that includes older patients and those with comorbidities. Would that be relevant to review?",
        signals: [{
          capability: 'Signal Interpretation',
          metric: 'Listening & Responsiveness',
          rating: 'strong',
          note: 'Acknowledges limitation honestly rather than deflecting - builds trust'
        }]
      },
      {
        speaker: 'customer',
        text: "Yes, I'd want to see that. What's the sample size and how robust is the data?"
      },
      {
        speaker: 'rep',
        text: "It's about 1,200 patients so far, with a median follow-up of 8 months. It's observational, so not as controlled as the Phase 3 trial, but it does show similar efficacy trends and - importantly - no unexpected safety signals in the older or comorbid populations.",
        signals: [{
          capability: 'Value Connection',
          metric: 'Value Framing',
          rating: 'good',
          note: 'Provides transparent context about data limitations while highlighting relevant findings'
        }]
      },
      {
        speaker: 'customer',
        text: "That's helpful. I'd still want to see the actual data. My other concern is the dosing schedule - it's more complex than what we currently use."
      },
      {
        speaker: 'rep',
        text: "I hear that - dosing complexity can impact adherence and create operational challenges. Can you help me understand what specifically about the schedule concerns you? Is it the frequency, the administration requirements, or something else?",
        signals: [{
          capability: 'Customer Engagement Monitoring',
          metric: 'Engagement Cues',
          rating: 'strong',
          note: 'Recognizes shift to new concern and explores it rather than defending dosing schedule'
        }]
      },
      {
        speaker: 'customer',
        text: "It's the administration requirements. We'd need to ensure nursing staff are properly trained, and that takes time and resources."
      },
      {
        speaker: 'rep',
        text: "That's a legitimate operational consideration. We actually offer a comprehensive training program for clinical staff at no cost, including on-site support during the first few administrations. Would it be worth exploring what that looks like and whether it addresses your concern?",
        signals: [{
          capability: 'Adaptive Response',
          metric: 'Adaptability',
          rating: 'strong',
          note: 'Pivots from clinical discussion to operational solution - adapts to customer real barrier'
        }]
      },
      {
        speaker: 'customer',
        text: "Yes, that would help. If you can send me the real-world evidence data and information about the training program, I'll review it with my team."
      },
      {
        speaker: 'rep',
        text: "Absolutely. I'll get both of those to you by end of week. When you say 'review with your team,' who else should I make sure is included in this conversation?",
        signals: [{
          capability: 'Commitment Generation',
          metric: 'Commitment Gaining',
          rating: 'good',
          note: 'Secures commitment and begins to map decision-making process'
        }]
      }
    ],
    coachingFeedback: {
      strengths: [
        'Excellent credibility building - acknowledged data limitations honestly',
        'Strong engagement monitoring - recognized shift to operational concerns',
        'Effective adaptability - pivoted from clinical to operational solutions',
        'Good listening - explored specific concerns rather than making assumptions'
      ],
      improvements: [
        'Could have asked about decision timeline earlier in conversation',
        'Opportunity to explore what "success" looks like from customer\'s perspective'
      ],
      recommendations: [
        'When a customer raises evidence concerns, ask: "What level of evidence would you need to feel comfortable moving forward?" to understand their threshold',
        'Consider asking: "Beyond the data, what else would need to be in place for this to work in your setting?" to uncover hidden barriers',
        'Before ending, confirm: "What questions do you anticipate from your team that we should address proactively?"'
      ],
      metrics: [
        { name: 'Question Quality', score: 8, max: 10 },
        { name: 'Listening & Responsiveness', score: 9, max: 10 },
        { name: 'Value Framing', score: 7, max: 10 },
        { name: 'Engagement Cues', score: 8, max: 10 },
        { name: 'Adaptability', score: 9, max: 10 },
        { name: 'Commitment Gaining', score: 7, max: 10 }
      ]
    }
  }
];



export default function DemoPage() {
  const [selectedScenario, setSelectedScenario] = useState<string>(scenarios[0].id);
  const [currentStep, setCurrentStep] = useState<number>(0);

  const scenario = scenarios.find(s => s.id === selectedScenario) || scenarios[0];
  const maxSteps = scenario.conversation.length;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="border-b border-border" style={{ backgroundColor: 'hsl(210, 50%, 20%)' }}>
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <Sparkles className="h-3 w-3 mr-1" />
              Interactive Experience
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'hsl(0, 0%, 100%)' }}>
              Experience ReflectivAI in Action
            </h1>
            <p className="text-xl mb-8" style={{ color: 'hsl(0, 0%, 90%)' }}>
              Explore our AI-powered coaching platform with interactive demos. See how Signal Intelligence™ transforms sales conversations - no signup required.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Book a Live Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#demos">Explore Interactive Demos</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Navigation */}
      <section id="demos" className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="#ai-coach" className="group">
                <Card className="h-full transition-all hover:shadow-lg hover:border-primary">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <MessageSquare className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-lg">AI Coach Simulation</CardTitle>
                    </div>
                    <CardDescription>
                      See personalized coaching feedback in action
                    </CardDescription>
                  </CardHeader>
                </Card>
              </a>
              <a href="#role-play" className="group">
                <Card className="h-full transition-all hover:shadow-lg hover:border-primary">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <Users className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-lg">Role Play Sampler</CardTitle>
                    </div>
                    <CardDescription>
                      Experience practice scenarios with live metrics
                    </CardDescription>
                  </CardHeader>
                </Card>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Demo #1: AI Coach Simulation */}
      <section id="ai-coach" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4" variant="outline">
                Demo #1
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                AI Coach Simulation
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Watch how our AI Coach analyzes real conversations and provides actionable feedback to improve performance.
              </p>
            </div>

            {/* Scenario Selector */}
            <div className="mb-8">
              <h3 className="text-sm font-medium mb-4">Choose a scenario:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {scenarios.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      setSelectedScenario(s.id);
                      setCurrentStep(0);
                    }}
                    className={`text-left p-4 rounded-lg border-2 transition-all ${
                      selectedScenario === s.id
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <h4 className="font-semibold mb-2">{s.title}</h4>
                    <p className="text-sm text-muted-foreground">{s.description}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left: Conversation Display */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Conversation</CardTitle>
                        <CardDescription>Step through the interaction</CardDescription>
                      </div>
                      <Badge variant="secondary">
                        {currentStep + 1} / {maxSteps}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Conversation turns */}
                    <div className="space-y-4 min-h-[400px]">
                      {scenario.conversation.slice(0, currentStep + 1).map((turn, idx) => (
                        <div key={idx} className="space-y-2">
                          <div
                            className={`p-4 rounded-lg ${
                              turn.speaker === 'rep'
                                ? 'bg-primary/10 ml-8'
                                : 'bg-muted mr-8'
                            }`}
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-xs font-semibold uppercase tracking-wide">
                                {turn.speaker === 'rep' ? 'Sales Rep' : scenario.persona.name}
                              </span>
                            </div>
                            <p className="text-sm">{turn.text}</p>
                          </div>
                          {/* Signal annotations */}
                          {turn.signals && turn.signals.map((signal, sIdx) => (
                            <div key={sIdx} className="ml-12 p-3 rounded-lg bg-accent/10 border border-accent/20">
                              <div className="flex items-start gap-2">
                                {signal.rating === 'strong' && <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />}
                                {signal.rating === 'good' && <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />}
                                {signal.rating === 'needs-work' && <AlertCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />}
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <Badge variant="outline" className="text-xs">
                                      {signal.capability}
                                    </Badge>
                                    <ChevronRight className="h-3 w-3 text-muted-foreground" />
                                    <Badge variant="secondary" className="text-xs">
                                      {signal.metric}
                                    </Badge>
                                  </div>
                                  <p className="text-xs text-muted-foreground">{signal.note}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>

                    {/* Controls */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <Button
                        variant="outline"
                        onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                        disabled={currentStep === 0}
                      >
                        Previous
                      </Button>
                      <Button
                        onClick={() => setCurrentStep(Math.min(maxSteps - 1, currentStep + 1))}
                        disabled={currentStep === maxSteps - 1}
                      >
                        {currentStep === maxSteps - 1 ? 'View Feedback' : 'Next'}
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right: Customer Persona & AI Feedback */}
              <div className="space-y-6">
                {/* Persona Card */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Customer Profile</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="font-semibold">{scenario.persona.name}</p>
                      <p className="text-sm text-muted-foreground">{scenario.persona.role}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium mb-2">Key Concerns:</p>
                      <div className="flex flex-wrap gap-2">
                        {scenario.persona.concerns.map((concern, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {concern}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-medium mb-1">Decision Style:</p>
                      <p className="text-sm text-muted-foreground">{scenario.persona.decisionStyle}</p>
                    </div>
                  </CardContent>
                </Card>

                {/* AI Coaching Feedback (shown when conversation complete) */}
                {currentStep === maxSteps - 1 && (
                  <Card className="border-primary">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Sparkles className="h-5 w-5 text-primary" />
                        <CardTitle className="text-lg">AI Coach Feedback</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Metrics */}
                      <div>
                        <p className="text-sm font-medium mb-3">Performance Metrics</p>
                        <div className="space-y-3">
                          {scenario.coachingFeedback.metrics.map((metric, idx) => (
                            <div key={idx}>
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-xs font-medium">{metric.name}</span>
                                <span className="text-xs text-muted-foreground">
                                  {metric.score}/{metric.max}
                                </span>
                              </div>
                              <Progress value={(metric.score / metric.max) * 100} className="h-2" />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Strengths */}
                      <div>
                        <p className="text-sm font-medium mb-2 flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                          What You Did Well
                        </p>
                        <ul className="space-y-2">
                          {scenario.coachingFeedback.strengths.map((strength, idx) => (
                            <li key={idx} className="text-xs text-muted-foreground pl-6 relative">
                              <span className="absolute left-0 top-1">•</span>
                              {strength}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Improvements */}
                      <div>
                        <p className="text-sm font-medium mb-2 flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-blue-600" />
                          Growth Opportunities
                        </p>
                        <ul className="space-y-2">
                          {scenario.coachingFeedback.improvements.map((improvement, idx) => (
                            <li key={idx} className="text-xs text-muted-foreground pl-6 relative">
                              <span className="absolute left-0 top-1">•</span>
                              {improvement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Recommendations */}
                      <div>
                        <p className="text-sm font-medium mb-2 flex items-center gap-2">
                          <Sparkles className="h-4 w-4 text-primary" />
                          Try This Next Time
                        </p>
                        <ul className="space-y-2">
                          {scenario.coachingFeedback.recommendations.map((rec, idx) => (
                            <li key={idx} className="text-xs text-muted-foreground pl-6 relative">
                              <span className="absolute left-0 top-1">•</span>
                              {rec}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="py-8">
                  <h3 className="text-xl font-semibold mb-2">
                    Want to practice with your own scenarios?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Get personalized AI coaching on your actual customer conversations.
                  </p>
                  <Button size="lg" asChild>
                    <Link to="/contact">
                      Book a Demo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Demo #2: Role Play Scenario Sampler */}
      <section id="role-play" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4" variant="outline">
                Demo #2
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Role Play Scenario Sampler
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Experience our practice environment where reps build skills through realistic pharma scenarios.
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <div className="text-center py-12">
                  <Users className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-xl font-semibold mb-2">
                    Interactive Role Play Coming Soon
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    We're building an interactive role play experience where you can practice responding to customer scenarios in real-time.
                  </p>
                  <Button asChild>
                    <Link to="/contact">
                      Request Early Access
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>



      {/* Final CTA */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Experience the Full Platform
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              These demos show just a glimpse of what ReflectivAI can do. Book a personalized demo to see how we can transform your team's performance.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Book a Live Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/">
                  Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
