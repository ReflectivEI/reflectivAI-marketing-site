import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, Bot } from 'lucide-react';
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
  private conversationContext: string[] = [];

  detectIntent(query: string): string[] {
    const lowerQuery = query.toLowerCase();
    const intents: string[] = [];

    // Follow-up patterns (check context first)
    if (lowerQuery.match(/^(yes|yeah|sure|tell me more|more|elaborate|explain|how|show me|examples?|what about|go on|continue|that sounds|interesting|i'd like|i want|please|ok|okay)\b/)) {
      // Return the last context if available
      if (this.conversationContext.length > 0) {
        const lastContext = this.conversationContext[this.conversationContext.length - 1];
        return [lastContext + '_followup'];
      }
    }

    // Signal Intelligence overview
    if (lowerQuery.match(/what is signal intelligence|define signal intelligence|explain signal intelligence|si framework/)) {
      intents.push('si_overview');
      this.conversationContext.push('si_overview');
    }

    // Three-layer system
    if (lowerQuery.match(/three layer|3 layer|system model|framework structure|how does it work/)) {
      intents.push('three_layer_system');
      this.conversationContext.push('three_layer_system');
    }

    // Capabilities
    if (lowerQuery.match(/capabilities|8 capabilities|skills|what can i learn|conversational skills/)) {
      intents.push('capabilities_overview');
      this.conversationContext.push('capabilities_overview');
    }

    // Specific capability queries
    if (lowerQuery.match(/signal awareness|question quality/)) {
      intents.push('capability_signal_awareness');
      this.conversationContext.push('capability_signal_awareness');
    }
    if (lowerQuery.match(/signal interpretation|listening|responsiveness/)) {
      intents.push('capability_signal_interpretation');
      this.conversationContext.push('capability_signal_interpretation');
    }
    if (lowerQuery.match(/value connection|value framing/)) {
      intents.push('capability_value_connection');
      this.conversationContext.push('capability_value_connection');
    }
    if (lowerQuery.match(/engagement monitoring|engagement cues/)) {
      intents.push('capability_customer_engagement');
      this.conversationContext.push('capability_customer_engagement');
    }
    if (lowerQuery.match(/objection|objection handling|objection navigation/)) {
      intents.push('capability_objection_navigation');
      this.conversationContext.push('capability_objection_navigation');
    }
    if (lowerQuery.match(/conversation management|conversation control|structure/)) {
      intents.push('capability_conversation_management');
      this.conversationContext.push('capability_conversation_management');
    }
    if (lowerQuery.match(/adaptive response|adaptability|flexibility/)) {
      intents.push('capability_adaptive_response');
      this.conversationContext.push('capability_adaptive_response');
    }
    if (lowerQuery.match(/commitment|commitment generation|next steps/)) {
      intents.push('capability_commitment_generation');
      this.conversationContext.push('capability_commitment_generation');
    }

    // Human Decision Drivers
    if (lowerQuery.match(/human decision drivers|decision drivers|why behaviors change|internal forces/)) {
      intents.push('human_drivers');
      this.conversationContext.push('human_drivers');
    }

    // Behavioral Metrics
    if (lowerQuery.match(/behavioral metrics|metrics|measurement|how do you measure|scoring/)) {
      intents.push('behavioral_metrics');
      this.conversationContext.push('behavioral_metrics');
    }

    // AI Coach
    if (lowerQuery.match(/ai coach|coaching|feedback|how does ai help/)) {
      intents.push('ai_coach');
      this.conversationContext.push('ai_coach');
    }

    // Role Play
    if (lowerQuery.match(/role play|practice|simulation|training|scenarios?/)) {
      intents.push('role_practice');
      this.conversationContext.push('role_practice');
    }

    // Ethics & Safeguards
    if (lowerQuery.match(/ethics|ethical|safeguards|boundaries|privacy|compliance/)) {
      intents.push('ethics');
      this.conversationContext.push('ethics');
    }

    // What's NOT measured (boundary correction)
    if (lowerQuery.match(/emotion detection|predict intent|personality|psychological|mental health|feelings/)) {
      intents.push('boundary_correction');
      this.conversationContext.push('boundary_correction');
    }

    // Use cases
    if (lowerQuery.match(/use case|who is this for|sales rep|manager|enablement/)) {
      intents.push('use_cases');
      this.conversationContext.push('use_cases');
    }

    // Platform features
    if (lowerQuery.match(/dashboard|platform|features|what can i do/)) {
      intents.push('platform_features');
      this.conversationContext.push('platform_features');
    }

    // Results & effectiveness
    if (lowerQuery.match(/results|effectiveness|roi|statistics|success rate/)) {
      intents.push('results');
      this.conversationContext.push('results');
    }

    return intents.length > 0 ? intents : ['general'];
  }

  generateResponse(intents: string[]): string {
    const primaryIntent = intents[0];

    switch (primaryIntent) {
      case 'si_overview':
        return "Signal Intelligence™ is our behavior-based framework that helps sales professionals develop conversational skills through practice. Think of it like a flight simulator for high-stakes conversations—you practice in a safe environment and get feedback on observable behaviors like question quality, listening, and adaptability.\n\nIt's completely non-clinical and non-diagnostic. We focus only on what you say and how you respond, never on emotions or psychological states.\n\nWant to know more about how it works or what skills you can develop?";

      case 'si_overview_followup':
        return "Great question! Signal Intelligence™ works in three layers:\n\n**Layer 1**: Understanding why behaviors change (context like confidence or motivation)\n**Layer 2**: The 8 conversational skills you develop\n**Layer 3**: Observable behaviors we track during practice\n\nWe have 9+ pharma scenarios across HIV, Oncology, Cardiology, and more. You practice, get instant feedback, and build muscle memory for real conversations.\n\nWant to dive into the 8 skills or see how practice sessions work?";

      case 'three_layer_system':
        return "Signal Intelligence™ works in three layers:\n\n**Layer 1: Why behaviors change** - We use the Human Decision Drivers Framework to understand context (like confidence or motivation), but we never measure these directly.\n\n**Layer 2: Skills you develop** - 8 core conversational capabilities like Signal Awareness, Objection Navigation, and Adaptive Response.\n\n**Layer 3: What we observe** - Behavioral metrics from your practice sessions, like question quality and listening patterns.\n\nThink of it like learning to play piano: Layer 1 is music theory, Layer 2 is the techniques, Layer 3 is what the teacher hears when you play.\n\nWant to dive deeper into any of these layers?";

      case 'capabilities_overview':
        return "We help you develop 8 core conversational skills:\n\n1. Signal Awareness - Asking better questions\n2. Signal Interpretation - Active listening\n3. Value Connection - Making it relevant\n4. Customer Engagement Monitoring - Reading the room\n5. Objection Navigation - Handling pushback\n6. Conversation Management - Staying on track\n7. Adaptive Response - Pivoting when needed\n8. Commitment Generation - Securing next steps\n\nEach one is a distinct skill you can practice and improve. Which one interests you most?";

      case 'capabilities_overview_followup':
        return "Each capability is measured through specific behavioral patterns during practice sessions.\n\nFor example, Signal Awareness looks at your question quality—open vs. closed questions, relevance to customer goals, and follow-up depth.\n\nObjection Navigation tracks how you acknowledge concerns, stay calm under pressure, and reframe constructively.\n\nThe beauty is you can see exactly where you're strong and where to focus improvement. Want to explore a specific capability in detail?";

      case 'capability_signal_awareness':
        return "Signal Awareness is about noticing customer cues and asking better questions in response.\n\nFor example, if a doctor mentions time constraints, a rep with strong Signal Awareness might shift from broad questions to focused ones about their specific patient population.\n\nWe measure this through Question Quality—looking at things like open vs. closed questions, relevance to customer goals, and how well you follow up.\n\nWant to see how this shows up in practice scenarios?";

      case 'capability_signal_interpretation':
        return "Signal Interpretation is your ability to understand what customers are really saying and adjust accordingly.\n\nIt's the difference between hearing \"I don't have time\" and recognizing whether that means \"not interested\" or \"show me the value quickly.\"\n\nWe look at behaviors like accurate paraphrasing, acknowledging concerns, and how you shift your approach based on what you hear.\n\nThis is one of the most impactful skills for building trust. Want to know how to practice it?";

      case 'capability_value_connection':
        return "Value Connection is about linking your message to what actually matters to the customer.\n\nInstead of listing features, you're translating them into outcomes that align with their priorities. Like connecting a drug's dosing schedule to a doctor's concern about patient adherence.\n\nWe observe how well you frame value in customer terms, not product terms.\n\nWant examples of strong vs. weak value framing?";

      case 'capability_customer_engagement':
        return "Customer Engagement Monitoring is your ability to read the room—noticing when engagement shifts and adjusting your approach.\n\nMaybe the customer goes quiet, starts multitasking, or suddenly gets more animated. Strong reps pick up on these cues and respond appropriately.\n\nWe track how you recognize participation changes and adjust pacing, tone, or approach.\n\nThis is especially critical in virtual calls. Want tips on improving this skill?";

      case 'capability_objection_navigation':
        return "Objection Navigation is handling pushback without getting defensive—staying calm, acknowledging concerns, and reframing constructively.\n\nThe key is treating objections as information, not attacks. \"I've heard that before\" might mean \"prove you're different\" or \"I'm skeptical but listening.\"\n\nWe look at how you acknowledge concerns, maintain credibility under pressure, and keep the conversation productive.\n\nWant to practice with some common pharma objections?";

      case 'capability_conversation_management':
        return "Conversation Management is maintaining purpose and structure while staying flexible to customer needs.\n\nIt's the balance between having a plan and being willing to deviate when the customer takes you somewhere valuable.\n\nWe observe how you maintain conversation flow, manage time, and stay focused on outcomes without being rigid.\n\nThink of it like being a good meeting facilitator. Want to see what good looks like?";

      case 'capability_adaptive_response':
        return "Adaptive Response is recognizing when your approach isn't working and pivoting mid-conversation.\n\nMaybe your clinical data isn't landing, so you shift to a patient story. Or your questions are too broad, so you get more specific.\n\nWe track how quickly you recognize ineffective patterns and adjust your strategy in real-time.\n\nThis is what separates good reps from great ones. Want to know how to build this skill?";

      case 'capability_commitment_generation':
        return "Commitment Generation is securing realistic next steps that preserve customer autonomy and build momentum.\n\nIt's not about \"closing\"—it's about co-creating a path forward that the customer actually owns.\n\nWe look at how you secure specific commitments, keep them realistic, and maintain the customer's sense of control.\n\nWant examples of strong commitment language?";

      case 'human_drivers':
        return "The Human Decision Drivers Framework explains why conversational behaviors change—things like confidence, motivation, emotional regulation, and perceived risk.\n\nHere's the key: we never measure these directly. They're explanatory context, not scores.\n\nThink of them like the \"why\" behind observable behaviors. If someone gets defensive during objections, social threat might be at play. But we're coaching the behavior (staying calm), not diagnosing the internal state.\n\nWant to understand how this connects to the skills you practice?";

      case 'behavioral_metrics':
        return "Behavioral Metrics are what we observe during practice sessions—things like question quality, listening patterns, and how you handle objections.\n\nKey points:\n• Only observed during practice (role play, simulations)\n• Focus on what you say and how you respond\n• Never used for live call monitoring\n• Completely transparent and explainable\n\nWe don't detect emotions, predict intent, or assess personality. Just observable conversation behaviors.\n\nWant to see what metrics look like in action?";

      case 'ai_coach':
        return "AI Coach gives you instant feedback during practice sessions—like having a personal coach available 24/7.\n\nIt highlights patterns in your conversation behaviors (question quality, listening, adaptability) and offers actionable insights. But here's what's important: the AI detects patterns, you make the judgments.\n\nIt only works in simulated practice environments, never on real customer calls.\n\nThink of it like a golf swing analyzer—it shows you the data, you decide how to improve.\n\nWant to see a sample feedback report?";

      case 'ai_coach_followup':
        return "The feedback is specific and actionable. For example:\n\n**Signal Awareness (4.2/5)**: \"You asked 8 open-ended questions and followed up on customer priorities. Consider probing deeper when the customer mentions constraints.\"\n\n**Objection Navigation (3.8/5)**: \"You acknowledged the concern but moved on quickly. Try paraphrasing to show you fully understand before responding.\"\n\nYou also get coaching cards that translate scores into specific actions to practice. Want to know more about any specific capability?"

      case 'role_practice':
        return "Role Play lets you practice high-stakes conversations in a completely safe environment.\n\nWe have 9+ pharma scenarios across HIV, Oncology, Cardiology, Vaccines, and more. You practice, get instant feedback on your Signal Intelligence™ capabilities, and build muscle memory for real conversations.\n\nMost reps spend 15-30 minutes a day. It's like a flight simulator—practice the hard stuff when the stakes are zero.\n\nWant to try a scenario or see what the feedback looks like?";

      case 'role_practice_followup':
        return "Here's how it works:\n\n1. Choose a scenario (e.g., HIV specialist objecting to switch therapy)\n2. Have a conversation with an AI customer\n3. Get instant feedback on your 8 Signal Intelligence™ capabilities\n4. See specific examples of what worked and what to improve\n\nThe AI adapts to your responses—if you handle an objection well, it might open up. If you miss a cue, it might get more guarded.\n\nMost reps see improvement after just 3-5 practice sessions. Want to know what the feedback looks like?";

      case 'ethics':
        return "Ethics and safety are built into everything we do.\n\nOur guiding principle: \"If a response would feel inappropriate if the roles were reversed, it's outside our boundary.\"\n\nWe're non-clinical, non-diagnostic, and behavior-only. We never infer emotions, predict intent, or assess personality. All metrics are transparent, explainable, and used only for learning—never for employment decisions or performance evaluation.\n\nWant to know more about our safeguards or compliance approach?";

      case 'boundary_correction':
        return "Just to clarify—Signal Intelligence™ focuses only on observable conversation behaviors. We don't detect emotions, predict intent, or assess personality traits.\n\nIf you're asking about how we observe and coach behaviors during practice, I'm happy to explain that. Or if you're curious about what makes our approach different from other training, I can share that too.\n\nWhat specifically were you wondering about?";

      case 'use_cases':
        return "ReflectivAI works for three key groups:\n\n**Sales Reps**: Practice high-stakes conversations, get instant feedback, build confidence. 89% report feeling more prepared after using it.\n\n**Sales Managers**: Coach with a structured framework, see real-time skill development, scale training across your team.\n\n**Enablement Leaders**: Accelerate onboarding (3x faster ramp time), identify skill gaps, measure training effectiveness with behavioral data.\n\nWhich role are you most interested in learning about?";

      case 'platform_features':
        return "The ReflectivAI platform includes:\n\n• AI Coach for instant, personalized feedback\n• Role Play scenarios across 9+ therapeutic areas\n• Dashboard with skill development tracking\n• Coaching cards that translate scores into actionable guidance\n• Team analytics for managers\n\nEverything is based on practice sessions, not live call monitoring. Your data stays private and is used only for learning.\n\nWant a walkthrough of any specific feature?";

      case 'results':
        return "Our customers see real results:\n\n• 75% higher skill retention vs. traditional training\n• 3x faster ramp time for new reps\n• 89% of reps report increased confidence\n• 34% increase in close rates (customer testimonial)\n\nThe key is experiential learning in a safe environment. You build muscle memory through practice, not just knowledge through lectures.\n\nWant to hear more about how teams are using this?";

      case 'general':
      default:
        return this.generalResponse();
    }
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
    return `I'm here to help! I can explain:\n\n• What Signal Intelligence™ is and how it works\n• The 8 conversational skills you can develop\n• How AI Coach and Role Play work\n• Who uses ReflectivAI and what results they see\n• Our ethics and safeguards\n\nWhat are you most curious about?`;
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
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90 z-50 flex items-center justify-center"
        aria-label="Open Alora Assistant"
      >
        <Bot className="h-7 w-7" />
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
