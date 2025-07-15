import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { FileText, Download, Share2 } from 'lucide-react';

export type ExportFormat = 'pdf' | 'png' | 'json' | 'csv';

interface ExportModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onExport: (format: ExportFormat) => void;
}

export const ExportModal: React.FC<ExportModalProps> = ({ open, onOpenChange, onExport }) => {
  const exportOptions = [
    {
      format: 'pdf' as ExportFormat,
      title: 'PDF Document',
      description: 'Export as a printable PDF document',
      icon: <FileText className="w-6 h-6" />,
      color: 'bg-red-500 hover:bg-red-600'
    },
    {
      format: 'png' as ExportFormat,
      title: 'PNG Image',
      description: 'Export as a high-resolution image',
      icon: <Download className="w-6 h-6" />,
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      format: 'json' as ExportFormat,
      title: 'JSON Data',
      description: 'Export workflow data for sharing',
      icon: <Share2 className="w-6 h-6" />,
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      format: 'csv' as ExportFormat,
      title: 'CSV Spreadsheet',
      description: 'Export data in spreadsheet format',
      icon: <FileText className="w-6 h-6" />,
      color: 'bg-purple-500 hover:bg-purple-600'
    }
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-900">Export Workflow</DialogTitle>
          <DialogDescription className="text-gray-600">
            Choose how you'd like to export your workflow.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            {exportOptions.map((option) => (
              <Button
                key={option.format}
                variant="outline"
                className={`h-auto p-4 flex flex-col items-center gap-2 rounded-lg ${option.color} text-white border-0 hover:scale-[1.02] transition-all duration-200`}
                onClick={() => onExport(option.format)}
              >
                {option.icon}
                <div className="text-center">
                  <div className="font-semibold text-sm">{option.title}</div>
                  <div className="text-xs opacity-90">{option.description}</div>
                </div>
              </Button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}; 