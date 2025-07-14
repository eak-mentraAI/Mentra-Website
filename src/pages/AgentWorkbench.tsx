import React, { useCallback, useRef, useState } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  addEdge,
  useNodesState,
  useEdgesState,
  applyNodeChanges,
  Connection,
  Edge,
  Node,
  ReactFlowProvider,
  Position,
  BackgroundVariant,
  Handle,
} from 'reactflow';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Book, Lightbulb, Pen, FlaskConical, Puzzle, CheckCircle } from 'lucide-react';
import 'reactflow/dist/style.css';

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

// Move nodeTypes outside the component to avoid recreation on every render
const nodeTypes = {
  default: ({ selected, data }) => {
    const BORDER = selected ? 3 : 0;
    const HANDLE_SIZE = 8;
    const HALF = HANDLE_SIZE / 2;
    const OFFSET = -(HALF + BORDER);
    const handleStyle = (pos) => {
      if (pos === 'Left' || pos === 'Right') {
        return {
          [pos.toLowerCase()]: OFFSET,
          top: '50%',
          transform: 'translateY(-50%)',
        };
      }
      return {
        [pos.toLowerCase()]: OFFSET,
        left: '50%',
        transform: 'translateX(-50%)',
      };
    };
    const agentType = demoAgents.find(a => a.label === data?.label)?.type || 'Research';
    return (
      <div
        tabIndex={0}
        style={{
          outline: 'none',
          background: '#fff',
          padding: '8px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          borderRadius: 10,
          boxShadow: '0 2px 8px rgba(51,51,51,0.06)',
          border: selected ? '3px solid #3A86FF' : 'none',
          position: 'relative',
        }}
      >
        {/* Handles */}
        <Handle
          type="target"
          position={Position.Left}
          style={{
            ...handleStyle('Left'),
            width: HANDLE_SIZE,
            height: HANDLE_SIZE,
            borderRadius: HANDLE_SIZE / 2,
            background: '#222',
            border: '1.5px solid #fff',
            cursor: 'crosshair',
          }}
        />
        <Handle
          type="source"
          position={Position.Right}
          style={{
            ...handleStyle('Right'),
            width: HANDLE_SIZE,
            height: HANDLE_SIZE,
            borderRadius: HANDLE_SIZE / 2,
            background: '#222',
            border: '1.5px solid #fff',
            cursor: 'crosshair',
          }}
        />
        {/* Node content */}
        <span style={{ fontWeight: 600, color: data?.color || '#3A86FF', fontSize: 16 }}>{data?.icon}</span>
        <span style={{ fontWeight: 500, color: '#222', fontSize: 15 }}>{data?.label}</span>
      </div>
    );
  },
};

