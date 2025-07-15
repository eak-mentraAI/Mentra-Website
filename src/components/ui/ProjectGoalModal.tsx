import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Target, Calendar, BarChart3, Edit } from 'lucide-react';

interface ProjectGoalModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialGoal?: any;
  viewOnly?: boolean;
  onEdit?: () => void;
  onSave?: (goal: any) => void;
}

export const ProjectGoalModal: React.FC<ProjectGoalModalProps> = ({ 
  open, 
  onOpenChange, 
  initialGoal, 
  viewOnly = false,
  onEdit,
  onSave 
}) => {
  const [goal, setGoal] = useState(initialGoal || {
    name: '',
    objective: '',
    successMetrics: [],
    targetDate: '',
    priority: 'medium'
  });

  const [newMetric, setNewMetric] = useState('');

  const handleSave = () => {
    if (onSave) {
      onSave(goal);
    }
    onOpenChange(false);
  };

  const addMetric = () => {
    if (newMetric.trim()) {
      setGoal(prev => ({
        ...prev,
        successMetrics: [...prev.successMetrics, newMetric.trim()]
      }));
      setNewMetric('');
    }
  };

  const removeMetric = (index: number) => {
    setGoal(prev => ({
      ...prev,
      successMetrics: prev.successMetrics.filter((_, i) => i !== index)
    }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Target className="w-5 h-5" />
            {viewOnly ? 'Project Goals' : 'Set Project Goals'}
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            {viewOnly 
              ? 'Review your project objectives and success metrics.'
              : 'Define clear objectives and measurable success criteria for your workflow.'
            }
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Project Name */}
          <div className="space-y-2">
            <Label htmlFor="project-name">Project Name</Label>
            <Input
              id="project-name"
              value={goal.name}
              onChange={(e) => setGoal(prev => ({ ...prev, name: e.target.value }))}
              placeholder="Enter project name..."
              disabled={viewOnly}
              className="bg-mentra-blue/5 focus:bg-mentra-blue/10 focus:ring-2 focus:ring-mentra-blue focus:border-mentra-blue transition-colors"
            />
          </div>

          {/* Objective */}
          <div className="space-y-2">
            <Label htmlFor="objective">Objective</Label>
            <Textarea
              id="objective"
              value={goal.objective}
              onChange={(e) => setGoal(prev => ({ ...prev, objective: e.target.value }))}
              placeholder="What do you want to achieve with this workflow?"
              rows={3}
              disabled={viewOnly}
              className="bg-mentra-blue/5 focus:bg-mentra-blue/10 focus:ring-2 focus:ring-mentra-blue focus:border-mentra-blue transition-colors"
            />
          </div>

          {/* Success Metrics */}
          <div className="space-y-2">
            <Label>Success Metrics</Label>
            <div className="space-y-2">
              {goal.successMetrics.map((metric: string, index: number) => (
                <div key={index} className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-mentra-blue" />
                  <span className="flex-1 text-sm">{metric}</span>
                  {!viewOnly && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeMetric(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </Button>
                  )}
                </div>
              ))}
              {!viewOnly && (
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
              )}
            </div>
          </div>

          {/* Target Date */}
          <div className="space-y-2">
            <Label htmlFor="target-date">Target Date</Label>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-mentra-blue" />
              <Input
                id="target-date"
                type="date"
                value={goal.targetDate}
                onChange={(e) => setGoal(prev => ({ ...prev, targetDate: e.target.value }))}
                disabled={viewOnly}
                className="bg-mentra-blue/5 focus:bg-mentra-blue/10 focus:ring-2 focus:ring-mentra-blue focus:border-mentra-blue transition-colors"
              />
            </div>
          </div>

          {/* Priority */}
          <div className="space-y-2">
            <Label htmlFor="priority">Priority</Label>
            <Select
              value={goal.priority}
              onValueChange={(value) => setGoal(prev => ({ ...prev, priority: value }))}
              disabled={viewOnly}
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
            {viewOnly ? (
              <>
                <Button variant="outline" onClick={() => onOpenChange(false)} className="rounded-lg">
                  Close
                </Button>
                {onEdit && (
                  <Button onClick={onEdit} className="bg-mentra-blue hover:bg-mentra-blue/90 rounded-lg">
                    <Edit className="w-4 h-4 mr-2" />
                    Edit
                  </Button>
                )}
              </>
            ) : (
              <>
                <Button variant="outline" onClick={() => onOpenChange(false)} className="rounded-lg">
                  Cancel
                </Button>
                <Button onClick={handleSave} className="bg-mentra-blue hover:bg-mentra-blue/90 rounded-lg">
                  Save Goals
                </Button>
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}; 