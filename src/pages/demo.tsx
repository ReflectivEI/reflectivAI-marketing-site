import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, Sparkles, MessageSquare, Brain, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

// AI Coach Mode - Post-Interaction Analysis
const aiCoachExample = {
  title: 'AI Coach: Post-Interaction Analysis',
  subtitle: 'See how ReflectivAI analyzes completed conversations',
  conversation: [
    {
      speaker: 'Rep',
      text: 'Dr. Martinez, I know you have limited time. What is your biggest concern about switching patients to our therapy?'
    },
    {
      speaker: 'HCP',
      text: 'The dosing schedule is more complex than what we currently use.'
    },
    {
      speaker: 'Rep',
      text: 'I hear that - dosing complexity can impact adherence. Can you help me understand what specifically about the schedule concerns you?'
    }
  ],
  analysis: [
    {
      capability: 'Signal Awareness',
      metric: 'Question Quality',
      rating: 'Strong',
      insight: 'Opening question directly addresses time pressure and invites the HCP to share their primary concern - demonstrates awareness of context.'
    },
    {
      capability: 'Signal Interpretation',
      metric: 'Listening & Responsiveness',
      rating: 'Strong',
      insight: 'Rep acknowledges the concern without deflecting, then explores the specific nature of the objection rather than immediately defending the product.'
    },
    {
      capability: 'Adaptive Response',
      metric: 'Adaptability',
      rating: 'Good',
      insight: 'Pivots from clinical discussion to operational concerns, adapting to what matters most to this HCP.'
    }
  ],
  coaching: {
    strengths: [
      'Excellent credibility building - acknowledged limitation honestly',
      'Strong engagement monitoring - recognized shift to operational concerns',
      'Effective adaptability - pivoted from clinical to operational solutions'
    ],
    improvements: [
      'Could have asked about decision timeline earlier in conversation',
      'Opportunity to explore what success looks like from HCP perspective'
    ]
  }
};

// Role Play Mode - Live Conversation Practice
const rolePlayScenario = {
  title: 'Role Play Simulator: Live Conversation Practice',
  subtitle: 'Practice real-world conversations with simulated HCPs',
  context: {
    hcp: 'Dr. Sarah Chen, Oncologist',
    setting: 'Brief hallway conversation, 3 minutes available',
    priority: 'Concerned about patient out-of-pocket costs',
    mood: 'Rushed but engaged'
  },
  turns: [
    {
      turn: 1,
      hcp: 'I only have a few minutes before my next patient. What brings you by?',
      userPrompt: 'How do you respond?',
      sampleResponse: 'Dr. Chen, I appreciate you making time. I wanted to follow up on our last conversation about patient access - I have some new copay assistance information that might help.',
      feedback: {
        capability: 'Signal Awareness',
        metric: 'Question Quality',
        rating: 'Strong',
        note: 'Acknowledges time constraint and references previous conversation - shows awareness of context and relationship history.'
      }
    },
    {
      turn: 2,
      hcp: 'That would be helpful. Several patients have mentioned the cost. What changed?',
      userPrompt: 'Continue the conversation...',
      sampleResponse: 'We just launched an enhanced patient support program. For commercially insured patients, we can reduce out-of-pocket costs to $25 per month in most cases.',
      feedback: {
        capability: 'Value Connection',
        metric: 'Value Framing',
        rating: 'Strong',
        note: 'Directly addresses the stated concern with specific, actionable information - connects product support to HCP priority.'
      }
    },
    {
      turn: 3,
      hcp: 'That is better. How quickly can patients get enrolled?',
      userPrompt: 'Respond to the engagement...',
      sampleResponse: 'Same day in most cases. I can leave enrollment forms with your staff, or patients can enroll online. Would it help if I trained your team on the process?',
      feedback: {
        capability: 'Commitment Gaining',
        metric: 'Next Steps',
        rating: 'Strong',
        note: 'Provides immediate solution and offers concrete next step - recognizes positive engagement signal and moves toward action.'
      }
    }
  ]
};

