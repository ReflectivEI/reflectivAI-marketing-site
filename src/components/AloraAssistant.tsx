import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

// Signal Intelligence™ Knowledge Base
const SIGNAL_INTELLIGENCE_KB = {
  // Core Definitions
  definitions: {
    signalIntelligence: `Signal Intelligence™ is a behavior-based capability framework designed for professional development, coaching, and skill-building in high-stakes conversations. It focuses exclusively on observable conversation behaviors and does not infer psychological states, personality traits, protected attributes, or mental health status.

Signal Intelligence™ is:
• Non-clinical
• Non-diagnostic
• Explainable
• Auditable
• Human-led

It is NOT used for:
• Employment decisions
• Performance evaluation
• Live call monitoring
• Psychological inference`,
    
    threeLayerSystem: `Signal Intelligence™ operates as a three-layer system:

**Layer 1: Human Decision Drivers Framework (Interpretive Lens)**
Explains WHY conversational behaviors change by describing internal forces like confidence, motivation, and perceived risk. These drivers are NOT measured directly—they serve only as explanatory context.

**Layer 2: Signal Intelligence™ Capabilities (Skill Layer)**
Defines 8 core conversational skills that can be developed through practice:
1. Signal Awareness
2. Signal Interpretation
3. Value Connection
4. Customer Engagement Monitoring
5. Objection Navigation
6. Conversation Management
7. Adaptive Response
8. Commitment Generation

**Layer 3: Behavioral Metrics (Visibility Layer)**
Observable behaviors that show how each capability appears during structured practice sessions (role play, simulations). These are never used for live monitoring or surveillance.`
  },

  // Capabilities with Behavioral Metrics
  capabilities: {
    signalAwareness: {
      name: 'Signal Awareness',
      definition: 'The capability to notice relevant customer cues and use those cues to shape purposeful, well-sequenced questions.',
      metric: 'Question Quality',
      observableBehaviors: [
        'Purposeful, customer-centered questioning',
        'Logical sequencing',
        'Effective follow-up',
        'Open vs. closed question ratio',
        'Relevance to customer goals'
      ],
      relatedDrivers: ['Cognitive Empathy', 'Metacognition']
    },
    signalInterpretation: {
      name: 'Signal Interpretation',
      definition: 'The capability to make sense of what a customer is communicating and adjust responses as new information emerges.',
      metric: 'Listening & Responsiveness',
      observableBehaviors: [
        'Accurate paraphrasing',
        'Explicit acknowledgment of concerns',
        'Behavioral adjustment based on new information',
        'Paraphrase accuracy',
        'Observable response shifts'
      ],
      relatedDrivers: ['Cognitive Empathy', 'Emotional Intelligence']
    },
    valueConnection: {
      name: 'Value Connection',
      definition: 'The capability to link discussion to what matters to the customer by translating priorities into outcome-based value.',
      metric: 'Value Framing',
      observableBehaviors: [
        'Connecting to customer priorities',
        'Outcome-based language',
        'Translating features to benefits',
        'Relevance to stated goals'
      ],
      relatedDrivers: ['Cognitive Empathy', 'Motivation']
    },
    customerEngagement: {
      name: 'Customer Engagement Monitoring',
      definition: 'The capability to recognize when engagement shifts and adjust pacing, tone, or approach accordingly.',
      metric: 'Engagement Cues',
      observableBehaviors: [
        'Recognizing participation changes',
        'Adjusting pacing',
        'Tone modulation',
        'Response to engagement shifts'
      ],
      relatedDrivers: ['Emotional Intelligence', 'Social Threat Awareness']
    },
    objectionNavigation: {
      name: 'Objection Navigation',
      definition: 'The capability to address concerns without defensiveness while maintaining credibility and trust.',
      metric: 'Objection Handling',
      observableBehaviors: [
        'Acknowledging concerns without defensiveness',
        'Staying calm under pressure',
        'Reframing objections constructively',
        'Maintaining credibility'
      ],
      relatedDrivers: ['Emotional Intelligence', 'Social Threat Awareness']
    },
    conversationManagement: {
      name: 'Conversation Management',
      definition: 'The capability to maintain purpose and structure while remaining flexible to customer needs.',
      metric: 'Conversation Control & Structure',
      observableBehaviors: [
        'Maintaining conversation purpose',
        'Logical flow',
        'Flexibility within structure',
        'Time management'
      ],
      relatedDrivers: ['Metacognition', 'Motivation']
    },
    adaptiveResponse: {
      name: 'Adaptive Response',
      definition: 'The capability to recognize when an approach isn\'t working and adjust strategy mid-conversation.',
      metric: 'Adaptability',
      observableBehaviors: [
        'Recognizing ineffective approaches',
        'Strategy shifts',
        'Flexible response patterns',
        'Real-time adjustment'
      ],
      relatedDrivers: ['Metacognition', 'Emotional Intelligence']
    },
    commitmentGeneration: {
      name: 'Commitment Generation',
      definition: 'The capability to secure realistic next steps that preserve autonomy and build momentum.',
      metric: 'Commitment Gaining',
      observableBehaviors: [
        'Securing specific next steps',
        'Realistic commitments',
        'Preserving customer autonomy',
        'Building momentum'
      ],
      relatedDrivers: ['Motivation', 'Autonomy']
    }
  },

  // Human Decision Drivers
  humanDrivers: {
    cognitiveEmpathy: {
      name: 'Cognitive Empathy / Perspective Taking',
      description: 'The capacity to accurately infer another person\'s perspective and adjust behavior accordingly.',
      influences: ['Question quality', 'Listening', 'Adaptive response'],
      notMeasured: true
    },
    emotionalIntelligence: {
      name: 'Emotional Intelligence',
      description: 'The ability to perceive, understand, and regulate emotions in oneself and others.',
      influences: ['Objection navigation', 'Engagement monitoring', 'Tone regulation'],
      notMeasured: true
    },
    metacognition: {
      name: 'Metacognition & Confidence Calibration',
      description: 'Awareness of one\'s own thinking, limits of knowledge, and accuracy of self-assessment.',
      influences: ['Question quality', 'Adaptive response', 'Commitment generation'],
      notMeasured: true
    },
    motivation: {
      name: 'Motivation, Autonomy & Commitment',
      description: 'Internal drivers governing engagement, ownership, and follow-through.',
      influences: ['Commitment generation', 'Conversation management', 'Value connection'],
      notMeasured: true
    },
    socialThreat: {
      name: 'Social Threat, Status & Identity',
      description: 'How perceived risk to competence, autonomy, or identity affects engagement and resistance.',
      influences: ['Objection navigation', 'Engagement monitoring', 'Adaptive response'],
      notMeasured: true
    }
  },

  // Platform Features
  platform: {
    aiCoach: `AI Coach provides instant, actionable feedback during practice sessions. It:
• Highlights patterns in observable behavior
• Supports reflection and learning
• Leaves interpretation and judgment with the human
• Operates only in simulated, safe environments

AI Coach does NOT:
• Infer what someone feels
• Make decisions for you
• Evaluate real customers
• Monitor live calls`,
    
    rolePractice: `Role Play provides unlimited practice in a safe environment where you can:
• Practice high-stakes conversations
• Build muscle memory for detecting customer signals
• Get instant feedback on conversational skills
• Try different approaches without risk

All practice occurs in simulated scenarios—never with real customers.`,
    
    dashboard: `The ReflectivAI dashboard provides:
• Real-time visibility into skill development
• Behavioral metrics from practice sessions
• Coaching cards with actionable guidance
• Progress tracking across capabilities

All metrics are based on structured practice, not live call monitoring.`
  },

  // Ethics & Safeguards
  ethics: {
    boundaries: `Signal Intelligence™ maintains strict ethical boundaries:

• **Non-clinical**: Not used for mental health assessment
• **Non-diagnostic**: Does not diagnose psychological conditions
• **Behavior-only**: Focuses exclusively on observable conversation behaviors
• **Explainable**: All metrics are transparent and auditable
• **Human-led**: AI detects patterns; humans exercise judgment

**Ethical Principle**: "If a response would feel inappropriate if the roles were reversed, it is outside the Signal Intelligence™ boundary."`,
    
    whatNotMeasured: `Signal Intelligence™ does NOT measure, infer, or predict:
• Emotions or feelings
• Intent or motivation
• Personality traits
• Psychological states
• Protected attributes
• Mental health status

Human Decision Drivers are NOT latent variables—they are explanatory context only.`,
    
    practiceOnly: `Behavioral metrics are observed ONLY during structured practice:
• Role play sessions
• Simulations
• Coached conversations

They are NEVER used for:
• Live call monitoring
• Surveillance
• Performance evaluation
• Employment decisions`
  },

  // Use Cases
  useCases: {
    salesReps: `For Sales Reps:
• Practice high-stakes conversations in a safe environment
• Get instant, actionable feedback on conversational skills
• Build muscle memory for detecting customer signals
• Available 24/7 for unlimited practice
• 89% of reps report increased confidence after practice`,
    
    managers: `For Sales Managers:
• Structured coaching framework based on observable behaviors
• Real-time visibility into team skill development
• Coaching cards that translate scores into actionable guidance
• Scalable training across entire field force`,
    
    enablement: `For Enablement Leaders:
• Accelerate onboarding and certification
• Identify skill gaps across teams
• Measure training effectiveness with behavioral metrics
• Ensure compliance with built-in guardrails
• 3x faster ramp time for new sales reps`
  }
};

