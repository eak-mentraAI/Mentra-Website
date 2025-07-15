import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Plus, FolderOpen, Settings, FileText } from 'lucide-react';

interface ProjectMenuProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelect: (action: string) => void;
}

export const ProjectMenu: React.FC<ProjectMenuProps> = ({ open, onOpenChange, onSelect }) => {
  const projectOptions = [
    {
      action: 'new',
      title: 'New Project',
      description: 'Start a fresh project with goals',
      icon: <Plus className="w-5 h-5" />
    },
    {
      action: 'load-template',
      title: 'Load Template',
      description: 'Use a pre-built project template',
      icon: <FolderOpen className="w-5 h-5" />
    }
  ];

  const workflowOptions = [
    {
      action: 'save-workflow',
      title: 'Save Workflow',
      description: 'Save current workflow with a name',
      icon: <FileText className="w-5 h-5" />
    },
    {
      action: 'load-workflow',
      title: 'Load Saved Workflow',
      description: 'Switch to a saved workflow',
      icon: <FileText className="w-5 h-5" />
    }
  ];

  const generalOptions = [
    {
      action: 'settings',
      title: 'Settings',
      description: 'Configure preferences',
      icon: <Settings className="w-5 h-5" />
    }
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-900">Project Menu</DialogTitle>
          <DialogDescription className="text-gray-600">
            Manage your workflow project.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6">
          {/* Project Section */}
          <div className="space-y-3">
            <div className="text-sm font-semibold text-gray-700 px-1">Project Management</div>
            {projectOptions.map((option) => (
              <Button
                key={option.action}
                variant="outline"
                className="w-full justify-start h-auto p-4 rounded-lg bg-mentra-blue/5 hover:bg-mentra-blue/10 text-charcoal border-mentra-blue/20 hover:border-mentra-blue/30 hover:scale-[1.02] transition-all duration-200"
                onClick={() => onSelect(option.action)}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-mentra-blue/20 border border-mentra-blue/30">
                    {React.cloneElement(option.icon, { className: "w-4 h-4 text-mentra-blue" })}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-sm text-charcoal">{option.title}</div>
                    <div className="text-xs text-gray-600">{option.description}</div>
                  </div>
                </div>
              </Button>
            ))}
          </div>

          {/* Workflow Section */}
          <div className="space-y-3">
            <div className="text-sm font-semibold text-gray-700 px-1">Workflow Management</div>
            {workflowOptions.map((option) => (
              <Button
                key={option.action}
                variant="outline"
                className="w-full justify-start h-auto p-4 rounded-lg bg-mentra-blue/5 hover:bg-mentra-blue/10 text-charcoal border-mentra-blue/20 hover:border-mentra-blue/30 hover:scale-[1.02] transition-all duration-200"
                onClick={() => onSelect(option.action)}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-mentra-blue/20 border border-mentra-blue/30">
                    {React.cloneElement(option.icon, { className: "w-4 h-4 text-mentra-blue" })}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-sm text-charcoal">{option.title}</div>
                    <div className="text-xs text-gray-600">{option.description}</div>
                  </div>
                </div>
              </Button>
            ))}
          </div>

          {/* General Section */}
          <div className="space-y-3">
            <div className="text-sm font-semibold text-gray-700 px-1">General</div>
            {generalOptions.map((option) => (
              <Button
                key={option.action}
                variant="outline"
                className="w-full justify-start h-auto p-4 rounded-lg bg-mentra-blue/5 hover:bg-mentra-blue/10 text-charcoal border-mentra-blue/20 hover:border-mentra-blue/30 hover:scale-[1.02] transition-all duration-200"
                onClick={() => onSelect(option.action)}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-mentra-blue/20 border border-mentra-blue/30">
                    {React.cloneElement(option.icon, { className: "w-4 h-4 text-mentra-blue" })}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-sm text-charcoal">{option.title}</div>
                    <div className="text-xs text-gray-600">{option.description}</div>
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}; 