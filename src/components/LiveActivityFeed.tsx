'use client';

import { useState, useEffect } from 'react';
import { Trophy, Star, TrendingUp, CheckCircle, Zap, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface Activity {
  id: string;
  user: string;
  action: string;
  timestamp: Date;
  icon: React.ReactNode;
  color: string;
}

const ACTIVITY_TEMPLATES = [
  { action: 'completed a role-play scenario', icon: <CheckCircle className="h-4 w-4" />, color: 'text-green-500' },
  { action: 'achieved 95% empathy score', icon: <Star className="h-4 w-4" />, color: 'text-yellow-500' },
  { action: 'improved accuracy by 12%', icon: <TrendingUp className="h-4 w-4" />, color: 'text-blue-500' },
  { action: 'earned Compliance Master badge', icon: <Trophy className="h-4 w-4" />, color: 'text-purple-500' },
  { action: 'completed 10 coaching sessions', icon: <Zap className="h-4 w-4" />, color: 'text-orange-500' },
  { action: 'joined the platform', icon: <Users className="h-4 w-4" />, color: 'text-teal-500' },
];

const NAMES = [
  'Sarah Chen', 'Michael Rodriguez', 'Emily Watson', 'David Kim', 'Jessica Martinez',
  'James Thompson', 'Maria Garcia', 'Robert Lee', 'Amanda Johnson', 'Christopher Brown',
  'Lisa Anderson', 'Daniel Wilson', 'Jennifer Taylor', 'Matthew Davis', 'Ashley Moore',
];

function generateActivity(): Activity {
  const template = ACTIVITY_TEMPLATES[Math.floor(Math.random() * ACTIVITY_TEMPLATES.length)];
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  
  return {
    id: Date.now().toString() + Math.random(),
    user: name,
    action: template.action,
    timestamp: new Date(),
    icon: template.icon,
    color: template.color,
  };
}

export function LiveActivityFeed() {
  const [activities, setActivities] = useState<Activity[]>(() => [
    generateActivity(),
    generateActivity(),
    generateActivity(),
    generateActivity(),
    generateActivity(),
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivities((prev) => {
        const newActivity = generateActivity();
        return [newActivity, ...prev.slice(0, 9)]; // Keep only 10 most recent
      });
    }, 5000); // New activity every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  const getTimeAgo = (timestamp: Date) => {
    const seconds = Math.floor((new Date().getTime() - timestamp.getTime()) / 1000);
    if (seconds < 60) return 'just now';
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    return `${hours}h ago`;
  };

  return (
    <div className="w-full py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Live Activity Feed</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See what sales professionals are achieving right now on ReflectivAI. Join thousands of users improving their skills every day.
          </p>
        </div>

        <Card className="max-w-3xl mx-auto p-6 border-2">
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div
                key={activity.id}
                className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-all duration-300 animate-in fade-in slide-in-from-top-2"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Avatar className="h-10 w-10 bg-primary">
                  <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                    {getInitials(activity.user)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm">
                      <span className="font-semibold">{activity.user}</span>
                      <span className="text-muted-foreground"> {activity.action}</span>
                    </p>
                    <span className={`flex-shrink-0 ${activity.color}`}>
                      {activity.icon}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {getTimeAgo(activity.timestamp)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Live indicator */}
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <div className="relative">
              <div className="h-2 w-2 bg-green-500 rounded-full animate-ping absolute" />
              <div className="h-2 w-2 bg-green-500 rounded-full" />
            </div>
            <span>Live updates</span>
          </div>
        </Card>
      </div>
    </div>
  );
}
