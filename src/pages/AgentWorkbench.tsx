import React, { useCallback, useRef, useState } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  addEdge,
  useNodesState,
  useEdgesState,
  Connection,
  Edge,
  Node,
  ReactFlowProvider,
  Position,
  BackgroundVariant,
} from 'react-flow-renderer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

// Demo agent icons (SVG inline, styled to match site)
const agentIcons = {
  Research: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#3A86FF"/><path d="M10 22l4-4m0 0l4-4m-4 4l4 4m-4-4l-4-4" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
  Curiosity: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#FF6B6B"/><path d="M16 10v8m0 4h.01" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round"/></svg>
  ),
  Writer: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#FFD166"/><rect x="10" y="14" width="12" height="4" rx="2" fill="#FAFAFA"/></svg>
  ),
  Math: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#06D6A0"/><path d="M12 16h8M16 12v8" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round"/></svg>
  ),
  Organizer: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#9B5DE5"/><rect x="10" y="10" width="12" height="12" rx="2" fill="#FAFAFA"/></svg>
  ),
};

const demoAgents = [
  { type: 'Research', color: '#3A86FF', label: 'Research Agent' },
  { type: 'Curiosity', color: '#FF6B6B', label: 'Curiosity Agent' },
  { type: 'Writer', color: '#FFD166', label: 'Writer Agent' },
  { type: 'Math', color: '#06D6A0', label: 'Math Agent' },
  { type: 'Organizer', color: '#9B5DE5', label: 'Organizer Agent' },
];

const initialNodes: Node[] = [];
const initialEdges: Edge[] = [];

