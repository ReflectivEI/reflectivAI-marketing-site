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
};

function getAloraResponse(userMessage: string): string {
  const message = userMessage.toLowerCase();
  
  if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
    return ALORA_RESPONSES.greeting;
  }
  if (message.includes('feature') || message.includes('what can') || message.includes('capabilities')) {
    return ALORA_RESPONSES.features;
  }
  if (message.includes('ai coach') || message.includes('coaching')) {
    return ALORA_RESPONSES['ai coach'];
  }
  if (message.includes('role play') || message.includes('simulator') || message.includes('practice')) {
    return ALORA_RESPONSES['role play'];
  }
  if (message.includes('metric') || message.includes('track') || message.includes('measure')) {
    return ALORA_RESPONSES.metrics;
  }
  if (message.includes('price') || message.includes('cost') || message.includes('pricing')) {
    return ALORA_RESPONSES.pricing;
  }
  if (message.includes('demo') || message.includes('trial') || message.includes('try')) {
    return ALORA_RESPONSES.demo;
  }
  if (message.includes('compliance') || message.includes('regulation') || message.includes('ethical')) {
    return ALORA_RESPONSES.compliance;
  }
  if (message.includes('how') || message.includes('work') || message.includes('explain')) {
    return ALORA_RESPONSES['how it works'];
  }
  
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
