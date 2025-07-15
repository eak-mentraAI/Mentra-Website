import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FileText, Search, Clock, User } from 'lucide-react';

interface LoadWorkflowModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onLoad: (workflow: any) => void;
  currentProject?: any;
}

export const LoadWorkflowModal: React.FC<LoadWorkflowModalProps> = ({ 
  open, 
  onOpenChange, 
  onLoad,
  currentProject 
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock saved workflows - in real app, this would come from backend
  const savedWorkflows = [
    {
      id: '1',
      name: 'Initial Research Workflow',
      description: 'Basic research and fact-finding workflow',
      lastModified: '2024-01-15T10:30:00Z',
      author: 'Student A',
      projectId: currentProject?.id || 'default'
    },
    {
      id: '2', 
      name: 'Advanced Analysis Workflow',
      description: 'Deep analysis with multiple data sources',
      lastModified: '2024-01-14T15:45:00Z',
      author: 'Student A',
      projectId: currentProject?.id || 'default'
    },
    {
      id: '3',
      name: 'Creative Writing Workflow',
      description: 'Story generation and creative content',
      lastModified: '2024-01-13T09:20:00Z',
      author: 'Student A',
      projectId: currentProject?.id || 'default'
    }
  ];

  const filteredWorkflows = savedWorkflows.filter(workflow =>
    workflow.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    workflow.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <FileText className="w-5 h-5 text-mentra-blue" />
            Load Saved Workflow
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Choose a saved workflow to load into your current project.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search workflows..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 rounded-lg bg-mentra-blue/5 focus:bg-mentra-blue/10 focus:ring-2 focus:ring-mentra-blue focus:border-mentra-blue transition-colors"
            />
          </div>

          {/* Workflow List */}
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {filteredWorkflows.length > 0 ? (
              filteredWorkflows.map((workflow) => (
                <Button
                  key={workflow.id}
                  variant="outline"
                  className="w-full justify-start h-auto p-4 rounded-lg bg-mentra-blue/5 hover:bg-mentra-blue/10 text-charcoal border-mentra-blue/20 hover:border-mentra-blue/30 hover:scale-[1.02] transition-all duration-200"
                  onClick={() => onLoad(workflow)}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-mentra-blue/20 border border-mentra-blue/30">
                      <FileText className="w-4 h-4 text-mentra-blue" />
                    </div>
                    <div className="text-left flex-1">
                      <div className="font-semibold text-sm text-charcoal">{workflow.name}</div>
                      <div className="text-xs text-gray-600 mb-2">{workflow.description}</div>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {formatDate(workflow.lastModified)}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {workflow.author}
                        </div>
                      </div>
                    </div>
                  </div>
                </Button>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                <FileText className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>No saved workflows found</p>
                <p className="text-sm mt-1">Save a workflow first to see it here</p>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 pt-4">
            <Button variant="outline" onClick={() => onOpenChange(false)} className="rounded-lg">
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}; 