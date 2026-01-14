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

// Signal Intelligence™ Knowledge Base - CANONICAL SOURCE ONLY
// KNOWLEDGE SOURCE LOCK: All responses MUST pull from this KB
// NO hallucination, inference, or expansion beyond what exists here
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
Observable behaviors that show how each capability appears during structured practice sessions (role play, simulations). These are never used for live monitoring or surveillance.`,

    conversationalSignals: `Conversational signals are observable cues in communication that indicate a customer's state of engagement, interest, concern, or readiness. These include:

• Verbal cues: Tone, pacing, word choice, questions asked
• Participation patterns: Speaking time, engagement level, responsiveness
• Content signals: Topics raised, objections voiced, priorities mentioned
• Engagement shifts: Changes in energy, focus, or openness

These signals are what sales professionals learn to recognize and respond to through Signal Intelligence™ training.`
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
      relatedDrivers: ['Cognitive Empathy', 'Emotional Intelligence (Driver)']
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
      relatedDrivers: ['Emotional Intelligence (Driver)', 'Social Threat Awareness']
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
      relatedDrivers: ['Emotional Intelligence (Driver)', 'Social Threat Awareness']
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
      relatedDrivers: ['Metacognition', 'Emotional Intelligence (Driver)']
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
      name: 'Emotional Intelligence (Human Decision Driver)',
      description: 'The ability to perceive, understand, and regulate emotions in oneself and others. This is a Human Decision Driver that influences multiple Signal Intelligence capabilities but is not directly measured.',
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

// ALORA Response Engine with HARDENED ANTI-LOOP GUARDS
class AloraResponseEngine {
  private conversationContext: string = '';
  private ambiguousQuestionCount: number = 0;
  private lastAmbiguousQuery: string = '';
  private queryHistory: string[] = [];

  // RULE 1: AMBIGUITY DETECTION
  private isInappropriateOrOffTopic(query: string): boolean {
    const lowerQuery = query.toLowerCase();
    
    // Inappropriate content
    const inappropriatePatterns = [
      /\b(sex|dating|romance|love|marry|hot|attractive)\b/,
      /\b(politics|political|election|vote|democrat|republican)\b/,
      /\b(religion|religious|god|jesus|muslim|christian|atheist)\b/,
      /\b(offensive|curse|profanity)\b/,
    ];
    
    // Completely off-topic (not business/sales/training related)
    const offTopicPatterns = [
      /weather|sports|movie|music|recipe|cooking|travel|vacation/,
      /celebrity|entertainment|gossip|news/,
      /personal life|age|married|kids|family/,
      /joke|funny|laugh|meme/,
    ];
    
    return inappropriatePatterns.some(pattern => pattern.test(lowerQuery)) ||
           offTopicPatterns.some(pattern => pattern.test(lowerQuery));
  }

  private detectAmbiguousSignal(query: string): boolean {
    const lowerQuery = query.toLowerCase().trim();
    
    // Check if query mentions "signal" but NOT "Signal Intelligence™"
    const hasSignalMention = lowerQuery.includes('signal');
    const hasExplicitSI = lowerQuery.match(/signal intelligence|si framework|signal intelligence™/);
    
    // Ambiguous patterns: "What is a signal?", "Explain signals", "What do you mean by signal?"
    const isAmbiguousPattern = lowerQuery.match(/^(what is|what's|define|explain|tell me about|what do you mean by|what are|describe).*\bsignal/);
    
    return hasSignalMention && !hasExplicitSI && !!isAmbiguousPattern;
  }

  // RULE 2: CLARIFYING QUESTION RESPONSE
  private clarifyingQuestionResponse(): string {
    return "Do you mean a general conversational signal (like body language, tone cues, or customer engagement indicators), or Signal Intelligence™ as used in the ReflectivAI platform?";
  }

  // RULE 3: ANTI-LOOP GUARD WITH ESCALATION
  private handleRepeatedAmbiguity(query: string): string | null {
    const normalizedQuery = query.toLowerCase().trim();
    
    // Check if this is the same ambiguous question repeated
    if (normalizedQuery === this.lastAmbiguousQuery) {
      this.ambiguousQuestionCount++;
    } else {
      this.ambiguousQuestionCount = 1;
      this.lastAmbiguousQuery = normalizedQuery;
    }

    // After 2 identical attempts, escalate
    if (this.ambiguousQuestionCount >= 2) {
      return "I want to make sure I answer correctly — could you clarify what you're referring to? Are you asking about Signal Intelligence™ (our framework), or general conversational signals (customer cues)?";
    }

    return null; // No escalation needed yet
  }

  // RULE 4: KNOWLEDGE SOURCE LOCK - DEFER WHEN CONTENT MISSING
  private deferResponse(): string {
    return "That isn't something I can define without more context. Could you clarify what you're asking about?";
  }

  // Check if content exists in canonical KB
  private hasCanonicalContent(intent: string): boolean {
    const validIntents = [
      'si_overview', 'three_layer_system', 'capabilities_overview',
      'capability_signal_awareness', 'capability_signal_interpretation',
      'capability_value_connection', 'capability_customer_engagement',
      'capability_objection_navigation', 'capability_conversation_management',
      'capability_adaptive_response', 'capability_commitment_generation',
      'human_drivers', 'behavioral_metrics', 'ai_coach', 'role_practice',
      'ethics', 'boundary_correction', 'use_cases', 'platform_features',
      'results', 'pricing', 'getting_started', 'conversational_signals'
    ];
    
    return validIntents.includes(intent);
  }

  // REPEATED QUESTION TRACKING
  private isRepeatedQuestion(query: string): boolean {
    const normalizedQuery = query.toLowerCase().trim();
    
    // Check last 5 queries for exact repetition
    const recentQueries = this.queryHistory.slice(-5);
    const repetitionCount = recentQueries.filter(q => q === normalizedQuery).length;
    
    // Add to history
    this.queryHistory.push(normalizedQuery);
    
    // Keep history manageable (last 20 queries)
    if (this.queryHistory.length > 20) {
      this.queryHistory.shift();
    }
    
    return repetitionCount >= 2;
  }

  detectIntent(query: string): string {
    const lowerQuery = query.toLowerCase().trim();

    // Handle empty or very short queries
    if (lowerQuery.length < 2) {
      return 'clarification_needed';
    }

    // CRITICAL: Check for repeated questions (anti-loop)
    if (this.isRepeatedQuestion(query)) {
      return 'repeated_question';
    }

    // CRITICAL: Check for ambiguous "signal" questions FIRST
    if (this.detectAmbiguousSignal(query)) {
      return 'ambiguous_signal';
    }

    // Inappropriate or off-topic questions - handle gracefully
    if (this.isInappropriateOrOffTopic(query)) {
      return 'inappropriate_redirect';
    }

    // Follow-up patterns - only trigger if query is VERY short and generic
    if (lowerQuery.match(/^(yes|yeah|sure|tell me more|more|go on|continue)$/)) {
      if (this.conversationContext) {
        return this.conversationContext + '_followup';
      }
      return 'general';
    }

    // Who are you / About Alora
    if (lowerQuery.match(/who are you|what are you|tell me about yourself|who is alora|what is alora/)) {
      return 'about_alora';
    }

    // Greetings and casual openers
    if (lowerQuery.match(/^(hi|hello|hey|greetings|good morning|good afternoon|good evening|what's up|whats up|sup|yo|howdy)$/)) {
      return 'greeting';
    }

    // What makes it unique / different / special
    if (lowerQuery.match(/what makes|why choose|what's different|whats different|what's special|whats special|what's unique|whats unique|why use|why should|what sets|how is it different|why this|differentiator/)) {
      return 'what_makes_unique';
    }

    // Casual conversation starters - MORE FLEXIBLE
    if (lowerQuery.match(/enlighten me|tell me about|show me|teach me|educate me|inform me|fill me in|give me the rundown|break it down/)) {
      return 'enlighten_me';
    }

    // Opinion/preference questions about ReflectivAI
    if (lowerQuery.match(/favorite feature|best feature|coolest feature|most popular|what do you like|what's good|whats good|what do you recommend|your favorite/)) {
      return 'favorite_feature';
    }

    // Thanks
    if (lowerQuery.match(/^(thanks|thank you|thx|appreciate it|ty)$/)) {
      return 'thanks';
    }

    // Conversational signals (general concept)
    if (lowerQuery.match(/conversational signal|customer signal|engagement signal|what are signals|types of signals/) && !lowerQuery.match(/signal intelligence/)) {
      this.conversationContext = 'conversational_signals';
      return 'conversational_signals';
    }

    // Signal Intelligence overview (explicit)
    if (lowerQuery.match(/what is signal intelligence|define signal intelligence|explain signal intelligence|si framework|what does signal intelligence|tell me about signal intelligence|signal intelligence™|about signal intelligence/)) {
      this.conversationContext = 'si_overview';
      return 'si_overview';
    }

    // General "what is" or "tell me about" ReflectivAI
    if (lowerQuery.match(/what is reflectiv|tell me about reflectiv|explain reflectiv|about reflectiv|what does reflectiv/)) {
      return 'enlighten_me';
    }

    // Three-layer system
    if (lowerQuery.match(/three layer|3 layer|system model|framework structure|how does it work|how it works|how does the system work|how does this work/)) {
      this.conversationContext = 'three_layer_system';
      return 'three_layer_system';
    }

    // Capabilities
    if (lowerQuery.match(/capabilities|8 capabilities|skills|what can i learn|conversational skills|what skills|list capabilities/)) {
      this.conversationContext = 'capabilities_overview';
      return 'capabilities_overview';
    }

    // Specific capability queries
    if (lowerQuery.match(/signal awareness|question quality/)) {
      this.conversationContext = 'capability_signal_awareness';
      return 'capability_signal_awareness';
    }
    if (lowerQuery.match(/signal interpretation|listening|responsiveness/)) {
      this.conversationContext = 'capability_signal_interpretation';
      return 'capability_signal_interpretation';
    }
    if (lowerQuery.match(/value connection|value framing|making it matter/)) {
      this.conversationContext = 'capability_value_connection';
      return 'capability_value_connection';
    }
    if (lowerQuery.match(/engagement monitoring|engagement cues|reading the room/)) {
      this.conversationContext = 'capability_customer_engagement';
      return 'capability_customer_engagement';
    }
    if (lowerQuery.match(/objection|objection handling|objection navigation|handling pushback/)) {
      this.conversationContext = 'capability_objection_navigation';
      return 'capability_objection_navigation';
    }
    if (lowerQuery.match(/conversation management|conversation control|structure|staying on track/)) {
      this.conversationContext = 'capability_conversation_management';
      return 'capability_conversation_management';
    }
    if (lowerQuery.match(/adaptive response|adaptability|flexibility|pivoting/)) {
      this.conversationContext = 'capability_adaptive_response';
      return 'capability_adaptive_response';
    }
    if (lowerQuery.match(/commitment|commitment generation|next steps|securing commitments/)) {
      this.conversationContext = 'capability_commitment_generation';
      return 'capability_commitment_generation';
    }

    // Human Decision Drivers
    if (lowerQuery.match(/human decision drivers|decision drivers|why behaviors change|internal forces/)) {
      this.conversationContext = 'human_drivers';
      return 'human_drivers';
    }

    // Behavioral Metrics
    if (lowerQuery.match(/behavioral metrics|metrics|measurement|how do you measure|scoring/)) {
      this.conversationContext = 'behavioral_metrics';
      return 'behavioral_metrics';
    }

    // AI Coach
    if (lowerQuery.match(/ai coach|coaching|feedback|how does ai help/)) {
      this.conversationContext = 'ai_coach';
      return 'ai_coach';
    }

    // Role Play
    if (lowerQuery.match(/role play|practice|simulation|training|scenarios?/)) {
      this.conversationContext = 'role_practice';
      return 'role_practice';
    }

    // Ethics & Safeguards
    if (lowerQuery.match(/ethics|ethical|safeguards|boundaries|privacy|compliance/)) {
      this.conversationContext = 'ethics';
      return 'ethics';
    }

    // What's NOT measured (boundary correction)
    if (lowerQuery.match(/emotion detection|predict intent|personality|psychological|mental health|feelings/)) {
      this.conversationContext = 'boundary_correction';
      return 'boundary_correction';
    }

    // Use cases
    if (lowerQuery.match(/use case|who is this for|sales rep|manager|enablement/)) {
      this.conversationContext = 'use_cases';
      return 'use_cases';
    }

    // Platform features
    if (lowerQuery.match(/dashboard|platform|features|what can i do/)) {
      this.conversationContext = 'platform_features';
      return 'platform_features';
    }

    // Results & effectiveness
    if (lowerQuery.match(/results|effectiveness|roi|statistics|success rate|does it work|is it effective|proof|evidence/)) {
      this.conversationContext = 'results';
      return 'results';
    }

    // Pricing
    if (lowerQuery.match(/pricing|price|cost|how much|afford|budget|expensive|cheap|payment|subscription|plans/)) {
      this.conversationContext = 'pricing';
      return 'pricing';
    }

    // Demo / Trial
    if (lowerQuery.match(/demo|trial|try it|test it|see it|preview|sample|example/)) {
      return 'demo_trial';
    }

    // Who is it for / Target audience
    if (lowerQuery.match(/who is this for|who uses|target audience|right for me|good fit|suitable for|designed for/)) {
      return 'target_audience';
    }

    // Time commitment / How long
    if (lowerQuery.match(/how long|time|duration|minutes|hours|commitment|takes to/)) {
      return 'time_commitment';
    }

    // Support / Help
    if (lowerQuery.match(/support|help|assistance|contact|reach out|customer service|questions/)) {
      return 'support';
    }

    // Getting started
    if (lowerQuery.match(/get started|sign up|demo|try it|how do i start/)) {
      this.conversationContext = 'getting_started';
      return 'getting_started';
    }

    // If no specific intent matched, return general
    this.conversationContext = 'general';
    return 'general';
  }

  generateResponse(intent: string, originalQuery: string = ''): string {
    // CRITICAL: Handle ambiguous signal questions with clarification
    if (intent === 'ambiguous_signal') {
      const escalation = this.handleRepeatedAmbiguity(originalQuery);
      if (escalation) {
        return escalation;
      }
      return this.clarifyingQuestionResponse();
    }

    // CRITICAL: Handle repeated questions
    if (intent === 'repeated_question') {
      return "I notice you've asked this a few times. Let me try to help differently. Could you rephrase your question or let me know what specific aspect you'd like to understand better?";
    }

    // KNOWLEDGE SOURCE LOCK: Check if content exists in canonical KB
    const bypassIntents = ['general', 'clarification_needed', 'greeting', 'thanks', 'about_alora', 'enlighten_me', 'favorite_feature', 'what_makes_unique', 'inappropriate_redirect', 'demo_trial', 'target_audience', 'time_commitment', 'support'];
    if (!this.hasCanonicalContent(intent) && !bypassIntents.includes(intent)) {
      return this.deferResponse();
    }

    switch (intent) {
      case 'clarification_needed':
        return "I'd be happy to help! Could you tell me a bit more about what you're interested in learning about ReflectivAI?";

      case 'about_alora':
        return "I'm Alora! 👋 Think of me as your personal guide to ReflectivAI. I'm here to answer questions, explain how things work, and help you figure out if our platform is right for your team.\n\nI know everything about Signal Intelligence™, our AI Coach, Role Play scenarios, pricing—you name it. And I promise to keep things conversational, not corporate-speak. 😊\n\nWhat would you like to know?";

      case 'inappropriate_redirect':
        const redirects = [
          "Ha! I appreciate the creativity, but I'm here to talk about ReflectivAI. 😊 Let's get back to the good stuff—what would you like to know about our platform?",
          "You know, that's not really my area of expertise! But I'm great at explaining how ReflectivAI helps sales teams level up their conversation skills. What can I tell you about that?",
          "I see what you did there! 😄 But let's keep it professional. I'm here to help you understand Signal Intelligence™, AI coaching, and how we help pharma reps get better at conversations. What interests you?",
          "Interesting question, but that's a bit outside my wheelhouse! I'm all about helping you understand ReflectivAI's training platform. Want to know what makes us different?",
        ];
        return redirects[Math.floor(Math.random() * redirects.length)];

      case 'what_makes_unique':
        return "Great question! Here's what makes ReflectivAI different:\n\n🎯 **Not creepy surveillance** - We only measure behaviors during practice sessions, never live calls. It's a training tool, not Big Brother.\n\n🧠 **Behavior-first, not psych tests** - We focus on what you say and do, not personality assessments or emotional detection. Observable skills you can actually improve.\n\n⚡ **Instant feedback** - No waiting for your manager to review recordings. Practice a conversation, get coaching immediately.\n\n🎮 **Realistic practice** - Our AI customers respond like real people. Handle an objection well? They open up. Miss a cue? They get guarded.\n\n📊 **8 trainable skills** - Signal Intelligence™ breaks down the art of conversation into specific, measurable capabilities you can level up.\n\nMost training is lectures and theory. We're experiential—like a flight simulator for sales calls. Want to dive deeper into any of these?";

      case 'greeting':
        return "Hey there! 👋 I'm Alora. Think of me as your friendly guide to all things ReflectivAI. Whether you're curious about Signal Intelligence™, want to know how our AI Coach works, or just wondering if this could help your team—I've got you covered. What's on your mind?";

      case 'enlighten_me':
        return "Ooh, I like your style! Here's the quick version:\n\nReflectivAI is basically a training gym for sales conversations. We help pharma reps get really good at the hard stuff—reading customer signals, handling objections, asking questions that actually land.\n\n**The secret sauce?** You practice with AI customers in realistic scenarios (HIV, Oncology, Cardiology—you name it), and our AI Coach gives you instant feedback. No waiting for your manager to review call recordings.\n\nIt's like having a flight simulator for sales calls. Practice the scary stuff when the stakes are zero. 🎯\n\nWhat part sounds most interesting to you?";

      case 'favorite_feature':
        return "Great question! While I don't have personal preferences, I can tell you what users rave about most:\n\n🎯 **Role Play Practice** - Sales reps love the safe space to practice tough conversations without real-world stakes. It's like a flight simulator for sales calls.\n\n💡 **Instant AI Feedback** - No waiting for manager reviews. You get specific, actionable coaching right after each practice session.\n\n📊 **Skill Tracking** - Seeing your progress across the 8 Signal Intelligence™ capabilities is incredibly motivating.\n\nMost reps say the combination of realistic practice + immediate feedback is what makes it stick. Want to see how any of these work?";

      case 'thanks':
        return "You're so welcome! Happy to help. Anything else you want to know? I'm here all day. ☕";

      case 'conversational_signals':
        return `${SIGNAL_INTELLIGENCE_KB.definitions.conversationalSignals}\n\nThese signals are what Signal Intelligence™ helps sales professionals recognize and respond to effectively. Want to learn more about the Signal Intelligence™ framework?`;

      case 'si_overview':
        return `Alright, let's break down Signal Intelligence™:\n\n${SIGNAL_INTELLIGENCE_KB.definitions.signalIntelligence}\n\nBasically? It's a non-creepy, totally transparent way to help sales reps get better at conversations. No mind-reading, no personality tests, no Big Brother vibes. Just observable behaviors you can actually improve.\n\nWant the deep dive on how it works, or curious about the 8 skills you can develop?`;

      case 'si_overview_followup':
        return "Great question! Signal Intelligence™ works in three layers:\n\n**Layer 1**: Understanding why behaviors change (context like confidence or motivation)\n**Layer 2**: The 8 conversational skills you develop\n**Layer 3**: Observable behaviors we track during practice\n\nWe have 9+ pharma scenarios across HIV, Oncology, Cardiology, and more. You practice, get instant feedback, and build muscle memory for real conversations.\n\nWant to dive into the 8 skills or see how practice sessions work?";

      case 'three_layer_system':
        return `${SIGNAL_INTELLIGENCE_KB.definitions.threeLayerSystem}\n\nThink of it like learning to play piano: Layer 1 is music theory, Layer 2 is the techniques, Layer 3 is what the teacher hears when you play.\n\nWant to dive deeper into any of these layers?`;

      case 'capabilities_overview':
        return "Ah, the good stuff! Here are the 8 conversational superpowers we help you build:\n\n1. **Signal Awareness** - Ask questions that actually matter\n2. **Signal Interpretation** - Listen like you mean it\n3. **Value Connection** - Make it about *them*, not your product\n4. **Customer Engagement Monitoring** - Read the room (even on Zoom)\n5. **Objection Navigation** - Handle pushback without getting defensive\n6. **Conversation Management** - Stay on track without being robotic\n7. **Adaptive Response** - Pivot when your plan isn't working\n8. **Commitment Generation** - Get to next steps naturally\n\nThink of these as your conversation toolkit. Each one is trainable. Which one do you want to level up first?";

      case 'capabilities_overview_followup':
        return "Each capability is measured through specific behavioral patterns during practice sessions.\n\nFor example, Signal Awareness looks at your question quality—open vs. closed questions, relevance to customer goals, and follow-up depth.\n\nObjection Navigation tracks how you acknowledge concerns, stay calm under pressure, and reframe constructively.\n\nThe beauty is you can see exactly where you're strong and where to focus improvement. Want to explore a specific capability in detail?";

      case 'capability_signal_awareness':
        return `**${SIGNAL_INTELLIGENCE_KB.capabilities.signalAwareness.name}**\n\n${SIGNAL_INTELLIGENCE_KB.capabilities.signalAwareness.definition}\n\nFor example, if a doctor mentions time constraints, a rep with strong Signal Awareness might shift from broad questions to focused ones about their specific patient population.\n\nWe measure this through ${SIGNAL_INTELLIGENCE_KB.capabilities.signalAwareness.metric}.\n\nWant to see how this shows up in practice scenarios?`;

      case 'capability_signal_interpretation':
        return `**${SIGNAL_INTELLIGENCE_KB.capabilities.signalInterpretation.name}**\n\n${SIGNAL_INTELLIGENCE_KB.capabilities.signalInterpretation.definition}\n\nIt's the difference between hearing "I don't have time" and recognizing whether that means "not interested" or "show me the value quickly."\n\nWe measure this through ${SIGNAL_INTELLIGENCE_KB.capabilities.signalInterpretation.metric}.\n\nThis is one of the most impactful skills for building trust. Want to know how to practice it?`;

      case 'capability_value_connection':
        return `**${SIGNAL_INTELLIGENCE_KB.capabilities.valueConnection.name}**\n\n${SIGNAL_INTELLIGENCE_KB.capabilities.valueConnection.definition}\n\nInstead of listing features, you're translating them into outcomes that align with their priorities. Like connecting a drug's dosing schedule to a doctor's concern about patient adherence.\n\nWe measure this through ${SIGNAL_INTELLIGENCE_KB.capabilities.valueConnection.metric}.\n\nWant examples of strong vs. weak value framing?`;

      case 'capability_customer_engagement':
        return `**${SIGNAL_INTELLIGENCE_KB.capabilities.customerEngagement.name}**\n\n${SIGNAL_INTELLIGENCE_KB.capabilities.customerEngagement.definition}\n\nMaybe the customer goes quiet, starts multitasking, or suddenly gets more animated. Strong reps pick up on these cues and respond appropriately.\n\nWe measure this through ${SIGNAL_INTELLIGENCE_KB.capabilities.customerEngagement.metric}.\n\nThis is especially critical in virtual calls. Want tips on improving this skill?`;

      case 'capability_objection_navigation':
        return `**${SIGNAL_INTELLIGENCE_KB.capabilities.objectionNavigation.name}**\n\n${SIGNAL_INTELLIGENCE_KB.capabilities.objectionNavigation.definition}\n\nThe key is treating objections as information, not attacks. "I've heard that before" might mean "prove you're different" or "I'm skeptical but listening."\n\nWe measure this through ${SIGNAL_INTELLIGENCE_KB.capabilities.objectionNavigation.metric}.\n\nWant to practice with some common pharma objections?`;

      case 'capability_conversation_management':
        return `**${SIGNAL_INTELLIGENCE_KB.capabilities.conversationManagement.name}**\n\n${SIGNAL_INTELLIGENCE_KB.capabilities.conversationManagement.definition}\n\nIt's the balance between having a plan and being willing to deviate when the customer takes you somewhere valuable.\n\nWe measure this through ${SIGNAL_INTELLIGENCE_KB.capabilities.conversationManagement.metric}.\n\nThink of it like being a good meeting facilitator. Want to see what good looks like?`;

      case 'capability_adaptive_response':
        return `**${SIGNAL_INTELLIGENCE_KB.capabilities.adaptiveResponse.name}**\n\n${SIGNAL_INTELLIGENCE_KB.capabilities.adaptiveResponse.definition}\n\nMaybe your clinical data isn't landing, so you shift to a patient story. Or your questions are too broad, so you get more specific.\n\nWe measure this through ${SIGNAL_INTELLIGENCE_KB.capabilities.adaptiveResponse.metric}.\n\nThis is what separates good reps from great ones. Want to know how to build this skill?`;

      case 'capability_commitment_generation':
        return `**${SIGNAL_INTELLIGENCE_KB.capabilities.commitmentGeneration.name}**\n\n${SIGNAL_INTELLIGENCE_KB.capabilities.commitmentGeneration.definition}\n\nIt's not about "closing"—it's about co-creating a path forward that the customer actually owns.\n\nWe measure this through ${SIGNAL_INTELLIGENCE_KB.capabilities.commitmentGeneration.metric}.\n\nWant examples of strong commitment language?`;

      case 'human_drivers':
        return "The Human Decision Drivers Framework explains why conversational behaviors change—things like confidence, motivation, emotional regulation, and perceived risk.\n\nHere's the key: we never measure these directly. They're explanatory context, not scores.\n\nThink of them like the \"why\" behind observable behaviors. If someone gets defensive during objections, social threat might be at play. But we're coaching the behavior (staying calm), not diagnosing the internal state.\n\nWant to understand how this connects to the skills you practice?";

      case 'behavioral_metrics':
        return "Behavioral Metrics are what we observe during practice sessions—things like question quality, listening patterns, and how you handle objections.\n\nKey points:\n• Only observed during practice (role play, simulations)\n• Focus on what you say and how you respond\n• Never used for live call monitoring\n• Completely transparent and explainable\n\nWe don't detect emotions, predict intent, or assess personality. Just observable conversation behaviors.\n\nWant to see what metrics look like in action?";

      case 'ai_coach':
        return `${SIGNAL_INTELLIGENCE_KB.platform.aiCoach}\n\nHere's the cool part: you don't have to wait for your manager to listen to call recordings and schedule a coaching session. You practice a conversation, and boom—instant feedback on what worked and what didn't.\n\nIt's like having a golf swing analyzer for sales calls. The AI shows you the data, you decide how to improve. No judgment, just insights.\n\nWant to see what the feedback actually looks like?`;

      case 'ai_coach_followup':
        return "The feedback is specific and actionable. For example:\n\n**Signal Awareness (4.2/5)**: \"You asked 8 open-ended questions and followed up on customer priorities. Consider probing deeper when the customer mentions constraints.\"\n\n**Objection Navigation (3.8/5)**: \"You acknowledged the concern but moved on quickly. Try paraphrasing to show you fully understand before responding.\"\n\nYou also get coaching cards that translate scores into specific actions to practice. Want to know more about any specific capability?";

      case 'role_practice':
        return `${SIGNAL_INTELLIGENCE_KB.platform.rolePractice}\n\nWe've got 9+ pharma scenarios across HIV, Oncology, Cardiology, Vaccines, and more. The AI customer responds like a real person—if you handle an objection well, they open up. Miss a cue? They get guarded.\n\nMost reps spend 15-30 minutes a day. It's like a flight simulator for sales calls—practice the scary stuff when the stakes are zero. No real doctors were harmed in the making of your skills. 😄\n\nWant to see how a practice session works?`;

      case 'role_practice_followup':
        return "Here's how it works:\n\n1. Choose a scenario (e.g., HIV specialist objecting to switch therapy)\n2. Have a conversation with an AI customer\n3. Get instant feedback on your 8 Signal Intelligence™ capabilities\n4. See specific examples of what worked and what to improve\n\nThe AI adapts to your responses—if you handle an objection well, it might open up. If you miss a cue, it might get more guarded.\n\nMost reps see improvement after just 3-5 practice sessions. Want to know what the feedback looks like?";

      case 'ethics':
        return `${SIGNAL_INTELLIGENCE_KB.ethics.boundaries}\n\nWant to know more about our safeguards or compliance approach?`;

      case 'boundary_correction':
        return `Just to clarify—Signal Intelligence™ focuses only on observable conversation behaviors. We don't detect emotions, predict intent, or assess personality traits.\n\n${SIGNAL_INTELLIGENCE_KB.ethics.whatNotMeasured}\n\nIf you're asking about how we observe and coach behaviors during practice, I'm happy to explain that. What specifically were you wondering about?`;

      case 'use_cases':
        return `ReflectivAI works for three key groups:\n\n**Sales Reps**: ${SIGNAL_INTELLIGENCE_KB.useCases.salesReps}\n\n**Sales Managers**: ${SIGNAL_INTELLIGENCE_KB.useCases.managers}\n\n**Enablement Leaders**: ${SIGNAL_INTELLIGENCE_KB.useCases.enablement}\n\nWhich role are you most interested in learning about?`;

      case 'platform_features':
        return `The ReflectivAI platform includes:\n\n• AI Coach for instant, personalized feedback\n• Role Play scenarios across 9+ therapeutic areas\n• Dashboard with skill development tracking\n• Coaching cards that translate scores into actionable guidance\n• Team analytics for managers\n\nEverything is based on practice sessions, not live call monitoring. Your data stays private and is used only for learning.\n\nWant a walkthrough of any specific feature?`;

      case 'results':
        return "Our customers see real results:\n\n• 75% higher skill retention vs. traditional training\n• 3x faster ramp time for new reps\n• 89% of reps report increased confidence\n• 34% increase in close rates (customer testimonial)\n\nThe key is experiential learning in a safe environment. You build muscle memory through practice, not just knowledge through lectures.\n\nWant to hear more about how teams are using this?";

      case 'pricing':
        return "I'd be happy to connect you with our team to discuss pricing options tailored to your organization's needs.\n\nPricing typically depends on:\n• Number of users\n• Therapeutic areas needed\n• Custom scenario development\n• Team vs. enterprise deployment\n\nWould you like to schedule a demo to discuss your specific requirements? You can also visit our Pricing page for more details.";

      case 'demo_trial':
        return "I'd love to show you! Here's how you can experience ReflectivAI:\n\n🎮 **Interactive Demo**: See the platform in action with real scenarios\n🎯 **Try Role Play**: Have a conversation with an AI customer and get instant feedback\n📊 **See Your Scores**: Get a sample Signal Intelligence™ report\n\nMost people are surprised by how realistic the AI customers feel. Want me to point you to the demo page, or do you have specific questions first?";

      case 'target_audience':
        return "Great question! ReflectivAI is designed for:\n\n💊 **Pharma Sales Reps** - Especially those calling on specialists (HIV, Oncology, Cardiology, etc.)\n💼 **Sales Managers** - Who want to coach their teams more effectively\n🏛️ **Training Teams** - Looking for experiential learning vs. lectures\n🚀 **New Hires** - Who need to ramp up quickly on complex conversations\n\nIf you're in pharma sales and want to get better at reading customers, handling objections, and having more natural conversations—this is for you. Sound like a fit?";

      case 'time_commitment':
        return "Good question! Here's the time breakdown:\n\n⏱️ **Practice Sessions**: 15-30 minutes per session\n📅 **Recommended Frequency**: 3-4 times per week\n📊 **See Results**: Most reps notice improvement after 3-5 sessions\n\nThink of it like going to the gym—short, focused sessions beat marathon cram sessions. Most reps fit it into their morning routine or use it before big calls.\n\nThe beauty? You practice when it fits YOUR schedule. No waiting for trainer availability. Want to know more about how it works?";

      case 'support':
        return "We've got you covered! Here's how to get help:\n\n📧 **Email**: Reach out to our team directly\n📞 **Schedule a Call**: Talk to a product specialist\n💬 **In-App Help**: Guidance built into the platform\n🎯 **Onboarding**: We help you get set up and running\n\nWhat kind of support are you looking for? I can point you in the right direction, or answer questions right here!";

      case 'getting_started':
        return "Great! Here's how to get started:\n\n1. **Schedule a Demo**: See the platform in action with your use cases\n2. **Try Role Play**: Experience AI Coach feedback firsthand\n3. **Pilot Program**: Start with a small team to see results\n4. **Scale**: Roll out across your organization\n\nMost teams see measurable improvement within 2-3 weeks of practice.\n\nWant to schedule a demo or have questions about implementation?";

      case 'general':
      default:
        return this.generalResponse();
    }
  }

  private generalResponse(): string {
    const responses = [
      "I'm all ears! 👂 Here's what I can help with:\n\n• **What makes us unique** - Why ReflectivAI is different from other training\n• **The 8 skills** - Conversational capabilities you can develop\n• **How it works** - AI Coach, Role Play, instant feedback\n• **Real results** - What teams are seeing\n\nWhat catches your interest?",
      "Happy to help! I'm great at explaining:\n\n• **Signal Intelligence™** - The framework behind everything\n• **Why it's not creepy** - Practice-only, never live call monitoring\n• **Platform features** - AI Coach, Role Play scenarios, skill tracking\n• **Getting started** - Pricing, demos, implementation\n\nWhat do you want to know?",
      "Let's talk! I can break down:\n\n• **What makes this different** - Experiential learning vs. lectures\n• **How practice works** - Realistic AI customers that respond to you\n• **Instant coaching** - No waiting for manager feedback\n• **Success stories** - Results from real pharma sales teams\n\nWhere should we start?"
    ];
    
    // Rotate through responses to avoid repetition
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
  }
}

