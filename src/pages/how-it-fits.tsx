import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HowItFits() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Designed to Fit How You Already Sell
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground">
              Signal Intelligence™ strengthens execution without changing your selling model.
            </p>
            <div className="space-y-4 text-lg text-muted-foreground max-w-3xl mx-auto pt-6">
              <p>
                Most Life Sciences organizations already have an established way of defining good selling — whether through a formal framework or an agreed set of practices.
              </p>
              <p>
                Signal Intelligence™ brings that structure into live customer interactions — where judgment and timing matter most.
              </p>
              <p className="font-semibold text-foreground pt-4">
                How you define great selling stays the same.<br />
                Signal Intelligence™ supports how it is applied in the moment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blue Background Section - Cards, Flow, Table */}
      <section className="py-20" style={{ backgroundColor: 'hsl(210, 50%, 20%)' }}>
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            
            {/* Two-Column Cards: WHAT vs HOW */}
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* WHAT Card */}
              <div className="bg-white rounded-xl p-8 space-y-6 shadow-lg">
                <div className="inline-block px-4 py-2 bg-primary text-white text-sm font-bold rounded-lg mb-2">
                  WHAT
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-primary">
                  Your Selling Structure Defines the Foundation
                </h3>
                <p className="text-lg text-muted-foreground">
                  Across Life Sciences organizations, selling frameworks and established selling approaches provide consistency and alignment across commercial teams. They define:
                </p>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span>Stages and behaviors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span>Best-practice actions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span>Standards for success across the organization</span>
                  </li>
                </ul>
                <p className="text-muted-foreground italic pt-4">
                  They are essential, and intentionally stable.
                </p>
              </div>

              {/* HOW Card */}
              <div className="bg-white rounded-xl p-8 space-y-6 shadow-lg">
                <div className="inline-block px-4 py-2 text-sm font-bold rounded-lg mb-2" style={{ backgroundColor: 'hsl(180, 50%, 45%)', color: 'white' }}>
                  HOW
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold" style={{ color: 'hsl(180, 50%, 35%)' }}>
                  Signal Intelligence™ Supports Decisions in the Moment
                </h3>
                <p className="text-lg text-muted-foreground">
                  Signal Intelligence™ operates beneath your existing selling structure, supporting real-time decision-making by helping reps:
                </p>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: 'hsl(180, 50%, 45%)' }} />
                    <span>Recognize meaningful customer signals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: 'hsl(180, 50%, 45%)' }} />
                    <span>Interpret context and intent</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: 'hsl(180, 50%, 45%)' }} />
                    <span>Prioritize which selling behaviors matter most in each interaction</span>
                  </li>
                </ul>
                <p className="text-muted-foreground italic pt-4">
                  Signal Intelligence™ introduces a decision-support capability that strengthens judgment inside the selling approach you already use.
                </p>
              </div>
            </div>

            {/* Flow Diagram - Image */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-8 lg:p-12 shadow-lg">
                <h3 className="text-2xl lg:text-3xl font-bold text-center mb-8">
                  How Signal Intelligence™ Fits
                </h3>
                
                <img 
                  src="https://img1.wsimg.com/isteam/ip/1de1dc96-7231-4608-aa4f-91d58be98037/717e2651-b203-4ccd-899a-4b30dfcb7245.jpeg"
                  alt="Signal Intelligence in Sales Enablement Process - Flow diagram showing Commercial Strategy flowing to Selling Framework (WHAT), then to Signal Intelligence (HOW), and finally to Rep Execution"
                  className="w-full h-auto rounded-lg"
                />
                
                <p className="text-center text-muted-foreground mt-8 text-lg italic">
                  Signal Intelligence™ is the decision layer between how selling is defined and real customer behavior.
                </p>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-xl p-8 lg:p-12 shadow-lg">
                <h3 className="text-2xl lg:text-3xl font-bold text-center mb-12">
                  How Selling Structures and Signal Intelligence™ Work Together
                </h3>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-primary">
                        <th className="text-left py-4 px-6 text-lg font-bold text-primary bg-primary/5">
                          Your Selling Structure Provides
                        </th>
                        <th className="text-left py-4 px-6 text-lg font-bold bg-primary/5" style={{ color: 'hsl(180, 50%, 35%)' }}>
                          Signal Intelligence™ Enables
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="py-6 px-6 text-lg">
                          A shared language for commercial execution
                        </td>
                        <td className="py-6 px-6 text-lg">
                          Decision-making within that structure
                        </td>
                      </tr>
                      <tr className="border-b border-border bg-muted/30">
                        <td className="py-6 px-6 text-lg">
                          Defined stages and behaviors
                        </td>
                        <td className="py-6 px-6 text-lg">
                          Recognition of which behaviors matter most in each situation
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-6 px-6 text-lg">
                          Best-practice guidance
                        </td>
                        <td className="py-6 px-6 text-lg">
                          Interpretation of customer signals in real time
                        </td>
                      </tr>
                      <tr className="bg-muted/30">
                        <td className="py-6 px-6 text-lg">
                          Consistency across teams
                        </td>
                        <td className="py-6 px-6 text-lg">
                          Confident adaptation at the point of interaction
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <p className="text-center text-muted-foreground mt-8 text-lg">
                  Together, they support consistent strategy and effective execution in complex customer environments.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="py-20 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to See Signal Intelligence™ in Action?
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore how Signal Intelligence™ strengthens execution across your commercial organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                to="/applied-capabilities"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
              >
                Explore Applied Capabilities
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg border-2 border-primary text-primary hover:bg-primary/10 transition-colors"
              >
                Request a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
