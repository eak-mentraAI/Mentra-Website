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
import { Book, Lightbulb, Pen, FlaskConical, Puzzle } from 'lucide-react';

// Lucide agent icons
const agentIcons = {
  Research: <Book size={28} className="text-mentra-blue" />,
  Curiosity: <Lightbulb size={28} className="text-curiosity-coral" />,
  Writer: <Pen size={28} className="text-grit-gold" />,
  Math: <FlaskConical size={28} className="text-growth-green" />,
  Organizer: <Puzzle size={28} className="text-wisdom-purple" />,
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

// Add color class maps for pastel backgrounds
const agentBgMap = {
  Research: 'bg-mentra-blue/10',
  Curiosity: 'bg-curiosity-coral/10',
  Writer: 'bg-grit-gold/10',
  Math: 'bg-growth-green/10',
  Organizer: 'bg-wisdom-purple/10',
};
const agentIconBgMap = {
  Research: 'bg-mentra-blue/20',
  Curiosity: 'bg-curiosity-coral/20',
  Writer: 'bg-grit-gold/20',
  Math: 'bg-growth-green/20',
  Organizer: 'bg-wisdom-purple/20',
};
const agentIconTextMap = {
  Research: 'text-mentra-blue',
  Curiosity: 'text-curiosity-coral',
  Writer: 'text-grit-gold',
  Math: 'text-growth-green',
  Organizer: 'text-wisdom-purple',
};

// Helper to detect mobile
const isMobileDevice = typeof window !== 'undefined' && window.innerWidth < 768;

// Collapsible Drawer component for mobile
function Drawer({ open, onClose, children, title }: { open: boolean, onClose: () => void, children: React.ReactNode, title?: string }) {
  const [expanded, setExpanded] = React.useState(false);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end md:hidden">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div
        className={`relative bg-white rounded-t-2xl shadow-lg p-4 overflow-y-auto animate-slide-up transition-all duration-300`}
        style={{ minHeight: expanded ? '60vh' : '30vh', maxHeight: '70vh' }}
      >
        <div className="flex items-center justify-between mb-2">
          {title && <h2 className="text-lg font-bold">{title}</h2>}
          <div className="flex gap-2">
            <button
              className="text-xs px-2 py-1 rounded bg-gray-100 border border-gray-200"
              onClick={() => setExpanded((v) => !v)}
              aria-label={expanded ? 'Collapse' : 'Expand'}
            >
              {expanded ? 'Collapse' : 'Expand'}
            </button>
            <button className="text-2xl ml-2" onClick={onClose}>&times;</button>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

const AgentWorkbench: React.FC = () => {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [draggedAgent, setDraggedAgent] = useState<any>(null);
  const [zoom, setZoom] = useState(1);
  const [mobileLibraryOpen, setMobileLibraryOpen] = useState(false);
  const [mobileInspectorOpen, setMobileInspectorOpen] = useState(false);
  const [connectMode, setConnectMode] = useState(false); // for tap-to-connect

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
  const onNodeClick = (_: any, node: Node) => {
    if (isMobileDevice && connectMode && selectedNode && selectedNode.id !== node.id) {
      // Create edge from selectedNode to tapped node
      setEdges((eds) => addEdge({ source: selectedNode.id, target: node.id, sourceHandle: null, targetHandle: null }, eds));
      setConnectMode(false);
      setSelectedNode(null);
    } else {
      setSelectedNode(node);
    }
  };

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
      <div className="min-h-screen bg-journal-sand flex flex-col font-rounded" style={{ fontFamily: 'DM Sans, Poppins, sans-serif' }}>
        {/* Header */}
        <header className="w-full h-16 flex items-center px-12 bg-mentra-blue text-off-white justify-between" style={{ height: 64 }}>
          <div className="flex items-center gap-4">
            <img src="/logo_no_words.png" alt="Mentra Logo" className="h-10" />
            <span className="text-2xl font-bold tracking-tight">Agent Workbench</span>
          </div>
          <div className="flex items-center gap-4">
            <Button className="bg-growth-green text-white rounded-full px-6 py-2 font-bold w-32">Save</Button>
            <Button className="bg-growth-green text-white rounded-full px-6 py-2 font-bold w-32">Run Test</Button>
            <Button className="bg-growth-green text-white rounded-full px-6 py-2 font-bold w-32">Tidy Up</Button>
            <Button variant="outline" className="rounded-full px-3 py-2">⋮</Button>
          </div>
        </header>
        <main className="flex flex-1 min-h-0 font-rounded" style={{ fontFamily: 'DM Sans, Poppins, sans-serif' }}>
          {/* Mobile FAB for Agent Library */}
          <button
            className="fixed bottom-20 right-6 z-40 md:hidden bg-mentra-blue text-white rounded-full shadow-lg w-14 h-14 flex items-center justify-center text-3xl"
            onClick={() => setMobileLibraryOpen(true)}
            aria-label="Open Agent Library"
          >
            +
          </button>
          {/* Left Sidebar: Agent Library (desktop only) */}
          <aside className="w-[280px] bg-white border-r border-journal-sand flex flex-col p-6 gap-6 hidden md:flex">
            <div>
              <input className="w-full rounded-lg border px-3 py-2 mb-3 text-sm" placeholder="Search agents..." />
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-mentra-blue/10 text-charcoal font-normal">All</Badge>
                <Badge className="bg-growth-green/10 text-charcoal font-normal">Academic</Badge>
                <Badge className="bg-curiosity-coral/10 text-charcoal font-normal">Creative</Badge>
                <Badge className="bg-wisdom-purple/10 text-charcoal font-normal">Organize</Badge>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {demoAgents.map((agent) => (
                <div
                  key={agent.type}
                  className={`flex items-center gap-3 p-3 rounded-2xl shadow-lg border-0 cursor-grab transition group hover:shadow-2xl ${agentBgMap[agent.type]}`}
                  style={{ minHeight: 64 }}
                  draggable
                  onDragStart={(e) => onDragStart(e, agent)}
                >
                  <span
                    className={`w-10 h-10 flex items-center justify-center rounded-xl ${agentIconBgMap[agent.type]}`}
                  >
                    {React.cloneElement(agentIcons[agent.type], { className: `${agentIconTextMap[agent.type]} w-6 h-6` })}
                  </span>
                  <span className="text-charcoal text-base group-hover:text-mentra-blue transition-colors font-normal">{agent.label}</span>
                </div>
              ))}
            </div>
          </aside>

          {/* Central Canvas */}
          <section className="flex-1 relative bg-mentra-blue/10 border-2 border-mentra-blue rounded-xl mt-2 font-rounded" ref={reactFlowWrapper} style={{ minHeight: 'calc(70vh - 64px)', fontFamily: 'DM Sans, Poppins, sans-serif' }}>
            {/* Dot grid overlay */}
            <div className="absolute inset-0 pointer-events-none z-0" style={{ backgroundImage: 'radial-gradient(rgba(58,134,255,0.18) 3px, transparent 3px)', backgroundSize: '32px 32px' }} />
            <ReactFlow
              nodes={nodes.map((node) => ({
                ...node,
                style: {
                  ...node.style,
                  boxShadow: selectedNode && node.id === selectedNode.id ? '0 0 0 4px #3A86FF55, 0 2px 8px rgba(51,51,51,0.06)' : node.style?.boxShadow,
                  zIndex: selectedNode && node.id === selectedNode.id ? 20 : 1,
                },
              }))}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={isMobileDevice ? undefined : onConnect}
              onNodeClick={onNodeClick}
              onDrop={onDrop}
              onDragOver={onDragOver}
              fitView
              onInit={setReactFlowInstance}
              onMoveStart={() => setIsDragging(true)}
              onMoveEnd={() => setIsDragging(false)}
              onMove={(_, viewport) => setZoom(viewport?.zoom || 1)}
              style={{ background: 'transparent', minHeight: 'calc(100vh - 64px)' }}
              className="relative z-10"
              nodeTypes={{
                default: (props) => {
                  const isSelected = selectedNode && props.id === selectedNode.id;
                  return (
                    <div
                      style={{
                        ...props.data?.style,
                        boxShadow: isSelected ? '0 0 0 4px #3A86FF55, 0 2px 8px rgba(51,51,51,0.06)' : undefined,
                        borderRadius: 12,
                        background: '#FAFAFA',
                        border: `2px solid ${props.data?.color || '#3A86FF'}`,
                        minWidth: 180,
                        zIndex: isSelected ? 20 : 1,
                        position: 'relative',
                      }}
                      className="flex flex-col items-center justify-center p-2"
                    >
                      <div className="flex items-center gap-2">
                        {props.data?.icon}
                        <span className="font-bold text-base" style={{ color: props.data?.color }}>{props.data?.label}</span>
                      </div>
                      {/* Show Connect button on mobile if selected */}
                      {isMobileDevice && isSelected && !connectMode && (
                        <button
                          className="mt-2 px-3 py-1 bg-mentra-blue text-white rounded-full text-xs shadow"
                          onClick={(e) => {
                            e.stopPropagation();
                            setConnectMode(true);
                          }}
                        >
                          Connect
                        </button>
                      )}
                      {/* Show tap-to-connect instructions */}
                      {isMobileDevice && isSelected && connectMode && (
                        <div className="mt-2 text-xs text-mentra-blue">Tap another agent to connect</div>
                      )}
                    </div>
                  );
                },
              }}
            >
              <Background
                gap={32}
                size={1}
                color="#E0E0E0"
                variant={BackgroundVariant.Dots}
                style={{ opacity: isDragging ? 1 : 0.1, transition: 'opacity 0.3s' }}
              />
            </ReactFlow>
            {/* MiniMap in bottom-left */}
            <div className="absolute bottom-4 left-4 z-10">
              <div className="bg-white rounded-lg shadow border border-gray-200 flex items-center justify-center" style={{ width: 120, height: 80 }}>
                <MiniMap 
                  nodeColor={n => n.data?.color || '#3A86FF'} 
                  style={{ background: 'transparent', borderRadius: 8, width: '100%', height: '100%' }} 
                />
              </div>
            </div>
            {/* Controls and Zoom % in bottom-right, with buffer and no overlap */}
            <div className="absolute bottom-4 right-4 z-10 flex flex-row items-end gap-10">
              <div className="bg-white rounded-lg shadow border border-gray-200 flex items-center justify-center p-1" style={{ height: 56 }}>
                <Controls 
                  showInteractive={false} 
                  style={{ background: 'transparent', borderRadius: 8, boxShadow: 'none', transform: 'scale(0.8)', transformOrigin: 'bottom right' }} 
                />
              </div>
              <div className="flex items-center gap-1 bg-white/90 rounded px-3 py-2 shadow border border-gray-200">
                <span className="text-xs text-gray-600">Zoom:</span>
                <span className="text-xs font-bold text-charcoal min-w-[32px] text-right" id="zoom-indicator">{Math.round(zoom * 100)}%</span>
              </div>
            </div>
            {/* Empty state illustration */}
            {nodes.length === 0 && (
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <img src="/AI.png" alt="Sprig help" className="w-32 mb-4" />
                <p className="text-lg text-charcoal/70">Drag an agent here to start your flow.</p>
              </div>
            )}
          </section>

          {/* Right Sidebar: Properties Inspector (desktop only) */}
          <aside className="w-[280px] bg-white border-l border-journal-sand flex flex-col p-6 gap-6 hidden md:flex">
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
          {/* Mobile Drawers */}
          <Drawer open={mobileLibraryOpen} onClose={() => setMobileLibraryOpen(false)} title="Agent Library">
            <div className="flex flex-col gap-3">
              {demoAgents.map((agent) => (
                <div
                  key={agent.type}
                  className={`flex items-center gap-3 p-3 rounded-2xl shadow-lg border-0 cursor-grab transition group hover:shadow-2xl ${agentBgMap[agent.type]}`}
                  style={{ minHeight: 64 }}
                  draggable
                  onDragStart={(e) => onDragStart(e, agent)}
                  onTouchStart={(e) => {
                    // For touch drag-and-drop, let the default drag logic run
                  }}
                  onClick={() => {
                    // Tap-to-add fallback for mobile
                    if (window.innerWidth < 768 && reactFlowInstance) {
                      const center = reactFlowInstance.project({
                        x: window.innerWidth / 2 - 140, // 140 = half node minWidth
                        y: window.innerHeight / 2 - 64, // 64 = header height
                      });
                      const newNode = {
                        id: `${agent.type}-${+new Date()}`,
                        type: 'default',
                        position: center,
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
                      setMobileLibraryOpen(false);
                    }
                  }}
                >
                  <span
                    className={`w-10 h-10 flex items-center justify-center rounded-xl ${agentIconBgMap[agent.type]}`}
                  >
                    {React.cloneElement(agentIcons[agent.type], { className: `${agentIconTextMap[agent.type]} w-6 h-6` })}
                  </span>
                  <span className="text-charcoal text-base group-hover:text-mentra-blue transition-colors font-normal">{agent.label}</span>
                </div>
              ))}
            </div>
          </Drawer>
          <Drawer open={mobileInspectorOpen && !!selectedNode} onClose={() => setMobileInspectorOpen(false)} title="Agent Properties">
            {selectedNode ? (
              <div className="flex flex-col gap-3">
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
              </div>
            ) : null}
          </Drawer>
        </main>
        {/* Optional Footer (removed Run Test and Tidy Up buttons) */}
        <footer className="w-full h-16 flex items-center justify-end px-12 bg-white border-t border-journal-sand gap-4"></footer>
      </div>
    </ReactFlowProvider>
  );
};

export default AgentWorkbench; 