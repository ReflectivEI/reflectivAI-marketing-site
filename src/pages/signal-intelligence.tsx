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
          <p className="text-muted-foreground mb-0">
            Capabilities, Behavioral Metrics & Methodology (ReflectivAI)
          </p>
          <p className="text-sm text-muted-foreground border-l-3 border-l-accent pl-3 mt-3">
            This page is behavior-first, non-clinical, and non-diagnostic. It measures observable
            conversation behaviors and does not infer protected attributes or mental health status.
          </p>
        </header>

        {/* Purpose */}
        <section className="border border-border rounded-2xl bg-card p-5 mb-4">
          <h2 className="text-xl mb-2.5">Purpose</h2>
          <p className="my-2.5">
            Signal Intelligence<sup className="text-xs">™</sup> (SI) is ReflectivAI's behavior-based capability framework for
            interpreting conversational performance during practice sessions. SI measures observable
            conversation behaviors—what people say, how they respond, and how they adapt—without
            inferring psychological states, personality traits, or protected attributes.
          </p>
          <p className="my-2.5">
            The framework is explainable, coachable, and auditable. It is designed for professional
            development, training, and coaching contexts—not for employment decisions, performance
            evaluation, or live call monitoring.
          </p>
        </section>

        {/* How to Read This Page */}
        <section className="border border-border rounded-2xl bg-card p-5 mb-4">
          <h2 className="text-xl mb-2.5">How to Read This Page</h2>
          <p className="my-2.5">
            This page is structured in three layers:
          </p>
          <ol className="my-2.5 ml-5 list-decimal space-y-2">
            <li>
              <strong>Human Decision Drivers Framework</strong> — The interpretive lens that explains
              why behavioral signals appear in conversations (not measured directly)
            </li>
            <li>
              <strong>Signal Intelligence Capabilities</strong> — The core building blocks of SI that
              represent underlying conversational judgment systems
            </li>
            <li>
              <strong>Behavioral Metrics</strong> — Observable, measurable conversation behaviors that
              reflect the presence or absence of each capability
            </li>
          </ol>
          <p className="my-2.5">
            Each layer builds on the previous one, moving from theoretical foundation to practical
            measurement.
          </p>
        </section>

        {/* Human Decision Drivers Framework */}
        <section className="border border-border rounded-2xl bg-card p-5 mb-4">
          <h2 className="text-xl mb-2.5">Human Decision Drivers Framework</h2>
          <p className="my-2.5">
            Signal Intelligence<sup className="text-xs">™</sup> is grounded in the <strong>Human Decision Drivers Framework</strong>,
            which identifies internal drivers that influence how people think, engage, regulate
            emotion, and commit during real conversations. This framework serves as an interpretive
            lens—it explains why behavioral signals appear, but is not measured directly. Instead, it
            informs the design of Signal Intelligence Capabilities and their associated metrics.
          </p>
        </section>

        {/* Core Human Decision Drivers */}
        <section className="border border-border rounded-2xl bg-card p-5 mb-4">
          <h2 className="text-xl mb-2.5">Core Human Decision Drivers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            <div className="border border-border rounded-2xl bg-muted/30 p-5">
              <span className="inline-block text-xs text-muted-foreground border border-border rounded-full px-2.5 py-1 mr-2">
                Driver
              </span>
              <h3 className="text-base mt-2 mb-2">Cognitive Empathy / Perspective Taking</h3>
              <p className="my-2.5">
                The capacity to accurately infer another person's mental and emotional state and
                adjust behavior accordingly.
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
              <span className="inline-block text-xs text-muted-foreground border border-border rounded-full px-2.5 py-1 mr-2">
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
              <span className="inline-block text-xs text-muted-foreground border border-border rounded-full px-2.5 py-1 mr-2">
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
              <span className="inline-block text-xs text-muted-foreground border border-border rounded-full px-2.5 py-1 mr-2">
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
              <span className="inline-block text-xs text-muted-foreground border border-border rounded-full px-2.5 py-1 mr-2">
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
          <h2 className="text-xl mb-2.5">Signal Intelligence<sup className="text-xs">™</sup> Capabilities</h2>
          <p className="my-2.5">
            Signal Intelligence<sup className="text-xs">™</sup> Capabilities are the core building blocks of the SI framework. Each
            capability represents an underlying conversational judgment system that produces observable
            behavior. Capabilities are not directly measured—instead, they are assessed through
            specific Behavioral Metrics that reflect their presence or absence in practice sessions.
          </p>

          <h3 className="text-base mt-4 mb-2">Capability-to-Metric Mapping</h3>
          <div className="w-full border border-border rounded-2xl overflow-hidden bg-muted/30 my-2.5">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-3 border-b border-border text-left text-sm font-semibold text-muted-foreground">
                    Signal Intelligence Capability
                  </th>
                  <th className="p-3 border-b border-border text-left text-sm font-semibold text-muted-foreground">
                    Behavioral Metric
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border-b border-border text-sm">Signal Awareness</td>
                  <td className="p-3 border-b border-border text-sm">Question Quality</td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-border text-sm">Signal Interpretation</td>
                  <td className="p-3 border-b border-border text-sm">
                    Listening & Responsiveness
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-border text-sm">Value Connection</td>
                  <td className="p-3 border-b border-border text-sm">Value Framing</td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-border text-sm">
                    Customer Engagement Monitoring
                  </td>
                  <td className="p-3 border-b border-border text-sm">Engagement Cues</td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-border text-sm">Objection Navigation</td>
                  <td className="p-3 border-b border-border text-sm">Objection Handling</td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-border text-sm">Conversation Management</td>
                  <td className="p-3 border-b border-border text-sm">
                    Conversation Control & Structure
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-border text-sm">Adaptive Response</td>
                  <td className="p-3 border-b border-border text-sm">Adaptability</td>
                </tr>
                <tr>
                  <td className="p-3 text-sm">Commitment Generation</td>
                  <td className="p-3 text-sm">Commitment Gaining</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Behavioral Metrics & Measurement Indicators */}
        <section className="border border-border rounded-2xl bg-card p-5 mb-4">
          <h2 className="text-xl mb-2.5">Behavioral Metrics & Measurement Indicators</h2>

          <div className="border border-border rounded-2xl bg-muted/30 p-5 my-3.5">
            <h3 className="text-base mb-2">Signal Awareness - Question Quality</h3>
            <p className="font-semibold my-2.5">Defined behaviors</p>
            <ul className="my-2.5 ml-5 list-disc">
              <li>Purposeful, customer-centered questioning</li>
              <li>Logical sequencing</li>
              <li>Effective follow-up</li>
            </ul>
            <p className="font-semibold my-2.5">Measurement indicators</p>
            <ul className="my-2.5 ml-5 list-disc">
              <li>Open vs. closed ratio</li>
              <li>Relevance to customer goals</li>
              <li>Follow-up depth</li>
            </ul>
          </div>

          <div className="border border-border rounded-2xl bg-muted/30 p-5 my-3.5">
            <h3 className="text-base mb-2">Signal Interpretation - Listening & Responsiveness</h3>
            <p className="font-semibold my-2.5">Defined behaviors</p>
            <ul className="my-2.5 ml-5 list-disc">
              <li>Accurate paraphrasing</li>
              <li>Explicit acknowledgment of concerns</li>
              <li>Behavioral adjustment based on new information</li>
            </ul>
            <p className="font-semibold my-2.5">Measurement indicators</p>
            <ul className="my-2.5 ml-5 list-disc">
              <li>Paraphrase accuracy</li>
              <li>Concern acknowledgment</li>
              <li>Observable response shifts</li>
            </ul>
          </div>

          <div className="border border-border rounded-2xl bg-muted/30 p-5 my-3.5">
            <h3 className="text-base mb-2">Value Connection - Value Framing</h3>
            <p className="font-semibold my-2.5">Defined behaviors</p>
            <ul className="my-2.5 ml-5 list-disc">
              <li>Outcome-focused language</li>
              <li>Customer priority alignment</li>
              <li>Avoids feature dumping</li>
            </ul>
            <p className="font-semibold my-2.5">Measurement indicators</p>
            <ul className="my-2.5 ml-5 list-disc">
              <li>Outcome references</li>
              <li>Explicit linkage to customer priorities</li>
              <li>Feature-to-value ratio</li>
            </ul>
          </div>

          <div className="border border-border rounded-2xl bg-muted/30 p-5 my-3.5">
            <h3 className="text-base mb-2">
              Customer Engagement Monitoring - Engagement Cues
            </h3>
            <p className="font-semibold my-2.5">Defined behaviors</p>
            <ul className="my-2.5 ml-5 list-disc">
              <li>Monitors energy and participation</li>
              <li>Identifies forward-looking signals</li>
              <li>Adjusts engagement strategy</li>
            </ul>
            <p className="font-semibold my-2.5">Measurement indicators</p>
            <ul className="my-2.5 ml-5 list-disc">
              <li>Talk-time balance</li>
              <li>Quality of customer questions</li>
              <li>Forward-looking statements</li>
              <li>Energy/pacing shifts</li>
            </ul>
          </div>

          <div className="border border-border rounded-2xl bg-muted/30 p-5 my-3.5">
            <h3 className="text-base mb-2">Objection Navigation - Objection Handling</h3>
            <p className="font-semibold my-2.5">Defined behaviors</p>
            <ul className="my-2.5 ml-5 list-disc">
              <li>Calm response to resistance</li>
              <li>Exploration before response</li>
              <li>Acknowledgment before reframing</li>
            </ul>
            <p className="font-semibold my-2.5">Measurement indicators</p>
            <ul className="my-2.5 ml-5 list-disc">
              <li>Acknowledgment-first behavior</li>
              <li>Depth of concern exploration</li>
              <li>Tone/pacing stability</li>
            </ul>
          </div>

          <div className="border border-border rounded-2xl bg-muted/30 p-5 my-3.5">
            <h3 className="text-base mb-2">
              Conversation Management - Conversation Control & Structure
            </h3>
            <p className="font-semibold my-2.5">Defined behaviors</p>
            <ul className="my-2.5 ml-5 list-disc">
              <li>Clear purpose setting</li>
              <li>Smooth transitions</li>
              <li>Summarizes and clarifies next steps</li>
            </ul>
            <p className="font-semibold my-2.5">Measurement indicators</p>
            <ul className="my-2.5 ml-5 list-disc">
              <li>Purpose clarity</li>
              <li>Transition smoothness</li>
              <li>Summary accuracy</li>
              <li>Next-step clarity</li>
            </ul>
          </div>

          <div className="border border-border rounded-2xl bg-muted/30 p-5 my-3.5">
            <h3 className="text-base mb-2">Adaptive Response - Adaptability</h3>
            <p className="font-semibold my-2.5">Defined behaviors</p>
            <ul className="my-2.5 ml-5 list-disc">
              <li>Adjusts tone, depth, or pacing based on signals</li>
              <li>Shifts approach in response to new information</li>
            </ul>
            <p className="font-semibold my-2.5">Measurement indicators</p>
            <ul className="my-2.5 ml-5 list-disc">
              <li>Signal-aligned behavioral shifts</li>
            </ul>
          </div>

          <div className="border border-border rounded-2xl bg-muted/30 p-5 my-3.5">
            <h3 className="text-base mb-2">Commitment Generation - Commitment Gaining</h3>
            <p className="font-semibold my-2.5">Defined behaviors</p>
            <ul className="my-2.5 ml-5 list-disc">
              <li>Secures voluntary, explicit next actions</li>
              <li>Confirms mutual agreement and ownership</li>
            </ul>
            <p className="font-semibold my-2.5">Measurement indicators</p>
            <ul className="my-2.5 ml-5 list-disc">
              <li>Explicit commitments</li>
              <li>Specific next steps</li>
              <li>Ownership clarity</li>
            </ul>
          </div>
        </section>

        {/* Methodological Safeguards */}
        <section className="border border-border rounded-2xl bg-card p-5 mb-4">
          <h2 className="text-xl mb-2.5">Methodological Safeguards</h2>
          <p className="my-2.5">
            Signal Intelligence is non-clinical and non-diagnostic. It assesses observable
            conversation behavior only and does not infer protected attributes or mental health
            status. Metrics are explainable, coachable, and auditable.
          </p>
          <p className="text-sm text-muted-foreground border-l-3 border-l-accent pl-3 mt-3">
            Validity foundations:{' '}
            <a
              href="https://doi.org/10.1037/h0040957"
              target="_blank"
              rel="noreferrer"
              className="text-accent hover:underline"
            >
              Cronbach & Meehl (1955)
            </a>
            ,{' '}
            <a
              href="https://doi.org/10.1037/0003-066X.50.9.741"
              target="_blank"
              rel="noreferrer"
              className="text-accent hover:underline"
            >
              Messick (1995)
            </a>
          </p>
        </section>

        {/* References */}
        <section className="border border-border rounded-2xl bg-card p-5 mb-4">
          <h2 className="text-xl mb-2.5">References (Links)</h2>
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