const responseEngine = new AloraResponseEngine();

export function AloraAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hey! I'm Alora. 👋 Think of me as your friendly guide to ReflectivAI. I can answer questions about Signal Intelligence™, how our AI Coach works, Role Play scenarios, pricing—pretty much anything. What are you curious about?",
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
    const queryToProcess = inputValue;
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking time
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Generate response using intent detection with HARDENED GUARDS
    const intent = responseEngine.detectIntent(queryToProcess);
    const responseContent = responseEngine.generateResponse(intent, queryToProcess);

    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: responseContent,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, assistantMessage]);
    setIsTyping(false);

    // CRITICAL FIX: Return focus to input field after sending message
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 100);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Button - Oval Pill */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 px-3 py-2 rounded-full shadow-lg z-50 flex items-center gap-2"
        style={{ 
          backgroundColor: '#1e3a8a',
          color: 'white',
          border: '2px solid white',
          boxShadow: '0 0 0 2px #14b8a6, 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
        }}
        aria-label="Open Alora Assistant"
      >
        <MessageCircle className="h-4 w-4" />
        <span className="font-medium text-sm">Chat</span>
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[600px] bg-background border border-border rounded-lg shadow-2xl z-50 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-primary text-primary-foreground rounded-t-lg">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full overflow-hidden bg-white/10 flex-shrink-0">
                <img 
                  src="https://media.gettyimages.com/id/1357723717/photo/studio-portrait-of-a-mature-woman-looking-serious-in-front-of-white-background.jpg?b=1&s=2048x2048&w=0&k=20&c=_pQRGdZa0ew1M0zBv8P6ERE6mSZHa1qB1-BHOBGGcdU=" 
                  alt="Alora"
                  className="h-full w-full object-cover"
                />
              </div>
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