// Intent Recognition & Response Generation
class AloraResponseEngine {
  private kb = SIGNAL_INTELLIGENCE_KB;

  detectIntent(query: string): string[] {
    const lowerQuery = query.toLowerCase();
    const intents: string[] = [];

    // Signal Intelligence overview
    if (lowerQuery.match(/what is signal intelligence|define signal intelligence|explain signal intelligence|si framework/)) {
      intents.push('si_overview');
    }

    // Three-layer system
    if (lowerQuery.match(/three layer|3 layer|system model|framework structure|how does it work/)) {
      intents.push('three_layer_system');
    }

    // Capabilities
    if (lowerQuery.match(/capabilities|8 capabilities|skills|what can i learn|conversational skills/)) {
      intents.push('capabilities_overview');
    }

    // Specific capability queries
    if (lowerQuery.match(/signal awareness|question quality/)) intents.push('capability_signal_awareness');
    if (lowerQuery.match(/signal interpretation|listening|responsiveness/)) intents.push('capability_signal_interpretation');
    if (lowerQuery.match(/value connection|value framing/)) intents.push('capability_value_connection');
    if (lowerQuery.match(/engagement monitoring|engagement cues/)) intents.push('capability_customer_engagement');
    if (lowerQuery.match(/objection|objection handling|objection navigation/)) intents.push('capability_objection_navigation');
    if (lowerQuery.match(/conversation management|conversation control|structure/)) intents.push('capability_conversation_management');
    if (lowerQuery.match(/adaptive response|adaptability|flexibility/)) intents.push('capability_adaptive_response');
    if (lowerQuery.match(/commitment|commitment generation|next steps/)) intents.push('capability_commitment_generation');

    // Human Decision Drivers
    if (lowerQuery.match(/human decision drivers|decision drivers|why behaviors change|internal forces/)) {
      intents.push('human_drivers');
    }

    // Behavioral Metrics
    if (lowerQuery.match(/behavioral metrics|metrics|measurement|how do you measure|scoring/)) {
      intents.push('behavioral_metrics');
    }

    // AI Coach
    if (lowerQuery.match(/ai coach|coaching|feedback|how does ai help/)) {
      intents.push('ai_coach');
    }

    // Role Play
    if (lowerQuery.match(/role play|practice|simulation|training/)) {
      intents.push('role_practice');
    }

    // Ethics & Safeguards
    if (lowerQuery.match(/ethics|ethical|safeguards|boundaries|privacy|compliance/)) {
      intents.push('ethics');
    }

    // What's NOT measured (boundary correction)
    if (lowerQuery.match(/emotion detection|predict intent|personality|psychological|mental health|feelings/)) {
      intents.push('boundary_correction');
    }

    // Use cases
    if (lowerQuery.match(/use case|who is this for|sales rep|manager|enablement/)) {
      intents.push('use_cases');
    }

    // Platform features
    if (lowerQuery.match(/dashboard|platform|features|what can i do/)) {
      intents.push('platform_features');
    }

    // Results & effectiveness
    if (lowerQuery.match(/results|effectiveness|roi|statistics|success rate/)) {
      intents.push('results');
    }

    return intents.length > 0 ? intents : ['general'];
  }

