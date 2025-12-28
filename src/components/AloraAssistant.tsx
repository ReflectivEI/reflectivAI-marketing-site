'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'alora';
  timestamp: Date;
}

const ALORA_RESPONSES: Record<string, string> = {
  default: "Hi! I'm Alora, your ReflectivAI assistant. I can help you learn about our platform, features, and how we can transform your sales enablement. What would you like to know?",
  greeting: "Hello! I'm Alora. I'm here to help you discover how ReflectivAI can elevate your life sciences sales team with AI-powered coaching and emotional intelligence training.",
  features: "ReflectivAI offers several powerful features: AI Coach for personalized feedback, Role Play Simulator with 9+ pharma scenarios, 8 Signal Intelligence capabilities (Accuracy, Empathy, Clarity, Compliance, Discovery, Objection Handling, Active Listening, Emotional Adaptability), and comprehensive EI Metrics tracking. Which would you like to explore?",
  'ai coach': "Our AI Coach provides real-time, personalized coaching across 10 EI dimensions. It analyzes your conversations, identifies areas for improvement, and offers actionable feedback to help you build stronger stakeholder relationships. Would you like to see how it works?",
  'role play': "The Role Play Simulator lets you practice with realistic pharma scenarios across HIV, Oncology, Cardiology, Vaccines, COVID, and Rare Disease. You'll receive instant feedback on your emotional intelligence and sales techniques. Ready to try it?",
  metrics: "We track 8 core Signal Intelligence capabilities: Accuracy (94%), Empathy (88%), Clarity, Compliance (100%), Discovery, Objection Handling, Active Listening, and Emotional Adaptability. Each metric helps you understand and improve your stakeholder interactions.",
  pricing: "I'd be happy to discuss pricing options tailored to your team's needs. Would you like to schedule a demo with our sales team to explore the best plan for you?",
  demo: "Great! I can help you schedule a personalized demo. Our team will show you the platform in action and answer all your questions. Would you like me to connect you with our sales team?",
  compliance: "Compliance is built into our DNA. We maintain 100% regulatory compliance, with every interaction validated by human experts. Your conversations are always ethical, evidence-based, and aligned with industry standards.",
  'how it works': "ReflectivAI combines AI-powered role-play scenarios with real-time emotional intelligence coaching. You practice conversations, receive instant feedback on 8 key capabilities, and build skills through structured modules. It's like having a personal coach available 24/7!",
  integration: "ReflectivAI integrates seamlessly with your existing CRM and sales tools. We support Salesforce, HubSpot, and other major platforms. Our API makes it easy to embed coaching insights directly into your workflow.",
  results: "Our customers see measurable results: 94% accuracy in stakeholder interactions, 88% empathy scores, and 100% compliance. Teams report improved confidence, better relationships with HCPs, and faster onboarding for new reps.",
  team: "ReflectivAI is perfect for teams of all sizes. Whether you have 5 reps or 500, our platform scales to meet your needs. We offer team dashboards, manager insights, and collaborative learning features.",
  support: "We provide 24/7 support via chat, email, and phone. Plus, you'll have a dedicated customer success manager to help you get the most out of ReflectivAI. We're here to ensure your success!",
  security: "Security is our top priority. We use enterprise-grade encryption, SOC 2 compliance, and regular security audits. Your data is safe, private, and never shared with third parties.",
  training: "Getting started is easy! We provide comprehensive onboarding, training sessions for your team, and ongoing resources. Most teams are up and running within a week.",
  pharma: "ReflectivAI is purpose-built for life sciences. We understand the unique challenges of pharma sales—complex products, regulatory requirements, and sophisticated stakeholders. Our scenarios reflect real-world pharma interactions.",
  ei: "Emotional Intelligence (EI) is the foundation of effective stakeholder engagement. We measure 10 EI dimensions including empathy, active listening, adaptability, and self-awareness. These skills are proven to drive better outcomes in pharma sales.",
  comparison: "Compared to traditional training, ReflectivAI offers personalized, on-demand coaching that adapts to each rep's needs. Unlike generic e-learning, our AI provides real-time feedback on actual conversations. We're more affordable than hiring coaches and more effective than classroom training.",
  industries: "While we specialize in life sciences and pharma, our platform works for any B2B sales team that values relationship-building and emotional intelligence. We've seen success in medical devices, biotech, and healthcare services.",
  time: "Most reps spend 15-30 minutes per day on ReflectivAI. You can practice scenarios during downtime, review coaching insights between meetings, or use it for pre-call preparation. It fits seamlessly into your existing workflow.",
  mobile: "Yes! ReflectivAI works on desktop, tablet, and mobile. Practice role-plays on your phone, review coaching insights on your tablet, or access the full dashboard on your computer. Your progress syncs across all devices.",
};