const AgentWorkbench: React.FC = () => {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [nodes, setNodes, rawOnNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [zoom, setZoom] = useState(1);
  const [showPreview, setShowPreview] = useState(false);
  const [isEditingZoom, setIsEditingZoom] = useState(false);
  const [zoomInputValue, setZoomInputValue] = useState('100');
  
  // New state for project management
  const [projectName, setProjectName] = useState('Untitled Workflow');
  const [showSaveDialog, setShowSaveDialog] = useState(false);
  const [showRunTestDialog, setShowRunTestDialog] = useState(false);
  const [newProjectName, setNewProjectName] = useState('');

  // Filter out nodes with NaN positions to prevent SVG errors
  const safeNodes = nodes.filter(node => {
    const isValid = node.position && 
                   typeof node.position.x === 'number' && 
                   typeof node.position.y === 'number' &&
                   Number.isFinite(node.position.x) && 
                   Number.isFinite(node.position.y);
    if (!isValid) {
      console.error('Filtering out node with invalid position:', node);
    }
    return isValid;
  });

  // Filter out edges with invalid source/target
  const safeEdges = edges.filter(edge => {
    const isValid = edge.source && edge.target && 
                   typeof edge.source === 'string' && 
                   typeof edge.target === 'string';
    if (!isValid) {
      console.error('Filtering out edge with invalid source/target:', edge);
    }
    return isValid;
  });

  // Tidy Up function to clear the canvas
  const handleTidyUp = () => {
    setNodes([]);
    setEdges([]);
    setSelectedNode(null);
  };

  // Handle zoom input changes
  const handleZoomInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setZoomInputValue(e.target.value);
  };

  const handleZoomInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const newZoom = parseInt(zoomInputValue) / 100;
      if (newZoom >= 0.1 && newZoom <= 2) {
        setZoom(newZoom);
        if (reactFlowInstance) {
          reactFlowInstance.setViewport({ x: 0, y: 0, zoom: newZoom });
        }
      }
      setIsEditingZoom(false);
    } else if (e.key === 'Escape') {
      setZoomInputValue(Math.round(zoom * 100).toString());
      setIsEditingZoom(false);
    }
  };

  const handleZoomClick = () => {
    setIsEditingZoom(true);
    setZoomInputValue(Math.round(zoom * 100).toString());
  };

  // Set default viewport when React Flow initializes
  const onInit = useCallback((instance: any) => {
    setReactFlowInstance(instance);
    // Set default viewport to 100% zoom at center
    instance.setViewport({ x: 0, y: 0, zoom: 1 });
  }, []);

  // Node state with NaN check logging
  const onNodesChange = useCallback((changes) => {
    setNodes((nds) => {
      const updated = applyNodeChanges(changes, nds);
      // Log any nodes with NaN positions
      updated.forEach(node => {
        if (node.position && (isNaN(node.position.x) || isNaN(node.position.y))) {
          console.error('Node with NaN position detected:', node);
        }
      });
      return updated;
    });
  }, [setNodes]);

  // Drag from library
  const onDragStart = (event: React.DragEvent, agent: any) => {
    event.dataTransfer.setData('application/reactflow', JSON.stringify(agent));
  };

  // Drop on canvas with enhanced validation
  const onDrop = useCallback(
    (event: React.DragEvent) => {
      console.log('onDrop event fired');
      event.preventDefault();
      
      const reactFlowBounds = reactFlowWrapper.current?.getBoundingClientRect();
      if (!reactFlowBounds) {
        console.error('No reactFlowBounds available');
        return;
      }
      
      const data = event.dataTransfer.getData('application/reactflow');
      if (!data || !reactFlowInstance) {
        console.error('No data or reactFlowInstance available');
        return;
      }
      
      const agent = JSON.parse(data);
      console.log('Dropped agent:', agent);

      // Calculate position with validation
      const clientX = event.clientX;
      const clientY = event.clientY;
      
      if (isNaN(clientX) || isNaN(clientY)) {
        console.error('Invalid client coordinates:', { clientX, clientY });
        return;
      }
      
      // Use screenToFlowPosition (no need to subtract bounds)
      const position = reactFlowInstance.screenToFlowPosition({ x: clientX, y: clientY });
      console.log('Projected position:', position);
      
      // Validate projected position
      if (!position || isNaN(position.x) || isNaN(position.y)) {
        console.error('Invalid projected position:', position);
        return;
      }
      
      const newNode: Node = {
        id: `${agent.type}-${+new Date()}`,
        type: 'default',
        position,
        data: { label: agent.label, icon: agentIcons[agent.type], color: agent.color },
      };
      
      console.log('Creating new node:', newNode);
      setNodes(nds => nds.concat(newNode));
      
      // Select the newly dropped node for sidebar
      setSelectedNode(newNode);
    },
    [reactFlowInstance, setNodes]
  );

  const onDragOver = (event: React.DragEvent) => {
    console.log('onDragOver event fired');
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  // Edge creation
  const onConnect = useCallback((params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  // Node delete (with fade-out)
  const onNodesDelete = useCallback((deleted: Node[]) => {
    // Could add fade-out animation here
    // React Flow will handle selection automatically via onSelectionChange
  }, []);

  // Canvas grid fade (not dragging)
  const [isDragging, setIsDragging] = useState(false);

  // Handle selection changes from React Flow
  const onSelectionChange = useCallback(({ nodes }: { nodes: Node[] }) => {
    setSelectedNode(nodes.length ? nodes[0] : null);
  }, []);

  console.log('Rendering nodes:', nodes);

  // Handle save functionality
  const handleSave = () => {
    setNewProjectName(projectName);
    setShowSaveDialog(true);
  };

  const handleSaveConfirm = () => {
    if (newProjectName.trim()) {
      setProjectName(newProjectName.trim());
      setShowSaveDialog(false);
      // Here you would typically save to backend
      console.log('Saving project:', newProjectName.trim());
    }
  };

  // Handle run test functionality
  const handleRunTest = () => {
    setShowRunTestDialog(true);
    // Simulate test completion after a short delay
    setTimeout(() => {
      setShowRunTestDialog(false);
    }, 3000);
  };

  // In AgentWorkbench component, add helper for updating node data
  const updateSelectedNodeData = (field, value) => {
    if (!selectedNode) return;
    setNodes(nds => nds.map(n =>
      n.id === selectedNode.id ? { ...n, data: { ...n.data, [field]: value } } : n
    ));
    setSelectedNode(n => n ? { ...n, data: { ...n.data, [field]: value } } : n);
  };

  return (
    <ReactFlowProvider>
      <div className="min-h-screen bg-journal-sand flex flex-col font-rounded" style={{ fontFamily: 'DM Sans, Poppins, sans-serif' }}>
        {/* Header */}
        <header className="w-full h-16 flex items-center px-12 bg-mentra-blue text-off-white justify-between" style={{ height: 64 }}>
          <div className="flex items-center gap-4">
            <img src="/logo_with_words_white.png" alt="Mentra Logo" className="h-20 w-auto" />
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-3">
            <span className="text-2xl font-bold tracking-tight">Agent Workbench</span>
            <span className="text-sm text-off-white/80">— <strong>{projectName}</strong></span>
          </div>
          <div className="flex items-center gap-4">
            <Button className="bg-growth-green text-white rounded-full px-6 py-2 font-bold w-32 hover:scale-105 hover:shadow-lg transition-all duration-200 hover:bg-growth-green focus:bg-growth-green active:bg-growth-green" onClick={handleSave}>Save</Button>
            <Button className="bg-growth-green text-white rounded-full px-6 py-2 font-bold w-32 hover:scale-105 hover:shadow-lg transition-all duration-200 hover:bg-growth-green focus:bg-growth-green active:bg-growth-green" onClick={handleRunTest}>Run Test</Button>
            <Button className="bg-growth-green text-white rounded-full px-6 py-2 font-bold w-32 hover:scale-105 hover:shadow-lg transition-all duration-200 hover:bg-growth-green focus:bg-growth-green active:bg-growth-green" onClick={handleTidyUp}>Tidy Up</Button>
            <Button variant="outline" className="rounded-full px-3 py-2">⋮</Button>
          </div>
        </header>

        {/* Save Dialog */}
        <Dialog open={showSaveDialog} onOpenChange={setShowSaveDialog}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-gray-900">Save Project</DialogTitle>
              <DialogDescription className="text-gray-600">
                Give your workflow a name to save it for later.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label htmlFor="project-name" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Name
                </label>
                <Input
                  id="project-name"
                  value={newProjectName}
                  onChange={(e) => setNewProjectName(e.target.value)}
                  placeholder="Enter project name..."
                  className="w-full"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleSaveConfirm();
                    }
                  }}
                />
              </div>
              <div className="flex justify-end gap-3">
                <Button variant="outline" onClick={() => setShowSaveDialog(false)}>
                  Cancel
                </Button>
                <Button onClick={handleSaveConfirm} className="bg-mentra-blue hover:bg-mentra-blue/90">
                  Save Project
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Run Test Success Dialog */}
        <Dialog open={showRunTestDialog} onOpenChange={setShowRunTestDialog}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-growth-green" />
                Workflow Complete
              </DialogTitle>
              <DialogDescription className="text-gray-600">
                Your agentic workflow has completed successfully without any errors.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="bg-growth-green/10 border border-growth-green/20 rounded-lg p-4">
                <p className="text-growth-green font-medium">✓ All agents executed successfully</p>
                <p className="text-growth-green/80 text-sm mt-1">No errors or warnings detected</p>
              </div>
              <div className="flex justify-end">
                <Button onClick={() => setShowRunTestDialog(false)} className="bg-mentra-blue hover:bg-mentra-blue/90">
                  Continue
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <main className="flex flex-1 min-h-0 font-rounded" style={{ fontFamily: 'DM Sans, Poppins, sans-serif' }}>
          {/* Left Sidebar: Agent Library */}
          <aside className="w-[280px] bg-white border-r border-journal-sand flex flex-col p-6 gap-6">
            <div>
              <h2 className="text-xl font-semibold text-charcoal mb-4">Agent Library</h2>
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
                  <span className="text-black text-base group-hover:text-mentra-blue transition-colors font-normal">{agent.label}</span>
                </div>
              ))}
            </div>
          </aside>

          {/* Central Canvas */}
          <section className="flex-1 relative bg-mentra-blue/10 border-2 border-mentra-blue rounded-xl mt-2 font-rounded overflow-hidden" ref={(el: HTMLDivElement | null) => { reactFlowWrapper.current = el; }} style={{ minHeight: 'calc(70vh - 64px)', fontFamily: 'DM Sans, Poppins, sans-serif' }}>
            {/* Dot grid overlay */}
            <div className="absolute inset-0 pointer-events-none z-0" style={{ backgroundImage: 'radial-gradient(rgba(58,134,255,0.18) 3px, transparent 3px)', backgroundSize: '32px 32px' }} />
            <ReactFlow
              nodes={safeNodes}
              edges={safeEdges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              onNodeClick={(event, node) => {
                event.stopPropagation();
                setSelectedNode(node);
                setNodes(nds => nds.map(n => ({ ...n, selected: n.id === node.id })));
              }}
              onSelectionChange={onSelectionChange}
              onPaneClick={() => {
                setSelectedNode(null);
                setNodes(nds => nds.map(n => ({ ...n, selected: false })));
              }}
              onInit={onInit}
              onDragOver={onDragOver}
              onDrop={onDrop}
              nodesDraggable={true}
              nodesConnectable={true}
              selectNodesOnDrag={false}
              multiSelectionKeyCode={null}
              nodeTypes={nodeTypes}
              style={{ background: 'transparent', minHeight: 'calc(100vh - 64px)' }}
              className="relative z-10"
            >
              <Background
                gap={32}
                size={1}
                color="#F2F4F8"
                variant={BackgroundVariant.Dots}
                style={{ opacity: isDragging ? 1 : 0.08, transition: 'opacity 0.3s' }}
              />
            </ReactFlow>
            {/* Controls and Zoom % in bottom-right, with buffer and no overlap */}
            <div className="absolute bottom-4 right-4 z-10 flex items-end gap-4">
              <Controls
                showInteractive={false}
                className="rf-controls--tight"
              />
              <div className="flex items-center gap-1 bg-white/90 rounded px-2 py-2 shadow border border-gray-200">
                <span className="text-xs text-gray-600">Zoom:</span>
                {isEditingZoom ? (
                  <input
                    type="number"
                    value={zoomInputValue}
                    onChange={handleZoomInputChange}
                    onKeyDown={handleZoomInputKeyDown}
                    onBlur={() => {
                      const newZoom = parseInt(zoomInputValue) / 100;
                      if (newZoom >= 0.1 && newZoom <= 2) {
                        setZoom(newZoom);
                        if (reactFlowInstance) {
                          reactFlowInstance.setViewport({ x: 0, y: 0, zoom: newZoom });
                        }
                      } else {
                        setZoomInputValue(Math.round(zoom * 100).toString());
                      }
                      setIsEditingZoom(false);
                    }}
                    className="text-xs font-bold text-charcoal min-w-[32px] text-right bg-transparent border-none outline-none"
                    min="10"
                    max="200"
                    autoFocus
                  />
                ) : (
                  <button 
                    className="text-xs font-bold text-charcoal min-w-[32px] text-right hover:text-mentra-blue focus:outline-none focus:ring-2 focus:ring-mentra-blue focus:ring-opacity-50 rounded px-1 py-0.5 transition-colors" 
                    onClick={handleZoomClick}
                    id="zoom-indicator"
                    type="button"
                  >
                    {Math.round(zoom * 100)}%
                  </button>
                )}
              </div>
            </div>
            {/* Empty state illustration */}
            {safeNodes.length === 0 && (
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <img src="/AI.png" alt="Sprig help" className="w-32 mb-4" />
                <p className="text-lg text-charcoal/70">Drag an agent here to start your flow.</p>
              </div>
            )}
          </section>

          {/* Right Sidebar: Properties Inspector */}
          <aside className="w-[280px] bg-white border-l border-journal-sand flex flex-col p-6 gap-6">
            {selectedNode ? (
              <div className="flex flex-col gap-4">
                {/* Agent Identity */}
                <div className="bg-white rounded-xl p-4 flex items-center gap-3 border border-mentra-blue/10">
                  <span className="w-10 h-10 flex items-center justify-center rounded-lg" style={{ background: selectedNode.data.color + '22' }}>{selectedNode.data.icon}</span>
                  <span className="font-bold text-black text-lg">{selectedNode.data.label}</span>
                </div>

                {/* Role/Goal & Data Flow */}
                <div className="bg-white rounded-xl p-4 shadow-sm flex flex-col gap-2 border border-mentra-blue/10">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold text-mentra-blue tracking-wide uppercase mb-1">Agent Purpose</span>
                    <textarea
                      className="w-full rounded-lg border px-3 py-1.5 text-sm bg-journal-sand/40 focus:ring-2 focus:ring-mentra-blue focus:border-mentra-blue transition resize-y min-h-[40px]"
                      placeholder="What is this agent's purpose?"
                      value={selectedNode.data.role || ''}
                      onChange={e => updateSelectedNodeData('role', e.target.value)}
                      rows={2}
                      style={{ minHeight: 40, maxHeight: 120, whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }}
                    />
                  </div>
                  <div className="flex flex-col gap-2 mt-2">
                    <span className="text-xs font-semibold text-mentra-blue tracking-wide uppercase mb-1">Data Flow</span>
                    <select
                      className="w-full rounded-lg border px-3 py-1.5 text-sm bg-journal-sand/40 focus:ring-2 focus:ring-mentra-blue focus:border-mentra-blue transition"
                      value={selectedNode.data.inputSource || ''}
                      onChange={e => updateSelectedNodeData('inputSource', e.target.value)}
                    >
                      <option value="">Input: ...</option>
                      <option value="user">User Input</option>
                      <option value="previous">Previous Agent</option>
                      <option value="static">Static Data</option>
                    </select>
                    <select
                      className="w-full rounded-lg border px-3 py-1.5 text-sm bg-journal-sand/40 focus:ring-2 focus:ring-mentra-blue focus:border-mentra-blue transition"
                      value={selectedNode.data.outputDest || ''}
                      onChange={e => updateSelectedNodeData('outputDest', e.target.value)}
                    >
                      <option value="">Output: ...</option>
                      <option value="next">Next Agent</option>
                      <option value="user">User</option>
                      <option value="external">External System</option>
                    </select>
                  </div>
                </div>

                {/* Prompt & Model */}
                <div className="bg-white rounded-xl p-4 shadow-sm flex flex-col gap-2 border border-mentra-blue/10">
                  <span className="text-xs font-semibold text-mentra-blue tracking-wide uppercase mb-1">Prompt & Model</span>
                  <textarea className="w-full rounded-lg border px-3 py-1.5 text-sm bg-journal-sand/40 focus:ring-2 focus:ring-mentra-blue focus:border-mentra-blue transition resize-y min-h-[40px]" rows={3} placeholder="Enter prompt..." value={selectedNode.data.prompt || ''} onChange={e => updateSelectedNodeData('prompt', e.target.value)} style={{ minHeight: 40, maxHeight: 160, whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }} />
                  <select className="w-full rounded-lg border px-3 py-1.5 text-sm bg-journal-sand/40 focus:ring-2 focus:ring-mentra-blue focus:border-mentra-blue transition" value={selectedNode.data.model || 'GPT-4o'} onChange={e => updateSelectedNodeData('model', e.target.value)}>
                    <option>GPT-4o</option>
                    <option>Claude 3</option>
                    <option>Gemini 1.5</option>
                  </select>
                </div>

                {/* Success Criteria & Reflection */}
                <div className="bg-white rounded-xl p-4 shadow-sm flex flex-col gap-2 border border-mentra-blue/10">
                  <span className="text-xs font-semibold text-mentra-blue tracking-wide uppercase mb-1">Success & Reflection</span>
                  <textarea
                    className="w-full rounded-lg border px-3 py-1.5 text-sm bg-journal-sand/40 focus:ring-2 focus:ring-mentra-blue focus:border-mentra-blue transition resize-y min-h-[40px]"
                    placeholder="How will you know this agent succeeded?"
                    value={selectedNode.data.successCriteria || ''}
                    onChange={e => updateSelectedNodeData('successCriteria', e.target.value)}
                    rows={2}
                    style={{ minHeight: 40, maxHeight: 120, whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }}
                  />
                  <textarea
                    className="w-full rounded-lg border px-3 py-1.5 text-sm bg-journal-sand/40 focus:ring-2 focus:ring-mentra-blue focus:border-mentra-blue transition resize-y min-h-[40px]"
                    rows={2}
                    placeholder="What did you learn from this agent's output?"
                    value={selectedNode.data.reflection || ''}
                    onChange={e => updateSelectedNodeData('reflection', e.target.value)}
                    style={{ minHeight: 40, maxHeight: 120, whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }}
                  />
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-charcoal/60">
                <span className="text-lg">Select an agent node to edit its properties.</span>
              </div>
            )}
          </aside>
        </main>
        {/* Optional Footer */}
        <footer className="w-full h-16 flex items-center justify-end px-12 bg-white border-t border-journal-sand gap-4"></footer>
      </div>
    </ReactFlowProvider>
  );
};

export default AgentWorkbench; 