const AgentWorkbench: React.FC = () => {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [draggedAgent, setDraggedAgent] = useState<any>(null);

  // Drag from library
  const onDragStart = (event: React.DragEvent, agent: any) => {
    event.dataTransfer.setData('application/reactflow', JSON.stringify(agent));
    setDraggedAgent(agent);
  };

  // Drop on canvas
  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();
      const reactFlowBounds = reactFlowWrapper.current?.getBoundingClientRect();
      const data = event.dataTransfer.getData('application/reactflow');
      if (!data || !reactFlowInstance) return;
      const agent = JSON.parse(data);
      const position = reactFlowInstance.project({
        x: event.clientX - (reactFlowBounds?.left || 0),
        y: event.clientY - (reactFlowBounds?.top || 0),
      });
      const newNode: Node = {
        id: `${agent.type}-${+new Date()}`,
        type: 'default',
        position,
        data: { label: agent.label, icon: agentIcons[agent.type], color: agent.color },
        style: {
          background: '#FAFAFA',
          borderRadius: 12,
          boxShadow: '0 2px 8px rgba(51,51,51,0.06)',
          border: `2px solid ${agent.color}`,
          minWidth: 180,
        },
      };
      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance, setNodes]
  );

  const onDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  // Node selection
  const onNodeClick = (_: any, node: Node) => setSelectedNode(node);

  // Edge creation
  const onConnect = useCallback((params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  // Node delete (with fade-out)
  const onNodesDelete = useCallback((deleted: Node[]) => {
    // Could add fade-out animation here
    setSelectedNode(null);
  }, []);

  // Canvas grid fade (not dragging)
  const [isDragging, setIsDragging] = useState(false);

  return (
    <ReactFlowProvider>
      <div className="min-h-screen bg-journal-sand flex flex-col" style={{ fontFamily: 'DM Sans, sans-serif' }}>
        {/* Header */}
        <header className="w-full h-16 flex items-center px-12 bg-mentra-blue text-off-white justify-between" style={{ height: 64 }}>
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="Mentra Logo" className="h-10" />
            <span className="text-2xl font-bold tracking-tight">Agent Workbench</span>
          </div>
          <div className="flex items-center gap-4">
            <Button className="bg-growth-green text-white rounded-full px-6 py-2 font-bold">Save</Button>
            <Button variant="outline" className="rounded-full px-3 py-2">⋮</Button>
          </div>
        </header>
        <main className="flex flex-1 min-h-0">
          {/* Left Sidebar: Agent Library */}
          <aside className="w-[280px] bg-white border-r border-journal-sand flex flex-col p-6 gap-6">
            <div>
              <input className="w-full rounded-lg border px-3 py-2 mb-3 text-sm" placeholder="Search agents..." />
              <div className="flex gap-2 mb-4">
                <Badge className="bg-mentra-blue/10 text-mentra-blue">All</Badge>
                <Badge className="bg-growth-green/10 text-growth-green">Academic</Badge>
                <Badge className="bg-curiosity-coral/10 text-curiosity-coral">Creative</Badge>
                <Badge className="bg-wisdom-purple/10 text-wisdom-purple">Organize</Badge>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {demoAgents.map((agent) => (
                <div
                  key={agent.type}
                  className="flex items-center gap-3 p-3 rounded-xl bg-journal-sand cursor-grab border border-transparent hover:border-mentra-blue transition"
                  draggable
                  onDragStart={(e) => onDragStart(e, agent)}
                >
                  <span className="w-10 h-10 flex items-center justify-center rounded-lg" style={{ background: agent.color + '22' }}>{agentIcons[agent.type]}</span>
                  <span className="font-medium text-charcoal">{agent.label}</span>
                </div>
              ))}
            </div>
          </aside>

          {/* Central Canvas */}
          <section className="flex-1 relative" ref={reactFlowWrapper}>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              onNodeClick={onNodeClick}
              onDrop={onDrop}
              onDragOver={onDragOver}
              fitView
              onInit={setReactFlowInstance}
              onMoveStart={() => setIsDragging(true)}
              onMoveEnd={() => setIsDragging(false)}
              style={{ background: 'transparent', minHeight: 'calc(100vh - 64px)' }}
            >
              <Background
                gap={32}
                size={1}
                color="#E0E0E0"
                variant={BackgroundVariant.Dots}
                style={{ opacity: isDragging ? 1 : 0.1, transition: 'opacity 0.3s' }}
              />
              <MiniMap nodeColor={n => n.data?.color || '#3A86FF'} />
              <Controls />
            </ReactFlow>
            {/* Empty state illustration */}
            {nodes.length === 0 && (
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <img src="/sprig-help.png" alt="Sprig help" className="w-32 mb-4" />
                <p className="text-lg text-charcoal/70">Drag an agent here to start your flow.</p>
              </div>
            )}
          </section>

          {/* Right Sidebar: Properties Inspector */}
          <aside className="w-[280px] bg-white border-l border-journal-sand flex flex-col p-6 gap-6">
            {selectedNode ? (
              <>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 flex items-center justify-center rounded-lg" style={{ background: selectedNode.data.color + '22' }}>{selectedNode.data.icon}</span>
                  <span className="font-bold text-charcoal text-lg">{selectedNode.data.label}</span>
                </div>
                <label className="block text-xs font-bold mb-1 text-charcoal">Prompt</label>
                <textarea className="w-full rounded-lg border px-3 py-2 mb-3 text-sm" rows={3} placeholder="Enter prompt..." />
                <label className="block text-xs font-bold mb-1 text-charcoal">Model</label>
                <select className="w-full rounded-lg border px-3 py-2 mb-3 text-sm">
                  <option>GPT-4o</option>
                  <option>Claude 3</option>
                  <option>Gemini 1.5</option>
                </select>
                <label className="block text-xs font-bold mb-1 text-charcoal">Output Preview</label>
                <div className="flex items-center gap-2 mb-3">
                  <input type="checkbox" id="output-preview" className="accent-growth-green" />
                  <label htmlFor="output-preview" className="text-sm">Show output preview</label>
                </div>
                <details>
                  <summary className="cursor-pointer text-xs text-charcoal/60 mb-2">Advanced</summary>
                  <div className="pl-2">
                    <label className="block text-xs font-bold mb-1 text-charcoal">Temperature</label>
                    <input type="range" min="0" max="1" step="0.01" className="w-full mb-2" />
                    <label className="block text-xs font-bold mb-1 text-charcoal">Max Tokens</label>
                    <input type="number" min="1" max="4096" className="w-full mb-2" />
                  </div>
                </details>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-charcoal/60">
                <span className="text-lg">Select an agent node to edit its properties.</span>
              </div>
            )}
          </aside>
        </main>
        {/* Optional Footer */}
        <footer className="w-full h-16 flex items-center justify-end px-12 bg-white border-t border-journal-sand gap-4">
          <Button className="bg-growth-green text-white rounded-full px-6 py-2 font-bold">Run Test</Button>
          <Button variant="outline" className="rounded-full px-6 py-2">Tidy Up</Button>
        </footer>
      </div>
    </ReactFlowProvider>
  );
};

export default AgentWorkbench; 