# Alora Assistant - Comprehensive Technical Guide

**Last Updated:** January 15, 2026  
**Version:** 2.0 (Enhanced with Anti-Loop Guards, Ambiguity Detection, 70-Word Cap)

---

## Table of Contents

1. [Overview](#overview)
2. [System Architecture](#system-architecture)
3. [File Structure & Roles](#file-structure--roles)
4. [Knowledge Base](#knowledge-base)
5. [Intent Detection System](#intent-detection-system)
6. [Response Generation](#response-generation)
7. [Guardrails & Safety Systems](#guardrails--safety-systems)
8. [Personality & Tone](#personality--tone)
9. [Making Modifications](#making-modifications)
10. [Testing & Validation](#testing--validation)

---

## Overview

**Alora** is ReflectivAI's conversational AI assistant embedded in the marketing website. She serves as a knowledgeable, friendly guide who answers questions about Signal Intelligence™, the platform, pricing, and more.

### Key Characteristics
- **Knowledge-Locked**: All responses pull from a canonical knowledge base (no hallucination)
- **Conversational**: Natural, friendly tone with light humor
- **Concise**: 70-word maximum responses with natural flow
- **Safe**: Multiple guardrails prevent loops, off-topic responses, and inappropriate content
- **Professional**: Text-only responses (no emojis, no bold formatting)

---

## System Architecture

### High-Level Flow

```
User Input → Intent Detection → Guardrail Checks → Knowledge Base Lookup → Response Generation → 70-Word Cap → Display
```

### Component Breakdown

1. **Frontend UI Component** (`src/components/AloraAssistant.tsx`)
   - Chat interface (button, messages, input)
   - Message history management
   - User interaction handling

2. **Intent Detection Engine** (within `AloraAssistant.tsx`)
   - Pattern matching on user queries
   - Context tracking for follow-ups
   - Ambiguity detection

3. **Knowledge Base** (within `AloraAssistant.tsx`)
   - Canonical source of truth (`SIGNAL_INTELLIGENCE_KB`)
   - Structured data for all topics
   - No external API calls

4. **Guardrail Systems** (within `AloraAssistant.tsx`)
   - Anti-loop detection
   - Inappropriate content filtering
   - Repeated question tracking
   - Knowledge source lock

5. **Response Generator** (within `AloraAssistant.tsx`)
   - Maps intents to responses
   - Applies 70-word cap
   - Maintains conversational context

---

## File Structure & Roles

### Primary File: `src/components/AloraAssistant.tsx`

**Role:** Single-file implementation of Alora's entire system  
**Size:** ~47KB, ~984 lines  
**Language:** TypeScript + React

#### File Sections (Line Ranges)

| Section | Lines | Purpose |
|---------|-------|----------|
| **Imports & Types** | 1-12 | React hooks, UI components, TypeScript interfaces |
| **Knowledge Base** | 14-280 | `SIGNAL_INTELLIGENCE_KB` - canonical source of truth |
| **AloraAssistant Class** | 282-984 | Main logic: intent detection, guardrails, responses |
| **React Component** | 800-984 | UI rendering, state management, event handlers |

#### Key Methods in AloraAssistant Class

```typescript
class AloraAssistant {
  // GUARDRAIL METHODS
  detectAmbiguousSignal(query: string): boolean          // Lines 334-345
  clarifyingQuestionResponse(): string                   // Lines 347-350
  handleRepeatedAmbiguity(query: string): string | null  // Lines 352-370
  deferResponse(): string                                // Lines 372-375
  hasCanonicalContent(intent: string): boolean           // Lines 377-395
  isRepeatedQuestion(query: string): boolean             // Lines 397-410
  isInappropriateOrOffTopic(query: string): boolean      // Lines 310-332
  
  // CORE LOGIC
  detectIntent(query: string): string                    // Lines 412-630
  generateResponse(intent: string): string               // Lines 632-850
  
  // UTILITY
  truncateResponse(response: string, maxWords: number): string  // Lines 852-880
}
```

### Related Files

#### 1. `src/pages/*.tsx` (All Page Components)
**Role:** Pages that render Alora  
**Alora Usage:** Import and render `<AloraAssistant />` component  
**Example:**
```typescript
import AloraAssistant from '@/components/AloraAssistant';

export default function HomePage() {
  return (
    <div>
      {/* Page content */}
      <AloraAssistant />
    </div>
  );
}
```

**Files that include Alora:**
- `src/pages/index.tsx` (Homepage)
- `src/pages/signal-intelligence.tsx`
- `src/pages/applied-capabilities.tsx`
- `src/pages/ai-coach.tsx`
- `src/pages/role-play.tsx`
- `src/pages/pricing.tsx`
- `src/pages/contact.tsx`
- `src/pages/demo.tsx`
- `src/pages/use-cases.tsx`
- `src/pages/how-it-fits.tsx`
- `src/pages/roi-business-impact.tsx`
- `src/pages/trust-governance.tsx`

#### 2. `src/components/ui/*.tsx` (shadcn UI Components)
**Role:** UI building blocks used by Alora  
**Components Used:**
- `Button` - Chat button, send button
- `Input` - Message input field
- `ScrollArea` - Message history scrolling

#### 3. `public/assets/alora-avatar.jpg` (Custom Avatar)
**Role:** Professional avatar image displayed in chat header  
**Specifications:**
- Circular display (40px × 40px)
- Mature professional woman
- Humanizes the assistant

---

## Knowledge Base

### Structure: `SIGNAL_INTELLIGENCE_KB`

**Location:** Lines 17-280 in `src/components/AloraAssistant.tsx`

```typescript
const SIGNAL_INTELLIGENCE_KB = {
  definitions: {
    signalIntelligence: string,
    threeLayerSystem: string,
    conversationalSignals: string  // ← YOUR RECENT UPDATE
  },
  
  capabilities: {
    signalAwareness: { name, definition, metric, observableBehaviors, relatedDrivers },
    signalInterpretation: { ... },
    valueConnection: { ... },
    customerEngagement: { ... },
    objectionNavigation: { ... },
    conversationManagement: { ... },
    adaptiveResponse: { ... },
    commitmentGeneration: { ... }
  },
  
  humanDrivers: {
    cognitiveEmpathy: { name, description, influences, notMeasured },
    emotionalIntelligence: { ... },
    metacognition: { ... },
    motivation: { ... },
    socialThreat: { ... }
  },
  
  platform: {
    aiCoach: string,
    rolePractice: string,
    dashboard: string
  },
  
  ethics: {
    boundaries: string,
    whatNotMeasured: string,
    practiceOnly: string
  },
  
  useCases: {
    salesReps: string,
    managers: string,
    organizations: string
  },
  
  pricing: {
    model: string,
    tiers: string
  }
}
```

### How to Add New Knowledge

**Example: Adding a new topic "Integrations"**

1. **Add to Knowledge Base:**
```typescript
const SIGNAL_INTELLIGENCE_KB = {
  // ... existing sections ...
  
  integrations: {
    crm: `ReflectivAI integrates with Salesforce, Veeva, and Microsoft Dynamics. 
Setup takes 15 minutes with our guided wizard.`,
    
    lms: `We support SCORM 1.2 and xAPI for LMS integration. 
Progress data syncs automatically.`
  }
}
```

2. **Add Intent Detection:**
```typescript
// In detectIntent() method (around line 500)
if (lowerQuery.match(/integrations|integrate|crm|salesforce|veeva|lms/)) {
  this.conversationContext = 'integrations';
  return 'integrations_crm';
}
```

3. **Add Response:**
```typescript
// In generateResponse() method (around line 700)
case 'integrations_crm':
  return "We integrate with Salesforce, Veeva, and Microsoft Dynamics. Setup takes about 15 minutes with our guided wizard. We also support SCORM 1.2 and xAPI for LMS integration. Want details on a specific platform?";
```

4. **Update Canonical Content Check:**
```typescript
// In hasCanonicalContent() method (around line 380)
const validIntents = [
  // ... existing intents ...
  'integrations_crm',
  'integrations_lms'
];
```

---

## Intent Detection System

### How It Works

**Method:** `detectIntent(query: string): string`  
**Location:** Lines 412-630

**Process:**
1. Normalize query (lowercase, trim)
2. Check guardrails (repeated questions, ambiguity, inappropriate content)
3. Match patterns using regex
4. Return intent string
5. Set conversation context for follow-ups

### Intent Categories

#### 1. Meta Intents (Guardrails)
- `clarification_needed` - Empty or too short
- `repeated_question` - Same question asked 2+ times
- `ambiguous_signal` - "What is a signal?" without context
- `inappropriate_redirect` - Off-topic or inappropriate

#### 2. Greeting & Social
- `greeting` - "Hi", "Hello", "Hey"
- `thanks` - "Thanks", "Thank you"
- `about_alora` - "Who are you?"

#### 3. Signal Intelligence™ Topics
- `si_overview` - "What is Signal Intelligence?"
- `conversational_signals` - "What are signals?" ← YOUR RECENT UPDATE
- `three_layer_system` - "How does it work?"
- `capabilities_overview` - "What are the 8 capabilities?"
- `capability_signal_awareness` - Specific capability
- `capability_signal_interpretation` - Specific capability
- (etc. for all 8 capabilities)

#### 4. Platform Features
- `ai_coach` - "What is AI Coach?"
- `role_practice` - "What is Role Play?"
- `dashboard` - "What's on the dashboard?"

#### 5. Business Topics
- `pricing` - "How much does it cost?"
- `demo_trial` - "Can I try it?"
- `target_audience` - "Who is this for?"
- `time_commitment` - "How long does it take?"

#### 6. Conversational
- `enlighten_me` - "Tell me about ReflectivAI"
- `what_makes_unique` - "What makes you different?"
- `favorite_feature` - "What's the best feature?"

### Pattern Matching Examples

```typescript
// Simple exact match
if (lowerQuery.match(/^(hi|hello|hey)$/)) {
  return 'greeting';
}

// Flexible pattern matching
if (lowerQuery.match(/what makes|why choose|what's different|whats different/)) {
  return 'what_makes_unique';
}

// Context-aware matching
if (lowerQuery.match(/conversational signal|customer signal/) && !lowerQuery.match(/signal intelligence/)) {
  this.conversationContext = 'conversational_signals';
  return 'conversational_signals';
}
```

### Adding New Intent Patterns

**Example: Detect questions about "ROI" or "business impact"**

```typescript
// Add to detectIntent() method around line 550
if (lowerQuery.match(/roi|return on investment|business impact|business value|cost savings|revenue impact/)) {
  this.conversationContext = 'roi';
  return 'roi_overview';
}
```

---

## Response Generation

### How It Works

**Method:** `generateResponse(intent: string): string`  
**Location:** Lines 632-850

**Process:**
1. Check for repeated ambiguity (escalate if needed)
2. Verify canonical content exists (defer if missing)
3. Match intent to response
4. Apply 70-word cap
5. Return response

### Response Structure

**Pattern:** `[Friendly Opening] + [Core Information] + [Follow-up Question]`

**Example:**
```typescript
case 'conversational_signals':
  return "Great question! A signal is an observable change or cue that indicates what matters, what's shifting, or what requires a decision in the moment. Signals are observable (not inferred), contextual, action-relevant, and moment-specific. They're NOT personality traits, sentiment scores, or assumptions about intent. Want to learn how Signal Intelligence™ helps you recognize and respond to these?";
```

**Breakdown:**
- **Friendly Opening:** "Great question!"
- **Core Information:** Definition of signals with key attributes
- **Follow-up Question:** "Want to learn how Signal Intelligence™ helps..."

### Two-Tier Response Strategy

#### Tier 1: Legal/Compliance Topics
**Use exact approved language from knowledge base**

Topics:
- Signal Intelligence™ definitions
- 8 capabilities
- Evaluation metrics
- Trademarked terminology

Example:
```typescript
case 'si_overview':
  // Pull exact text from SIGNAL_INTELLIGENCE_KB.definitions.signalIntelligence
  return "Happy to explain! Signal Intelligence™ is a behavior-based capability framework for professional development in high-stakes conversations. It's non-clinical, non-diagnostic, and focuses only on observable behaviors—never used for employment decisions or live monitoring. Want the deep dive on how it works, or curious about the 8 skills?";
```

#### Tier 2: Conversational Topics
**Warm, friendly, light humor allowed**

Topics:
- General platform questions
- Pricing
- Demos
- Navigation

Example:
```typescript
case 'enlighten_me':
  return "I like your style! ReflectivAI is a training gym for sales conversations. You practice with AI customers in realistic pharma scenarios, get instant feedback from our AI Coach, and build 8 core conversation skills. It's like a flight simulator for sales calls. What part sounds most interesting?";
```

### 70-Word Response Cap

**Method:** `truncateResponse(response: string, maxWords: number): string`  
**Location:** Lines 852-880

**Rules:**
- Maximum ~70 words
- No mid-sentence cutoffs
- Natural completion points
- Follow-up questions included within count
- Friendly sign-offs included

**Implementation:**
```typescript
private truncateResponse(response: string, maxWords: number = 70): string {
  const words = response.split(/\s+/);
  
  if (words.length <= maxWords) {
    return response;
  }
  
  // Find natural break point (sentence ending)
  let truncated = words.slice(0, maxWords).join(' ');
  const lastPeriod = truncated.lastIndexOf('.');
  const lastQuestion = truncated.lastIndexOf('?');
  const lastExclamation = truncated.lastIndexOf('!');
  
  const lastPunctuation = Math.max(lastPeriod, lastQuestion, lastExclamation);
  
  if (lastPunctuation > 0) {
    truncated = truncated.substring(0, lastPunctuation + 1);
  }
  
  return truncated;
}
```

---

## Guardrails & Safety Systems

### 1. Ambiguity Detection

**Purpose:** Detect when "signal" is mentioned without clear context

**Method:** `detectAmbiguousSignal(query: string): boolean`  
**Location:** Lines 334-345

**Logic:**
```typescript
private detectAmbiguousSignal(query: string): boolean {
  const lowerQuery = query.toLowerCase().trim();
  
  // Check if query mentions "signal" but NOT "Signal Intelligence™"
  const hasSignalMention = lowerQuery.includes('signal');
  const hasExplicitSI = lowerQuery.match(/signal intelligence|si framework|signal intelligence™/);
  
  // Ambiguous patterns: "What is a signal?", "Explain signals"
  const isAmbiguousPattern = lowerQuery.match(/^(what is|what's|define|explain|tell me about|what do you mean by|what are|describe).*\bsignal/);
  
  return hasSignalMention && !hasExplicitSI && !!isAmbiguousPattern;
}
```

**Response:**
```typescript
private clarifyingQuestionResponse(): string {
  return "Do you mean a general conversational signal (like body language, tone cues, or customer engagement indicators), or Signal Intelligence™ as used in the ReflectivAI platform?";
}
```

### 2. Anti-Loop Guard

**Purpose:** Prevent infinite loops from repeated questions

**Method:** `isRepeatedQuestion(query: string): boolean`  
**Location:** Lines 397-410

**Logic:**
```typescript
private isRepeatedQuestion(query: string): boolean {
  const normalizedQuery = query.toLowerCase().trim();
  
  // Count occurrences in recent history
  const repetitionCount = this.queryHistory.filter(q => q === normalizedQuery).length;
  
  // Add to history
  this.queryHistory.push(normalizedQuery);
  
  // Keep history manageable (last 20 queries)
  if (this.queryHistory.length > 20) {
    this.queryHistory.shift();
  }
  
  return repetitionCount >= 2;
}
```

**Response:**
```typescript
case 'repeated_question':
  return "I've noticed you've asked this a couple times—want me to explain it differently, or is there a specific part you'd like me to clarify?";
```

### 3. Repeated Ambiguity Escalation

**Purpose:** Escalate clarification after 2 identical ambiguous questions

**Method:** `handleRepeatedAmbiguity(query: string): string | null`  
**Location:** Lines 352-370

**Logic:**
```typescript
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
```

### 4. Knowledge Source Lock

**Purpose:** Prevent hallucination by only answering from canonical KB

**Method:** `hasCanonicalContent(intent: string): boolean`  
**Location:** Lines 377-395

**Logic:**
```typescript
private hasCanonicalContent(intent: string): boolean {
  const validIntents = [
    'si_overview', 'three_layer_system', 'capabilities_overview',
    'capability_signal_awareness', 'capability_signal_interpretation',
    // ... all valid intents ...
  ];
  
  return validIntents.includes(intent);
}
```

**Defer Response:**
```typescript
private deferResponse(): string {
  return "That isn't something I can define without more context. Could you clarify what you're asking about?";
}
```

### 5. Inappropriate Content Filter

**Purpose:** Detect and redirect off-topic or inappropriate questions

**Method:** `isInappropriateOrOffTopic(query: string): boolean`  
**Location:** Lines 310-332

**Categories Detected:**
- Dating/romance
- Politics
- Religion
- Offensive content
- Weather
- Sports
- Movies/entertainment
- Jokes
- Personal life questions

**Logic:**
```typescript
private isInappropriateOrOffTopic(query: string): boolean {
  const lowerQuery = query.toLowerCase().trim();
  
  const offTopicPatterns = [
    // Dating/Romance
    /\b(date|dating|relationship|marry|love|romantic|boyfriend|girlfriend|partner|single)\b/,
    
    // Politics
    /\b(politics|political|election|vote|democrat|republican|president|government policy)\b/,
    
    // Religion
    /\b(religion|religious|god|jesus|allah|buddha|church|mosque|temple|pray|prayer)\b/,
    
    // ... more patterns ...
  ];
  
  return offTopicPatterns.some(pattern => pattern.test(lowerQuery));
}
```

**Redirect Responses (Random Selection):**
```typescript
case 'inappropriate_redirect':
  const redirects = [
    "Ha! I appreciate the creativity, but I'm here to talk about ReflectivAI. Let's get back to the good stuff—what would you like to know about our platform?",
    "You know, that's not really my area of expertise! But I'm great at explaining how ReflectivAI helps sales teams level up their conversation skills. What can I tell you about that?",
    "I see what you did there! But let's keep it professional. I'm here to help you understand Signal Intelligence™, AI coaching, and how we help pharma reps get better at conversations. What interests you?",
    "Interesting question, but that's a bit outside my wheelhouse! I'm all about helping you understand ReflectivAI's training platform. Want to know what makes us different?",
  ];
  return redirects[Math.floor(Math.random() * redirects.length)];
```

---

## Personality & Tone

### Core Personality Traits

1. **Knowledgeable but Approachable**
   - Expert on Signal Intelligence™
   - Explains complex topics simply
   - Never condescending

2. **Conversational & Natural**
   - Uses contractions ("I'm", "you're", "what's")
   - Asks follow-up questions
   - Acknowledges user input ("Great question!", "I like your style!")

3. **Professional but Friendly**
   - No emojis (removed in recent update)
   - No bold formatting (text-only)
   - Light humor when appropriate

4. **Concise & Direct**
   - 70-word maximum
   - Gets to the point quickly
   - No rambling

5. **Helpful & Guiding**
   - Offers next steps
   - Suggests related topics
   - Encourages exploration

### Tone Guidelines by Topic

#### Legal/Compliance Topics (Tier 1)
**Tone:** Professional, precise, exact language

**Examples:**
- Signal Intelligence™ definitions
- Capability descriptions
- Ethical boundaries

**Style:**
```typescript
"Signal Intelligence™ is a behavior-based capability framework for professional development in high-stakes conversations. It's non-clinical, non-diagnostic, and focuses only on observable behaviors—never used for employment decisions or live monitoring."
```

#### Conversational Topics (Tier 2)
**Tone:** Warm, friendly, engaging

**Examples:**
- Platform overview
- Pricing
- Demos
- General questions

**Style:**
```typescript
"I like your style! ReflectivAI is a training gym for sales conversations. You practice with AI customers in realistic pharma scenarios, get instant feedback from our AI Coach, and build 8 core conversation skills. It's like a flight simulator for sales calls."
```

### Voice Characteristics

**DO:**
- Use analogies ("like a flight simulator")
- Ask engaging follow-ups ("What part sounds most interesting?")
- Acknowledge user's question ("Great question!", "Happy to explain!")
- Use natural language ("I'm here to help", "Let's dive in")
- Be encouraging ("Want to see how it works?", "Curious about...?")

**DON'T:**
- Use emojis (removed in recent update)
- Use bold formatting with asterisks
- Be overly formal or robotic
- Use jargon without explanation
- Give long-winded explanations

---

## Making Modifications

### Common Modification Scenarios

#### 1. Update Existing Knowledge

**Scenario:** Your business partner wants to update the definition of "signals"

**Steps:**
1. Locate the knowledge in `SIGNAL_INTELLIGENCE_KB`
2. Update the text
3. Update related response in `generateResponse()`
4. Test with sample queries

**Example (Your Recent Update):**
```typescript
// BEFORE
conversationalSignals: `Conversational signals are observable cues in communication...`

// AFTER
conversationalSignals: `A signal is an observable change or cue in the interaction that indicates what matters, what is shifting, or what requires a decision in the moment. Signals are the moments in an interaction that require judgment.

A signal is:
• Observable (Something said, done, or changed — not inferred intent or emotion)
• Contextual (Its meaning depends on timing, situation, and what preceded it)
• Action-relevant (It invites or requires a decision about how to respond)
• Moment-specific (Signals emerge and fade within live interactions)

What a Signal Is NOT:
• A personality trait
• A sentiment score
• An outcome (e.g., agreement, success)
• A static data point
• An assumption about intent or motivation`
```

#### 2. Add New Topic

**Scenario:** Add information about "Customer Success Stories"

**Steps:**

**Step 1: Add to Knowledge Base**
```typescript
const SIGNAL_INTELLIGENCE_KB = {
  // ... existing sections ...
  
  customerStories: {
    pharma: `Leading pharma companies report 23% increase in win rates and 15% larger deal sizes after 90 days of practice. Reps practice 2-3x per week for 20 minutes.`,
    
    testimonials: `"ReflectivAI transformed how our team approaches stakeholder conversations. The real-time coaching has been invaluable." - Sarah Chen, Senior MSL`
  }
}
```

**Step 2: Add Intent Detection**
```typescript
// In detectIntent() method around line 550
if (lowerQuery.match(/customer stories|success stories|testimonials|case studies|results|outcomes/)) {
  this.conversationContext = 'customer_stories';
  return 'customer_stories';
}
```

**Step 3: Add Response**
```typescript
// In generateResponse() method around line 750
case 'customer_stories':
  return "Great question! Leading pharma companies report 23% increase in win rates and 15% larger deal sizes after 90 days. Reps practice 2-3x per week for 20 minutes. One Senior MSL said: 'ReflectivAI transformed how our team approaches stakeholder conversations.' Want to see specific examples or try a demo?";
```

**Step 4: Update Canonical Content Check**
```typescript
// In hasCanonicalContent() method around line 380
const validIntents = [
  // ... existing intents ...
  'customer_stories'
];
```

#### 3. Adjust Personality/Tone

**Scenario:** Make Alora more formal for enterprise clients

**Steps:**

**Step 1: Update Response Templates**
```typescript
// BEFORE (Casual)
case 'enlighten_me':
  return "I like your style! ReflectivAI is a training gym for sales conversations...";

// AFTER (Formal)
case 'enlighten_me':
  return "Certainly. ReflectivAI is a professional development platform for sales conversations...";
```

**Step 2: Remove Casual Language**
- Replace "I like your style!" with "Certainly."
- Replace "Want to...?" with "Would you like to...?"
- Replace "Let's dive in" with "Let me explain"

**Step 3: Update Greeting**
```typescript
// BEFORE
case 'greeting':
  return "Hey there! I'm Alora...";

// AFTER
case 'greeting':
  return "Hello! I'm Alora, your guide to ReflectivAI...";
```

#### 4. Expand Guardrails

**Scenario:** Add detection for medical/health questions

**Steps:**

**Step 1: Add Pattern to Inappropriate Filter**
```typescript
// In isInappropriateOrOffTopic() method around line 320
const offTopicPatterns = [
  // ... existing patterns ...
  
  // Medical/Health
  /\b(medical advice|health advice|diagnosis|symptoms|treatment|medication|doctor|hospital|disease|illness)\b/,
];
```

**Step 2: Add Specific Redirect (Optional)**
```typescript
// In generateResponse() method
case 'inappropriate_redirect':
  // Check if medical question
  if (query.match(/medical|health|diagnosis|symptoms/)) {
    return "I'm not qualified to provide medical or health advice. I focus on helping you understand ReflectivAI's training platform for sales professionals. What would you like to know about our platform?";
  }
  
  // Default redirects
  const redirects = [...];
  return redirects[Math.floor(Math.random() * redirects.length)];
```

#### 5. Adjust Word Count Cap

**Scenario:** Increase from 70 to 100 words

**Steps:**

**Step 1: Update Truncation Call**
```typescript
// In generateResponse() method around line 845
const finalResponse = this.truncateResponse(response, 100); // Changed from 70
return finalResponse;
```

**Step 2: Update Documentation**
- Update this guide
- Update conversation summary
- Update any comments in code

---

## Testing & Validation

### Manual Testing Checklist

#### 1. Knowledge Accuracy
- [ ] Ask about Signal Intelligence™ definition
- [ ] Ask about each of the 8 capabilities
- [ ] Ask about pricing
- [ ] Ask about platform features (AI Coach, Role Play, Dashboard)
- [ ] Verify responses match knowledge base exactly

#### 2. Intent Detection
- [ ] Test ambiguous "signal" questions ("What is a signal?")
- [ ] Test explicit Signal Intelligence™ questions
- [ ] Test greetings and thanks
- [ ] Test inappropriate/off-topic questions
- [ ] Test repeated questions (same question 3 times)

#### 3. Guardrails
- [ ] Verify ambiguity detection triggers clarifying question
- [ ] Verify repeated question detection after 2 identical queries
- [ ] Verify inappropriate content redirects gracefully
- [ ] Verify knowledge source lock defers when content missing
- [ ] Verify escalation after 2 identical ambiguous questions

#### 4. Response Quality
- [ ] Verify 70-word cap (no mid-sentence cutoffs)
- [ ] Verify natural, conversational tone
- [ ] Verify no emojis or bold formatting
- [ ] Verify follow-up questions included
- [ ] Verify friendly openings ("Great question!", etc.)

#### 5. UI/UX
- [ ] Chat button displays correctly (48px circle)
- [ ] Avatar displays in chat header
- [ ] Messages scroll properly
- [ ] Input field accepts text
- [ ] Send button works
- [ ] Chat opens/closes smoothly

### Test Queries

#### Basic Functionality
```
1. "Hi"
2. "What is ReflectivAI?"
3. "Tell me about Signal Intelligence"
4. "What are the 8 capabilities?"
5. "How much does it cost?"
```

#### Ambiguity Detection
```
1. "What is a signal?"
   Expected: Clarifying question
   
2. "What is a signal?" (repeat)
   Expected: Escalated clarification
   
3. "What is Signal Intelligence?"
   Expected: Full definition
```

#### Inappropriate Content
```
1. "What's the weather like?"
   Expected: Friendly redirect
   
2. "Tell me a joke"
   Expected: Friendly redirect
   
3. "What's your favorite movie?"
   Expected: Friendly redirect
```

#### Repeated Questions
```
1. "What is AI Coach?"
2. "What is AI Coach?" (repeat)
3. "What is AI Coach?" (repeat again)
   Expected: "I've noticed you've asked this a couple times..."
```

#### Knowledge Source Lock
```
1. "What is quantum computing?"
   Expected: "That isn't something I can define without more context..."
```

### Automated Testing (Future Enhancement)

**Recommended Framework:** Jest + React Testing Library

**Example Test:**
```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import AloraAssistant from '@/components/AloraAssistant';

describe('AloraAssistant', () => {
  test('detects ambiguous signal question', () => {
    render(<AloraAssistant />);
    
    const input = screen.getByPlaceholderText('Ask me anything...');
    const sendButton = screen.getByRole('button', { name: /send/i });
    
    fireEvent.change(input, { target: { value: 'What is a signal?' } });
    fireEvent.click(sendButton);
    
    expect(screen.getByText(/Do you mean a general conversational signal/)).toBeInTheDocument();
  });
  
  test('provides Signal Intelligence definition', () => {
    render(<AloraAssistant />);
    
    const input = screen.getByPlaceholderText('Ask me anything...');
    const sendButton = screen.getByRole('button', { name: /send/i });
    
    fireEvent.change(input, { target: { value: 'What is Signal Intelligence?' } });
    fireEvent.click(sendButton);
    
    expect(screen.getByText(/behavior-based capability framework/)).toBeInTheDocument();
  });
});
```

---

## Appendix: Quick Reference

### File Locations

| Component | File Path | Lines |
|-----------|-----------|-------|
| Main Component | `src/components/AloraAssistant.tsx` | 1-984 |
| Knowledge Base | `src/components/AloraAssistant.tsx` | 17-280 |
| Intent Detection | `src/components/AloraAssistant.tsx` | 412-630 |
| Response Generation | `src/components/AloraAssistant.tsx` | 632-850 |
| Guardrails | `src/components/AloraAssistant.tsx` | 310-410 |
| Avatar Image | `public/assets/alora-avatar.jpg` | N/A |

### Key Constants

```typescript
const MAX_RESPONSE_WORDS = 70;
const QUERY_HISTORY_LIMIT = 20;
const REPEATED_QUESTION_THRESHOLD = 2;
const AMBIGUOUS_QUESTION_THRESHOLD = 2;
```

### State Variables

```typescript
interface AloraState {
  isOpen: boolean;                    // Chat window open/closed
  messages: Message[];                // Message history
  inputValue: string;                 // Current input text
  conversationContext: string | null; // Current topic context
  queryHistory: string[];             // Last 20 queries
  lastAmbiguousQuery: string | null;  // Last ambiguous question
  ambiguousQuestionCount: number;     // Count of repeated ambiguous questions
}
```

### Common Patterns

#### Adding Knowledge
```typescript
1. Update SIGNAL_INTELLIGENCE_KB
2. Add intent detection pattern
3. Add response in generateResponse()
4. Update hasCanonicalContent()
5. Test with sample queries
```

#### Adding Guardrail
```typescript
1. Create detection method
2. Add check in detectIntent()
3. Add response in generateResponse()
4. Test edge cases
```

#### Adjusting Tone
```typescript
1. Update response templates in generateResponse()
2. Update greeting/thanks responses
3. Update redirect responses
4. Test consistency across all responses
```

---

## Version History

### Version 2.0 (January 14, 2026)
- Added comprehensive "signals" definition to knowledge base
- Updated conversational_signals response
- Enhanced ambiguity detection
- Added anti-loop guards
- Implemented 70-word response cap
- Removed emojis and bold formatting
- Added professional avatar
- Redesigned chat button (48px circle)

### Version 1.0 (Initial Release)
- Basic knowledge base
- Intent detection system
- Response generation
- Simple guardrails

---

## Support & Maintenance

### When to Update Alora

1. **Business Partner Requests** (like your recent update)
   - New definitions or terminology
   - Updated product information
   - Pricing changes

2. **User Feedback**
   - Common questions not answered
   - Confusing responses
   - Missing topics

3. **Product Changes**
   - New features launched
   - Platform updates
   - New integrations

4. **Compliance Requirements**
   - Legal language updates
   - Regulatory changes
   - Trademark updates

### Maintenance Checklist (Monthly)

- [ ] Review conversation logs (if implemented)
- [ ] Check for unanswered questions
- [ ] Verify knowledge base accuracy
- [ ] Test all guardrails
- [ ] Update outdated information
- [ ] Review tone consistency

---

**End of Guide**

For questions or updates to this guide, contact the development team.
