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
  unknown: "That's a great question! I want to make sure I give you the most accurate information. Could you rephrase that, or would you like to speak with our sales team directly? I can help you schedule a call.",
};

function getAloraResponse(userMessage: string): string {
  const message = userMessage.toLowerCase().trim();
  
  // Greeting patterns
  if (/\b(hello|hi|hey|greetings|good morning|good afternoon)\b/.test(message)) {
    return ALORA_RESPONSES.greeting;
  }
  
  // Features and capabilities
  if (/\b(feature|capability|what can|what do|what does|tell me about)\b/.test(message)) {
    return ALORA_RESPONSES.features;
  }
  
  // AI Coach
  if (/\b(ai coach|coaching|coach|feedback|personalized)\b/.test(message)) {
    return ALORA_RESPONSES['ai coach'];
  }
  
  // Role Play
  if (/\b(role.?play|simulator|simulation|practice|scenario|training)\b/.test(message)) {
    return ALORA_RESPONSES['role play'];
  }
  
  // Metrics and tracking
  if (/\b(metric|track|measure|analytics|performance|score|accuracy|empathy)\b/.test(message)) {
    return ALORA_RESPONSES.metrics;
  }
  
  // Pricing
  if (/\b(price|pricing|cost|plan|subscription|pay|afford)\b/.test(message)) {
    return ALORA_RESPONSES.pricing;
  }
  
  // Demo and trial
  if (/\b(demo|trial|try|test|see it|show me)\b/.test(message)) {
    return ALORA_RESPONSES.demo;
  }
  
  // Compliance
  if (/\b(compliance|compliant|regulation|regulatory|ethical|ethics|legal)\b/.test(message)) {
    return ALORA_RESPONSES.compliance;
  }
  
  // How it works
  if (/\b(how|work|explain|understand|learn|process)\b/.test(message) && message.length > 10) {
    return ALORA_RESPONSES['how it works'];
  }
  
  // Integration
  if (/\b(integrat|crm|salesforce|hubspot|api|connect|sync)\b/.test(message)) {
    return ALORA_RESPONSES.integration;
  }
  
  // Results and ROI
  if (/\b(result|roi|outcome|success|impact|improve|benefit)\b/.test(message)) {
    return ALORA_RESPONSES.results;
  }
  
  // Team and scaling
  if (/\b(team|group|organization|scale|size|company)\b/.test(message)) {
    return ALORA_RESPONSES.team;
  }
  
  // Support
  if (/\b(support|help|assist|question|issue|problem|contact)\b/.test(message)) {
    return ALORA_RESPONSES.support;
  }
  
  // Security
  if (/\b(security|secure|safe|privacy|private|data|encrypt|protection)\b/.test(message)) {
    return ALORA_RESPONSES.security;
  }
  
  // Training and onboarding
  if (/\b(train|onboard|start|begin|setup|implement|launch)\b/.test(message)) {
    return ALORA_RESPONSES.training;
  }
  
  // Pharma specific
  if (/\b(pharma|pharmaceutical|life science|healthcare|medical|drug|hcp)\b/.test(message)) {
    return ALORA_RESPONSES.pharma;
  }
  
  // Emotional Intelligence
  if (/\b(emotional intelligence|ei|eq|empathy|emotion|feeling|relationship)\b/.test(message)) {
    return ALORA_RESPONSES.ei;
  }
  
  // If no match and message is substantial, return unknown response
  if (message.length > 5) {
    return ALORA_RESPONSES.unknown;
  }
  
  // Very short messages get default
  return ALORA_RESPONSES.default;
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
              className="text-primary-foreground hover:bg-primary-foreground/20"
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
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.sender === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-foreground'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
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
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
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
                placeholder="Ask Alora anything..."
                className="flex-1"
              />
              <Button onClick={handleSend} size="icon" className="bg-accent hover:bg-accent/90">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
