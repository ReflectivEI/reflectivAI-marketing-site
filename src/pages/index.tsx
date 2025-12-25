import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                  Sales Enablement
                  <br />
                  <span className="text-primary">Built on Emotional Intelligence</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-xl">
                  ReflectivAI combines advanced AI with proven coaching methodologies to transform how Life Sciences teams sell. Move beyond scripts to authentic, emotionally intelligent conversations.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base">
                  Request a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-base">
                  Watch Platform Tour
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden border border-border shadow-2xl">
                <img
                  src="https://media.gettyimages.com/id/2204255424/photo/data-analysis-on-a-tablet.jpg?b=1&s=2048x2048&w=0&k=20&c=1sL0v8GaAaUtQ4M0-X8MivdQXTkBGg3FBiJI6gGSRgo="
                  alt="ReflectivAI Platform Interface"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-20 pt-12 border-t border-border">
            <p className="text-center text-sm text-muted-foreground mb-8">Trusted by leading Life Sciences organizations</p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
              <div className="text-2xl font-semibold">Pfizer</div>
              <div className="text-2xl font-semibold">Novartis</div>
              <div className="text-2xl font-semibold">Roche</div>
              <div className="text-2xl font-semibold">AstraZeneca</div>
              <div className="text-2xl font-semibold">Merck</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Life Sciences Sales is Changing
            </h2>
            <p className="text-xl text-muted-foreground">
              Healthcare providers demand more than product knowledge. They need partners who understand their challenges, communicate with empathy, and build genuine trust. Traditional sales training cannot keep up.
            </p>
          </div>
          
          <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="space-y-3">
              <div className="text-4xl font-bold text-primary">73%</div>
              <p className="text-muted-foreground">of HCPs say sales reps lack understanding of their practice needs</p>
            </div>
            <div className="space-y-3">
              <div className="text-4xl font-bold text-primary">2.3x</div>
              <p className="text-muted-foreground">longer sales cycles when emotional intelligence is missing</p>
            </div>
            <div className="space-y-3">
              <div className="text-4xl font-bold text-primary">$2.4M</div>
              <p className="text-muted-foreground">average cost of rep turnover and ramp time</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold">Platform Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              AI-powered coaching that adapts to each conversation, rep, and customer context
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Real-Time Conversation Intelligence</h3>
              <p className="text-lg text-muted-foreground">
                Our AI analyzes tone, sentiment, and behavioral cues during live calls and meetings. Get instant coaching prompts that help reps respond with empathy and precision.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Emotional tone detection and sentiment analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Contextual coaching prompts based on conversation flow</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Behavioral model integration (DISC, Myers-Briggs, etc.)</span>
                </li>
              </ul>
            </div>
            <div className="order-first lg:order-last">
              <div className="aspect-[4/3] rounded-lg overflow-hidden border border-border shadow-xl">
                <img
                  src="https://media.gettyimages.com/id/1369254937/photo/horizontal-medium-shot-of-unrecognizable-young-black-man-sitting-at-desk-in-office-working.jpg?b=1&s=2048x2048&w=0&k=20&c=O5PRzIT3KLC8_HMOhp_1kNX4e1NvGKYHgvoKy3CrCUo="
                  alt="Real-time conversation intelligence dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
            <div className="aspect-[4/3] rounded-lg overflow-hidden border border-border shadow-xl">
              <img
                src="https://media.gettyimages.com/id/2219654302/photo/teamwork-and-support-between-two-businesswomen.jpg?b=1&s=2048x2048&w=0&k=20&c=cFc7wLmOsIlxL59pYr89OwmTiawFHUGThub24Bf2gt0="
                alt="Personalized coaching sessions"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Personalized Coaching Journeys</h3>
              <p className="text-lg text-muted-foreground">
                Every rep has unique strengths and development areas. Our platform creates individualized coaching paths that build emotional intelligence alongside product knowledge.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Adaptive learning paths based on performance data</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Role-play scenarios with AI-powered feedback</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Competency tracking across technical and soft skills</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Leadership Analytics & Insights</h3>
              <p className="text-lg text-muted-foreground">
                Give sales leaders visibility into team performance, coaching effectiveness, and skill development trends. Make data-driven decisions about training investments.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Team-wide emotional intelligence benchmarking</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Coaching ROI measurement and impact tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Predictive analytics for rep success and retention</span>
                </li>
              </ul>
            </div>
            <div className="order-first lg:order-last">
              <div className="aspect-[4/3] rounded-lg overflow-hidden border border-border shadow-xl">
                <img
                  src="https://media.gettyimages.com/id/1897107863/photo/part-of-office-workspace-with-laptop.jpg?b=1&s=2048x2048&w=0&k=20&c=rUJpo_-7QWmsEBDhiGqV69IgJDVPvD1ar9XSUyJ0__Y="
                  alt="Leadership analytics dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            <h2 className="text-5xl lg:text-7xl font-bold leading-tight">
              The best sales reps do not just know their product. They understand people.
            </h2>
            <div className="grid md:grid-cols-2 gap-12 pt-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Why Emotional Intelligence Matters</h3>
                <p className="text-lg text-primary-foreground/90">
                  Research shows that emotional intelligence accounts for 58% of job performance in sales roles. Yet most enablement platforms ignore it entirely, focusing only on product knowledge and process.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Our Unique Approach</h3>
                <p className="text-lg text-primary-foreground/90">
                  ReflectivAI is the only platform built on the foundation of behavioral science, coaching methodologies, and emotional intelligence frameworks. We do not just train reps—we transform them into trusted advisors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-muted rounded-2xl p-12 space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary">
                    JM
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-xl lg:text-2xl font-medium leading-relaxed">
                    ReflectivAI transformed our team's approach to customer conversations. Our reps now connect on a deeper level, and we've seen a 34% increase in close rates within six months. The emotional intelligence training is game-changing.
                  </p>
                  <div>
                    <div className="font-semibold">Jennifer Martinez</div>
                    <div className="text-muted-foreground">VP of Sales Enablement, Global Pharma Leader</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold">
                  Ready to Transform Your Sales Team?
                </h2>
                <p className="text-xl text-muted-foreground">
                  See how ReflectivAI can help your Life Sciences organization build emotionally intelligent, high-performing sales teams.
                </p>
              </div>
              <div className="space-y-4">
                <Button size="lg" className="w-full text-base">
                  Schedule a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="w-full text-base">
                  Download Case Study
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  Join 500+ Life Sciences sales teams using ReflectivAI
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
