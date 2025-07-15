import React, { useCallback, useRef, useState, useEffect } from 'react';
import ReactFlow, {
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
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { 
  Lightbulb, 
  FlaskConical, 
  CheckCircle,
  Search,
  FileText,
  Target,
  Users,
  Brain,
  Heart,
  Zap,
  Star,
  User,
  Settings,
  LogOut,
  BookOpen,
  MessageCircle,
  ClipboardList,
  FlaskConical as FlaskConicalIcon,
  Zap as ZapIcon,
  Users as UsersIcon,
  Search as SearchIcon,
  Menu,
  Info,
  Edit,
  Download
} from 'lucide-react';
import { Icon } from '@iconify/react';
import 'reactflow/dist/style.css';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

import { useToast } from '@/components/ui/use-toast';
import { ProjectMenu } from '@/components/ui/ProjectMenu';
import { ProjectGoalModal } from '@/components/ui/ProjectGoalModal';
import { TemplateModal } from '@/components/ui/TemplateModal';
import { NewProjectModal } from '@/components/ui/NewProjectModal';
import { LoadWorkflowModal } from '@/components/ui/LoadWorkflowModal';
import { Label } from '@/components/ui/label';

// Agent categories with colors and icons
const agentCategories = {
  Research: {
    color: '#3A86FF',
    icon: <Search size={28} className="text-mentra-blue" />,
    bgClass: 'bg-mentra-blue/10',
    iconBgClass: 'bg-mentra-blue/20',
    textClass: 'text-mentra-blue'
  },
  Creative: {
    color: '#FF6B6B',
    icon: <Lightbulb size={28} className="text-curiosity-coral" />,
    bgClass: 'bg-curiosity-coral/10',
    iconBgClass: 'bg-curiosity-coral/20',
    textClass: 'text-curiosity-coral'
  },
  Planner: {
    color: '#FFD166',
    icon: <Target size={28} className="text-grit-gold" />,
    bgClass: 'bg-grit-gold/10',
    iconBgClass: 'bg-grit-gold/20',
    textClass: 'text-grit-gold'
  },
  Simulation: {
    color: '#06D6A0',
    icon: <Users size={28} className="text-growth-green" />,
    bgClass: 'bg-growth-green/10',
    iconBgClass: 'bg-growth-green/20',
    textClass: 'text-growth-green'
  },
  SkillCoach: {
    color: '#9B5DE5',
    icon: <Brain size={28} className="text-wisdom-purple" />,
    bgClass: 'bg-wisdom-purple/10',
    iconBgClass: 'bg-wisdom-purple/20',
    textClass: 'text-wisdom-purple'
  },
  Ethics: {
    color: '#FF8E53',
    icon: <Heart size={28} className="text-orange-500" />,
    bgClass: 'bg-orange-500/10',
    iconBgClass: 'bg-orange-500/20',
    textClass: 'text-orange-500'
  }
};

const demoAgents = [
  // Research Agents
  { 
    type: 'Research', 
    color: '#3A86FF', 
    label: 'FactFinder',
    description: 'Finds and summarizes facts from vetted kid-friendly databases.',
    icon: <Search size={28} className="text-mentra-blue" />
  },
  { 
    type: 'Research', 
    color: '#3A86FF', 
    label: 'CompareBot',
    description: 'Compares two ideas and outputs pros and cons with balanced analysis.',
    icon: <Search size={28} className="text-mentra-blue" />
  },
  { 
    type: 'Research', 
    color: '#3A86FF', 
    label: 'Ask a Scientist',
    description: 'Simulates asking an expert in a field using fine-tuned personas.',
    icon: <Search size={28} className="text-mentra-blue" />
  },
  
  // Creative Agents
  { 
    type: 'Creative', 
    color: '#FF6B6B', 
    label: 'StoryCrafter',
    description: 'Helps students brainstorm and outline fictional stories with plot development.',
    icon: <Lightbulb size={28} className="text-curiosity-coral" />
  },
  { 
    type: 'Creative', 
    color: '#FF6B6B', 
    label: 'DesignBuddy',
    description: 'Suggests visuals or layouts for presentations, posters, or slides.',
    icon: <Lightbulb size={28} className="text-curiosity-coral" />
  },
  { 
    type: 'Creative', 
    color: '#FF6B6B', 
    label: 'Plot Planner',
    description: 'Maps out scenes and character development for creative writing projects.',
    icon: <Lightbulb size={28} className="text-curiosity-coral" />
  },
  
  // Planner & Task Agents
  { 
    type: 'Planner', 
    color: '#FFD166', 
    label: 'ProjectPal',
    description: 'Turns a big goal into a timeline and checklist with manageable steps.',
    icon: <Target size={28} className="text-grit-gold" />
  },
  { 
    type: 'Planner', 
    color: '#FFD166', 
    label: 'TimeTuner',
    description: 'Helps balance tasks across days given class schedules and due dates.',
    icon: <Target size={28} className="text-grit-gold" />
  },
  { 
    type: 'Planner', 
    color: '#FFD166', 
    label: 'GoalSetter',
    description: 'Guides kids through setting and tracking SMART goals with milestones.',
    icon: <Target size={28} className="text-grit-gold" />
  },
  
  // Simulation & Roleplay Agents
  { 
    type: 'Simulation', 
    color: '#06D6A0', 
    label: 'DebateBot',
    description: 'Takes a side in a classroom debate and encourages students to form arguments.',
    icon: <Users size={28} className="text-growth-green" />
  },
  { 
    type: 'Simulation', 
    color: '#06D6A0', 
    label: 'Mayor Sim',
    description: 'Lets students act as town planners solving civic problems with constraints.',
    icon: <Users size={28} className="text-growth-green" />
  },
  { 
    type: 'Simulation', 
    color: '#06D6A0', 
    label: 'EconEngine',
    description: 'Simulates a simple economy for students to run a lemonade stand or small business.',
    icon: <Users size={28} className="text-growth-green" />
  },
  
  // Skill Coach Agents
  { 
    type: 'SkillCoach', 
    color: '#9B5DE5', 
    label: 'Math Mentor',
    description: 'Offers step-by-step guidance through multi-step math problems.',
    icon: <Brain size={28} className="text-wisdom-purple" />
  },
  { 
    type: 'SkillCoach', 
    color: '#9B5DE5', 
    label: 'Writing Coach',
    description: 'Gives feedback on grammar, structure, and clarity in writing assignments.',
    icon: <Brain size={28} className="text-wisdom-purple" />
  },
  { 
    type: 'SkillCoach', 
    color: '#9B5DE5', 
    label: 'Emotion Mirror',
    description: 'Helps reflect on frustrations or wins during learning and encourages resilience.',
    icon: <Brain size={28} className="text-wisdom-purple" />
  },
  
  // Ethics & Reflection Agents
  { 
    type: 'Ethics', 
    color: '#FF8E53', 
    label: 'AI Ethics Owl',
    description: 'Asks questions about fairness, safety, and bias when using AI tools.',
    icon: <Heart size={28} className="text-orange-500" />
  },
  { 
    type: 'Ethics', 
    color: '#FF8E53', 
    label: 'Reflecto',
    description: 'At the end of a project, asks "What worked? What was hard? What would you do differently?"',
    icon: <Heart size={28} className="text-orange-500" />
  },
  { 
    type: 'Ethics', 
    color: '#FF8E53', 
    label: 'Privacy Pal',
    description: 'Reminds students not to enter personal information or guides them through safe sharing practices.',
    icon: <Heart size={28} className="text-orange-500" />
  }
];

const initialNodes: Node[] = [];
const initialEdges: Edge[] = [];

// Helper function to get agent category data
const getAgentCategory = (type: string) => {
  return agentCategories[type] || agentCategories.Research;
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
    const agent = demoAgents.find(a => a.label === data?.label);
    const agentType = agent?.type || 'Research';
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
  const [showWorkflowOutput, setShowWorkflowOutput] = useState(false);
  const [workflowOutput, setWorkflowOutput] = useState<any>(null);
  const [aiFeedback, setAiFeedback] = useState<string>('');
  const [testProgress, setTestProgress] = useState(0);
  const [testSteps, setTestSteps] = useState<string[]>([]);
  const [newProjectName, setNewProjectName] = useState('');

  // State for favorites
  const [favoriteAgentLabels, setFavoriteAgentLabels] = useState<string[]>([]);

  // State for filter
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // New state for properties modal
  const [isPropsOpen, setIsPropsOpen] = useState(false);

  // Project management state
  const [showProjectMenu, setShowProjectMenu] = useState(false);

  const [showTemplateModal, setShowTemplateModal] = useState(false);
  const [showNewProjectModal, setShowNewProjectModal] = useState(false);
  const [showProjectGoalModal, setShowProjectGoalModal] = useState(false);
  const [editingProjectGoal, setEditingProjectGoal] = useState(false);
  const [showLoadWorkflowModal, setShowLoadWorkflowModal] = useState(false);
  const [projectGoal, setProjectGoal] = useState({
    name: '',
    objective: '',
    successMetrics: [],
    targetDate: '',
    priority: 'medium'
  });

  // Project information state
  const [currentProject, setCurrentProject] = useState<any>(null);
  const [showProjectInfoModal, setShowProjectInfoModal] = useState(false);
  
  // Workflow state
  const [currentWorkflow, setCurrentWorkflow] = useState<any>(null);
  const [workflowName, setWorkflowName] = useState<string>('Untitled Workflow');

  const categoryPills = [
    { label: 'All', color: 'bg-gray-100 text-gray-700' },
    { label: 'Research', color: 'bg-mentra-blue/10 text-mentra-blue' },
    { label: 'Creative', color: 'bg-curiosity-coral/10 text-curiosity-coral' },
    { label: 'Planner', color: 'bg-grit-gold/10 text-grit-gold' },
    { label: 'Simulation', color: 'bg-growth-green/10 text-growth-green' },
    { label: 'Skill Coach', color: 'bg-wisdom-purple/10 text-wisdom-purple' },
    { label: 'Ethics', color: 'bg-orange-500/10 text-orange-500' },
  ];

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
    // Only serialize primitive data
    const dragData = {
      type: agent.type,
      label: agent.label,
      color: agent.color,
      description: agent.description
    };
    event.dataTransfer.setData('application/reactflow', JSON.stringify(dragData));
  };

  // Drop on canvas with enhanced validation
  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();
      const reactFlowBounds = reactFlowWrapper.current?.getBoundingClientRect();
      if (!reactFlowBounds) return;
      const data = event.dataTransfer.getData('application/reactflow');
      if (!data || !reactFlowInstance) return;
      const agent = JSON.parse(data);
      // Reconstruct icon and category
      const category = getAgentCategory(agent.type);
      const newNode: Node = {
        id: `${agent.type}-${+new Date()}`,
        type: 'default',
        position: reactFlowInstance.screenToFlowPosition({ x: event.clientX, y: event.clientY }),
        data: {
          label: agent.label,
          icon: category.icon,
          color: agent.color,
          description: agent.description
        },
      };
      setNodes(nds => nds.concat(newNode));
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
      setWorkflowName(newProjectName.trim());
      setShowSaveDialog(false);
      // Here you would typically save to backend
      console.log('Saving workflow:', newProjectName.trim());
    }
  };

  // Handle run test functionality
  const handleRunTest = () => {
    setShowRunTestDialog(true);
    setTestProgress(0);
    setTestSteps([]);
    
    // Simulate workflow testing with progress steps
    const steps = [
      "Checking agent connections...",
      "Validating data flow between agents...",
      "Testing agent functionality...",
      "Verifying input/output compatibility...",
      "Analyzing workflow effectiveness..."
    ];
    
    setTestSteps(steps);
    
    // Simulate progress through steps
    let currentStep = 0;
    const interval = setInterval(() => {
      setTestProgress((currentStep + 1) * 20);
      currentStep++;
      
      if (currentStep >= steps.length) {
        clearInterval(interval);
        setTimeout(() => {
          setShowRunTestDialog(false);
          // Simulate workflow output
          const mockOutput = {
            type: 'text',
            content: 'This is a sample workflow output that could contain text, tables, images, or other content based on the user\'s workflow configuration.',
            timestamp: new Date().toISOString()
          };
          setWorkflowOutput(mockOutput);
          
          // Generate AI feedback
          const mockAiFeedback = `AI Analysis: Your workflow shows good agent diversity with Research and Creative agents working together. Consider adding a Planner agent to better structure the output. The connection between FactFinder and StoryCrafter is well-designed for narrative creation. Overall effectiveness: 8/10.`;
          setAiFeedback(mockAiFeedback);
          
          setShowWorkflowOutput(true);
        }, 1000);
      }
    }, 800);
  };

  // In AgentWorkbench component, add helper for updating node data
  const updateSelectedNodeData = (field, value) => {
    if (!selectedNode) return;
    setNodes(nds => nds.map(n =>
      n.id === selectedNode.id ? { ...n, data: { ...n.data, [field]: value } } : n
    ));
    setSelectedNode(n => n ? { ...n, data: { ...n.data, [field]: value } } : n);
  };

  // Helper to toggle favorite
  const toggleFavorite = (label: string) => {
    setFavoriteAgentLabels(favs =>
      favs.includes(label)
        ? favs.filter(l => l !== label)
        : favs.length < 5
          ? [...favs, label]
          : favs // max 5
    );
  };

  // Project management handlers
  const handleProjectMenuSelect = (action: string) => {
    setShowProjectMenu(false);
    
    switch (action) {
      case 'new':
        setShowNewProjectModal(true);
        break;
      case 'load-template':
        setShowTemplateModal(true);
        break;
      case 'save-workflow':
        setShowSaveDialog(true);
        break;
      case 'load-workflow':
        setShowLoadWorkflowModal(true);
        break;
      default:
        console.log('Action:', action);
    }
  };

  const handleLoadTemplate = (template: any) => {
    setShowTemplateModal(false);
    setCurrentProject(template.goals);
    setProjectGoal(template.goals);
    console.log('Loaded template:', template);
    // TODO: Implement template loading logic
  };

  const handleCreateProject = (project: any) => {
    setShowNewProjectModal(false);
    setCurrentProject(project);
    setProjectGoal(project);
    console.log('Created project:', project);
    // TODO: Implement project creation logic
  };

  const handleSaveProjectGoal = (goal: any) => {
    setEditingProjectGoal(false);
    setProjectGoal(goal);
    setCurrentProject(goal);
    console.log('Updated project goals:', goal);
    // TODO: Implement project goal update logic
  };



  const handleLoadWorkflow = (workflow: any) => {
    setShowLoadWorkflowModal(false);
    setWorkflowName(workflow.name);
    console.log('Loading workflow:', workflow);
    // TODO: Implement workflow loading logic
  };

  // Filtered agent lists
  const filteredAgents = selectedCategory === 'All'
    ? demoAgents
    : demoAgents.filter(a => a.type === selectedCategory.replace(' ', ''));
  const favoriteAgents = filteredAgents.filter(a => favoriteAgentLabels.includes(a.label));
  const nonFavoriteAgents = filteredAgents.filter(a => !favoriteAgentLabels.includes(a.label));

  // Default project name when no project is loaded
  const getProjectDisplayName = () => {
    if (currentProject?.name) {
      return `Project: ${currentProject.name}`;
    }
    return "Project: Free Orchestrator Mode";
  };

  const getWorkflowDisplayName = () => {
    return `Workflow: ${workflowName}`;
  };

  const getProjectSubtitle = () => {
    if (currentProject?.name) {
      return `Project: ${currentProject.name} • Workflow: ${workflowName}`;
    }
    return `Workflow: ${workflowName}`;
  };

  return (
    <ReactFlowProvider>
      <div className="min-h-screen h-screen w-full bg-journal-sand flex flex-col font-rounded" style={{ fontFamily: 'DM Sans, Poppins, sans-serif' }}>
        {/* Two-column area */}
        <div className="flex flex-1 h-full">
          <aside className="w-[280px] flex flex-col h-full">
            {/* Unified Header Bar with Large Logo */}
            <div className="h-16 bg-mentra-blue flex items-center px-6">
              <img src="/logo_with_words_white.png" alt="Mentra Logo" className="h-14 w-auto" />
            </div>
            {/* Navigation Links */}
            <nav className="flex-1 bg-white border-r border-journal-sand flex flex-col px-0 pt-4 pb-0">
              <div className="flex flex-col gap-2 px-6">
                <button className="w-full flex items-center gap-3 p-3 rounded-lg text-left hover:bg-mentra-blue/5 transition-colors group" onClick={e => e.preventDefault()}>
                  <BookOpen className="w-5 h-5 text-mentra-blue" />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-charcoal">Journaling</div>
                    <div className="text-xs text-gray-500">Reflective Wellness Agent</div>
                  </div>
                </button>
                <button className="w-full flex items-center gap-3 p-3 rounded-lg text-left hover:bg-mentra-blue/5 transition-colors group" onClick={e => e.preventDefault()}>
                  <MessageCircle className="w-5 h-5 text-mentra-blue" />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-charcoal">Guided Q&A</div>
                    <div className="text-xs text-gray-500">Socratic Tutor Agent</div>
                  </div>
                </button>
                <button className="w-full flex items-center gap-3 p-3 rounded-lg text-left hover:bg-mentra-blue/5 transition-colors group" onClick={e => e.preventDefault()}>
                  <ClipboardList className="w-5 h-5 text-mentra-blue" />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-charcoal">Assignments</div>
                    <div className="text-xs text-gray-500">Contextual Task Agent</div>
                  </div>
                </button>
                <button className="w-full flex items-center gap-3 p-3 rounded-lg text-left hover:bg-mentra-blue/5 transition-colors group" onClick={e => e.preventDefault()}>
                  <FlaskConicalIcon className="w-5 h-5 text-mentra-blue" />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-charcoal">Prompt Labs</div>
                    <div className="text-xs text-gray-500">Prompt Critic Agent</div>
                  </div>
                </button>
                <button className="w-full flex items-center gap-3 p-3 rounded-lg text-left bg-mentra-blue/10 border border-mentra-blue/20 transition-colors group" onClick={e => e.preventDefault()}>
                  <ZapIcon className="w-5 h-5 text-mentra-blue" />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-charcoal">Agent Workbench</div>
                    <div className="text-xs text-gray-500">Conductor Agent</div>
                  </div>
                </button>
                <button className="w-full flex items-center gap-3 p-3 rounded-lg text-left hover:bg-mentra-blue/5 transition-colors group" onClick={e => e.preventDefault()}>
                  <UsersIcon className="w-5 h-5 text-mentra-blue" />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-charcoal">Personal Growth</div>
                    <div className="text-xs text-gray-500">Mentorship Agent</div>
                  </div>
                </button>
                <button className="w-full flex items-center gap-3 p-3 rounded-lg text-left hover:bg-mentra-blue/5 transition-colors group" onClick={e => e.preventDefault()}>
                  <SearchIcon className="w-5 h-5 text-mentra-blue" />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-charcoal">Open Exploration</div>
                    <div className="text-xs text-gray-500">Curiosity Agent</div>
                  </div>
                </button>
              </div>
              <div className="mt-auto p-4 border-t border-journal-sand flex items-center gap-3">
                <div className="w-10 h-10 bg-mentra-blue rounded-lg flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-charcoal">Alex Johnson</div>
                  <div className="text-xs text-gray-500">Student</div>
                </div>
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-lg hover:bg-mentra-blue/5" onClick={e => e.preventDefault()}>
                    <User className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-lg hover:bg-mentra-blue/5" onClick={e => e.preventDefault()}>
                    <Settings className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-lg hover:bg-mentra-blue/5" onClick={e => e.preventDefault()}>
                    <LogOut className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </nav>
          </aside>
          <div className="flex-1 flex flex-col h-full min-w-0">
            <header className="h-16 bg-mentra-blue flex items-center px-6 text-off-white justify-between w-full relative">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 p-0 text-off-white/80 hover:text-off-white hover:bg-off-white/10 rounded-full flex-shrink-0"
                    onClick={() => setShowProjectInfoModal(true)}
                  >
                    <Info className="w-4 h-4" />
                  </Button>
                  <span className="text-xl font-bold tracking-tight text-center max-w-md truncate">{getProjectDisplayName()}</span>
                </div>
                {currentProject?.name && (
                  <div className="text-sm text-off-white/80 mt-1 text-center">
                    {getWorkflowDisplayName()}
                  </div>
                )}
                {!currentProject?.name && (
                  <div className="text-sm text-off-white/80 mt-1 text-center">
                    {getWorkflowDisplayName()}
                  </div>
                )}
              </div>
              <div className="flex items-center gap-4 ml-auto relative z-10">
                <Button className="bg-growth-green text-white rounded-full px-6 py-2 font-bold w-32 hover:scale-105 hover:shadow-lg transition-all duration-200 hover:bg-growth-green focus:bg-growth-green active:bg-growth-green" onClick={handleRunTest}>Run</Button>
                <Button className="bg-growth-green text-white rounded-full px-6 py-2 font-bold w-32 hover:scale-105 hover:shadow-lg transition-all duration-200 hover:bg-growth-green focus:bg-growth-green active:bg-growth-green" onClick={handleTidyUp}>Clear</Button>
                <Button
                  variant="ghost"
                  className="
                    inline-flex
                    h-fit
                    w-fit
                    p-3
                    items-center
                    justify-center
                    text-white
                    rounded-lg
                    hover:bg-white/20
                    transition-colors
                  "
                  aria-label="Open menu"
                  onClick={() => setShowProjectMenu(true)}
                >
                  <Menu className="w-12 h-12" strokeWidth={2} color="currentColor" />
                </Button>
              </div>
            </header>
            <main className="flex flex-1 min-h-0 min-w-0 font-rounded gap-0" style={{ fontFamily: 'DM Sans, Poppins, sans-serif' }}>
              <section className="flex-1 h-full relative bg-mentra-blue/10 border-r border-mentra-blue font-rounded overflow-hidden" ref={el => { reactFlowWrapper.current = el; }} style={{ fontFamily: 'DM Sans, Poppins, sans-serif' }}>
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
                    setIsPropsOpen(true);
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
              <aside className="w-[240px] h-full bg-white border-l border-journal-sand flex flex-col p-4 gap-2">
                <div>
                  <h2 className="text-xl font-semibold text-charcoal mb-3">Agent Library</h2>
                  <input className="w-full rounded-lg border px-3 py-2 mb-2 text-sm bg-mentra-blue/5 focus:bg-mentra-blue/10 focus:ring-2 focus:ring-mentra-blue focus:border-mentra-blue transition-colors" placeholder="Search agents..." />
                  <div className="flex flex-wrap gap-1 mb-3">
                    {categoryPills.map(pill => (
                      <button
                        key={pill.label}
                        className={`px-3 py-1 rounded-lg text-xs font-medium focus:outline-none transition ${pill.color} ${selectedCategory === pill.label ? 'ring-2 ring-mentra-blue' : ''}`}
                        onClick={() => setSelectedCategory(pill.label)}
                      >
                        {pill.label}
                      </button>
                    ))}
                  </div>
                </div>
                {/* Favorites Section */}
                <div className="text-xs font-semibold text-gray-500 mb-1 mt-2 tracking-wide uppercase">Favorites</div>
                <div className="flex flex-col gap-3">
                  {favoriteAgents.length > 0 ? (
                    favoriteAgents.map((agent) => (
                      <div
                        key={`fav-${agent.type}-${agent.label}`}
                        className={`flex items-center gap-3 p-2 rounded-xl shadow-lg border-0 cursor-grab transition group hover:shadow-2xl ${getAgentCategory(agent.type).bgClass}`}
                        style={{ minHeight: 56 }}
                        draggable
                        onDragStart={(e) => onDragStart(e, agent)}
                      >
                        <span
                          className={`w-8 h-8 flex items-center justify-center rounded-lg ${getAgentCategory(agent.type).iconBgClass}`}
                        >
                          {React.cloneElement(agent.icon, { className: `${getAgentCategory(agent.type).textClass} w-5 h-5` })}
                        </span>
                        <span className="text-black text-sm group-hover:text-mentra-blue transition-colors font-normal">{agent.label}</span>
                      </div>
                    ))
                  ) : (
                    <div className="flex items-center gap-3 p-2 rounded-xl border-2 border-dashed border-gray-300 bg-gray-50" style={{ minHeight: 56 }}>
                      <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-200">
                        <Star className="w-5 h-5 text-gray-400" />
                      </span>
                      <span className="text-gray-500 text-sm font-normal">Add Favorites Here</span>
                    </div>
                  )}
                </div>
                
                {/* All Agents (scrollable) */}
                <div className="text-xs font-semibold text-gray-500 mb-1 mt-4 tracking-wide uppercase">All Agents</div>
                <TooltipProvider>
                  <div className="flex flex-col gap-3 overflow-y-auto flex-1 pr-2" style={{ maxHeight: 'calc(100vh - 400px)', paddingBottom: 8 }}>
                    {nonFavoriteAgents.map((agent) => (
                      <Tooltip key={`all-${agent.type}-${agent.label}`}>
                        <TooltipTrigger asChild>
                          <div
                            className={`flex items-center gap-3 p-2 rounded-xl shadow-lg border-0 cursor-grab transition group hover:shadow-2xl ${getAgentCategory(agent.type).bgClass}`}
                            style={{ minHeight: 56 }}
                            draggable
                            onDragStart={(e) => onDragStart(e, agent)}
                          >
                            <span
                              className={`w-8 h-8 flex items-center justify-center rounded-lg ${getAgentCategory(agent.type).iconBgClass}`}
                            >
                              {React.cloneElement(agent.icon, { className: `${getAgentCategory(agent.type).textClass} w-5 h-5` })}
                            </span>
                            <span className="text-black text-sm group-hover:text-mentra-blue transition-colors font-normal">{agent.label}</span>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent side="left" className="max-w-xs text-xs font-normal">
                          {agent.description}
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                </TooltipProvider>
              </aside>
            </main>
          </div>
        </div>
        {/* Footer at the bottom */}
        <footer className="h-16 border-t border-journal-sand bg-white px-12 flex items-center justify-end gap-4">
          {/* ...footer content... */}
        </footer>

        {/* Properties Modal */}
        <Dialog open={isPropsOpen} onOpenChange={(open) => {
          setIsPropsOpen(open);
          if (!open) {
            setSelectedNode(null);
          }
        }}>
          <DialogContent className="sm:max-w-md max-h-[80vh] overflow-y-auto">
            {selectedNode ? (
              <div className="flex flex-col gap-4">
                {/* Agent Identity */}
                <div className="bg-white rounded-xl p-4 flex items-center gap-3 border border-mentra-blue/10">
                  <span className="w-10 h-10 flex items-center justify-center rounded-lg" style={{ background: selectedNode.data.color + '22' }}>{selectedNode.data.icon}</span>
                  <span className="font-bold text-black text-lg">{selectedNode.data.label}</span>
                  <button
                    className="ml-auto focus:outline-none"
                    onClick={() => toggleFavorite(selectedNode.data.label)}
                    disabled={
                      !favoriteAgentLabels.includes(selectedNode.data.label) && favoriteAgentLabels.length >= 5
                    }
                    title={favoriteAgentLabels.includes(selectedNode.data.label) ? 'Remove from Favorites' : favoriteAgentLabels.length >= 5 ? 'Maximum 5 favorites' : 'Add to Favorites'}
                  >
                    <Star
                      size={22}
                      className={
                        favoriteAgentLabels.includes(selectedNode.data.label)
                          ? 'text-yellow-400 fill-yellow-400 drop-shadow'
                          : 'text-gray-300'
                      }
                      fill={favoriteAgentLabels.includes(selectedNode.data.label) ? '#facc15' : 'none'}
                      strokeWidth={1.5}
                    />
                  </button>
                </div>

                {/* Agent Description */}
                <div className="bg-white rounded-xl p-4 shadow-sm flex flex-col gap-2 border border-mentra-blue/10">
                  <span className="text-xs font-semibold text-mentra-blue tracking-wide uppercase mb-1">Agent Description</span>
                  <textarea
                    className="w-full rounded-lg border px-3 py-1.5 text-sm bg-mentra-blue/5 focus:bg-mentra-blue/10 focus:ring-2 focus:ring-mentra-blue focus:border-mentra-blue transition-colors resize-y min-h-[40px]"
                    placeholder="Describe this agent's behavior and capabilities..."
                    value={selectedNode.data.description || ''}
                    onChange={e => updateSelectedNodeData('description', e.target.value)}
                    rows={3}
                    style={{ minHeight: 40, maxHeight: 120, whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }}
                  />
                </div>

                {/* Role/Goal & Data Flow */}
                <div className="bg-white rounded-xl p-4 shadow-sm flex flex-col gap-2 border border-mentra-blue/10">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold text-mentra-blue tracking-wide uppercase mb-1">Agent Purpose</span>
                    <textarea
                      className="w-full rounded-lg border px-3 py-1.5 text-sm bg-mentra-blue/5 focus:bg-mentra-blue/10 focus:ring-2 focus:ring-mentra-blue focus:border-mentra-blue transition-colors resize-y min-h-[40px]"
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
                      className="w-full rounded-lg border px-3 py-1.5 text-sm bg-mentra-blue/5 focus:bg-mentra-blue/10 focus:ring-2 focus:ring-mentra-blue focus:border-mentra-blue transition-colors"
                      value={selectedNode.data.inputSource || ''}
                      onChange={e => updateSelectedNodeData('inputSource', e.target.value)}
                    >
                      <option value="">Input: ...</option>
                      <option value="user">User Input</option>
                      <option value="previous">Previous Agent</option>
                      <option value="static">Static Data</option>
                    </select>
                    <select
                      className="w-full rounded-lg border px-3 py-1.5 text-sm bg-mentra-blue/5 focus:bg-mentra-blue/10 focus:ring-2 focus:ring-mentra-blue focus:border-mentra-blue transition-colors"
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
                  <textarea className="w-full rounded-lg border px-3 py-1.5 text-sm bg-mentra-blue/5 focus:bg-mentra-blue/10 focus:ring-2 focus:ring-mentra-blue focus:border-mentra-blue transition-colors resize-y min-h-[40px]" rows={3} placeholder="Enter prompt..." value={selectedNode.data.prompt || ''} onChange={e => updateSelectedNodeData('prompt', e.target.value)} style={{ minHeight: 40, maxHeight: 160, whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }} />
                  <select className="w-full rounded-lg border px-3 py-1.5 text-sm bg-mentra-blue/5 focus:bg-mentra-blue/10 focus:ring-2 focus:ring-mentra-blue focus:border-mentra-blue transition-colors" value={selectedNode.data.model || 'GPT-4o'} onChange={e => updateSelectedNodeData('model', e.target.value)}>
                    <option>GPT-4o</option>
                    <option>Claude 3</option>
                    <option>Gemini 1.5</option>
                  </select>
                </div>

                {/* Success Criteria & Reflection */}
                <div className="bg-white rounded-xl p-4 shadow-sm flex flex-col gap-2 border border-mentra-blue/10">
                  <span className="text-xs font-semibold text-mentra-blue tracking-wide uppercase mb-1">Success & Reflection</span>
                  <textarea
                    className="w-full rounded-lg border px-3 py-1.5 text-sm bg-mentra-blue/5 focus:bg-mentra-blue/10 focus:ring-2 focus:ring-mentra-blue focus:border-mentra-blue transition-colors resize-y min-h-[40px]"
                    placeholder="How will you know this agent succeeded?"
                    value={selectedNode.data.successCriteria || ''}
                    onChange={e => updateSelectedNodeData('successCriteria', e.target.value)}
                    rows={2}
                    style={{ minHeight: 40, maxHeight: 120, whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }}
                  />
                  <textarea
                    className="w-full rounded-lg border px-3 py-1.5 text-sm bg-mentra-blue/5 focus:bg-mentra-blue/10 focus:ring-2 focus:ring-mentra-blue focus:border-mentra-blue transition-colors resize-y min-h-[40px]"
                    rows={2}
                    placeholder="What did you learn from this agent's output?"
                    value={selectedNode.data.reflection || ''}
                    onChange={e => updateSelectedNodeData('reflection', e.target.value)}
                    style={{ minHeight: 40, maxHeight: 120, whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }}
                  />
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-32 text-charcoal/60">
                <span className="text-lg">No agent selected.</span>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Save Dialog */}
        <Dialog open={showSaveDialog} onOpenChange={setShowSaveDialog}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-gray-900">Save Workflow</DialogTitle>
              <DialogDescription className="text-gray-600">
                Give your workflow a name to save it for later.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label htmlFor="project-name" className="block text-sm font-medium text-gray-700 mb-2">
                  Workflow Name
                </label>
                <Input
                  id="project-name"
                  value={newProjectName}
                  onChange={(e) => setNewProjectName(e.target.value)}
                  placeholder="Enter workflow name..."
                  className="w-full rounded-lg bg-mentra-blue/5 focus:bg-mentra-blue/10 focus:ring-2 focus:ring-mentra-blue focus:border-mentra-blue transition-colors"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleSaveConfirm();
                    }
                  }}
                />
              </div>
              <div className="flex justify-end gap-3">
                <Button variant="outline" onClick={() => setShowSaveDialog(false)} className="rounded-lg">
                  Cancel
                </Button>
                <Button onClick={handleSaveConfirm} className="bg-mentra-blue hover:bg-mentra-blue/90 rounded-lg">
                  Save Workflow
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Run Test Progress Dialog */}
        <Dialog open={showRunTestDialog} onOpenChange={setShowRunTestDialog}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-growth-green" />
                Workflow Testing
              </DialogTitle>
              <DialogDescription className="text-gray-600">
                Running your agentic workflow through comprehensive testing.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Progress</span>
                  <span className="text-gray-900 font-medium">{testProgress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-growth-green h-2 rounded-full transition-all duration-300"
                    style={{ width: `${testProgress}%` }}
                  />
                </div>
              </div>
              
              {/* Unified Content Area - Updates in place */}
              <div className="space-y-2">
                <span className="text-sm font-medium text-gray-700">Status:</span>
                <div className="text-sm text-gray-600 bg-gray-50 rounded-lg p-3 min-h-[60px] flex items-center">
                  {testProgress < 100 ? (
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-growth-green rounded-full animate-pulse" />
                      <span>{testSteps[Math.floor(testProgress / 20) - 1] || testSteps[0]}</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-growth-green" />
                      <span className="text-growth-green font-medium">All tests passed successfully!</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Project Management Modals */}
        <ProjectMenu 
          open={showProjectMenu} 
          onOpenChange={setShowProjectMenu} 
          onSelect={handleProjectMenuSelect} 
        />



        <TemplateModal 
          open={showTemplateModal} 
          onOpenChange={setShowTemplateModal}
          onLoadTemplate={handleLoadTemplate}
        />

        <NewProjectModal 
          open={showNewProjectModal} 
          onOpenChange={setShowNewProjectModal}
          onCreate={handleCreateProject}
        />

        <ProjectGoalModal 
          open={showProjectGoalModal && !editingProjectGoal} 
          onOpenChange={setShowProjectGoalModal}
          initialGoal={projectGoal}
          viewOnly
          onEdit={() => {
            setEditingProjectGoal(true);
            setShowProjectGoalModal(false);
          }}
        />
        
        <ProjectGoalModal
          open={editingProjectGoal}
          onOpenChange={open => {
            setEditingProjectGoal(open);
            if (!open) setShowProjectGoalModal(true);
          }}
          initialGoal={projectGoal}
          onSave={handleSaveProjectGoal}
        />

        <LoadWorkflowModal
          open={showLoadWorkflowModal}
          onOpenChange={setShowLoadWorkflowModal}
          onLoad={handleLoadWorkflow}
          currentProject={currentProject}
        />

        {/* Project Info Modal */}
        <Dialog open={showProjectInfoModal} onOpenChange={setShowProjectInfoModal}>
          <DialogContent className="sm:max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Info className="w-5 h-5 text-mentra-blue" />
                Project Information
              </DialogTitle>
              <DialogDescription className="text-gray-600">
                Review your project details and objectives.
              </DialogDescription>
            </DialogHeader>
            
            {currentProject ? (
              <div className="space-y-6">
                {/* Project Name */}
                <div className="space-y-2">
                  <Label className="text-sm font-semibold text-gray-700">Project Name</Label>
                  <div className="text-lg font-medium text-gray-900">{currentProject.name}</div>
                </div>

                {/* Objective */}
                <div className="space-y-2">
                  <Label className="text-sm font-semibold text-gray-700">Objective</Label>
                  <div className="text-gray-700 bg-gray-50 rounded-lg p-3">
                    {currentProject.objective || "No objective defined"}
                  </div>
                </div>

                {/* Success Metrics */}
                <div className="space-y-2">
                  <Label className="text-sm font-semibold text-gray-700">Success Metrics</Label>
                  <div className="space-y-2">
                    {currentProject.successMetrics && currentProject.successMetrics.length > 0 ? (
                      currentProject.successMetrics.map((metric: string, index: number) => (
                        <div key={index} className="flex items-center gap-2">
                          <Target className="w-4 h-4 text-mentra-blue" />
                          <span className="text-gray-700">{metric}</span>
                        </div>
                      ))
                    ) : (
                      <div className="text-gray-500 italic">No success metrics defined</div>
                    )}
                  </div>
                </div>

                {/* Target Date */}
                {currentProject.targetDate && (
                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-gray-700">Target Date</Label>
                    <div className="text-gray-700">{currentProject.targetDate}</div>
                  </div>
                )}

                {/* Priority */}
                {currentProject.priority && (
                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-gray-700">Priority</Label>
                    <div className="text-gray-700 capitalize">{currentProject.priority}</div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex justify-end gap-3 pt-4">
                  <Button variant="outline" onClick={() => setShowProjectInfoModal(false)} className="rounded-lg">
                    Close
                  </Button>
                  <Button 
                    onClick={() => {
                      setShowProjectInfoModal(false);
                      setProjectGoal(currentProject);
                      setEditingProjectGoal(true);
                    }} 
                    className="bg-mentra-blue hover:bg-mentra-blue/90 rounded-lg"
                  >
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Project
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-mentra-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ZapIcon className="w-8 h-8 text-mentra-blue" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Free Orchestrator Mode</h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  You're exploring the power of AI orchestration! While you can build workflows here, 
                  the full experience comes with project context—goals, constraints, and AI assessment.
                </p>
                <div className="flex flex-col gap-3 max-w-sm mx-auto">
                  <Button 
                    onClick={() => {
                      setShowProjectInfoModal(false);
                      setShowTemplateModal(true);
                    }}
                    className="bg-mentra-blue hover:bg-mentra-blue/90 text-white rounded-lg"
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    Load Template Project
                  </Button>
                  <Button 
                    onClick={() => {
                      setShowProjectInfoModal(false);
                      setShowNewProjectModal(true);
                    }}
                    variant="outline"
                    className="border-mentra-blue text-mentra-blue hover:bg-mentra-blue/5 rounded-lg"
                  >
                    <Target className="w-4 h-4 mr-2" />
                    Create New Project
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Workflow Output Modal */}
        <Dialog open={showWorkflowOutput} onOpenChange={setShowWorkflowOutput}>
          <DialogContent className="sm:max-w-4xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-growth-green" />
                Workflow Output
              </DialogTitle>
              <DialogDescription className="text-gray-600">
                Results from your agentic workflow execution.
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-6">
              {/* Output Display */}
              <div className="space-y-2">
                <Label className="text-sm font-semibold text-gray-700">Workflow Results</Label>
                <div className="bg-gray-50 rounded-lg p-4 min-h-[200px]">
                  {workflowOutput ? (
                    <div className="space-y-4">
                      {workflowOutput.type === 'text' && (
                        <div className="text-gray-700 whitespace-pre-wrap">
                          {workflowOutput.content}
                        </div>
                      )}
                      {workflowOutput.type === 'table' && (
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse border border-gray-300">
                            {/* Table content would be rendered here */}
                            <tbody>
                              <tr>
                                <td className="border border-gray-300 p-2">Sample table data</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      )}
                      {workflowOutput.type === 'image' && (
                        <div className="text-center">
                          <img 
                            src={workflowOutput.content} 
                            alt="Workflow output" 
                            className="max-w-full h-auto rounded-lg"
                          />
                        </div>
                      )}
                      <div className="text-xs text-gray-500 mt-4">
                        Generated: {new Date(workflowOutput.timestamp).toLocaleString()}
                      </div>
                    </div>
                  ) : (
                    <div className="text-gray-500 text-center py-8">
                      No output available
                    </div>
                  )}
                </div>
              </div>

              {/* AI Feedback - Always Visible */}
              {aiFeedback && (
                <div className="space-y-2">
                  <Label className="text-sm font-semibold text-gray-700">AI Analysis</Label>
                  <div className="bg-mentra-blue/5 border border-mentra-blue/20 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Brain className="w-5 h-5 text-mentra-blue mt-0.5 flex-shrink-0" />
                      <div className="text-gray-700 text-sm leading-relaxed">
                        {aiFeedback}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex justify-end gap-3 pt-4">
                <Button variant="outline" onClick={() => setShowWorkflowOutput(false)} className="rounded-lg">
                  Close
                </Button>
                <Button 
                  onClick={() => {
                    setShowWorkflowOutput(false);
                  }} 
                  className="bg-mentra-blue hover:bg-mentra-blue/90 rounded-lg"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Export Results
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </ReactFlowProvider>
  );
};

export default AgentWorkbench; 