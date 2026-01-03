// Updated: 2025-12-30 - SI derived from HDD Framework clarification
export default function SignalIntelligencePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[980px] mx-auto px-5 py-14">
        {/* Hero Section */}
        <header className="bg-gradient-to-b from-accent/10 to-transparent border border-border rounded-2xl shadow-lg p-7 mb-7">
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2.5">
            Learn More
          </p>
          <h1 className="text-[34px] leading-tight mb-2">Signal Intelligence<sup className="text-lg">™</sup></h1>
          <p className="text-muted-foreground mb-0 font-bold">
            Capabilities, Behavioral Metrics & Methodology (ReflectivAI)
          </p>
          <p className="text-sm text-muted-foreground border-l-3 border-l-accent pl-3 mt-3">
            Signal Intelligence<sup className="text-xs">™</sup> is behavior-first, non-clinical, and non-diagnostic. It focuses exclusively on observable conversation behaviors and does not infer protected attributes or mental health status.
          </p>
        </header>

        {/* Purpose */}
        <section className="border border-border rounded-2xl bg-card p-5 mb-4">
          <h2 className="text-xl mb-2.5 font-bold">Purpose</h2>
          <p className="my-2.5">
            Signal Intelligence<sup className="text-xs">™</sup> (SI) is designed to make conversational skill development clearer, safer, and more effective for sales professionals, coaches, and enablement teams working in high-stakes conversations.
          </p>
          <p className="my-2.5">
            It helps coaches and learners focus on what improves conversations by grounding practice and feedback in observable behaviors—what people say, how they respond, and how they adapt in real time—making skills easier to coach, practice, and develop with consistency and confidence.
          </p>
          <p className="my-2.5">
            SI is a behavior-based capability framework grounded in the Human Decision Drivers Framework, which explains why conversational behaviors change as factors like confidence, motivation, or perceived risk shift. These drivers inform how behaviors are interpreted but are not measured directly. SI does not infer psychological states, personality traits, or protected attributes.
          </p>
          <p className="my-2.5">
            Designed to be explainable, coachable, and auditable, SI is purpose-built for professional development, training, and coaching—not for employment decisions, performance evaluation, or live call monitoring.
          </p>
        </section>

        {/* How to Read This Page */}
        <section className="border border-border rounded-2xl bg-card p-5 mb-4">
          <h2 className="text-xl mb-2.5 font-bold">How to Read This Page</h2>
          <p className="text-base font-semibold my-2.5">A Visual Map of the System</p>
          <p className="my-2.5">
            This page is organized in three connected layers, each building on the one before it:
          </p>
          <div className="my-3.5 space-y-3">
            <div>
              <p className="font-semibold">Human Decision Drivers Framework</p>
              <p className="text-sm text-muted-foreground">The interpretive lens</p>
              <p className="my-2">Explains why conversational behaviors change by describing the human forces that influence thinking, engagement, emotional regulation, and commitment.</p>
              <p className="text-sm">→ These drivers are not latent variables and are not measured directly.</p>
            </div>
            <div>
              <p className="font-semibold">Signal Intelligence Capabilities</p>
              <p className="text-sm text-muted-foreground">The skill layer</p>
              <p className="my-2">Defines the core conversational skills that can be developed through practice. Each capability represents a distinct form of conversational judgment.</p>
            </div>
            <div>
              <p className="font-semibold">Behavioral Metrics</p>
              <p className="text-sm text-muted-foreground">The visibility layer</p>
              <p className="my-2">Describes the observable behaviors that show how each capability appears in real conversations, making skills easier to recognize, coach, and practice.</p>
            </div>
          </div>
          <p className="my-2.5 font-medium">
            Each layer moves from explanation → skill → observation.
          </p>
        </section>

        {/* What We Mean by a "Signal" */}
        <section className="border border-border rounded-2xl bg-card p-5 mb-4">
          <h2 className="text-xl mb-2.5 font-bold">What We Mean by a "Signal"</h2>
          <p className="my-2.5">
            In real conversations, a signal is:
          </p>
          <p className="my-2.5 font-semibold">
            An observable change in behavior or context that indicates something meaningful has shifted and may require a different conversational approach.
          </p>
          <p className="my-2.5">
            Signals are:
          </p>
          <ul className="my-2.5 ml-5 list-disc space-y-2">
            <li><strong>Observable</strong> — they can be seen or heard</li>
            <li><strong>Contextual</strong> — their meaning depends on what has already happened</li>
            <li><strong>Action-relevant</strong> — they suggest a need to adjust, not a diagnosis</li>
            <li><strong>Non-diagnostic</strong> — they do not explain internal emotion, intent, or motivation</li>
          </ul>
          <p className="my-2.5">
            Examples of signals include:
          </p>
          <ul className="my-2.5 ml-5 list-disc space-y-2">
            <li>a shift in the type or depth of questions being asked</li>
            <li>a change in energy, pacing, or participation</li>
            <li>the introduction of a new concern or objection</li>
            <li>movement from exploration to next-step language</li>
          </ul>
          <p className="my-2.5 font-semibold">
            Signals are not conclusions. They are moments of choice.
          </p>

          {/* Why Signal Intelligence — and Why Now */}
          <h3 className="text-lg mt-6 mb-2.5 font-bold">Why Signal Intelligence — and Why Now</h3>
          <p className="my-2.5">
            Modern conversations are more complex, less linear, and more consequential than ever.
          </p>
          <p className="my-2.5">
            Today's professionals face:
          </p>
          <ul className="my-2.5 ml-5 list-disc space-y-2">
            <li>better-informed and more skeptical counterparts</li>
            <li>fewer scripted paths and more situational judgment</li>
            <li>higher expectations for credibility and trust</li>
            <li>increasing use of AI without clear boundaries</li>
          </ul>
          <p className="my-2.5">
            Traditional training focuses on what to say.
            Signal Intelligence focuses on when and how to adapt.
          </p>
          <p className="my-2.5">
            Signal Intelligence<sup className="text-xs">™</sup> exists because:
          </p>
          <ul className="my-2.5 ml-5 list-disc space-y-2">
            <li>the most important conversational skills are contextual and judgment-based</li>
            <li>those skills are learnable but rarely taught explicitly</li>
            <li>AI can support learning responsibly — if human judgment remains central</li>
          </ul>
          <p className="my-2.5 font-semibold">
            Signal Intelligence makes the invisible moments of judgment visible, discussable, and developable.
          </p>
          <p className="my-2.5">
            Signals indicate that something has shifted; Human Decision Drivers explain why certain responses preserve credibility, trust, and access once a signal is detected.
          </p>
        </section>

        {/* Human Decision Drivers Framework */
        <section className="border border-border rounded-2xl bg-card p-5 mb-4">
          <h2 className="text-xl mb-2.5 font-bold">Human Decision Drivers Framework</h2>
          <p className="my-2.5">
            The Human Decision Drivers Framework explains why conversational behaviors change in real interactions.
          </p>
          <p className="my-2.5">
            It describes internal forces—such as confidence, motivation, and perceived risk—that shape how people think, engage, regulate emotion, and decide during conversations. These drivers are not measured directly. Instead, they serve as an interpretive lens that ensures observable behaviors are understood in context, rather than treated as isolated actions.
          </p>
          <p className="my-2.5">
            By grounding Signal Intelligence in this framework, behavioral signals can be designed, interpreted, and coached in a way that reflects how people actually make decisions—without inferring psychological states, personality traits, or protected attributes.
          </p>
        </section>

        {/* Core Human Decision Drivers */}
        <section className="border border-border rounded-2xl bg-card p-5 mb-4">
          <h2 className="text-xl mb-2.5 font-bold">Core Human Decision Drivers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            <div className="border border-border rounded-2xl bg-muted/30 p-5">
              <span className="inline-block px-2.5 py-1 text-xs rounded-full bg-[#1e3a8a] text-white border-2 border-accent mr-2">
                Driver
              </span>
              <h3 className="text-base mt-2 mb-2">Cognitive Empathy / Perspective Taking</h3>
              <p className="my-2.5">
                The capacity to accurately infer another person's perspective and adjust behavior accordingly.
              </p>
              <p className="text-sm text-muted-foreground border-l-3 border-l-accent pl-3 mt-3">
                References:{' '}
                <a
                  href="https://doi.org/10.1037/0022-3514.44.1.113"
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent hover:underline"
                >
                  Davis (1983)
                </a>
                ,{' '}
                <a
                  href="https://doi.org/10.1177/1534582304267187"
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent hover:underline"
                >
                  Decety & Jackson (2004)
                </a>
              </p>
            </div>

            <div className="border border-border rounded-2xl bg-muted/30 p-5">
              <span className="inline-block px-2.5 py-1 text-xs rounded-full bg-[#1e3a8a] text-white border-2 border-accent mr-2">
                Driver
              </span>
              <h3 className="text-base mt-2 mb-2">Emotional Intelligence (EI)</h3>
              <p className="my-2.5">
                The ability to perceive, understand, and regulate emotions in oneself and others.
              </p>
              <p className="text-sm text-muted-foreground border-l-3 border-l-accent pl-3 mt-3">
                References:{' '}
                <a
                  href="https://doi.org/10.1207/s15327965pli1503_02"
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent hover:underline"
                >
                  Mayer, Salovey & Caruso (2004)
                </a>
                ,{' '}
                <a
                  href="https://www.danielgoleman.info/working-with-emotional-intelligence/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent hover:underline"
                >
                  Goleman (1998)
                </a>
              </p>
            </div>

            <div className="border border-border rounded-2xl bg-muted/30 p-5">
              <span className="inline-block px-2.5 py-1 text-xs rounded-full bg-[#1e3a8a] text-white border-2 border-accent mr-2">
                Driver
              </span>
              <h3 className="text-base mt-2 mb-2">Metacognition & Confidence Calibration</h3>
              <p className="my-2.5">
                Awareness of one's own thinking, limits of knowledge, and accuracy of self-assessment.
              </p>
              <p className="text-sm text-muted-foreground border-l-3 border-l-accent pl-3 mt-3">
                References:{' '}
                <a
                  href="https://doi.org/10.1037/0003-066X.34.10.906"
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent hover:underline"
                >
                  Flavell (1979)
                </a>
                ,{' '}
                <a
                  href="https://doi.org/10.1037/0022-3514.77.6.1121"
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent hover:underline"
                >
                  Kruger & Dunning (1999)
                </a>
              </p>
            </div>

            <div className="border border-border rounded-2xl bg-muted/30 p-5">
              <span className="inline-block px-2.5 py-1 text-xs rounded-full bg-[#1e3a8a] text-white border-2 border-accent mr-2">
                Driver
              </span>
              <h3 className="text-base mt-2 mb-2">Motivation, Autonomy & Commitment</h3>
              <p className="my-2.5">
                Internal drivers governing engagement, ownership, and follow-through.
              </p>
              <p className="text-sm text-muted-foreground border-l-3 border-l-accent pl-3 mt-3">
                References:{' '}
                <a
                  href="https://doi.org/10.1207/S15327965PLI1104_01"
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent hover:underline"
                >
                  Deci & Ryan (2000)
                </a>
                ,{' '}
                <a
                  href="https://www.influenceatwork.com/principles-of-persuasion/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent hover:underline"
                >
                  Cialdini (resource)
                </a>
              </p>
            </div>

            <div className="border border-border rounded-2xl bg-muted/30 p-5">
              <span className="inline-block px-2.5 py-1 text-xs rounded-full bg-[#1e3a8a] text-white border-2 border-accent mr-2">
                Driver
              </span>
              <h3 className="text-base mt-2 mb-2">Social Threat, Status & Identity</h3>
              <p className="my-2.5">
                How perceived risk to competence, autonomy, or identity affects engagement and
                resistance.
              </p>
              <p className="text-sm text-muted-foreground border-l-3 border-l-accent pl-3 mt-3">
                References:{' '}
                <a
                  href="https://doi.org/10.1037/0003-066X.52.6.613"
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent hover:underline"
                >
                  Steele (1997)
                </a>
                ,{' '}
                <a
                  href="https://doi.org/10.1016/j.tics.2004.01.010"
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent hover:underline"
                >
                  Eisenberger & Lieberman (2004)
                </a>
                ,{' '}
                <a
                  href="https://neuroleadership.com/your-brain-at-work/scarf-model"
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent hover:underline"
                >
                  Rock/SCARF (overview)
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Signal Intelligence Capabilities */}
        <section className="border border-border rounded-2xl bg-card p-5 mb-4">
          <h2 className="text-xl mb-2.5 font-bold">Signal Intelligence<sup className="text-xs">™</sup> Capabilities</h2>
          <p className="my-2.5">
            Signal Intelligence<sup className="text-xs">™</sup> Capabilities describe the conversational skills people develop through practice.
          </p>
          <p className="my-2.5">
            Each capability represents a distinct form of conversational judgment and reflects how underlying Human Decision Drivers shape what can be observed and coached in real conversations.
          </p>
          <p className="my-2.5">
            Each capability is supported by observable behavioral indicators used for coaching and learning.
          </p>
          <p className="text-sm text-muted-foreground border-l-3 border-l-accent pl-3 mt-3">
            Capabilities are behavior-based expressions used for coaching and learning—not psychological constructs, diagnostic tools, or classifications of individuals.
          </p>


          {/* Individual Capability Descriptions */}
          <div className="mt-6 space-y-4">
            <div className="border border-border rounded-2xl bg-muted/30 p-5">
              {/* Capability Badge */}
              <div className="mb-4">
                <span className="inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded-full bg-primary text-primary-foreground border-2 border-primary">
                  Signal Awareness
                </span>
              </div>
              <p className="my-2">Signal Awareness is the capability to notice relevant customer cues and use those cues to shape purposeful, well-sequenced questions.</p>
              <p className="text-sm text-muted-foreground italic">Often shows up when a seller notices relevant customer cues and uses them to shape their next question.</p>
            </div>

            <div className="border border-border rounded-2xl bg-muted/30 p-5">
              {/* Capability Badge */}
              <div className="mb-4">
                <span className="inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded-full bg-primary text-primary-foreground border-2 border-primary">
                  Signal Interpretation
                </span>
              </div>
              <p className="my-2">Signal Interpretation is the capability to make sense of what a customer is communicating and adjust responses as new information emerges.</p>
              <p className="text-sm text-muted-foreground italic">Often shows up when a seller reflects what they're hearing and adapts their response.</p>
            </div>

            <div className="border border-border rounded-2xl bg-muted/30 p-5">
              {/* Capability Badge */}
              <div className="mb-4">
                <span className="inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded-full bg-primary text-primary-foreground border-2 border-primary">
                  Value Connection
                </span>
              </div>
              <p className="my-2">Value Connection is the capability to link discussion to what matters to the customer by translating priorities into outcome-based value.</p>
              <p className="text-sm text-muted-foreground italic">Often shows up when a seller connects the conversation back to outcomes or priorities already expressed.</p>
            </div>

            <div className="border border-border rounded-2xl bg-muted/30 p-5">
              {/* Capability Badge */}
              <div className="mb-4">
                <span className="inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded-full bg-primary text-primary-foreground border-2 border-primary">
                  Customer Engagement Monitoring
                </span>
              </div>
              <p className="my-2">Customer Engagement Monitoring is the capability to notice and track changes in customer engagement, including participation, energy, and forward-looking behavior.</p>
              <p className="text-sm text-muted-foreground italic">Often shows up when a seller notices changes in participation, energy, or forward-looking questions.</p>
            </div>

            <div className="border border-border rounded-2xl bg-muted/30 p-5">
              {/* Capability Badge */}
              <div className="mb-4">
                <span className="inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded-full bg-primary text-primary-foreground border-2 border-primary">
                  Objection Navigation
                </span>
              </div>
              <p className="my-2">Objection Navigation is the capability to respond to resistance calmly by acknowledging concerns and exploring what's behind them.</p>
              <p className="text-sm text-muted-foreground italic">Often shows up when a seller acknowledges a concern before exploring it.</p>
            </div>

            <div className="border border-border rounded-2xl bg-muted/30 p-5">
              {/* Capability Badge */}
              <div className="mb-4">
                <span className="inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded-full bg-primary text-primary-foreground border-2 border-primary">
                  Conversation Management
                </span>
              </div>
              <p className="my-2">Conversation Management is the capability to guide a conversation with purpose through structure, transitions, and shared understanding.</p>
              <p className="text-sm text-muted-foreground italic">Often shows up when a seller summarizes, transitions, or clarifies next steps.</p>
            </div>

            <div className="border border-border rounded-2xl bg-muted/30 p-5">
              {/* Capability Badge */}
              <div className="mb-4">
                <span className="inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded-full bg-primary text-primary-foreground border-2 border-primary">
                  Commitment Generation
                </span>
              </div>
              <p className="my-2">Commitment Generation is the capability to secure clear, voluntary next actions while preserving autonomy.</p>
              <p className="text-sm text-muted-foreground italic">Often shows up when a seller checks readiness and aligns on next steps.</p>
            </div>

            <div className="border border-border rounded-2xl bg-muted/30 p-5">
              {/* Capability Badge */}
              <div className="mb-4">
                <span className="inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded-full bg-primary text-primary-foreground border-2 border-primary">
                  Adaptive Response
                </span>
              </div>
              <p className="my-2">Adaptive Response is the capability to adjust tone, depth, pacing, or approach in response to changing customer signals.</p>
              <p className="text-sm text-muted-foreground italic">Often shows up when a seller shifts their approach as signals change.</p>
            </div>
          </div>
        </section>

        {/* Behavioral Metrics */}
        <section className="border border-border rounded-2xl bg-card p-5 mb-4">
          <h2 className="text-xl mb-2.5 font-bold">Behavioral Metrics</h2>
          <p className="text-base font-semibold my-2.5">Observable behaviors that support coaching and skill development</p>
          <p className="my-2.5">
            Behavioral Metrics describe how each conversational skill shows up in practice.
          </p>
          <p className="my-2.5">
            Each Signal Intelligence Capability is supported by a small set of observable behaviors that reflect how underlying Human Decision Drivers are expressed in real conversations. These behaviors make skills easier to recognize, discuss, and develop during practice, while focusing only on what can be seen and heard in the interaction.
          </p>
          <p className="text-sm text-muted-foreground border-l-3 border-l-accent pl-3 mt-3 mb-4">
            These behaviors are observed during structured practice sessions such as role play, simulations, and coached conversations.
          </p>

          <div className="border border-border rounded-2xl bg-muted/30 p-5 my-3.5">
            {/* Capability → Metric Badge Pair */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded-full bg-primary text-primary-foreground border-2 border-primary">
                Signal Awareness
              </span>
              <span className="text-muted-foreground text-lg" aria-hidden="true">→</span>
              <span className="inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded-full bg-accent text-accent-foreground border-2 border-accent">
                Question Quality
              </span>
            </div>
            <p className="font-semibold my-2.5">What this looks like in conversation</p>
            <ul className="my-2.5 ml-5 list-disc">
              <li>Purposeful, customer-centered questioning</li>
              <li>Logical sequencing</li>
              <li>Effective follow-up</li>
            </ul>
            <p className="font-semibold my-2.5">Examples of observable indicators</p>
            <ul className="my-2.5 ml-5 list-disc">
              <li>Open vs. closed ratio</li>
              <li>Relevance to customer goals</li>
              <li>Follow-up depth</li>
            </ul>
          </div>

          <div className="border border-border rounded-2xl bg-muted/30 p-5 my-3.5">
            {/* Capability → Metric Badge Pair */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded-full bg-primary text-primary-foreground border-2 border-primary">
                Signal Interpretation
              </span>
              <span className="text-muted-foreground text-lg" aria-hidden="true">→</span>
              <span className="inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded-full bg-accent text-accent-foreground border-2 border-accent">
                Listening & Responsiveness
              </span>
            </div>
            <p className="font-semibold my-2.5">What this looks like in conversation</p>
            <ul className="my-2.5 ml-5 list-disc">
              <li>Accurate paraphrasing</li>
              <li>Explicit acknowledgment of concerns</li>
              <li>Behavioral adjustment based on new information</li>
            </ul>
            <p className="font-semibold my-2.5">Examples of observable indicators</p>
            <ul className="my-2.5 ml-5 list-disc">
              <li>Paraphrase accuracy</li>
              <li>Concern acknowledgment</li>
              <li>Observable response shifts</li>
            </ul>
          </div>

          <div className="border border-border rounded-2xl bg-muted/30 p-5 my-3.5">
            {/* Capability → Metric Badge Pair */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded-full bg-primary text-primary-foreground border-2 border-primary">
                Value Connection
              </span>
              <span className="text-muted-foreground text-lg" aria-hidden="true">→</span>
              <span className="inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded-full bg-accent text-accent-foreground border-2 border-accent">
                Value Framing
              </span>
            </div>
            <p className="font-semibold my-2.5">What this looks like in conversation</p>
            <ul className="my-2.5 ml-5 list-disc">
              <li>Outcome-focused language</li>
              <li>Customer priority alignment</li>
              <li>Avoids feature dumping</li>
            </ul>
            <p className="font-semibold my-2.5">Examples of observable indicators</p>
            <ul className="my-2.5 ml-5 list-disc">
              <li>Outcome references</li>
              <li>Explicit linkage to customer priorities</li>
              <li>Feature-to-value ratio</li>
            </ul>
          </div>

          <div className="border border-border rounded-2xl bg-muted/30 p-5 my-3.5">
            {/* Capability → Metric Badge Pair */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded-full bg-primary text-primary-foreground border-2 border-primary">
                Customer Engagement Monitoring
              </span>
              <span className="text-muted-foreground text-lg" aria-hidden="true">→</span>
              <span className="inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded-full bg-accent text-accent-foreground border-2 border-accent">
                Engagement Cues
              </span>
            </div>
            <p className="font-semibold my-2.5">What this looks like in conversation</p>
            <ul className="my-2.5 ml-5 list-disc">
              <li>Monitors energy and participation</li>
              <li>Identifies forward-looking signals</li>
              <li>Adjusts engagement strategy</li>
            </ul>
            <p className="font-semibold my-2.5">Examples of observable indicators</p>
            <ul className="my-2.5 ml-5 list-disc">
              <li>Talk-time balance</li>
              <li>Quality of customer questions</li>
              <li>Forward-looking statements</li>
              <li>Energy/pacing shifts</li>
            </ul>
          </div>

          <div className="border border-border rounded-2xl bg-muted/30 p-5 my-3.5">
            {/* Capability → Metric Badge Pair */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded-full bg-primary text-primary-foreground border-2 border-primary">
                Objection Navigation
              </span>
              <span className="text-muted-foreground text-lg" aria-hidden="true">→</span>
              <span className="inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded-full bg-accent text-accent-foreground border-2 border-accent">
                Objection Handling
              </span>
            </div>
            <p className="font-semibold my-2.5">What this looks like in conversation</p>
            <ul className="my-2.5 ml-5 list-disc">
              <li>Calm response to resistance</li>
              <li>Exploration before response</li>
              <li>Acknowledgment before reframing</li>
            </ul>
            <p className="font-semibold my-2.5">Examples of observable indicators</p>
            <ul className="my-2.5 ml-5 list-disc">
              <li>Acknowledgment-first behavior</li>
              <li>Depth of concern exploration</li>
              <li>Tone/pacing stability</li>
            </ul>
          </div>

          <div className="border border-border rounded-2xl bg-muted/30 p-5 my-3.5">
            {/* Capability → Metric Badge Pair */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded-full bg-primary text-primary-foreground border-2 border-primary">
                Conversation Management
              </span>
              <span className="text-muted-foreground text-lg" aria-hidden="true">→</span>
              <span className="inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded-full bg-accent text-accent-foreground border-2 border-accent">
                Conversation Control & Structure
              </span>
            </div>
            <p className="font-semibold my-2.5">What this looks like in conversation</p>
            <ul className="my-2.5 ml-5 list-disc">
              <li>Clear purpose setting</li>
              <li>Smooth transitions</li>
              <li>Summarizes and clarifies next steps</li>
            </ul>
            <p className="font-semibold my-2.5">Examples of observable indicators</p>
            <ul className="my-2.5 ml-5 list-disc">
              <li>Purpose clarity</li>
              <li>Transition smoothness</li>
              <li>Summary accuracy</li>
              <li>Next-step clarity</li>
            </ul>
          </div>

          <div className="border border-border rounded-2xl bg-muted/30 p-5 my-3.5">
            {/* Capability → Metric Badge Pair */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded-full bg-primary text-primary-foreground border-2 border-primary">
                Adaptive Response
              </span>
              <span className="text-muted-foreground text-lg" aria-hidden="true">→</span>
              <span className="inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded-full bg-accent text-accent-foreground border-2 border-accent">
                Adaptability
              </span>
            </div>
            <p className="font-semibold my-2.5">What this looks like in conversation</p>
            <ul className="my-2.5 ml-5 list-disc">
              <li>Adjusts tone, depth, or pacing based on signals</li>
              <li>Shifts approach in response to new information</li>
            </ul>
            <p className="font-semibold my-2.5">Examples of observable indicators</p>
            <ul className="my-2.5 ml-5 list-disc">
              <li>Signal-aligned behavioral shifts</li>
            </ul>
          </div>

          <div className="border border-border rounded-2xl bg-muted/30 p-5 my-3.5">
            {/* Capability → Metric Badge Pair */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded-full bg-primary text-primary-foreground border-2 border-primary">
                Commitment Generation
              </span>
              <span className="text-muted-foreground text-lg" aria-hidden="true">→</span>
              <span className="inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded-full bg-accent text-accent-foreground border-2 border-accent">
                Commitment Gaining
              </span>
            </div>
            <p className="font-semibold my-2.5">What this looks like in conversation</p>
            <ul className="my-2.5 ml-5 list-disc">
              <li>Secures voluntary, explicit next actions</li>
              <li>Confirms mutual agreement and ownership</li>
            </ul>
            <p className="font-semibold my-2.5">Examples of observable indicators</p>
            <ul className="my-2.5 ml-5 list-disc">
              <li>Explicit commitments</li>
              <li>Specific next steps</li>
              <li>Ownership clarity</li>
            </ul>
          </div>
        </section>

        {/* Methodological Safeguards */}
        <section className="border border-border rounded-2xl bg-card p-5 mb-4">
          <h2 className="text-xl mb-2.5 font-bold">Methodological Safeguards</h2>
          <p className="my-2.5">
            Signal Intelligence<sup className="text-xs">™</sup> is non-clinical and non-diagnostic. It assesses observable conversation behavior only and does not infer protected attributes or mental health status. All metrics are explainable, coachable, and auditable.
          </p>
        </section>

        {/* References */}
        <section className="border border-border rounded-2xl bg-card p-5 mb-4">
          <h2 className="text-xl mb-2.5 font-bold">References (Links)</h2>
          <ol className="my-2.5 ml-5 list-decimal">
            <li className="my-2">
              Davis, M. H. (1983).{' '}
              <a
                href="https://doi.org/10.1037/0022-3514.44.1.113"
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:underline"
              >
                https://doi.org/10.1037/0022-3514.44.1.113
              </a>
            </li>
            <li className="my-2">
              Decety, J., & Jackson, P. L. (2004).{' '}
              <a
                href="https://doi.org/10.1177/1534582304267187"
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:underline"
              >
                https://doi.org/10.1177/1534582304267187
              </a>
            </li>
            <li className="my-2">
              Mayer, J. D., Salovey, P., & Caruso, D. R. (2004).{' '}
              <a
                href="https://doi.org/10.1207/s15327965pli1503_02"
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:underline"
              >
                https://doi.org/10.1207/s15327965pli1503_02
              </a>
            </li>
            <li className="my-2">
              Goleman, D. (1998).{' '}
              <a
                href="https://www.danielgoleman.info/working-with-emotional-intelligence/"
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:underline"
              >
                https://www.danielgoleman.info/working-with-emotional-intelligence/
              </a>
            </li>
            <li className="my-2">
              Flavell, J. H. (1979).{' '}
              <a
                href="https://doi.org/10.1037/0003-066X.34.10.906"
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:underline"
              >
                https://doi.org/10.1037/0003-066X.34.10.906
              </a>
            </li>
            <li className="my-2">
              Kruger, J., & Dunning, D. (1999).{' '}
              <a
                href="https://doi.org/10.1037/0022-3514.77.6.1121"
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:underline"
              >
                https://doi.org/10.1037/0022-3514.77.6.1121
              </a>
            </li>
            <li className="my-2">
              Deci, E. L., & Ryan, R. M. (2000).{' '}
              <a
                href="https://doi.org/10.1207/S15327965PLI1104_01"
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:underline"
              >
                https://doi.org/10.1207/S15327965PLI1104_01
              </a>
            </li>
            <li className="my-2">
              Cialdini (resource).{' '}
              <a
                href="https://www.influenceatwork.com/principles-of-persuasion/"
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:underline"
              >
                https://www.influenceatwork.com/principles-of-persuasion/
              </a>
            </li>
            <li className="my-2">
              Steele, C. M. (1997).{' '}
              <a
                href="https://doi.org/10.1037/0003-066X.52.6.613"
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:underline"
              >
                https://doi.org/10.1037/0003-066X.52.6.613
              </a>
            </li>
            <li className="my-2">
              Eisenberger, N. I., & Lieberman, M. D. (2004).{' '}
              <a
                href="https://doi.org/10.1016/j.tics.2004.01.010"
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:underline"
              >
                https://doi.org/10.1016/j.tics.2004.01.010
              </a>
            </li>
            <li className="my-2">
              Rock/SCARF (overview).{' '}
              <a
                href="https://neuroleadership.com/your-brain-at-work/scarf-model"
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:underline"
              >
                https://neuroleadership.com/your-brain-at-work/scarf-model
              </a>
            </li>
            <li className="my-2">
              Cronbach, L. J., & Meehl, P. E. (1955).{' '}
              <a
                href="https://doi.org/10.1037/h0040957"
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:underline"
              >
                https://doi.org/10.1037/h0040957
              </a>
            </li>
            <li className="my-2">
              Messick, S. (1995).{' '}
              <a
                href="https://doi.org/10.1037/0003-066X.50.9.741"
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:underline"
              >
                https://doi.org/10.1037/0003-066X.50.9.741
              </a>
            </li>
            <li className="my-2">
              Doshi-Velez, F., & Kim, B. (2017).{' '}
              <a
                href="https://arxiv.org/abs/1702.08608"
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:underline"
              >
                https://arxiv.org/abs/1702.08608
              </a>
            </li>
            <li className="my-2">
              OECD (2019).{' '}
              <a
                href="https://oecd.ai/en/ai-principles"
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:underline"
              >
                https://oecd.ai/en/ai-principles
              </a>
            </li>
          </ol>
        </section>
      </div>
    </div>
  );
}