  generateResponse(intents: string[]): string {
    const primaryIntent = intents[0];

    switch (primaryIntent) {
      case 'si_overview':
        return this.kb.definitions.signalIntelligence;

      case 'three_layer_system':
        return this.kb.definitions.threeLayerSystem;

      case 'capabilities_overview':
        return this.formatCapabilitiesOverview();

      case 'capability_signal_awareness':
        return this.formatCapability(this.kb.capabilities.signalAwareness);

      case 'capability_signal_interpretation':
        return this.formatCapability(this.kb.capabilities.signalInterpretation);

      case 'capability_value_connection':
        return this.formatCapability(this.kb.capabilities.valueConnection);

      case 'capability_customer_engagement':
        return this.formatCapability(this.kb.capabilities.customerEngagement);

      case 'capability_objection_navigation':
        return this.formatCapability(this.kb.capabilities.objectionNavigation);

      case 'capability_conversation_management':
        return this.formatCapability(this.kb.capabilities.conversationManagement);

      case 'capability_adaptive_response':
        return this.formatCapability(this.kb.capabilities.adaptiveResponse);

      case 'capability_commitment_generation':
        return this.formatCapability(this.kb.capabilities.commitmentGeneration);

      case 'human_drivers':
        return this.formatHumanDrivers();

      case 'behavioral_metrics':
        return this.formatBehavioralMetrics();

      case 'ai_coach':
        return this.kb.platform.aiCoach;

      case 'role_practice':
        return this.kb.platform.rolePractice;

      case 'ethics':
        return this.kb.ethics.boundaries;

      case 'boundary_correction':
        return this.boundaryCorrectionResponse();

      case 'use_cases':
        return this.formatUseCases();

      case 'platform_features':
        return this.kb.platform.dashboard;

      case 'results':
        return this.formatResults();

      case 'general':
      default:
        return this.generalResponse();
    }
  }

