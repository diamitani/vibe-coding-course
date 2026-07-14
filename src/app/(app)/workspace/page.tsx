export default function WorkspacePage() {
  return (
    <div className="page">
      <div className="mb-6">
        <h1 style={{ fontSize: '1.125rem', fontWeight: 600, letterSpacing: '-0.015em' }}>AI Workspace</h1>
        <p className="text-sm text-muted mt-1">
          Your AI-powered development environment — tutor, prompt builder, and document tools.
        </p>
      </div>

      {/* Coming Soon cards */}
      <div className="grid-3 mb-6">
        {/* AI Tutor */}
        <div className="card">
          <div className="card-body">
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🤖</div>
            <div className="card-title mb-4">AI Tutor</div>
            <div className="card-desc mb-4">
              A personalized AI instructor that understands your knowledge level, learning style, and goals.
              Get custom learning plans, real-time code guidance, and project feedback.
            </div>
            <div className="flex flex-col gap-2 text-sm text-muted mb-4">
              <div className="flex items-center gap-2"><span>✓</span> Student knowledgebase</div>
              <div className="flex items-center gap-2"><span>✓</span> Platform docs integration</div>
              <div className="flex items-center gap-2"><span>✓</span> Industry knowledge</div>
            </div>
            <span className="tag tag-warning">Coming Soon</span>
          </div>
        </div>

        {/* Prompt Builder */}
        <div className="card">
          <div className="card-body">
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⚡</div>
            <div className="card-title mb-4">Prompt Builder</div>
            <div className="card-desc mb-4">
              Compile loose intent into precise AI-agent manifests. PAL (Prompt Abstraction Layer)
              transforms natural language into structured agent runtimes.
            </div>
            <div className="flex flex-col gap-2 text-sm text-muted mb-4">
              <div className="flex items-center gap-2"><span>✓</span> Intent extraction</div>
              <div className="flex items-center gap-2"><span>✓</span> Context injection</div>
              <div className="flex items-center gap-2"><span>✓</span> Runtime compilation</div>
            </div>
            <span className="tag tag-warning">Coming Soon</span>
          </div>
        </div>

        {/* Document Builder */}
        <div className="card">
          <div className="card-body">
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📄</div>
            <div className="card-title mb-4">Document Builder</div>
            <div className="card-desc mb-4">
              Generate PRDs, sitemaps, architecture docs, and technical specs from conversation.
              Context engineering for production workflows.
            </div>
            <div className="flex flex-col gap-2 text-sm text-muted mb-4">
              <div className="flex items-center gap-2"><span>✓</span> PRD generation</div>
              <div className="flex items-center gap-2"><span>✓</span> SiteMap builder</div>
              <div className="flex items-center gap-2"><span>✓</span> Architecture specs</div>
            </div>
            <span className="tag tag-warning">Coming Soon</span>
          </div>
        </div>
      </div>

      {/* Lab Copilot */}
      <div className="card mb-6">
        <div className="card-body">
          <div className="flex items-center gap-4">
            <div style={{ fontSize: '2rem' }}>🧪</div>
            <div className="flex-1">
              <div className="card-title mb-4">Lab Copilot</div>
              <div className="card-desc">
                Work through structured, hands-on labs with AI guidance at every step.
                Build real projects while the copilot explains concepts, reviews your code, and unblocks you.
              </div>
            </div>
            <span className="tag tag-warning">Coming Soon</span>
          </div>
        </div>
      </div>

      {/* Live Build Tutorials */}
      <h2 style={{ fontSize: '0.9375rem', fontWeight: 600, marginBottom: '1rem' }}>Live Build Tutorials</h2>
      <div className="grid-3">
        {[
          { title: 'Photography Portfolio', desc: 'Build an art gallery with e-commerce links. Template it for reuse.', icon: '📸' },
          { title: 'Coworking Directory', desc: 'Create a coworking space directory. Promote and reach out to claim listings.', icon: '🏢' },
          { title: 'Agency Marketing Site', desc: 'Build a creative agency site with inbound lead flows and service pricing.', icon: '🎨' },
          { title: 'Social Media Workflow', desc: 'Automate LinkedIn content creation and scheduling with AI.', icon: '📱' },
          { title: 'Brand Calendar', desc: 'Create an AI-powered content calendar and brand asset manager.', icon: '📅' },
          { title: 'AI Automation Pipeline', desc: 'Chain AI tools together for end-to-end content production.', icon: '⚙️' },
        ].map(project => (
          <div key={project.title} className="card">
            <div className="card-body">
              <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{project.icon}</div>
              <div className="card-title mb-4">{project.title}</div>
              <div className="card-desc">{project.desc}</div>
              <div className="mt-4">
                <span className="tag tag-warning">Coming Soon</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
