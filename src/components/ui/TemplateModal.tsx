import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Lightbulb, 
  Target, 
  Users, 
  FileText,
  Clock,
  TrendingUp,
  AlertTriangle,
  Brain,
  BookOpen,
  Palette,
  Calculator,
  Globe,
  Heart
} from 'lucide-react';
import { ProjectTemplate } from '@/types/project';

interface TemplateModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onLoadTemplate: (template: ProjectTemplate) => void;
}

export const TemplateModal: React.FC<TemplateModalProps> = ({ open, onOpenChange, onLoadTemplate }) => {
  const templates: ProjectTemplate[] = [
    {
      id: 'research-project',
      name: 'Research Project',
      description: 'Complete research workflow with fact-finding and analysis agents',
      icon: <Search className="w-6 h-6" />,
      color: 'bg-mentra-blue/10 text-mentra-blue',
      gradeLevels: ['5-6', '7-8', '9-10', '11-12'],
      subjectAreas: ['Science', 'Social Studies', 'English'],
      tags: ['research', 'analysis', 'fact-finding'],
      estimatedDuration: '2-3 weeks',
      difficulty: 'Intermediate',
      suggestedAgents: ['FactFinder', 'CompareBot', 'Ask a Scientist'],
      defaultProject: {
        name: 'Research Project',
        objective: 'Conduct comprehensive research on a topic with multiple perspectives and reliable sources',
        successMetrics: [
          'Gather information from at least 3 credible sources',
          'Compare different viewpoints on the topic',
          'Create a summary with key findings and evidence',
          'Present findings in a clear, organized format'
        ],
        constraints: [
          'Use only reliable, fact-checked sources',
          'Include both supporting and opposing viewpoints',
          'Complete within the assigned timeframe'
        ],
        deliverables: [
          'Research summary document',
          'Source list with annotations',
          'Presentation or poster'
        ],
        stakeholders: [
          'Classmates and teacher',
          'Subject matter experts',
          'General audience'
        ],
        gradeLevel: '7-8',
        subjectArea: 'Social Studies',
        reflectionPrompts: [
          'What was the most surprising finding in your research?',
          'How did you evaluate the reliability of your sources?',
          'What would you do differently next time?'
        ],
        ethicalFlags: [
          'Respect copyright and cite sources properly',
          'Present information accurately without bias',
          'Protect privacy of any individuals mentioned'
        ],
        priority: 'high',
        tags: ['research', 'analysis', 'academic']
      }
    },
    {
      id: 'creative-writing',
      name: 'Creative Writing',
      description: 'Story development workflow with creative and planning agents',
      icon: <Lightbulb className="w-6 h-6" />,
      color: 'bg-mentra-blue/10 text-mentra-blue',
      gradeLevels: ['3-4', '5-6', '7-8', '9-10'],
      subjectAreas: ['English', 'Language Arts'],
      tags: ['creative', 'writing', 'storytelling'],
      estimatedDuration: '1-2 weeks',
      difficulty: 'Beginner',
      suggestedAgents: ['StoryCrafter', 'Plot Planner', 'DesignBuddy'],
      defaultProject: {
        name: 'Creative Writing Project',
        objective: 'Develop a complete story with engaging plot, well-developed characters, and creative elements',
        successMetrics: [
          'Create a compelling plot with clear beginning, middle, and end',
          'Develop 3 main characters with distinct personalities',
          'Include descriptive language and sensory details',
          'Incorporate creative elements like dialogue or illustrations'
        ],
        constraints: [
          'Follow appropriate content guidelines for your age group',
          'Include required story elements (setting, characters, plot)',
          'Keep story length within assigned limits'
        ],
        deliverables: [
          'Complete story manuscript',
          'Character profiles and sketches',
          'Story outline or storyboard'
        ],
        stakeholders: [
          'Classmates and teacher',
          'Family members',
          'Younger students (if appropriate)'
        ],
        gradeLevel: '5-6',
        subjectArea: 'English',
        reflectionPrompts: [
          'What inspired your story idea?',
          'Which character was most fun to develop and why?',
          'What creative techniques did you use?'
        ],
        ethicalFlags: [
          'Ensure content is appropriate for your audience',
          'Respect diverse perspectives and experiences',
          'Avoid harmful stereotypes or biases'
        ],
        priority: 'medium',
        tags: ['creative', 'writing', 'storytelling']
      }
    },
    {
      id: 'project-management',
      name: 'Project Management',
      description: 'Goal-setting and task management workflow',
      icon: <Target className="w-6 h-6" />,
      color: 'bg-mentra-blue/10 text-mentra-blue',
      gradeLevels: ['5-6', '7-8', '9-10', '11-12'],
      subjectAreas: ['Business', 'Leadership', 'Any Subject'],
      tags: ['planning', 'organization', 'leadership'],
      estimatedDuration: '3-4 weeks',
      difficulty: 'Intermediate',
      suggestedAgents: ['ProjectPal', 'TimeTuner', 'GoalSetter'],
      defaultProject: {
        name: 'Project Management',
        objective: 'Plan and execute a project with clear milestones, timelines, and measurable outcomes',
        successMetrics: [
          'Break down project into manageable tasks with deadlines',
          'Set realistic timelines and track progress',
          'Complete all deliverables on time and within scope',
          'Demonstrate effective teamwork and communication'
        ],
        constraints: [
          'Work within assigned budget and resources',
          'Meet all deadlines and milestones',
          'Collaborate effectively with team members'
        ],
        deliverables: [
          'Project plan with timeline',
          'Progress reports and updates',
          'Final project presentation'
        ],
        stakeholders: [
          'Project team members',
          'Teacher or supervisor',
          'Project beneficiaries'
        ],
        gradeLevel: '9-10',
        subjectArea: 'Business',
        reflectionPrompts: [
          'What was your biggest challenge in managing this project?',
          'How did you adapt when things didn\'t go as planned?',
          'What leadership skills did you develop?'
        ],
        ethicalFlags: [
          'Ensure fair distribution of work among team members',
          'Maintain honesty in progress reporting',
          'Respect diverse perspectives and contributions'
        ],
        priority: 'high',
        tags: ['planning', 'organization', 'leadership']
      }
    },
    {
      id: 'debate-preparation',
      name: 'Debate Preparation',
      description: 'Argument development and practice workflow',
      icon: <Users className="w-6 h-6" />,
      color: 'bg-mentra-blue/10 text-mentra-blue',
      gradeLevels: ['7-8', '9-10', '11-12'],
      subjectAreas: ['English', 'Social Studies', 'Speech'],
      tags: ['debate', 'argumentation', 'public-speaking'],
      estimatedDuration: '2-3 weeks',
      difficulty: 'Advanced',
      suggestedAgents: ['DebateBot', 'FactFinder', 'CompareBot'],
      defaultProject: {
        name: 'Debate Preparation',
        objective: 'Prepare for a structured debate with strong arguments, evidence, and counter-arguments',
        successMetrics: [
          'Research both sides of the argument thoroughly',
          'Develop 3 strong points with supporting evidence',
          'Practice counter-arguments and rebuttals',
          'Deliver arguments clearly and persuasively'
        ],
        constraints: [
          'Follow debate format and time limits',
          'Use only credible, verifiable evidence',
          'Maintain respectful discourse throughout'
        ],
        deliverables: [
          'Debate outline with key points',
          'Evidence cards and citations',
          'Practice debate recording'
        ],
        stakeholders: [
          'Debate opponents',
          'Judges and audience',
          'Subject matter experts'
        ],
        gradeLevel: '9-10',
        subjectArea: 'English',
        reflectionPrompts: [
          'What was your strongest argument and why?',
          'How did you handle opposing viewpoints?',
          'What would you do differently in future debates?'
        ],
        ethicalFlags: [
          'Present arguments honestly without distortion',
          'Respect opponents and their viewpoints',
          'Avoid personal attacks or inflammatory language'
        ],
        priority: 'high',
        tags: ['debate', 'argumentation', 'public-speaking']
      }
    },
    {
      id: 'environmental-action',
      name: 'Environmental Action',
      description: 'Environmental problem-solving and community action workflow',
      icon: <Globe className="w-6 h-6" />,
      color: 'bg-mentra-blue/10 text-mentra-blue',
      gradeLevels: ['5-6', '7-8', '9-10', '11-12'],
      subjectAreas: ['Science', 'Environmental Studies', 'Civics'],
      tags: ['environment', 'action', 'community'],
      estimatedDuration: '4-6 weeks',
      difficulty: 'Intermediate',
      suggestedAgents: ['FactFinder', 'ProjectPal', 'DesignBuddy'],
      defaultProject: {
        name: 'Environmental Action Project',
        objective: 'Identify an environmental issue in your community and develop a plan to address it',
        successMetrics: [
          'Conduct thorough research on the environmental issue',
          'Develop a feasible action plan with clear steps',
          'Implement at least one action and measure its impact',
          'Share findings with the community'
        ],
        constraints: [
          'Work within school and community guidelines',
          'Ensure safety for all participants',
          'Use sustainable and ethical approaches'
        ],
        deliverables: [
          'Environmental impact assessment',
          'Action plan with timeline',
          'Community presentation or report'
        ],
        stakeholders: [
          'School community',
          'Local environmental groups',
          'Community members affected by the issue'
        ],
        gradeLevel: '7-8',
        subjectArea: 'Science',
        reflectionPrompts: [
          'What surprised you most about this environmental issue?',
          'How did your actions make a difference?',
          'What would you do to expand this project?'
        ],
        ethicalFlags: [
          'Respect private property and community spaces',
          'Follow all safety guidelines and regulations',
          'Consider the impact on all community members'
        ],
        priority: 'high',
        tags: ['environment', 'action', 'community']
      }
    },
    {
      id: 'art-design',
      name: 'Art & Design',
      description: 'Creative design and visual communication workflow',
      icon: <Palette className="w-6 h-6" />,
      color: 'bg-mentra-blue/10 text-mentra-blue',
      gradeLevels: ['K-2', '3-4', '5-6', '7-8'],
      subjectAreas: ['Art', 'Design', 'Technology'],
      tags: ['art', 'design', 'creativity'],
      estimatedDuration: '1-2 weeks',
      difficulty: 'Beginner',
      suggestedAgents: ['DesignBuddy', 'StoryCrafter', 'CreativeBot'],
      defaultProject: {
        name: 'Art & Design Project',
        objective: 'Create a visual design that communicates a message or solves a problem',
        successMetrics: [
          'Design effectively communicates the intended message',
          'Use appropriate design principles and elements',
          'Create original work with personal style',
          'Present design with clear explanation of choices'
        ],
        constraints: [
          'Work within available materials and resources',
          'Follow copyright and fair use guidelines',
          'Complete within assigned timeframe'
        ],
        deliverables: [
          'Final artwork or design',
          'Design process documentation',
          'Artist statement or presentation'
        ],
        stakeholders: [
          'Classmates and teacher',
          'Target audience for the design',
          'School or community display'
        ],
        gradeLevel: '5-6',
        subjectArea: 'Art',
        reflectionPrompts: [
          'What inspired your design choices?',
          'How did you solve design challenges?',
          'What would you change about your final piece?'
        ],
        ethicalFlags: [
          'Create original work or properly credit sources',
          'Respect cultural and diverse perspectives',
          'Ensure content is appropriate for all audiences'
        ],
        priority: 'medium',
        tags: ['art', 'design', 'creativity']
      }
    }
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Load Project Template
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Choose a pre-built project template to get started quickly with comprehensive goals and structure.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {templates.map((template) => (
            <Card 
              key={template.id} 
              className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-[1.02] border-mentra-blue/20 hover:border-mentra-blue/30"
              onClick={() => onLoadTemplate(template)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${template.color} border border-mentra-blue/20`}>
                      {React.isValidElement(template.icon) 
                        ? React.cloneElement(template.icon as React.ReactElement, { className: "w-6 h-6" })
                        : template.icon
                      }
                    </div>
                    <div>
                      <CardTitle className="text-lg font-semibold text-gray-900">
                        {template.name}
                      </CardTitle>
                      <p className="text-sm text-gray-600 mt-1">
                        {template.description}
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 bg-mentra-blue/10 text-mentra-blue text-xs font-medium rounded-md border border-mentra-blue/20">
                    {template.difficulty}
                  </span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-3">
                {/* Key Features */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{template.estimatedDuration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <BookOpen className="w-4 h-4" />
                    <span>{template.subjectAreas.join(', ')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Brain className="w-4 h-4" />
                    <span>{template.suggestedAgents.length} suggested agents</span>
                  </div>
                </div>

                {/* Sample Objective */}
                {template.defaultProject.objective && (
                  <div className="p-3 bg-mentra-blue/5 rounded-lg">
                    <p className="text-sm font-medium text-gray-700 mb-1">Sample Objective:</p>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {template.defaultProject.objective}
                    </p>
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {template.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-mentra-blue/10 text-mentra-blue text-xs font-medium rounded-md border border-mentra-blue/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-end pt-4 border-t border-gray-200">
          <Button 
            variant="outline" 
            onClick={() => onOpenChange(false)} 
            className="rounded-lg"
          >
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}; 