  private formatCapabilitiesOverview(): string {
    return `Signal Intelligence™ includes 8 core conversational capabilities:

1. **Signal Awareness** → Question Quality
2. **Signal Interpretation** → Listening & Responsiveness
3. **Value Connection** → Value Framing
4. **Customer Engagement Monitoring** → Engagement Cues
5. **Objection Navigation** → Objection Handling
6. **Conversation Management** → Conversation Control & Structure
7. **Adaptive Response** → Adaptability
8. **Commitment Generation** → Commitment Gaining

Each capability represents a distinct conversational skill that can be developed through practice. Would you like to learn more about a specific capability?`;
  }

  private formatCapability(cap: any): string {
    return `**${cap.name}**

${cap.definition}

**Behavioral Metric**: ${cap.metric}

**What this looks like in conversation**:
${cap.observableBehaviors.map((b: string) => `• ${b}`).join('\n')}

**Related Human Decision Drivers**: ${cap.relatedDrivers.join(', ')}

Remember: These behaviors are observed only during structured practice sessions, never in live calls.`;
  }

  private formatHumanDrivers(): string {
    return `The Human Decision Drivers Framework explains WHY conversational behaviors change. It includes 5 core drivers:

1. **Cognitive Empathy / Perspective Taking**
2. **Emotional Intelligence**
3. **Metacognition & Confidence Calibration**
4. **Motivation, Autonomy & Commitment**
5. **Social Threat, Status & Identity**

**Critical Note**: These drivers are NOT measured directly. They are NOT latent variables. They serve only as explanatory context to help interpret observable behaviors.

The AI never infers these internal states—they exist only to ensure behaviors are understood in context.`;
  }

