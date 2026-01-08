import { ArrowRight, CheckCircle2, Eye, MessageSquare, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { AnimatedStats } from '@/components/AnimatedStats';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { CTASection } from '@/components/CTASection';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[hsl(210,50%,20%)] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210,50%,25%)] to-[hsl(210,50%,15%)] opacity-50" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  ReflectivAI: Supporting Decisions in the Moments That Matter
                </h1>
                <p className="text-xl text-gray-200">
                  Decision support for real customer interactions
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-lg text-gray-300">
                  For Life Sciences commercial teams navigating complex customer conversations—where clinical evidence meets institutional priorities, and every interaction shapes access and adoption.
                </p>
                <p className="text-base text-gray-400">
                  Built on Signal Intelligence. Designed to fit your existing selling structure.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[hsl(180,50%,45%)] hover:bg-[hsl(180,50%,40%)] text-white text-lg px-8"
                >
                  <Link to="/demo">
                    See How It Works
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[hsl(210,50%,20%)] text-lg px-8"
                >
                  <Link to="/signal-intelligence">Learn More</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop"
                  alt="Professional interaction"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(210,50%,20%)] to-transparent opacity-40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Gets Missed Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[hsl(210,50%,20%)] mb-8 text-center">
              What Gets Missed in High-Stakes Conversations
            </h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                In complex B2B and Life Sciences selling, outcomes depend on judgment—reading the room, adapting in real time, knowing when to probe and when to pivot. But judgment is invisible. It happens in the moment, shaped by experience and instinct, and it's nearly impossible to observe, measure, or coach at scale.
              </p>
              <p>
                What gets tracked instead? Activities. Calls made. Emails sent. Meetings held. These metrics are easy to count, but they don't capture what actually drives success: the quality of the interaction itself.
              </p>
              <p>
                Meanwhile, the most critical moments—the subtle shifts in customer engagement, the questions that land (or don't), the responses that build trust or create distance—go unnoticed. Managers coach to outcomes they can't see. Reps practice skills they can't measure. And the gap between activity and impact continues to widen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transition Statement */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-2xl font-semibold text-[hsl(210,50%,20%)]">
              Human judgment, made visible. AI, responsibly applied.
            </p>
          </div>
        </div>
      </section>

      {/* Where Judgment Comes Into Focus */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[hsl(210,50%,20%)] mb-8 text-center">
              Where Judgment Comes Into Focus
            </h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                <strong>Signal Intelligence</strong> is a structured approach to making judgment observable. It identifies the specific behaviors—questions asked, responses given, conversational patterns—that reflect decision-making in action. These behaviors are measurable, coachable, and directly tied to outcomes.
              </p>
              <p>
                Unlike activity metrics, Signal Intelligence focuses on <em>how</em> conversations unfold, not just that they happened. It captures the nuance of customer engagement: whether questions are diagnostic or transactional, whether responses demonstrate understanding or deflection, whether the conversation is building toward alignment or stalling in surface-level exchange.
              </p>
              <p>
                This is not sentiment analysis. It's not keyword tracking. It's a framework for understanding the quality of human interaction—designed to support judgment, not replace it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Signal Intelligence Looks Like */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[hsl(210,50%,20%)] mb-8 text-center">
              What Signal Intelligence Looks Like in Practice
            </h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p className="mb-8">
                Signal Intelligence translates conversational dynamics into observable, measurable behaviors. These aren't abstract concepts—they're specific patterns that indicate how well a conversation is progressing:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-[hsl(180,50%,45%)] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Question Quality:</strong> Are questions open-ended and diagnostic, or closed and transactional? Do they build on previous answers or reset the conversation?
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-[hsl(180,50%,45%)] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Response Depth:</strong> Do responses demonstrate understanding of the customer's context, or do they deflect to product features?
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-[hsl(180,50%,45%)] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Conversational Balance:</strong> Is the dialogue collaborative, or dominated by one party? Are there natural pauses for reflection, or is it rushed?
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-[hsl(180,50%,45%)] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Adaptive Behavior:</strong> Does the conversation shift based on customer cues, or follow a rigid script?
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-[hsl(180,50%,45%)] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Evidence Integration:</strong> Are clinical or business insights introduced at the right moment, or forced into the conversation prematurely?
                  </div>
                </li>
              </ul>
              <p className="mt-8">
                These behaviors are what separate effective customer engagement from activity for activity's sake. They're also what managers wish they could observe at scale—and what reps need feedback on to improve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How ReflectivAI Applies Signal Intelligence */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[hsl(210,50%,20%)] mb-8 text-center">
              How ReflectivAI Applies Signal Intelligence
            </h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                ReflectivAI translates Signal Intelligence into a practical system for skill development and performance improvement. It works in three stages:
              </p>
              <div className="mt-12 space-y-8">
                <div className="bg-gray-50 p-8 rounded-lg">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[hsl(180,50%,45%)] text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-xl font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[hsl(210,50%,20%)] mb-3">
                        Practice in Context
                      </h3>
                      <p>
                        Reps engage in realistic role-play scenarios tailored to their specific selling environment—whether that's navigating a P&T committee, addressing payer objections, or building consensus with a multidisciplinary team. The AI adapts in real time, responding to their approach and creating the kind of dynamic, unpredictable conversations they'll face in the field.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[hsl(180,50%,45%)] text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-xl font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[hsl(210,50%,20%)] mb-3">
                        Analyze What Happened
                      </h3>
                      <p>
                        After each interaction, Signal Intelligence measures the behaviors that mattered: question quality, response depth, conversational balance, adaptive behavior, and evidence integration. Reps see exactly where they were effective and where they missed opportunities—not in vague terms, but with specific, actionable insights tied to the conversation itself.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[hsl(180,50%,45%)] text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-xl font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[hsl(210,50%,20%)] mb-3">
                        Coach to Capability
                      </h3>
                      <p>
                        Managers gain visibility into performance patterns across their teams—not just who's hitting numbers, but <em>how</em> they're getting there. Coaching becomes precise: instead of generic feedback, managers can address specific behavioral gaps with evidence from actual interactions. And because the system tracks progress over time, they can see whether coaching is working.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach-Agnostic Design */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[hsl(210,50%,20%)] mb-8 text-center">
              Approach-Agnostic by Design
            </h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                ReflectivAI doesn't impose a selling methodology. Whether your team uses Challenger, SPIN, Consultative Selling, or a proprietary framework, Signal Intelligence adapts. It measures the behaviors that matter within <em>your</em> approach, not a one-size-fits-all model.
              </p>
              <p>
                This means you don't have to retrain your team or abandon what's already working. ReflectivAI integrates into your existing structure, providing the visibility and feedback mechanisms that make your methodology more effective.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commented out section - can be re-enabled later
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[hsl(210,50%,20%)] mb-8 text-center">
              Designed to Fit How You Already Sell
            </h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                Most sales tools focus on <strong>what</strong> to say—scripts, talk tracks, objection handlers. ReflectivAI focuses on <strong>how</strong> to engage: the conversational behaviors that build trust, uncover priorities, and move deals forward.
              </p>
              <p>
                This distinction matters because <strong>what</strong> you say is context-dependent. It changes based on your product, your market, your customer. But <strong>how</strong> you engage—the quality of your questions, the depth of your listening, the way you adapt in real time—is universal. It's what separates effective sellers from the rest, regardless of methodology.
              </p>
              <p>
                ReflectivAI doesn't replace your selling framework. It makes it measurable. Whether you use Challenger, SPIN, Consultative Selling, or a proprietary approach, Signal Intelligence captures the behaviors that make your methodology work—and gives you the data to coach to them.
              </p>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Stats Section */}
      <AnimatedStats />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
