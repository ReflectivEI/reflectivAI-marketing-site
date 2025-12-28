'use client';

import { useState, useEffect } from 'react';
import { Building2, Calendar, Trophy, TrendingUp } from 'lucide-react';

interface ProofItem {
  id: string;
  icon: React.ReactNode;
  text: string;
  color: string;
}

const PROOF_ITEMS: ProofItem[] = [
  {
    id: '1',
    icon: <Building2 className="h-4 w-4" />,
    text: 'Pfizer just joined ReflectivAI',
    color: 'text-blue-500',
  },
  {
    id: '2',
    icon: <Calendar className="h-4 w-4" />,
    text: '23 demos scheduled this week',
    color: 'text-green-500',
  },
  {
    id: '3',
    icon: <Trophy className="h-4 w-4" />,
    text: 'Johnson & Johnson renewed for 3 years',
    color: 'text-purple-500',
  },
  {
    id: '4',
    icon: <TrendingUp className="h-4 w-4" />,
    text: '1,247 active users this month',
    color: 'text-orange-500',
  },
  {
    id: '5',
    icon: <Building2 className="h-4 w-4" />,
    text: 'Novartis expanded to 500 seats',
    color: 'text-teal-500',
  },
  {
    id: '6',
    icon: <Calendar className="h-4 w-4" />,
    text: '15 new teams onboarded this month',
    color: 'text-pink-500',
  },
  {
    id: '7',
    icon: <Trophy className="h-4 w-4" />,
    text: 'Merck achieved 95% team adoption',
    color: 'text-yellow-500',
  },
  {
    id: '8',
    icon: <TrendingUp className="h-4 w-4" />,
    text: '2.4M practice sessions completed',
    color: 'text-indigo-500',
  },
];

export function SocialProofTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % PROOF_ITEMS.length);
        setIsVisible(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentItem = PROOF_ITEMS[currentIndex];

  return (
    <div className="w-full bg-accent/10 border-y border-accent/20 py-3 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3">
          <div
            className={`flex items-center gap-2 transition-all duration-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
            }`}
          >
            <span className={currentItem.color}>{currentItem.icon}</span>
            <span className="text-sm font-medium text-foreground">{currentItem.text}</span>
          </div>
          <div className="flex gap-1 ml-4">
            {PROOF_ITEMS.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-6 bg-accent'
                    : 'w-1.5 bg-accent/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