  private formatBehavioralMetrics(): string {
    return `Behavioral Metrics describe how each Signal Intelligence™ capability shows up in conversation through observable behaviors.

**Key Points**:
• Metrics are observed ONLY during structured practice (role play, simulations)
• They focus exclusively on what people say and how they respond
• They are NEVER used for live call monitoring or surveillance
• All metrics are explainable, auditable, and transparent

**What Metrics Do NOT Include**:
• Emotion detection or inference
• Intent prediction
• Personality assessment
• Psychological profiling

${this.kb.ethics.practiceOnly}`;
  }

  private formatUseCases(): string {
    return `**For Sales Reps**:
${this.kb.useCases.salesReps}

**For Sales Managers**:
${this.kb.useCases.managers}

**For Enablement Leaders**:
${this.kb.useCases.enablement}`;
  }

  private formatResults(): string {
    return `ReflectivAI customers report significant improvements:

• **75%** higher skill retention with experiential learning vs. traditional training
• **3x** faster ramp time for new sales reps
• **89%** of reps report increased confidence after practice
• **34%** increase in close rates within six months (customer testimonial)

These results reflect the effectiveness of behavior-based practice in a safe environment. All metrics are contextual and non-causal—they show correlation with skill development, not psychological prediction.`;
  }

  private boundaryCorrectionResponse(): string {
    return `Signal Intelligence™ focuses on observable conversation behavior only. It does not infer emotions, intent, or internal states.

${this.kb.ethics.whatNotMeasured}

If you're asking about how behaviors are observed or coached during practice, I can explain that. Would you like to know more about:
• How behavioral metrics work
• What AI Coach provides
• How practice sessions are structured`;
  }

  private generalResponse(): string {
    return `I'm Alora, your ReflectivAI assistant. I can help you understand:

• **Signal Intelligence™** - Our behavior-based capability framework
• **The 8 Capabilities** - Core conversational skills you can develop
• **AI Coach & Role Play** - How practice and feedback work
• **Behavioral Metrics** - What we observe and how
• **Ethics & Safeguards** - Our non-clinical, behavior-only approach
• **Platform Features** - Dashboard, coaching, and more

What would you like to learn about?`;
  }
}

const responseEngine = new AloraResponseEngine();

export function AloraAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hi! I'm Alora, your ReflectivAI assistant. I can answer any questions about Signal Intelligence™, our platform, AI Coach, Role Play, and how we help sales professionals develop conversational skills. What would you like to know?",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages, isTyping]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking time
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Generate response using intent detection
    const intents = responseEngine.detectIntent(inputValue);
    const responseContent = responseEngine.generateResponse(intents);

    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: responseContent,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, assistantMessage]);
    setIsTyping(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90 z-50"
        aria-label="Open Alora Assistant"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[600px] bg-background border border-border rounded-lg shadow-2xl z-50 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-primary text-primary-foreground rounded-t-lg">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              <div>
                <h3 className="font-semibold">Alora</h3>
                <p className="text-xs opacity-90">ReflectivAI Assistant</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground hover:bg-primary-foreground/20"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Messages */}
          <ScrollArea ref={scrollAreaRef} className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.role === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-foreground'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-muted rounded-lg p-3">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <div className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about ReflectivAI..."
                className="flex-1"
                disabled={isTyping}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                size="icon"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
