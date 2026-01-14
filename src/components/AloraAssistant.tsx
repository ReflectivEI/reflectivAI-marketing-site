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

Layer 1: Human Decision Drivers Framework (Interpretive Lens)
Explains WHY conversational behaviors change by describing internal forces like confidence, motivation, and perceived risk. These drivers are NOT measured directly—they serve only as explanatory context.

Layer 2: Signal Intelligence™ Capabilities (Skill Layer)
Defines 8 core conversational skills that can be developed through practice:
1. Signal Awareness
2. Signal Interpretation
3. Value Connection
4. Customer Engagement Monitoring
5. Objection Navigation
6. Conversation Management
7. Adaptive Response
8. Commitment Generation

Layer 3: Behavioral Metrics (Visibility Layer)
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

• Non-clinical: Not used for mental health assessment
• Non-diagnostic: Does not diagnose psychological conditions
• Behavior-only: Focuses exclusively on observable conversation behaviors
• Explainable: All metrics are transparent and auditable
• Human-led: AI detects patterns; humans exercise judgment

Ethical Principle: "If a response would feel inappropriate if the roles were reversed, it is outside the Signal Intelligence™ boundary."`,
    
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
        return "I'm Alora, your guide to ReflectivAI! I'm here to answer questions about Signal Intelligence™, our AI Coach, Role Play scenarios, pricing—pretty much anything. What would you like to know?";

      case 'inappropriate_redirect':
        const redirects = [
          "Ha! I appreciate the creativity, but I'm here to talk about ReflectivAI. 😊 Let's get back to the good stuff—what would you like to know about our platform?",
          "You know, that's not really my area of expertise! But I'm great at explaining how ReflectivAI helps sales teams level up their conversation skills. What can I tell you about that?",
          "I see what you did there! 😄 But let's keep it professional. I'm here to help you understand Signal Intelligence™, AI coaching, and how we help pharma reps get better at conversations. What interests you?",
          "Interesting question, but that's a bit outside my wheelhouse! I'm all about helping you understand ReflectivAI's training platform. Want to know what makes us different?",
        ];
        return redirects[Math.floor(Math.random() * redirects.length)];

      case 'what_makes_unique':
        return "Great question! We're practice-only (never live call monitoring), behavior-first (no psych tests), with instant AI feedback. You practice with realistic AI customers across 9+ pharma scenarios and develop 8 trainable conversation skills. It's like a flight simulator for sales calls. Want to dive deeper into any of these?";

      case 'greeting':
        return "Hey there! I'm Alora, your guide to ReflectivAI. I can help with Signal Intelligence™, our AI Coach, Role Play scenarios, pricing—anything you're curious about. What's on your mind?";

      case 'enlighten_me':
        return "I like your style! ReflectivAI is a training gym for sales conversations. You practice with AI customers in realistic pharma scenarios, get instant feedback from our AI Coach, and build 8 core conversation skills. It's like a flight simulator for sales calls. What part sounds most interesting?";

      case 'favorite_feature':
        return "Users rave about three things: realistic Role Play practice in a safe space, instant AI feedback after each session, and tracking progress across 8 Signal Intelligence™ capabilities. The combo of practice plus immediate coaching is what makes it stick. Want to see how any of these work?";

      case 'thanks':
        return "You're so welcome! Anything else you'd like to know? Or if you're all set, have a great day!";

      case 'conversational_signals':
        return "Good question! Conversational signals are observable cues like tone, pacing, word choice, participation patterns, and engagement shifts. Signal Intelligence™ helps sales professionals recognize and respond to these effectively. Want to learn more about the framework?";

      case 'si_overview':
        return "Happy to explain! Signal Intelligence™ is a behavior-based capability framework for professional development in high-stakes conversations. It's non-clinical, non-diagnostic, and focuses only on observable behaviors—never used for employment decisions or live monitoring. Want the deep dive on how it works, or curious about the 8 skills?";

      case 'si_overview_followup':
        return "Signal Intelligence™ has three layers: understanding why behaviors change, the 8 conversational skills you develop, and observable behaviors tracked during practice. We have 9+ pharma scenarios. You practice, get instant feedback, build muscle memory. Want to explore the 8 skills or see how practice works?";

      case 'three_layer_system':
        return "Great question! Layer 1: Human Decision Drivers (why behaviors change). Layer 2: 8 Signal Intelligence™ capabilities (skills you develop). Layer 3: Behavioral Metrics (observable behaviors during practice). Think piano: theory, techniques, what the teacher hears. Want to dive deeper into any layer?";

      case 'capabilities_overview':
        return "Great question! The 8 capabilities are: Signal Awareness, Signal Interpretation, Value Connection, Customer Engagement Monitoring, Objection Navigation, Conversation Management, Adaptive Response, and Commitment Generation. Each is trainable through practice. Which one would you like to explore?";

      case 'capabilities_overview_followup':
        return "Each capability is measured through specific behavioral patterns during practice. For example, Signal Awareness tracks question quality, while Objection Navigation tracks how you handle concerns. You can see exactly where you're strong and where to improve. Want to explore a specific capability?";

      case 'capability_signal_awareness':
        return "Signal Awareness is the capability to notice relevant customer cues and use those cues to shape purposeful, well-sequenced questions. We measure this through Question Quality. Want to see how this shows up in practice scenarios?";

      case 'capability_signal_interpretation':
        return "Signal Interpretation is the capability to make sense of what a customer is communicating and adjust responses as new information emerges. We measure this through Listening & Responsiveness. This is one of the most impactful skills for building trust. Want to know how to practice it?";

      case 'capability_value_connection':
        return "Value Connection is the capability to link discussion to what matters to the customer by translating priorities into outcome-based value. We measure this through Value Framing. Want examples of strong vs. weak value framing?";

      case 'capability_customer_engagement':
        return "Customer Engagement Monitoring is the capability to track and respond to shifts in customer attention, interest, or openness during conversations. We measure this through Engagement Tracking. This is especially critical in virtual calls. Want tips on improving this skill?";

      case 'capability_objection_navigation':
        return "Objection Navigation is the capability to acknowledge, explore, and address customer concerns without defensiveness or avoidance. We measure this through Objection Handling. The key is treating objections as information, not attacks. Want to practice with some common pharma objections?";

      case 'capability_conversation_management':
        return "Conversation Management is the capability to guide discussions toward productive outcomes while remaining flexible to customer priorities. We measure this through Conversation Control. It's the balance between having a plan and being willing to deviate. Want to see what good looks like?";

      case 'capability_adaptive_response':
        return "Adaptive Response is the capability to recognize when an approach isn't working and adjust strategy mid-conversation. We measure this through Behavioral Flexibility. This is what separates good reps from great ones. Want to know how to build this skill?";

      case 'capability_commitment_generation':
        return "Commitment Generation is the capability to co-create clear next steps that the customer owns and is motivated to complete. We measure this through Commitment Quality. It's not about 'closing'—it's about co-creating a path forward. Want examples of strong commitment language?";

      case 'human_drivers':
        return "Great question! The Human Decision Drivers Framework explains why conversational behaviors change—things like confidence, motivation, and perceived risk. Key point: we never measure these directly. They're explanatory context, not scores. We coach observable behaviors, not internal states. Want to understand how this connects to practice?";

      case 'behavioral_metrics':
        return "Great question! Signal Intelligence™ is comprised of 8 core behavioral metrics measuring observable conversation behaviors during practice sessions only—never live calls. We focus on what you say and how you respond, not emotions or personality. Would you like me to list all 8, explain how they're measured, or focus on one?";

      case 'ai_coach':
        return "Our AI Coach provides instant, personalized feedback after each practice session. You practice a conversation and immediately get specific coaching on what worked and what to improve. It's like a golf swing analyzer for sales calls. Want to see what the feedback looks like?";

      case 'ai_coach_followup':
        return "The feedback is specific and actionable. For example: 'Signal Awareness (4.2/5): You asked 8 open-ended questions. Consider probing deeper on constraints.' You also get coaching cards that translate scores into practice actions. Want to know more about any specific capability?";

      case 'role_practice':
        return "We have 9+ pharma scenarios across HIV, Oncology, Cardiology, and more. The AI customer responds like a real person—handle an objection well, they open up. Miss a cue, they get guarded. Most reps spend 15-30 minutes per session. Want to see how a practice session works?";

      case 'role_practice_followup':
        return "Choose a scenario, have a conversation with an AI customer, get instant feedback on your 8 Signal Intelligence™ capabilities, and see specific examples of what worked. The AI adapts to your responses. Most reps see improvement after 3-5 sessions. Want to know what the feedback looks like?";

      case 'ethics':
        return `${SIGNAL_INTELLIGENCE_KB.ethics.boundaries}\n\nWant to know more about our safeguards or compliance approach?`;

      case 'boundary_correction':
        return `Just to clarify—Signal Intelligence™ focuses only on observable conversation behaviors. We don't detect emotions, predict intent, or assess personality traits.\n\n${SIGNAL_INTELLIGENCE_KB.ethics.whatNotMeasured}\n\nIf you're asking about how we observe and coach behaviors during practice, I'm happy to explain that. What specifically were you wondering about?`;

      case 'use_cases':
        return `ReflectivAI works for three key groups:\n\nSales Reps: ${SIGNAL_INTELLIGENCE_KB.useCases.salesReps}\n\nSales Managers: ${SIGNAL_INTELLIGENCE_KB.useCases.managers}\n\nEnablement Leaders: ${SIGNAL_INTELLIGENCE_KB.useCases.enablement}\n\nWhich role are you most interested in learning about?`;

      case 'platform_features':
        return "The platform includes AI Coach feedback, Role Play scenarios across 9+ therapeutic areas, skill tracking dashboard, coaching cards, and team analytics for managers. Everything is practice-based, never live monitoring. Your data stays private. Want a walkthrough of any specific feature?";

      case 'results':
        return "Our customers see 75% higher skill retention, 3x faster ramp time, 89% report increased confidence, and 34% increase in close rates. The key is experiential learning—you build muscle memory through practice, not just knowledge through lectures. Want to hear more about how teams are using this?";

      case 'pricing':
        return "I'd be happy to connect you with our team! Pricing depends on number of users, therapeutic areas needed, custom scenarios, and team vs. enterprise deployment. Would you like to schedule a demo to discuss your specific requirements? You can also visit our Pricing page.";

      case 'demo_trial':
        return "I'd love to show you! You can see the platform in action, try Role Play with an AI customer, and get a sample Signal Intelligence™ report. Most people are surprised by how realistic the AI customers feel. Want me to point you to the demo page, or have specific questions first?";

      case 'target_audience':
        return "Great question! We're designed for pharma sales reps (especially specialists), sales managers coaching their teams, training teams seeking experiential learning, and new hires ramping up quickly. If you're in pharma sales and want better conversations, this is for you. Sound like a fit?";

      case 'time_commitment':
        return "Good question! Practice sessions are 15-30 minutes, 3-4 times per week recommended. Most reps see improvement after 3-5 sessions. Think gym workouts—short, focused sessions work best. You practice on YOUR schedule. Want to know more about how it works?";

      case 'support':
        return "We've got you covered! You can email our team, schedule a call with a product specialist, access in-app help, or get onboarding assistance. What kind of support are you looking for? I can point you in the right direction!";

      case 'getting_started':
        return "Great! Schedule a demo to see the platform in action, try Role Play to experience AI Coach feedback, start a pilot with a small team, then scale across your organization. Most teams see improvement within 2-3 weeks. Want to schedule a demo or have questions about implementation?";

      case 'general':
      default:
        return this.generalResponse();
    }
  }

  private generalResponse(): string {
    const responses = [
      "I'm all ears! I can help with what makes us unique, the 8 skills you develop, how it works, or real results teams are seeing. What catches your interest?",
      "Happy to help! I'm great at explaining Signal Intelligence™, why it's practice-only (never live monitoring), platform features, or getting started. What do you want to know?",
      "Let's talk! I can break down what makes this different, how practice works with realistic AI customers, instant coaching, or success stories from pharma teams. Where should we start?"
    ];
    
    // Rotate through responses to avoid repetition
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
  }
}

const responseEngine = new AloraResponseEngine();

// Alora Assistant Component - Updated Jan 14, 2026
export function AloraAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hey! I'm Alora, your guide to ReflectivAI. I can answer questions about Signal Intelligence™, our AI Coach, Role Play scenarios, pricing—pretty much anything. What are you curious about?",
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
      {/* Floating Button - Compact Pill */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-12 w-12 rounded-full shadow-lg z-50 flex items-center justify-center"
        style={{ 
          backgroundColor: '#1e3a8a',
          color: 'white',
          border: '2px solid white',
          boxShadow: '0 0 0 2px #14b8a6, 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
        }}
        aria-label="Open Alora Assistant"
      >
        <MessageCircle className="h-5 w-5" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[600px] bg-background border border-border rounded-lg shadow-2xl z-50 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-primary text-primary-foreground rounded-t-lg">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full overflow-hidden bg-white/10 flex-shrink-0">
                <img 
                  src="https://img1.wsimg.com/isteam/ip/1de1dc96-7231-4608-aa4f-91d58be98037/Screenshot%202026-01-13%20at%205.47.45%E2%80%AFPM.png" 
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