'use client';

import { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Users, Target, Award, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Metric {
  id: string;
  label: string;
  value: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
  trendValue: number;
  icon: React.ReactNode;
  color: string;
}

export function LiveMetricsDashboard() {
  const [metrics, setMetrics] = useState<Metric[]>([
    {
      id: 'accuracy',
      label: 'Accuracy Score',
      value: 94,
      unit: '%',
      trend: 'up',
      trendValue: 2.3,
      icon: <Target className="h-5 w-5" />,
      color: 'text-green-500',
    },
    {
      id: 'engagement',
      label: 'Customer Engagement',
      value: 88,
      unit: '%',
      trend: 'up',
      trendValue: 5.1,
      icon: <Award className="h-5 w-5" />,
      color: 'text-blue-500',
    },
    {
      id: 'active-users',
      label: 'Active Users',
      value: 1247,
      unit: '',
      trend: 'up',
      trendValue: 12.5,
      icon: <Users className="h-5 w-5" />,
      color: 'text-purple-500',
    },
    {
      id: 'engagement',
      label: 'Engagement Rate',
      value: 92,
      unit: '%',
      trend: 'up',
      trendValue: 3.7,
      icon: <Zap className="h-5 w-5" />,
      color: 'text-yellow-500',
    },
  ]);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prevMetrics) =>
        prevMetrics.map((metric) => {
          // Random fluctuation between -2 and +2
          const change = (Math.random() - 0.5) * 4;
          let newValue = metric.value + change;

          // Keep values within reasonable bounds
          if (metric.unit === '%') {
            newValue = Math.max(75, Math.min(100, newValue));
          } else {
            newValue = Math.max(1000, Math.min(2000, newValue));
          }

          // Update trend
          const newTrend = change > 0.5 ? 'up' : change < -0.5 ? 'down' : 'stable';
          const newTrendValue = Math.abs(change);

          return {
            ...metric,
            value: Math.round(newValue * 10) / 10,
            trend: newTrend,
            trendValue: Math.round(newTrendValue * 10) / 10,
          };
        })
      );
    }, 3000); // Update every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Live Platform Metrics</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-time performance data from our platform. Watch as thousands of sales professionals improve their skills every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric) => (
            <Card key={metric.id} className="relative overflow-hidden border-2 hover:border-accent transition-all duration-300 hover:shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center justify-between">
                  <span>{metric.label}</span>
                  <span className={metric.color}>{metric.icon}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">
                      {metric.value.toLocaleString()}
                    </span>
                    <span className="text-xl text-muted-foreground">{metric.unit}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    {metric.trend === 'up' && (
                      <>
                        <TrendingUp className="h-4 w-4 text-green-500" />
                        <span className="text-green-500 font-medium">
                          +{metric.trendValue}%
                        </span>
                      </>
                    )}
                    {metric.trend === 'down' && (
                      <>
                        <TrendingDown className="h-4 w-4 text-red-500" />
                        <span className="text-red-500 font-medium">
                          -{metric.trendValue}%
                        </span>
                      </>
                    )}
                    {metric.trend === 'stable' && (
                      <span className="text-muted-foreground">Stable</span>
                    )}
                    <span className="text-muted-foreground">vs last hour</span>
                  </div>
                </div>
                {/* Animated pulse indicator */}
                <div className="absolute top-2 right-2">
                  <div className="relative">
                    <div className="h-2 w-2 bg-green-500 rounded-full animate-ping absolute" />
                    <div className="h-2 w-2 bg-green-500 rounded-full" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional stats bar */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 bg-card rounded-lg border">
            <div className="text-2xl font-bold text-accent">2.4M+</div>
            <div className="text-sm text-muted-foreground">Practice Sessions</div>
          </div>
          <div className="p-4 bg-card rounded-lg border">
            <div className="text-2xl font-bold text-accent">98%</div>
            <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div className="p-4 bg-card rounded-lg border">
            <div className="text-2xl font-bold text-accent">45min</div>
            <div className="text-sm text-muted-foreground">Avg. Session Time</div>
          </div>
          <div className="p-4 bg-card rounded-lg border">
            <div className="text-2xl font-bold text-accent">24/7</div>
            <div className="text-sm text-muted-foreground">Platform Uptime</div>
          </div>
        </div>
      </div>
    </div>
  );
}
