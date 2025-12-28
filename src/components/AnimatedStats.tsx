'use client';

import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Users, Award, Target } from 'lucide-react';

interface Stat {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  color: string;
}

const stats: Stat[] = [
  {
    icon: <Target className="h-8 w-8" />,
    value: 94,
    suffix: '%',
    label: 'Accuracy Rate',
    color: 'text-accent'
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    value: 88,
    suffix: '%',
    label: 'Empathy Score',
    color: 'text-primary'
  },
  {
    icon: <Award className="h-8 w-8" />,
    value: 100,
    suffix: '%',
    label: 'Compliance',
    color: 'text-accent'
  },
  {
    icon: <Users className="h-8 w-8" />,
    value: 8.5,
    suffix: '/10',
    label: 'User Satisfaction',
    color: 'text-primary'
  }
];

function useCountUp(end: number, duration: number = 2000, isVisible: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end * 10) / 10);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);

  return count;
}

function StatCard({ stat, index }: { stat: Stat; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(stat.value, 2000, isVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Card
      ref={ref}
      className="border-2 hover:border-accent transition-all duration-300 hover:shadow-lg"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardContent className="p-6 text-center">
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4 ${stat.color}`}>
          {stat.icon}
        </div>
        <div className="text-4xl font-bold mb-2">
          {count.toFixed(stat.suffix === '/10' ? 1 : 0)}{stat.suffix}
        </div>
        <p className="text-muted-foreground font-medium">{stat.label}</p>
      </CardContent>
    </Card>
  );
}

export function AnimatedStats() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Proven Results</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real metrics from life sciences sales professionals using ReflectivAI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
