'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PlatformFeature {
  id: string;
  title: string;
  description: string;
  image: string;
  highlights: string[];
}

const features: PlatformFeature[] = [
  {
    id: 'dashboard',
    title: 'AI-Powered Dashboard',
    description: 'Track your progress across all 8 Signal Intelligence™ Capabilities with real-time scored analytics and personalized insights.',
    image: 'https://media.gettyimages.com/id/1621583577/photo/4k-hud-futuristic-elements-target-monitor-user-control-interface-screen-panel.jpg?b=1&s=2048x2048&w=0&k=20&c=_l9P7RzaQ3TSlIGy3sajz6hOEEEndho2OvcC2xPFLn8=',
    highlights: [
      'Real-time Signal Intelligence™ scores',
      'Personalized daily insights',
      'Progress tracking',
      'Performance trends'
    ]
  },
  {
    id: 'ai-coach',
    title: 'AI Coach Interface',
    description: 'Get instant, personalized coaching feedback on your conversations with healthcare stakeholders.',
    image: 'https://media.gettyimages.com/id/1496934378/photo/ai-for-artificial-intelligence-displayed-on-a-computer-screen-against-a-background-of.jpg?b=1&s=2048x2048&w=0&k=20&c=PusTkWQGH5xvZl01jIS-pshJWCdHyf-EAt5i9JKtXqM=',
    highlights: [
      '10 EI dimensions analyzed',
      'Actionable feedback',
      'Conversation insights',
      'Improvement recommendations'
    ]
  },
  {
    id: 'role-play',
    title: 'Role Play Simulator',
    description: 'Practice with realistic pharma scenarios across multiple therapeutic areas with instant AI feedback.',
    image: 'https://media.gettyimages.com/id/481401388/photo/mans-hands-on-a-tablet-pc-displaying-business-graphs.jpg?b=1&s=2048x2048&w=0&k=20&c=Xm3Un4ZWOi2ITCTzxLu71PmM51Jjy8JiPRqWHSW2Bh4=',
    highlights: [
      '9+ disease state scenarios',
      'Instant feedback',
      'Compliance validation',
      'Skill building exercises'
    ]
  }
];

export function PlatformShowcase() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-accent text-accent-foreground">Platform Overview</Badge>
          <h2 className="text-4xl font-bold mb-4">See ReflectivAI in Action</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our intuitive platform designed specifically for life sciences sales professionals
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="ai-coach">AI Coach</TabsTrigger>
            <TabsTrigger value="role-play">Role Play</TabsTrigger>
          </TabsList>

          {features.map((feature) => (
            <TabsContent key={feature.id} value={feature.id} className="mt-0">
              <Card className="border-2 overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative h-[400px] md:h-auto bg-gradient-to-br from-primary/10 to-accent/10">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <Button
                        size="lg"
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accent hover:bg-accent/90"
                      >
                        <Play className="mr-2 h-5 w-5" />
                        Watch Demo
                      </Button>
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
                      <p className="text-lg text-muted-foreground mb-6">
                        {feature.description}
                      </p>
                      <div className="space-y-3">
                        {feature.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                            <span className="text-foreground">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Video Demo Section */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto overflow-hidden border-2">
            <CardContent className="p-0">
              <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Button size="lg" className="bg-accent hover:bg-accent/90 mb-4">
                      <Play className="mr-2 h-6 w-6" />
                      Watch Full Platform Demo
                    </Button>
                    <p className="text-sm text-muted-foreground">3 minute overview</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
