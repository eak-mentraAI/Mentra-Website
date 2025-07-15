import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Target, Calendar } from 'lucide-react';

interface NewProjectModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreate: (project: any) => void;
}

export const NewProjectModal: React.FC<NewProjectModalProps> = ({ open, onOpenChange, onCreate }) => {
  const [project, setProject] = useState({
    name: '',
    objective: '',
    successMetrics: [],
    targetDate: '',
    priority: 'medium'
  });

  const [newMetric, setNewMetric] = useState('');

  const handleCreate = () => {
    if (project.name.trim() && project.objective.trim()) {
      onCreate(project);
      // Reset form
      setProject({
        name: '',
        objective: '',
        successMetrics: [],
        targetDate: '',
        priority: 'medium'
      });
      setNewMetric('');
    }
  };

  const addMetric = () => {
    if (newMetric.trim()) {
      setProject(prev => ({
        ...prev,
        successMetrics: [...prev.successMetrics, newMetric.trim()]
      }));
      setNewMetric('');
    }
  };

  const removeMetric = (index: number) => {
    setProject(prev => ({
      ...prev,
      successMetrics: prev.successMetrics.filter((_, i) => i !== index)
    }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Plus className="w-5 h-5" />
            Create New Project
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Set up a new workflow project with clear objectives and success criteria.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Project Name */}
          <div className="space-y-2">
            <Label htmlFor="new-project-name">Project Name</Label>
            <Input
              id="new-project-name"
              value={project.name}
              onChange={(e) => setProject(prev => ({ ...prev, name: e.target.value }))}
              placeholder="Enter project name..."
              className="bg-mentra-blue/5 focus:bg-mentra-blue/10 focus:ring-2 focus:ring-mentra-blue focus:border-mentra-blue transition-colors"
            />
          </div>

          {/* Objective */}
          <div className="space-y-2">
            <Label htmlFor="new-objective">Objective</Label>
            <Textarea
              id="new-objective"
              value={project.objective}
              onChange={(e) => setProject(prev => ({ ...prev, objective: e.target.value }))}
              placeholder="What do you want to achieve with this workflow?"
              rows={3}
              className="bg-mentra-blue/5 focus:bg-mentra-blue/10 focus:ring-2 focus:ring-mentra-blue focus:border-mentra-blue transition-colors"
            />
          </div>

          {/* Success Metrics */}
          <div className="space-y-2">
            <Label>Success Metrics</Label>
            <div className="space-y-2">
              {project.successMetrics.map((metric: string, index: number) => (
                <div key={index} className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-mentra-blue" />
                  <span className="flex-1 text-sm">{metric}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeMetric(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </Button>
                </div>
              ))}
              <div className="flex gap-2">
                <Input
                  value={newMetric}
                  onChange={(e) => setNewMetric(e.target.value)}
                  placeholder="Add a success metric..."
                  onKeyDown={(e) => e.key === 'Enter' && addMetric()}
                  className="bg-mentra-blue/5 focus:bg-mentra-blue/10 focus:ring-2 focus:ring-mentra-blue focus:border-mentra-blue transition-colors"
                />
                <Button onClick={addMetric} size="sm">Add</Button>
              </div>
            </div>
          </div>

          {/* Target Date */}
          <div className="space-y-2">
            <Label htmlFor="new-target-date">Target Date</Label>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-mentra-blue" />
              <Input
                id="new-target-date"
                type="date"
                value={project.targetDate}
                onChange={(e) => setProject(prev => ({ ...prev, targetDate: e.target.value }))}
                className="bg-mentra-blue/5 focus:bg-mentra-blue/10 focus:ring-2 focus:ring-mentra-blue focus:border-mentra-blue transition-colors"
              />
            </div>
          </div>

          {/* Priority */}
          <div className="space-y-2">
            <Label htmlFor="new-priority">Priority</Label>
            <Select
              value={project.priority}
              onValueChange={(value) => setProject(prev => ({ ...prev, priority: value }))}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3">
            <Button variant="outline" onClick={() => onOpenChange(false)} className="rounded-lg">
              Cancel
            </Button>
            <Button 
              onClick={handleCreate} 
              className="bg-mentra-blue hover:bg-mentra-blue/90 rounded-lg"
              disabled={!project.name.trim() || !project.objective.trim()}
            >
              Create Project
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}; 