// Enhanced Project model with comprehensive goal-setting and orchestration capabilities
export interface Project {
  // Core project information
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  
  // Goal and objective fields
  objective: string;                    // Clear, outcome-focused goal
  successMetrics: string[];             // Specific indicators of success
  constraints: string[];                // Boundaries or real-world limits
  deliverables: string[];               // Expected artifacts or outputs
  stakeholders: string[];               // Audience whose needs matter
  
  // Educational context
  gradeLevel: GradeLevel;               // Tailors reading level, tone, and guidance
  subjectArea?: string;                 // Optional subject area classification
  
  // Reflection and learning
  reflectionPrompts: string[];          // Questions for post-workflow reflection
  ethicalFlags: string[];               // Topics to avoid or address carefully
  
  // Project management
  targetDate?: string;                  // Optional deadline
  priority: Priority;                   // Project priority level
  status: ProjectStatus;                // Current project status
  
  // Workflow integration
  currentWorkflowId?: string;           // Currently active workflow
  savedWorkflows: SavedWorkflow[];      // All saved workflows for this project
  
  // Metadata
  tags: string[];                       // Searchable tags
  notes?: string;                       // Additional notes
}

export interface SavedWorkflow {
  id: string;
  name: string;
  nodes: any[];
  edges: any[];
  createdAt: Date;
  updatedAt: Date;
  description?: string;
}

export type GradeLevel = 
  | 'K-2' 
  | '3-4' 
  | '5-6' 
  | '7-8' 
  | '9-10' 
  | '11-12' 
  | 'college';

export type Priority = 'low' | 'medium' | 'high' | 'urgent';

export type ProjectStatus = 
  | 'planning' 
  | 'active' 
  | 'paused' 
  | 'completed' 
  | 'archived';

// AI critique interface for goal quality assessment
export interface GoalCritique {
  objective: {
    score: number;                      // 1-10 rating
    feedback: string;                   // Specific improvement suggestions
    strengths: string[];                // What's working well
    areas: string[];                    // Areas for improvement
  };
  successMetrics: {
    score: number;
    feedback: string;
    strengths: string[];
    areas: string[];
  };
  constraints: {
    score: number;
    feedback: string;
    strengths: string[];
    areas: string[];
  };
  overall: {
    score: number;
    summary: string;
    nextSteps: string[];
  };
}

// Template interface for pre-built project structures
export interface ProjectTemplate {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  gradeLevels: GradeLevel[];
  subjectAreas: string[];
  tags: string[];
  defaultProject: Partial<Project>;
  suggestedAgents: string[];
  estimatedDuration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

// Utility types for form handling
export interface ProjectFormData {
  name: string;
  objective: string;
  successMetrics: string[];
  constraints: string[];
  deliverables: string[];
  stakeholders: string[];
  gradeLevel: GradeLevel;
  subjectArea?: string;
  reflectionPrompts: string[];
  ethicalFlags: string[];
  targetDate?: string;
  priority: Priority;
  tags: string[];
  notes?: string;
}

// Validation interface for form validation
export interface ProjectValidation {
  isValid: boolean;
  errors: Record<string, string[]>;
  warnings: Record<string, string[]>;
} 