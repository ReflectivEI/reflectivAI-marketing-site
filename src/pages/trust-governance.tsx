import { Shield, Lock, FileCheck, Users, CheckCircle2, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function TrustGovernancePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Trust & Governance
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Ethics, privacy, and responsible AI for Life Sciences commercial teams.
            </p>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Built on Responsible AI Principles
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                ReflectivAI is designed for regulated environments where trust, transparency, and ethical use of AI are non-negotiable.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-border rounded-xl p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Human-Centered Design</h3>
                <p className="text-muted-foreground">
                  AI assists human judgment, never replaces it. All coaching feedback and insights support professional decision-making without automating critical choices.
                </p>
              </div>

              <div className="border border-border rounded-xl p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileCheck className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Transparent Operations</h3>
                <p className="text-muted-foreground">
                  All AI-generated feedback is explainable and traceable. Users understand how observations are made and why specific feedback is provided.
                </p>
              </div>

              <div className="border border-border rounded-xl p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Privacy by Design</h3>
                <p className="text-muted-foreground">
                  Data protection is built into every layer. User data is encrypted, access is controlled, and privacy requirements are enforced at the system level.
                </p>
              </div>

              <div className="border border-border rounded-xl p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Ethical Boundaries</h3>
                <p className="text-muted-foreground">
                  Signal Intelligence™ observes communication behaviors only. The system does not diagnose intent, emotion, competence, or psychological states.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Privacy & Security */}
      <section className="py-20" style={{ backgroundColor: 'hsl(210, 50%, 20%)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold" style={{ color: 'hsl(0, 0%, 100%)' }}>
                Data Privacy & Security
              </h2>
              <p className="text-xl" style={{ color: 'hsl(0, 0%, 90%)' }}>
                Enterprise-grade security designed for Life Sciences compliance requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 space-y-4">
                <h3 className="text-lg font-semibold">Data Encryption</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>End-to-end encryption in transit and at rest</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Industry-standard encryption protocols</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Secure key management</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 space-y-4">
                <h3 className="text-lg font-semibold">Access Controls</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Role-based access control (RBAC)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Multi-factor authentication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Audit logging for all access</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 space-y-4">
                <h3 className="text-lg font-semibold">Compliance Ready</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>GDPR and CCPA compliant</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>SOC 2 Type II certified</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Regular security audits</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ethical AI Boundaries */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">
                What Signal Intelligence™ Does Not Do
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Clear boundaries ensure ethical and responsible use of AI in coaching and development.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-6 border border-border rounded-xl">
                <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">No Psychological Diagnosis</h3>
                  <p className="text-muted-foreground">
                    Signal Intelligence™ does not diagnose mental states, personality traits, or psychological conditions. It observes communication behaviors only.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 border border-border rounded-xl">
                <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">No Intent Inference</h3>
                  <p className="text-muted-foreground">
                    The system does not claim to know what someone meant or intended. It identifies observable patterns and leaves interpretation to human judgment.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 border border-border rounded-xl">
                <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">No Automated Decisions</h3>
                  <p className="text-muted-foreground">
                    AI Coach provides feedback and observations, but all decisions about performance, development, and coaching remain with human managers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 border border-border rounded-xl">
                <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">No Surveillance or Monitoring</h3>
                  <p className="text-muted-foreground">
                    Signal Intelligence™ is a development tool, not a surveillance system. It supports coaching and learning, not performance monitoring or compliance tracking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance Framework */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Governance Framework
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Structured oversight ensures responsible AI use across your organization.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-background rounded-xl p-6 space-y-4">
                <h3 className="text-xl font-semibold">Deployment Controls</h3>
                <p className="text-muted-foreground">
                  Organizations control how Signal Intelligence™ is deployed, who has access, and what data is collected. All settings are configurable to match your governance requirements.
                </p>
              </div>

              <div className="bg-background rounded-xl p-6 space-y-4">
                <h3 className="text-xl font-semibold">Audit Trails</h3>
                <p className="text-muted-foreground">
                  Complete audit logs track all system interactions, AI-generated feedback, and user actions. Logs are tamper-proof and available for compliance review.
                </p>
              </div>

              <div className="bg-background rounded-xl p-6 space-y-4">
                <h3 className="text-xl font-semibold">Data Retention Policies</h3>
                <p className="text-muted-foreground">
                  Configurable retention policies ensure data is kept only as long as needed. Automated deletion processes support compliance with data protection regulations.
                </p>
              </div>

              <div className="bg-background rounded-xl p-6 space-y-4">
                <h3 className="text-xl font-semibold">User Consent Management</h3>
                <p className="text-muted-foreground">
                  Clear consent workflows ensure users understand how their data is used. Consent can be withdrawn at any time, with immediate effect on data processing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Questions About Trust & Governance?
            </h2>
            <p className="text-xl text-muted-foreground">
              Our team can walk you through our security, privacy, and ethical AI practices in detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Schedule Security Review</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/demo">Explore Platform</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