export default function DemoPage() {
  const [activeDemo, setActiveDemo] = useState<'coach' | 'roleplay' | null>(null);
  const [currentStep, setCurrentStep] = useState(0);

  const resetDemo = () => {
    setActiveDemo(null);
    setCurrentStep(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <Badge className="mb-4" variant="secondary">
            <Sparkles className="h-3 w-3 mr-1" />
            Interactive Experience
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Experience ReflectivAI in Action
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Explore two distinct ways Signal Intelligence transforms pharma sales conversations
          </p>
        </div>
      </section>

      {!activeDemo ? (
        <>
          {/* Mode Selection */}
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="grid md:grid-cols-2 gap-8">
                {/* AI Coach Demo */}
                <Card className="hover:shadow-lg transition-shadow border-2 hover:border-primary cursor-pointer" onClick={() => setActiveDemo('coach')}>
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Brain className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">AI Coach Simulation</CardTitle>
                    <CardDescription className="text-base">
                      Post-Interaction Coaching & Analysis
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      See how AI Coach analyzes completed conversations and provides coaching feedback using Signal Intelligence.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Reviews completed conversation exchanges</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Maps behavior to Signal Intelligence Capabilities</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Provides explainable coaching insights</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">No live conversation - analysis only</span>
                      </div>
                    </div>
                    <Button className="w-full" size="lg">
                      <Play className="h-4 w-4 mr-2" />
                      Try AI Coach Demo
                    </Button>
                  </CardContent>
                </Card>

                {/* Role Play Demo */}
                <Card className="hover:shadow-lg transition-shadow border-2 hover:border-secondary cursor-pointer" onClick={() => setActiveDemo('roleplay')}>
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                      <MessageSquare className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle className="text-2xl">Role Play Simulator</CardTitle>
                    <CardDescription className="text-base">
                      Live Conversation Practice
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Practice real-world conversations with simulated HCPs and receive behavioral feedback in real-time.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Interactive turn-by-turn conversation</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Realistic HCP personas with priorities</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Behavioral metrics evaluated per turn</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Build skills through practice</span>
                      </div>
                    </div>
                    <Button className="w-full" size="lg" variant="secondary">
                      <Play className="h-4 w-4 mr-2" />
                      Try Role Play Demo
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Framework Explorer */}
          <section className="py-16 px-4 bg-muted">
            <div className="container mx-auto max-w-4xl">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 mx-auto">
                    <Sparkles className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-2xl">Signal Intelligence Framework</CardTitle>
                  <CardDescription className="text-base">
                    Explore the 8 core capabilities that power both modes
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6">
                    Both AI Coach and Role Play Simulator use the same Signal Intelligence framework to analyze observable behavior and provide actionable feedback.
                  </p>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/signal-intelligence">
                      Explore Framework
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>
        </>
      ) : activeDemo === 'coach' ? (
        <AICoachDemo example={aiCoachExample} currentStep={currentStep} setCurrentStep={setCurrentStep} onReset={resetDemo} />
      ) : (
        <RolePlayDemo scenario={rolePlayScenario} currentStep={currentStep} setCurrentStep={setCurrentStep} onReset={resetDemo} />
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Sales Team?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            See how ReflectivAI can help your team master high-stakes conversations
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Request a Demo</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

// AI Coach Demo Component - Shows post-interaction analysis
function AICoachDemo({ example, currentStep, setCurrentStep, onReset }: any) {
  const maxSteps = example.conversation.length + example.analysis.length + 1;

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-8 text-center">
          <Badge className="mb-4" variant="default">
            <Brain className="h-3 w-3 mr-1" />
            AI Coach Mode
          </Badge>
          <h2 className="text-3xl font-bold mb-2">{example.title}</h2>
          <p className="text-muted-foreground">{example.subtitle}</p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Completed Conversation</CardTitle>
            <CardDescription>AI Coach analyzes this exchange to provide coaching insights</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {example.conversation.map((turn: any, index: number) => (
              <div key={index} className={`p-4 rounded-lg ${turn.speaker === 'Rep' ? 'bg-primary/5 border-l-4 border-primary' : 'bg-muted'}`}>
                <div className="font-semibold text-sm mb-1">{turn.speaker}</div>
                <div className="text-sm">{turn.text}</div>
              </div>
            ))}
          </CardContent>
        </Card>

        {currentStep > 0 && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>AI Coach Analysis</CardTitle>
              <CardDescription>Signal Intelligence Capabilities & Behavioral Metrics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {example.analysis.slice(0, Math.min(currentStep, example.analysis.length)).map((item: any, index: number) => (
                <div key={index} className="p-4 rounded-lg border border-border bg-card space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">{item.capability}</div>
                    <Badge variant={item.rating === 'Strong' ? 'default' : 'secondary'}>{item.rating}</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">Behavioral Metric: {item.metric}</div>
                  <div className="text-sm">{item.insight}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {currentStep > example.analysis.length && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Coaching Feedback</CardTitle>
              <CardDescription>Strengths and development opportunities</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3 text-green-600">Strengths</h4>
                <ul className="space-y-2">
                  {example.coaching.strengths.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-amber-600">Development Opportunities</h4>
                <ul className="space-y-2">
                  {example.coaching.improvements.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="flex gap-4 justify-center">
          {currentStep < maxSteps - 1 ? (
            <Button size="lg" onClick={() => setCurrentStep(currentStep + 1)}>
              {currentStep === 0 ? 'Start Analysis' : 'Continue'}
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          ) : (
            <Button size="lg" variant="outline" onClick={onReset}>
              Try Another Demo
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}

// Role Play Demo Component - Shows live conversation practice
function RolePlayDemo({ scenario, currentStep, setCurrentStep, onReset }: any) {
  const currentTurn = scenario.turns[Math.min(currentStep, scenario.turns.length - 1)];
  const showFeedback = currentStep > 0;

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-8 text-center">
          <Badge className="mb-4" variant="secondary">
            <MessageSquare className="h-3 w-3 mr-1" />
            Role Play Mode
          </Badge>
          <h2 className="text-3xl font-bold mb-2">{scenario.title}</h2>
          <p className="text-muted-foreground">{scenario.subtitle}</p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Scenario Context</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            <div>
              <div className="text-sm font-semibold mb-1">HCP</div>
              <div className="text-sm text-muted-foreground">{scenario.context.hcp}</div>
            </div>
            <div>
              <div className="text-sm font-semibold mb-1">Setting</div>
              <div className="text-sm text-muted-foreground">{scenario.context.setting}</div>
            </div>
            <div>
              <div className="text-sm font-semibold mb-1">Priority</div>
              <div className="text-sm text-muted-foreground">{scenario.context.priority}</div>
            </div>
            <div>
              <div className="text-sm font-semibold mb-1">Mood</div>
              <div className="text-sm text-muted-foreground">{scenario.context.mood}</div>
            </div>
          </CardContent>
        </Card>

        {currentStep < scenario.turns.length && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Turn {currentTurn.turn}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 rounded-lg bg-muted">
                <div className="font-semibold text-sm mb-1">Dr. Chen</div>
                <div className="text-sm">{currentTurn.hcp}</div>
              </div>

              <div className="p-4 rounded-lg border-2 border-dashed border-primary/30 bg-primary/5">
                <div className="font-semibold text-sm mb-2">{currentTurn.userPrompt}</div>
                {showFeedback && currentStep === currentTurn.turn && (
                  <div className="mt-4 p-4 rounded-lg bg-background border border-border">
                    <div className="font-semibold text-sm mb-1">Sample Response</div>
                    <div className="text-sm mb-4">{currentTurn.sampleResponse}</div>
                    <div className="pt-4 border-t border-border space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="font-semibold text-sm">{currentTurn.feedback.capability}</div>
                        <Badge variant={currentTurn.feedback.rating === 'Strong' ? 'default' : 'secondary'}>
                          {currentTurn.feedback.rating}
                        </Badge>
                      </div>
                      <div className="text-xs text-muted-foreground">Metric: {currentTurn.feedback.metric}</div>
                      <div className="text-sm">{currentTurn.feedback.note}</div>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {currentStep >= scenario.turns.length && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Scenario Complete</CardTitle>
              <CardDescription>You have practiced all conversation turns</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                In the full Role Play Simulator, you would continue the conversation organically, with the HCP responding to your actual inputs. This demo shows sample responses to illustrate how behavioral feedback works.
              </p>
              <div className="p-4 rounded-lg bg-muted">
                <h4 className="font-semibold mb-2">Key Takeaways</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Role Play evaluates observable behavior in real-time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Each turn maps to Signal Intelligence Capabilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>HCP personas reflect realistic priorities and constraints</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="flex gap-4 justify-center">
          {currentStep < scenario.turns.length ? (
            <Button size="lg" variant="secondary" onClick={() => setCurrentStep(currentStep + 1)}>
              {currentStep === 0 ? 'Start Conversation' : 'Next Turn'}
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          ) : (
            <Button size="lg" variant="outline" onClick={onReset}>
              Try Another Demo
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