// Semantic keyword groups for intelligent matching
const KEYWORD_GROUPS = {
  greeting: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening', 'howdy', 'sup', 'yo'],
  features: ['features', 'capabilities', 'what can you do', 'what does reflectivai', 'tell me about reflectivai', 'what is reflectivai', 'show me', 'offerings', 'provides', 'includes'],
  aiCoach: ['coach', 'coaching', 'feedback', 'personalized', 'guidance', 'mentor', 'advisor', 'improve', 'better', 'enhance'],
  rolePlay: ['role play', 'roleplay', 'simulator', 'simulation', 'practice', 'scenario', 'training', 'rehearse', 'mock', 'exercise'],
  metrics: ['metric', 'track', 'measure', 'analytics', 'performance', 'score', 'accuracy', 'empathy', 'data', 'insight', 'report', 'dashboard'],
  pricing: ['price', 'pricing', 'cost', 'plan', 'subscription', 'pay', 'afford', 'budget', 'expensive', 'cheap', 'fee', 'charge'],
  demo: ['demo', 'trial', 'try', 'test', 'see it', 'show', 'preview', 'example', 'sample', 'watch'],
  compliance: ['compliance', 'compliant', 'regulation', 'regulatory', 'ethical', 'ethics', 'legal', 'rule', 'standard', 'guideline'],
  howItWorks: ['how', 'work', 'explain', 'understand', 'learn', 'process', 'function', 'operate', 'mechanism'],
  integration: ['integrat', 'crm', 'salesforce', 'hubspot', 'api', 'connect', 'sync', 'link', 'plug', 'compatible'],
  results: ['result', 'roi', 'outcome', 'success', 'impact', 'improve', 'benefit', 'advantage', 'gain', 'achieve', 'win'],
  team: ['team', 'group', 'organization', 'scale', 'size', 'company', 'department', 'staff', 'employee', 'member'],
  support: ['support', 'help', 'assist', 'question', 'issue', 'problem', 'contact', 'service', 'customer'],
  security: ['security', 'secure', 'safe', 'privacy', 'private', 'data', 'encrypt', 'protection', 'confidential', 'gdpr', 'hipaa'],
  training: ['train', 'onboard', 'start', 'begin', 'setup', 'implement', 'launch', 'install', 'deploy', 'activate'],
  pharma: ['pharma', 'pharmaceutical', 'life science', 'healthcare', 'medical', 'drug', 'hcp', 'doctor', 'physician', 'hospital'],
  ei: ['emotional intelligence', 'ei', 'eq', 'empathy', 'emotion', 'feeling', 'relationship', 'soft skill', 'interpersonal'],
  comparison: ['compare', 'comparison', 'versus', 'vs', 'alternative', 'competitor', 'different', 'better than', 'instead of'],
  industries: ['industry', 'sector', 'vertical', 'market', 'field', 'domain', 'business', 'b2b', 'b2c'],
  time: ['time', 'long', 'duration', 'minutes', 'hours', 'daily', 'weekly', 'commitment', 'invest'],
  mobile: ['mobile', 'phone', 'app', 'ios', 'android', 'tablet', 'ipad', 'device', 'portable'],
};

// Calculate semantic similarity score with improved word-boundary matching
function calculateSimilarity(message: string, keywords: string[]): number {
  const messageLower = message.toLowerCase().trim();
  const words = messageLower.split(/\s+/);
  let score = 0;
  
  for (const keyword of keywords) {
    const keywordLower = keyword.toLowerCase();
    
    // Exact phrase match with word boundaries (highest priority)
    const escapedKeyword = keywordLower.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`\\b${escapedKeyword}\\b`);
    
    if (regex.test(messageLower)) {
      score += 20; // Exact phrase match
    }
    // Substring match (lower priority)
    else if (messageLower.includes(keywordLower)) {
      score += 10;
    }
    // Individual word match
    else if (words.some(word => word === keywordLower || word.startsWith(keywordLower))) {
      score += 5;
    }
    // Partial word match (only for longer keywords)
    else if (keywordLower.length > 5) {
      const keywordStart = keywordLower.slice(0, 5);
      if (words.some(word => word.includes(keywordStart))) {
        score += 2;
      }
    }
  }
  
  return score;
}

