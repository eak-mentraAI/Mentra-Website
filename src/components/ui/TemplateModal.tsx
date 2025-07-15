import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, Target, Users, Lightbulb, Search } from 'lucide-react';

interface TemplateModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onLoadTemplate: (template: any) => void;
}

export const TemplateModal: React.FC<TemplateModalProps> = ({ open, onOpenChange, onLoadTemplate }) => {
  const templates = [
    {
      id: 'research-project',
      name: 'Research Project',
      description: 'Complete research workflow with fact-finding and analysis agents',
      icon: <Search className="w-6 h-6" />,
      color: 'bg-mentra-blue',
      agents: ['FactFinder', 'CompareBot', 'Ask a Scientist'],
      goals: {
        name: 'Research Project',
        objective: 'Conduct comprehensive research on a topic with multiple perspectives',
        successMetrics: [
          'Gather information from at least 3 sources',
          'Compare different viewpoints',
          'Create a summary with key findings'
        ],
        targetDate: '',
        priority: 'medium'
      }
    },
    {
      id: 'creative-writing',
      name: 'Creative Writing',
      description: 'Story development workflow with creative and planning agents',
      icon: <Lightbulb className="w-6 h-6" />,
      color: 'bg-curiosity-coral',
      agents: ['StoryCrafter', 'Plot Planner', 'DesignBuddy'],
      goals: {
        name: 'Creative Writing Project',
        objective: 'Develop a complete story with plot, characters, and visuals',
        successMetrics: [
          'Create a compelling plot outline',
          'Develop 3 main characters',
          'Design visual elements for the story'
        ],
        targetDate: '',
        priority: 'medium'
      }
    },
    {
      id: 'project-management',
      name: 'Project Management',
      description: 'Goal-setting and task management workflow',
      icon: <Target className="w-6 h-6" />,
      color: 'bg-grit-gold',
      agents: ['ProjectPal', 'TimeTuner', 'GoalSetter'],
      goals: {
        name: 'Project Management',
        objective: 'Plan and execute a project with clear milestones and timelines',
        successMetrics: [
          'Break down project into manageable tasks',
          'Set realistic timelines',
          'Track progress against goals'
        ],
        targetDate: '',
        priority: 'high'
      }
    },
    {
      id: 'debate-preparation',
      name: 'Debate Preparation',
      description: 'Argument development and practice workflow',
      icon: <Users className="w-6 h-6" />,
      color: 'bg-growth-green',
      agents: ['DebateBot', 'FactFinder', 'CompareBot'],
      goals: {
        name: 'Debate Preparation',
        objective: 'Prepare for a debate with strong arguments and evidence',
        successMetrics: [
          'Research both sides of the argument',
          'Develop 3 strong points',
          'Practice counter-arguments'
        ],
        targetDate: '',
        priority: 'high'
      }
    }
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-900">Load Template</DialogTitle>
          <DialogDescription className="text-gray-600">
            Choose a pre-built template to get started quickly.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          {templates.map((template) => (
            <div
              key={template.id}
              className="border rounded-xl p-4 hover:shadow-lg transition-all duration-200 cursor-pointer hover:scale-[1.01]"
              onClick={() => onLoadTemplate(template)}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${template.color} text-white`}>
                  {template.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-900">{template.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">{template.description}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {template.agents.map((agent) => (
                      <Badge key={agent} variant="secondary" className="text-xs rounded-lg">
                        {agent}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-mentra-blue rounded-lg hover:bg-mentra-blue/5">
                  Load
                </Button>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}; 