"use client";
import BodyClassName from "../BodyClassName";
import SiteHeader from "../site/SiteHeader";
import SiteFooter from "../site/SiteFooter";

export default function AgenticWorkflowPage() {
  return (
    <>
      <BodyClassName className="product-page-body" />
      <SiteHeader />
      <main className="agentic-workflow-page">
        
        {/* --- 1. AGENTIC HERO --- */}
        <section className="service-hero agentic-hero">
          <div className="company-shell">
            <div className="service-hero-content fade-in">
              <div className="product-badge service-badge">
                <span className="pulse-dot"></span>
                Workflow Automation
              </div>
              <h1>From Copilots to Autopilots. Build Autonomous Business Nodes.</h1>
              <p className="hero-subtext">
                Chatbots wait for instructions. <strong>Agentic Workflows take action.</strong> We engineer autonomous AI agents that fetch data, reason through complex operational logic, trigger APIs, and execute multi-step tasks across your enterprise stack without human intervention.
              </p>
              <div className="hero-actions">
                <a href="/contact-us" className="about-pill-btn strategy-btn">Explore Agent Capabilities</a>
              </div>
            </div>
          </div>
        </section>

        {/* --- 2. THE AGENTIC PIPELINE (VISUAL UI) --- */}
        <section className="workflow-pipeline-section">
          <div className="company-shell">
            <div className="section-header center-align">
              <h2>How an Autonomous Agent Thinks</h2>
              <p>We don't build text generators. We build decision-engines connected to your company's nervous system.</p>
            </div>
            
            <div className="pipeline-container">
              <div className="pipeline-node">
                <div className="node-icon">01</div>
                <h3>Context Trigger</h3>
                <p>The agent detects an inbound email, a webhook payload, or a threshold alert in your database.</p>
              </div>
              <div className="pipeline-connector"></div>
              <div className="pipeline-node highlight-node">
                <div className="node-icon">02</div>
                <h3>Agentic Reasoning</h3>
                <p>The LLM analyzes the context, determines the goal, and plans a multi-step execution strategy.</p>
              </div>
              <div className="pipeline-connector"></div>
              <div className="pipeline-node">
                <div className="node-icon">03</div>
                <h3>Tool Execution</h3>
                <p>The agent independently calls custom APIs, queries SQL databases, or updates your CRM.</p>
              </div>
              <div className="pipeline-connector"></div>
              <div className="pipeline-node">
                <div className="node-icon">04</div>
                <h3>Resolution & Audit</h3>
                <p>The task is completed, and a cryptographic log is generated for DPDP compliance auditing.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- 3. ENTERPRISE USE CASES --- */}
        <section className="agent-use-cases-section">
          <div className="company-shell">
            <div className="cases-grid">
              <div className="cases-text">
                <h2>Operational deployments that drive immediate margin.</h2>
                <p>We target high-friction, data-heavy workflows where human operators are currently acting as expensive data routers.</p>
              </div>
              
              <div className="cases-cards">
                <div className="c-card">
                  <h3>Autonomous L1 Support</h3>
                  <p>Agents that don't just answer FAQs, but actually fetch user accounts, process refunds, and modify database records autonomously.</p>
                </div>
                <div className="c-card">
                  <h3>Dynamic Lead Enrichment</h3>
                  <p>Inbound leads are automatically researched, scored, and routed into your CRM with fully drafted, highly-personalized outreach contexts.</p>
                </div>
                <div className="c-card">
                  <h3>Financial Reconciliation</h3>
                  <p>Agents that continuously monitor payment gateways, match them against internal ledgers, and flag anomalies for human review.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 4. ENGINEERING STACK --- */}
        <section className="engineering-stack-section">
          <div className="company-shell">
            <div className="stack-card">
              <div className="stack-content">
                <h2>Engineered for Performance. Zero Bloat.</h2>
                <p>We do not rely on bloated, off-the-shelf automation plugins that compromise security and speed. Our agentic architectures are built on foundational engineering:</p>
                <ul className="stack-list">
                  <li><strong>Custom Node.js Middleware:</strong> Lightning-fast event routing and webhook management.</li>
                  <li><strong>Python Runtime Environments:</strong> Heavy-duty data processing and algorithmic reasoning loops.</li>
                  <li><strong>Vendor-Agnostic LLMs:</strong> Seamlessly swap between OpenAI, Anthropic, or local open-source models as your security requirements dictate.</li>
                </ul>
              </div>
              <div className="stack-visual">
                <div className="code-block-mockup">
                  <pre>
                    <code>
{`async function executeAgenticLoop(payload) {
  const context = await fetchVectorDB(payload.id);
  const plan = await llm.reason(context);
  
  if (plan.requiresAction) {
    await toolchain.execute(plan.tool, plan.args);
    await auditLog.record(payload.id, plan);
  }
  return { status: "Autonomous Resolution Achieved" };
}`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}