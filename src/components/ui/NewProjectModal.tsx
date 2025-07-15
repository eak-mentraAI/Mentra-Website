import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  Plus, 
  Target, 
  Calendar, 
  Users, 
  FileText, 
  Lightbulb,
  AlertTriangle,
  Brain,
  Eye,
  EyeOff,
  CheckCircle,
  TrendingUp,
  AlertCircle,
  RefreshCw,
  Info
} from 'lucide-react';
import { FormFieldWithGuidance } from './FormFieldWithGuidance';
import { GoalCritique, ProjectFormData } from '@/types/project';
import { generateCritique } from '@/utils/evaluationUtils';

interface NewProjectModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreate: (project: any) => void;
}

export const NewProjectModal: React.FC<NewProjectModalProps> = ({ open, onOpenChange, onCreate }) => {
  const [projectData, setProjectData] = useState<ProjectFormData>({
    name: '',
    objective: '',
    successMetrics: [],
    constraints: [],
    deliverables: [],
    stakeholders: [],
    gradeLevel: '5-6',
    subjectArea: '',
    reflectionPrompts: [],
    ethicalFlags: [],
    targetDate: '',
    priority: 'medium',
    tags: [],
    notes: ''
  });

  const [showEvaluation, setShowEvaluation] = useState(false);
  const [activeTab, setActiveTab] = useState('goals');
  const [critique, setCritique] = useState<GoalCritique | null>(null);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [evaluationComplete, setEvaluationComplete] = useState(false);

  const gradeLevelOptions = [
    { value: 'K-2', label: 'Kindergarten - 2nd Grade' },
    { value: '3-4', label: '3rd - 4th Grade' },
    { value: '5-6', label: '5th - 6th Grade' },
    { value: '7-8', label: '7th - 8th Grade' },
    { value: '9-10', label: '9th - 10th Grade' },
    { value: '11-12', label: '11th - 12th Grade' },
    { value: 'college', label: 'College' }
  ];

  const priorityOptions = [
    { value: 'low', label: 'Low Priority' },
    { value: 'medium', label: 'Medium Priority' },
    { value: 'high', label: 'High Priority' },
    { value: 'urgent', label: 'Urgent' }
  ];



  const handleEvaluation = async () => {
    setIsEvaluating(true);
    try {
      const newCritique = await generateCritique(projectData);
      setCritique(newCritique);
      setEvaluationComplete(true);
    } catch (error) {
      console.error('Failed to generate critique:', error);
    } finally {
      setIsEvaluating(false);
    }
  };

  const handleCreate = () => {
    if (projectData.name.trim() && projectData.objective.trim()) {
      // Check if evaluation is required and meets minimum standards
      if (critique && critique.overall.score < 6) {
        // Don't allow creation if score is too low
        return;
      }
      
      const project = {
        ...projectData,
        id: Date.now().toString(),
        createdAt: new Date(),
        updatedAt: new Date(),
        status: 'planning' as const,
        savedWorkflows: []
      };
      onCreate(project);
      // Reset form
      setProjectData({
        name: '',
        objective: '',
        successMetrics: [],
        constraints: [],
        deliverables: [],
        stakeholders: [],
        gradeLevel: '5-6',
        subjectArea: '',
        reflectionPrompts: [],
        ethicalFlags: [],
        targetDate: '',
        priority: 'medium',
        tags: [],
        notes: ''
      });
      setShowEvaluation(false);
      setActiveTab('goals');
      setCritique(null);
      setEvaluationComplete(false);
    }
  };

  const updateField = (field: keyof ProjectFormData, value: string | string[]) => {
    setProjectData(prev => ({ ...prev, [field]: value }));
  };

  const isFormValid = () => {
    return projectData.name.trim() && projectData.objective.trim();
  };

  const isEvaluationPassing = () => {
    return critique && critique.overall.score >= 6;
  };

  const canCreateProject = () => {
    return isFormValid() && (!showEvaluation || isEvaluationPassing());
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={`sm:max-w-4xl max-h-[90vh] overflow-y-auto transition-all duration-300 ${showEvaluation ? 'max-w-6xl' : ''}`}>
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Plus className="w-5 h-5" />
            Create New Project
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Set up a comprehensive project with clear objectives, constraints, and success criteria.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Project Name */}
          <FormFieldWithGuidance
            type="input"
            label="Project Name"
            value={projectData.name}
            onChange={(value) => updateField('name', value as string)}
            placeholder="Enter a descriptive project name..."
            guidance="Choose a name that clearly describes what you're working on"
            example="School Recycling Program"
            required
          />

          {/* Main Content Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="goals" className="flex items-center gap-2">
                <Target className="w-4 h-4 text-mentra-blue" />
                Goals
              </TabsTrigger>
              <TabsTrigger value="constraints" className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-mentra-blue" />
                Constraints
              </TabsTrigger>
              <TabsTrigger value="outputs" className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-mentra-blue" />
                Outputs
              </TabsTrigger>
              <TabsTrigger value="context" className="flex items-center gap-2">
                <Users className="w-4 h-4 text-mentra-blue" />
                Context
              </TabsTrigger>
            </TabsList>

            {/* Goals Tab */}
            <TabsContent value="goals" className="space-y-4">
              <FormFieldWithGuidance
                type="textarea"
                label="Objective"
                value={projectData.objective}
                onChange={(value) => updateField('objective', value as string)}
                placeholder="What do you want to achieve? Be specific about your goal..."
                guidance="Keep it clear and outcome-focused. What do you want to achieve?"
                tooltip="Your main goal should be specific, measurable, and achievable"
                example="Design a low-waste school cafeteria that reduces food waste by 30%"
                required
              />

              <FormFieldWithGuidance
                type="array-input"
                label="Success Metrics"
                value={projectData.successMetrics}
                onChange={(value) => updateField('successMetrics', value as string[])}
                placeholder="Add a success metric..."
                guidance="How will you know it worked? Be specific and measurable"
                tooltip="Success metrics help you track progress and know when you've achieved your goal"
                example="Survey shows ≥80% student satisfaction"
                maxItems={5}
              />
            </TabsContent>

            {/* Constraints Tab */}
            <TabsContent value="constraints" className="space-y-4">
              <FormFieldWithGuidance
                type="array-input"
                label="Constraints"
                value={projectData.constraints}
                onChange={(value) => updateField('constraints', value as string[])}
                placeholder="Add a constraint..."
                guidance="Any limits in time, materials, space, or other factors?"
                tooltip="Constraints help you plan realistically and work within your limitations"
                example="Finish in 2 weeks"
                maxItems={5}
              />

              <FormFieldWithGuidance
                type="array-input"
                label="Ethical Considerations"
                value={projectData.ethicalFlags}
                onChange={(value) => updateField('ethicalFlags', value as string[])}
                placeholder="Add an ethical consideration..."
                guidance="Topics to avoid or address carefully in your project"
                tooltip="Consider privacy, safety, and respectful treatment of others"
                example="Don't share personal student data"
                maxItems={5}
              />

              <FormFieldWithGuidance
                type="select"
                label="Priority Level"
                value={projectData.priority}
                onChange={(value) => updateField('priority', value as string)}
                options={priorityOptions}
                guidance="How important is this project compared to others?"
              />
            </TabsContent>

            {/* Outputs Tab */}
            <TabsContent value="outputs" className="space-y-4">
              <FormFieldWithGuidance
                type="array-input"
                label="Deliverables"
                value={projectData.deliverables}
                onChange={(value) => updateField('deliverables', value as string[])}
                placeholder="Add a deliverable..."
                guidance="What artifacts or outputs will you create?"
                tooltip="Deliverables are the tangible results of your project"
                example="3-slide pitch deck"
                maxItems={5}
              />

              <FormFieldWithGuidance
                type="array-textarea"
                label="Reflection Prompts"
                value={projectData.reflectionPrompts}
                onChange={(value) => updateField('reflectionPrompts', value as string[])}
                placeholder="Add a reflection question..."
                guidance="Questions to help you think about your learning and process"
                tooltip="Reflection helps you learn from the experience and improve next time"
                example="What worked well in your approach?"
                maxItems={3}
              />
            </TabsContent>

            {/* Context Tab */}
            <TabsContent value="context" className="space-y-4">
              <FormFieldWithGuidance
                type="array-input"
                label="Stakeholders"
                value={projectData.stakeholders}
                onChange={(value) => updateField('stakeholders', value as string[])}
                placeholder="Add a stakeholder..."
                guidance="Who does this project serve or affect?"
                tooltip="Stakeholders are people who care about or are affected by your project"
                example="Science teacher"
                maxItems={5}
              />

              <FormFieldWithGuidance
                type="select"
                label="Grade Level"
                value={projectData.gradeLevel}
                onChange={(value) => updateField('gradeLevel', value as string)}
                options={gradeLevelOptions}
                guidance="This helps tailor the language and complexity of guidance"
              />

              <FormFieldWithGuidance
                type="input"
                label="Subject Area (Optional)"
                value={projectData.subjectArea}
                onChange={(value) => updateField('subjectArea', value as string)}
                placeholder="e.g., Science, Math, English..."
                guidance="What subject does this project relate to?"
                example="Environmental Science"
              />

              <FormFieldWithGuidance
                type="input"
                label="Target Date (Optional)"
                value={projectData.targetDate}
                onChange={(value) => updateField('targetDate', value as string)}
                placeholder="Select a target date..."
                guidance="When do you want to complete this project?"
                inputType="date"
              />

              <FormFieldWithGuidance
                type="textarea"
                label="Additional Notes (Optional)"
                value={projectData.notes}
                onChange={(value) => updateField('notes', value as string)}
                placeholder="Any additional context or notes..."
                guidance="Extra information that might be helpful"
              />
            </TabsContent>
          </Tabs>

          {/* Evaluation Section */}
          {showEvaluation && (
            <div className="border-t border-gray-200 pt-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-semibold text-gray-900 flex items-center gap-2">
                  <Brain className="w-4 h-4 text-mentra-blue" />
                  Project Evaluation
                </h3>
                {critique && (
                  <Badge variant={critique.overall.score >= 6 ? "default" : "secondary"}>
                    {critique.overall.score}/10
                  </Badge>
                )}
              </div>

              {isEvaluating ? (
                <div className="flex items-center justify-center py-6">
                  <RefreshCw className="w-5 h-5 animate-spin text-mentra-blue" />
                  <span className="ml-2 text-sm text-gray-600">Evaluating your project...</span>
                </div>
              ) : critique ? (
                <div className="space-y-3">
                  {/* Compact Overall Score */}
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        {isEvaluationPassing() ? (
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        ) : (
                          <AlertCircle className="w-4 h-4 text-curiosity-coral" />
                        )}
                        <span className={`text-sm font-medium ${isEvaluationPassing() ? 'text-green-800' : 'text-curiosity-coral'}`}>
                          {isEvaluationPassing() ? 'Ready to Create' : 'Needs Improvement'}
                        </span>
                      </div>
                      <Progress value={critique.overall.score * 10} className="h-1.5 w-20" />
                    </div>
                    <Badge variant={critique.overall.score >= 6 ? "default" : "secondary"}>
                      {critique.overall.score}/10
                    </Badge>
                  </div>

                  {/* Compact Evaluation Tabs */}
                  <Tabs defaultValue="objective" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 h-9">
                      <TabsTrigger value="objective" className="flex items-center gap-1.5 text-xs relative">
                        <Target className="w-3 h-3 text-mentra-blue" />
                        Objective
                        {critique.objective.score < 6 && (
                          <div className="w-1.5 h-1.5 bg-curiosity-coral rounded-full absolute -top-0.5 -right-0.5" />
                        )}
                      </TabsTrigger>
                      <TabsTrigger value="metrics" className="flex items-center gap-1.5 text-xs relative">
                        <TrendingUp className="w-3 h-3 text-mentra-blue" />
                        Metrics
                        {critique.successMetrics.score < 6 && (
                          <div className="w-1.5 h-1.5 bg-curiosity-coral rounded-full absolute -top-0.5 -right-0.5" />
                        )}
                      </TabsTrigger>
                      <TabsTrigger value="constraints" className="flex items-center gap-1.5 text-xs relative">
                        <AlertTriangle className="w-3 h-3 text-mentra-blue" />
                        Constraints
                        {critique.constraints.score < 6 && (
                          <div className="w-1.5 h-1.5 bg-curiosity-coral rounded-full absolute -top-0.5 -right-0.5" />
                        )}
                      </TabsTrigger>
                    </TabsList>

                    {/* Compact Tab Content */}
                    <TabsContent value="objective" className="mt-3">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-700">Objective Analysis</span>
                          <Badge variant={critique.objective.score >= 6 ? "default" : "secondary"} className="text-xs">
                            {critique.objective.score}/10
                          </Badge>
                        </div>
                        <p className="text-xs text-gray-600">{critique.objective.feedback}</p>
                      </div>
                    </TabsContent>

                    <TabsContent value="metrics" className="mt-3">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-700">Success Metrics Analysis</span>
                          <Badge variant={critique.successMetrics.score >= 6 ? "default" : "secondary"} className="text-xs">
                            {critique.successMetrics.score}/10
                          </Badge>
                        </div>
                        <p className="text-xs text-gray-600">{critique.successMetrics.feedback}</p>
                      </div>
                    </TabsContent>

                    <TabsContent value="constraints" className="mt-3">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-700">Constraints Analysis</span>
                          <Badge variant={critique.constraints.score >= 6 ? "default" : "secondary"} className="text-xs">
                            {critique.constraints.score}/10
                          </Badge>
                        </div>
                        <p className="text-xs text-gray-600">{critique.constraints.feedback}</p>
                      </div>
                    </TabsContent>
                  </Tabs>

                  {/* Dynamic Next Steps based on active tab */}
                  {(() => {
                    const activeTab = document.querySelector('[data-state="active"]')?.getAttribute('data-value');
                    let nextSteps: string[] = [];
                    
                    if (activeTab === 'objective' && critique.objective.areas.length > 0) {
                      nextSteps = [
                        'Make your objective more specific and measurable',
                        'Include a clear timeline or deadline',
                        'Focus on one main goal rather than multiple objectives'
                      ];
                    } else if (activeTab === 'metrics' && critique.successMetrics.areas.length > 0) {
                      nextSteps = [
                        'Add 2-3 specific, measurable success criteria',
                        'Include both qualitative and quantitative metrics',
                        'Make sure metrics align with your objective'
                      ];
                    } else if (activeTab === 'constraints' && critique.constraints.areas.length > 0) {
                      nextSteps = [
                        'Consider time, budget, and resource limitations',
                        'Think about potential obstacles and how to address them',
                        'Be realistic about what you can achieve'
                      ];
                    }
                    
                    return nextSteps.length > 0 ? (
                      <div className="mt-3 p-3 bg-curiosity-coral/5 border border-curiosity-coral/20 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Lightbulb className="w-3 h-3 text-curiosity-coral" />
                          <span className="text-xs font-medium text-gray-700">Suggested Next Steps</span>
                        </div>
                        <ul className="space-y-1">
                          {nextSteps.map((step, index) => (
                            <li key={index} className="text-xs text-gray-600 flex items-start gap-2">
                              <span className="w-1 h-1 bg-curiosity-coral rounded-full mt-1.5 flex-shrink-0" />
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null;
                  })()}
                </div>
              ) : (
                <div className="text-center py-6 text-gray-500">
                  <Info className="w-6 h-6 mx-auto mb-2 text-gray-400" />
                  <p className="text-sm">Click "Evaluate Project" to get AI feedback</p>
                </div>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-between items-center pt-4 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                onClick={() => {
                  if (!showEvaluation) {
                    setShowEvaluation(true);
                    handleEvaluation();
                  } else {
                    setShowEvaluation(false);
                    setCritique(null);
                    setEvaluationComplete(false);
                  }
                }}
                className="flex items-center gap-2"
              >
                {showEvaluation ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                {showEvaluation ? 'Hide' : 'Show'} Evaluation
              </Button>
            </div>
            
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                onClick={() => onOpenChange(false)} 
                className="rounded-lg"
              >
                Cancel
              </Button>
              <Button 
                onClick={handleCreate} 
                className="bg-mentra-blue hover:bg-mentra-blue/90 rounded-lg"
                disabled={!canCreateProject()}
              >
                {showEvaluation && !isEvaluationPassing() ? 'Improve Project' : 'Create Project'}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}; 