import { ArrowRight, Brain, MessageSquare, TrendingUp, Zap, CheckCircle2, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function AICoachPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                <Brain className="h-4 w-4" />
                AI-Powered Coaching
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                  Your Personal
                  <br />
                  <span className="text-primary">AI Sales Coach</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-xl">
                  Get real-time guidance, personalized feedback, and continuous development support from an AI coach that understands your unique selling style and customer interactions.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-base">
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden border border-border shadow-2xl">
                <img
                  src="https://media.gettyimages.com/id/2222332337/photo/cheerful-young-african-american-man-listing-to-a-hiring-manager-business-woman-during-job.jpg?b=1&s=2048x2048&w=0&k=20&c=uMsDL-oPZMCxQlqCjRlFFnlX28qpvRo83NIwy3X0BnI="
                  alt="AI Coach in action"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold">How AI Coach Transforms Your Sales Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Continuous, personalized coaching that scales across your entire organization
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="space-y-4 p-6 rounded-lg border border-border bg-card">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Real-Time Guidance</h3>
              <p className="text-muted-foreground">
                Get instant coaching prompts during live calls based on conversation context, customer sentiment, and behavioral cues.
              </p>
            </div>

            <div className="space-y-4 p-6 rounded-lg border border-border bg-card">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Personalized Learning Paths</h3>
              <p className="text-muted-foreground">
                AI analyzes your performance data to create customized development plans that address your specific strengths and gaps.
              </p>
            </div>

            <div className="space-y-4 p-6 rounded-lg border border-border bg-card">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Conversational Feedback</h3>
              <p className="text-muted-foreground">
                Ask questions, get explanations, and receive actionable advice through natural conversation with your AI coach.
              </p>
            </div>

            <div className="space-y-4 p-6 rounded-lg border border-border bg-card">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Performance Analytics</h3>
              <p className="text-muted-foreground">
                Track your progress over time with detailed metrics on emotional intelligence, objection handling, and closing techniques.
              </p>
            </div>

            <div className="space-y-4 p-6 rounded-lg border border-border bg-card">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Emotional Intelligence Training</h3>
              <p className="text-muted-foreground">
                Develop empathy, active listening, and rapport-building skills through AI-guided exercises and real-world scenarios.
              </p>
            </div>

            <div className="space-y-4 p-6 rounded-lg border border-border bg-card">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">24/7 Availability</h3>
              <p className="text-muted-foreground">
                Access coaching support anytime, anywhere—before calls, during prep, or when reviewing past conversations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold">How AI Coach Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Intelligent coaching powered by behavioral science and machine learning
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-bold">
                  1
                </div>
                <h3 className="text-2xl font-bold">Analyze Your Conversations</h3>
                <p className="text-lg text-muted-foreground">
                  AI Coach listens to your calls and meetings, analyzing tone, language patterns, customer responses, and emotional dynamics in real-time.
                </p>
              </div>
              <div className="aspect-video rounded-lg overflow-hidden border border-border shadow-lg">
                <img
                  src="https://media.gettyimages.com/id/1557248585/photo/asian-businesswoman-and-caucasian-businessman-having-a-discussion.jpg?b=1&s=2048x2048&w=0&k=20&c=6B1bg2Kmhzo1LNGgG2xbTH5aSme4H32dfNOgO4dWFXo="
                  alt="Conversation analysis"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="aspect-video rounded-lg overflow-hidden border border-border shadow-lg order-first md:order-last">
                <img
                  src="https://media.gettyimages.com/id/2156419197/photo/two-young-professionals-in-a-co-working-space-in-houston-texas.jpg?b=1&s=2048x2048&w=0&k=20&c=LW9IxJcQtdXu8SaXMc7-aywqMSDA3K0PfpZ0VtZi-ho="
                  alt="Personalized insights"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4 order-last md:order-first">
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-bold">
                  2
                </div>
                <h3 className="text-2xl font-bold">Provide Contextual Guidance</h3>
                <p className="text-lg text-muted-foreground">
                  Receive instant coaching prompts tailored to the specific moment—whether it's handling an objection, building rapport, or closing the deal.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-bold">
                  3
                </div>
                <h3 className="text-2xl font-bold">Track Your Growth</h3>
                <p className="text-lg text-muted-foreground">
                  Monitor your development with detailed analytics, skill assessments, and personalized recommendations for continuous improvement.
                </p>
              </div>
              <div className="aspect-video rounded-lg overflow-hidden border border-border shadow-lg">
                <img
                  src="https://media.gettyimages.com/id/1897107863/photo/part-of-office-workspace-with-laptop.jpg?b=1&s=2048x2048&w=0&k=20&c=rUJpo_-7QWmsEBDhiGqV69IgJDVPvD1ar9XSUyJ0__Y="
                  alt="Performance tracking"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold">AI Coach in Action</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real scenarios where AI Coach makes the difference
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-lg border border-border bg-card space-y-4">
              <h3 className="text-xl font-bold">Pre-Call Preparation</h3>
              <p className="text-muted-foreground">
                Before important meetings, AI Coach provides customer insights, suggests talking points based on past interactions, and recommends strategies tailored to the prospect's behavioral profile.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Customer history and sentiment analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Personalized conversation starters</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Objection handling preparation</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-lg border border-border bg-card space-y-4">
              <h3 className="text-xl font-bold">During Live Calls</h3>
              <p className="text-muted-foreground">
                Get real-time coaching prompts that help you navigate difficult conversations, respond to objections with empathy, and identify buying signals you might have missed.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Live sentiment detection and alerts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Suggested responses and talking points</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Buying signal identification</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-lg border border-border bg-card space-y-4">
              <h3 className="text-xl font-bold">Post-Call Review</h3>
              <p className="text-muted-foreground">
                After each interaction, receive detailed feedback on what went well, areas for improvement, and specific coaching recommendations to enhance your skills.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Conversation highlights and lowlights</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Emotional intelligence scoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Actionable improvement suggestions</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-lg border border-border bg-card space-y-4">
              <h3 className="text-xl font-bold">Ongoing Development</h3>
              <p className="text-muted-foreground">
                Access personalized training modules, practice scenarios, and skill-building exercises designed to address your unique development needs and career goals.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Customized learning paths</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Skill gap analysis and recommendations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Progress tracking and milestones</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Ready to Experience AI-Powered Coaching?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Join hundreds of Life Sciences sales professionals who are transforming their performance with AI Coach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-base">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-base border-primary-foreground/20 hover:bg-primary-foreground/10">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Features */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Explore More Features</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Link to="/role-play" className="p-6 rounded-lg border border-border bg-background hover:shadow-lg transition-shadow space-y-3">
              <h3 className="text-xl font-semibold">Role Play Simulation</h3>
              <p className="text-muted-foreground">
                Practice difficult conversations in a safe environment with AI-powered scenarios and feedback.
              </p>
              <div className="flex items-center text-primary font-medium">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>
            <Link to="/" className="p-6 rounded-lg border border-border bg-background hover:shadow-lg transition-shadow space-y-3">
              <h3 className="text-xl font-semibold">Platform Overview</h3>
              <p className="text-muted-foreground">
                Discover all the capabilities of ReflectivAI's sales enablement platform.
              </p>
              <div className="flex items-center text-primary font-medium">
                View platform <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