// Intelligent response selection using semantic matching
function getAloraResponse(userMessage: string): string {
  const message = userMessage.toLowerCase().trim();
  
  // Empty or very short messages
  if (message.length < 2) {
    return ALORA_RESPONSES.default;
  }
  
  // Calculate scores for each category
  const scores: Record<string, number> = {};
  
  scores.greeting = calculateSimilarity(message, KEYWORD_GROUPS.greeting);
  scores.features = calculateSimilarity(message, KEYWORD_GROUPS.features);
  scores.aiCoach = calculateSimilarity(message, KEYWORD_GROUPS.aiCoach);
  scores.rolePlay = calculateSimilarity(message, KEYWORD_GROUPS.rolePlay);
  scores.metrics = calculateSimilarity(message, KEYWORD_GROUPS.metrics);
  scores.pricing = calculateSimilarity(message, KEYWORD_GROUPS.pricing);
  scores.demo = calculateSimilarity(message, KEYWORD_GROUPS.demo);
  scores.compliance = calculateSimilarity(message, KEYWORD_GROUPS.compliance);
  scores.howItWorks = calculateSimilarity(message, KEYWORD_GROUPS.howItWorks);
  scores.integration = calculateSimilarity(message, KEYWORD_GROUPS.integration);
  scores.results = calculateSimilarity(message, KEYWORD_GROUPS.results);
  scores.team = calculateSimilarity(message, KEYWORD_GROUPS.team);
  scores.support = calculateSimilarity(message, KEYWORD_GROUPS.support);
  scores.security = calculateSimilarity(message, KEYWORD_GROUPS.security);
  scores.training = calculateSimilarity(message, KEYWORD_GROUPS.training);
  scores.pharma = calculateSimilarity(message, KEYWORD_GROUPS.pharma);
  scores.ei = calculateSimilarity(message, KEYWORD_GROUPS.ei);
  scores.comparison = calculateSimilarity(message, KEYWORD_GROUPS.comparison);
  scores.industries = calculateSimilarity(message, KEYWORD_GROUPS.industries);
  scores.time = calculateSimilarity(message, KEYWORD_GROUPS.time);
  scores.mobile = calculateSimilarity(message, KEYWORD_GROUPS.mobile);
  
  // Find highest scoring category
  let maxScore = 0;
  let bestCategory = 'default';
  
  for (const [category, score] of Object.entries(scores)) {
    if (score > maxScore) {
      maxScore = score;
      bestCategory = category;
    }
  }
  
  // If no good match found (score too low), provide helpful fallback
  if (maxScore < 8) {
    return "That's an interesting question! I want to make sure I give you the best answer. Could you tell me more about what you're looking for? Are you interested in our features, pricing, how it works, or something else? I'm here to help!";
  }
  
  // Map category to response
  const categoryMap: Record<string, string> = {
    greeting: 'greeting',
    features: 'features',
    aiCoach: 'ai coach',
    rolePlay: 'role play',
    metrics: 'metrics',
    pricing: 'pricing',
    demo: 'demo',
    compliance: 'compliance',
    howItWorks: 'how it works',
    integration: 'integration',
    results: 'results',
    team: 'team',
    support: 'support',
    security: 'security',
    training: 'training',
    pharma: 'pharma',
    ei: 'ei',
    comparison: 'comparison',
    industries: 'industries',
    time: 'time',
    mobile: 'mobile',
  };
  
  return ALORA_RESPONSES[categoryMap[bestCategory]] || ALORA_RESPONSES.default;
}

export function AloraAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: ALORA_RESPONSES.default,
      sender: 'alora',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aloraMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getAloraResponse(inputValue),
        sender: 'alora',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aloraMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all z-50 bg-accent hover:bg-accent/90"
          aria-label="Open Alora Assistant"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-card border border-border rounded-lg shadow-2xl flex flex-col z-50 animate-in slide-in-from-bottom-4">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-primary text-primary-foreground rounded-t-lg">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10 bg-accent">
                <AvatarFallback className="bg-accent text-accent-foreground">
                  <Sparkles className="h-5 w-5" />
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">Alora</h3>
                <p className="text-xs opacity-90">AI Assistant</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground hover:bg-primary/90"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4" ref={scrollRef}>
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${
                    message.sender === 'alora' ? 'justify-start' : 'justify-end'
                  }`}
                >
                  {message.sender === 'alora' && (
                    <Avatar className="h-8 w-8 bg-accent flex-shrink-0">
                      <AvatarFallback className="bg-accent text-accent-foreground">
                        <Sparkles className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.sender === 'alora'
                        ? 'bg-muted text-foreground'
                        : 'bg-primary text-primary-foreground'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                  {message.sender === 'user' && (
                    <Avatar className="h-8 w-8 bg-primary flex-shrink-0">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        U
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-3 justify-start">
                  <Avatar className="h-8 w-8 bg-accent flex-shrink-0">
                    <AvatarFallback className="bg-accent text-accent-foreground">
                      <Sparkles className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="bg-muted text-foreground rounded-lg p-3">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <div className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce [animation-delay:0.4s]" />
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
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1"
              />
              <Button
                onClick={handleSend}
                size="icon"
                disabled={!inputValue.trim()}
                className="bg-accent hover:bg-accent/90"
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
