import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { 
  Info, 
  HelpCircle, 
  Plus, 
  X, 
  Target, 
  Users, 
  Calendar, 
  AlertTriangle,
  CheckCircle,
  Lightbulb
} from 'lucide-react';

interface FormFieldWithGuidanceProps {
  type: 'input' | 'textarea' | 'select' | 'array-input' | 'array-textarea';
  label: string;
  value: string | string[];
  onChange: (value: string | string[]) => void;
  placeholder?: string;
  guidance?: string;
  tooltip?: string;
  example?: string;
  required?: boolean;
  error?: string;
  warning?: string;
  success?: string;
  options?: { value: string; label: string }[];
  maxItems?: number;
  className?: string;
  disabled?: boolean;
  inputType?: 'text' | 'date' | 'email' | 'number';
}

export const FormFieldWithGuidance: React.FC<FormFieldWithGuidanceProps> = ({
  type,
  label,
  value,
  onChange,
  placeholder,
  guidance,
  tooltip,
  example,
  required = false,
  error,
  warning,
  success,
  options = [],
  maxItems = 10,
  className = '',
  disabled = false,
  inputType = 'text'
}) => {
  const [newItem, setNewItem] = React.useState('');

  const handleArrayAdd = () => {
    if (newItem.trim() && Array.isArray(value) && value.length < maxItems) {
      onChange([...value, newItem.trim()]);
      setNewItem('');
    }
  };

  const handleArrayRemove = (index: number) => {
    if (Array.isArray(value)) {
      onChange(value.filter((_, i) => i !== index));
    }
  };

  const handleArrayKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleArrayAdd();
    }
  };

  const renderField = () => {
    switch (type) {
      case 'input':
        return (
          <Input
            type={inputType}
            value={value as string}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className={`bg-mentra-blue/5 focus:bg-mentra-blue/10 focus:ring-2 focus:ring-mentra-blue focus:border-mentra-blue transition-colors ${error ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : ''} ${success ? 'border-green-300 focus:border-green-500 focus:ring-green-200' : ''}`}
            disabled={disabled}
          />
        );

      case 'textarea':
        return (
          <Textarea
            value={value as string}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            rows={3}
            className={`bg-mentra-blue/5 focus:bg-mentra-blue/10 focus:ring-2 focus:ring-mentra-blue focus:border-mentra-blue transition-colors ${error ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : ''} ${success ? 'border-green-300 focus:border-green-500 focus:ring-green-200' : ''}`}
            disabled={disabled}
          />
        );

      case 'select':
        return (
          <Select
            value={value as string}
            onValueChange={onChange}
            disabled={disabled}
          >
            <SelectTrigger className={`bg-mentra-blue/5 focus:bg-mentra-blue/10 focus:ring-2 focus:ring-mentra-blue focus:border-mentra-blue transition-colors ${error ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : ''} ${success ? 'border-green-300 focus:border-green-500 focus:ring-green-200' : ''}`}>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );

      case 'array-input':
      case 'array-textarea':
        return (
          <div className="space-y-3">
            {/* Existing items */}
            {Array.isArray(value) && value.map((item, index) => (
              <div key={index} className="flex items-center gap-2 p-2 bg-mentra-blue/5 rounded-lg border border-mentra-blue/20">
                <div className="flex-1">
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleArrayRemove(index)}
                  className="h-6 w-6 p-0 text-red-500 hover:text-red-700"
                >
                  <X className="w-3 h-3" />
                </Button>
              </div>
            ))}

            {/* Add new item */}
            {Array.isArray(value) && value.length < maxItems && (
              <div className="flex gap-2">
                {type === 'array-textarea' ? (
                  <Textarea
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    placeholder={placeholder}
                    onKeyDown={handleArrayKeyDown}
                    rows={2}
                    className="flex-1 bg-mentra-blue/5 focus:bg-mentra-blue/10 focus:ring-2 focus:ring-mentra-blue focus:border-mentra-blue transition-colors"
                  />
                ) : (
                  <Input
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    placeholder={placeholder}
                    onKeyDown={handleArrayKeyDown}
                    className="flex-1 bg-mentra-blue/5 focus:bg-mentra-blue/10 focus:ring-2 focus:ring-mentra-blue focus:border-mentra-blue transition-colors"
                  />
                )}
                <Button
                  onClick={handleArrayAdd}
                  size="sm"
                  disabled={!newItem.trim()}
                  className="bg-mentra-blue hover:bg-mentra-blue/90 text-white"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            )}

            {/* Max items warning */}
            {Array.isArray(value) && value.length >= maxItems && (
              <div className="text-xs text-gray-500 flex items-center gap-1">
                <AlertTriangle className="w-3 h-3" />
                Maximum {maxItems} items reached
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {/* Label with tooltip */}
      <div className="flex items-center gap-2">
        <Label className="text-sm font-semibold text-gray-700 flex items-center gap-1">
          {label}
          {required && <span className="text-red-500">*</span>}
        </Label>
        {tooltip && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <HelpCircle className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-help" />
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <p className="text-sm">{tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>

      {/* Field */}
      {renderField()}

      {/* Guidance and feedback */}
      <div className="space-y-1">
        {/* Guidance text */}
        {guidance && (
          <p className="text-xs text-gray-600 flex items-start gap-1">
            <Lightbulb className="w-3 h-3 mt-0.5 text-curiosity-coral flex-shrink-0" />
            {guidance}
          </p>
        )}

        {/* Example */}
        {example && (
          <p className="text-xs text-gray-500 italic">
            Example: {example}
          </p>
        )}

        {/* Error message */}
        {error && (
          <p className="text-xs text-red-600 flex items-center gap-1">
            <AlertTriangle className="w-3 h-3" />
            {error}
          </p>
        )}

        {/* Warning message */}
        {warning && (
          <p className="text-xs text-orange-600 flex items-center gap-1">
            <AlertTriangle className="w-3 h-3" />
            {warning}
          </p>
        )}

        {/* Success message */}
        {success && (
          <p className="text-xs text-green-600 flex items-center gap-1">
            <CheckCircle className="w-3 h-3" />
            {success}
          </p>
        )}
      </div>
    </div>
  );
}; 